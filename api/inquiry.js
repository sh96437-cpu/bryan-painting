// Saves a quote request to Supabase. Keys are read from environment variables only.
const SB_URL = process.env.SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL;
const SB_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.SUPABASE_SECRET_KEY;
const clip = (v, n) => String(v ?? '').trim().slice(0, n);
const sbHeaders = () => ({
  apikey: SB_KEY,
  ...(String(SB_KEY).startsWith('eyJ') ? { Authorization: `Bearer ${SB_KEY}` } : {}),
  'Content-Type': 'application/json',
});

module.exports = async (req, res) => {
  res.setHeader('Cache-Control', 'no-store');
  if (req.method !== 'POST') return res.status(405).json({ code: 'method', error: 'POST만 가능해요' });
  if (!SB_URL || !SB_KEY) return res.status(500).json({ code: 'config', error: 'Supabase 연결 정보가 없어요. Vercel Storage 연결 후 다시 배포해 주세요.' });
  let b = req.body || {};
  if (typeof b === 'string') { try { b = JSON.parse(b); } catch { b = {}; } }
  if (b.website) return res.status(200).json({ ok: true }); // spam trap, invisible to people
  const row = {
    name: clip(b.name, 50),
    contact: clip(b.contact, 100),
    suburb: clip(b.suburb, 100),
    lang: b.lang === 'ko' ? 'ko' : 'en',
    consent: b.consent === true,
  };
  if (!row.name || !row.contact) return res.status(400).json({ code: 'missing', error: '이름과 연락처를 적어 주세요' });
  if (!row.consent) return res.status(400).json({ code: 'consent', error: '개인정보 이용에 동의해 주세요' });
  try {
    const r = await fetch(`${SB_URL}/rest/v1/inquiries`, {
      method: 'POST',
      headers: { ...sbHeaders(), Prefer: 'return=minimal' },
      body: JSON.stringify(row),
    });
    if (!r.ok) return res.status(500).json({ code: 'server', error: '저장하지 못했어요. 잠시 뒤 다시 시도해 주세요.' });
  } catch {
    return res.status(500).json({ code: 'server', error: '저장하지 못했어요. 잠시 뒤 다시 시도해 주세요.' });
  }
  return res.status(200).json({ ok: true });
};
