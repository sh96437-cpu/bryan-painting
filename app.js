(() => {
  const T = {
    en: {
      skip: 'Skip to the quote form',
      'nav.services': 'What we paint', 'nav.how': 'How quotes work', 'nav.about': 'About',
      cta: 'Get a free quote',
      'hero.place': 'Auckland, New Zealand',
      'hero.title': 'Fresh paint, inside and out, for Auckland homes.',
      'hero.lede': "Bryan Painting paints house exteriors and interiors in Auckland. Tell us which suburb you're in and we'll get back to you with a free quote.",
      'stat1.big': '10 years', 'stat1.small': 'painting homes',
      'stat2.big': 'Free', 'stat2.small': 'quote for your home',
      'stat3.big': 'Inside & out', 'stat3.small': 'interior and exterior',
      'services.title': 'What we paint',
      'services.lede': 'Choose one or both when you ask for a quote.',
      'svc.ext.title': 'Exterior painting',
      'svc.ext.body': 'The outside of your house: weatherboards and walls, trims, window frames and doors.',
      'svc.int.title': 'Interior painting',
      'svc.int.body': 'Inside your home: walls, ceilings, doors and skirting boards.',
      'price.title': 'What shapes your quote',
      'price.lede': "Every house is different, so we don't list fixed prices. We look at your home and give you a free quote.",
      'price.size.title': 'Size of the job', 'price.size.body': 'How many rooms, or how much wall and trim, there is to paint.',
      'price.cond.title': 'Condition of the surface', 'price.cond.body': 'Whether old paint needs scraping, filling or sanding before the new coat goes on.',
      'price.scope.title': 'Inside, outside or both', 'price.scope.body': 'Which parts of the house you want painted.',
      'how.title': 'How a free quote works',
      'how.1.title': 'Send a request', 'how.1.body': 'Leave your name, a phone number or email, and your suburb.',
      'how.2.title': 'We get in touch', 'how.2.body': 'Bryan Painting contacts you to talk about the job and arrange a look at your home.',
      'how.3.title': 'Get your free quote', 'how.3.body': 'You get the price and how long the job will take, then you decide.',
      'ticket.label': 'Quote request', 'ticket.contact': 'Contact',
      'status.new': 'New', 'status.contacted': 'Contacted', 'status.done': 'Done',
      'about.title': 'About Bryan Painting',
      'about.big': '10 years of painting homes.',
      'about.body': 'Bryan Painting works on house exteriors and interiors in Auckland, New Zealand. Every quote is free.',
      'form.title': 'Get a free quote',
      'form.lede': "Three details are all we need. We'll contact you to talk about your home.",
      'form.alt': 'Prefer email?',
      'form.name': 'Name', 'form.contact': 'Phone or email', 'form.suburb': 'Suburb',
      'form.suburb.ph': 'e.g. Mount Albert',
      'form.consent': 'I agree to Bryan Painting using these details only to contact me about my quote.',
      'form.privacy': 'Privacy notice',
      'footer.place': 'Auckland, New Zealand',
      'msg.sending': 'Sending…',
      'msg.ok': "Thanks, your request has been sent. We'll check it and get in touch.",
      'msg.missing': 'Please enter your name and a phone number or email.',
      'msg.consent': 'Please tick the box to agree to how we use your details.',
      'msg.server': "Your request didn't go through. Please try again in a moment, or email us.",
      'lang.switch': '한국어', 'lang.label': '한국어로 보기',
      title: 'Bryan Painting — House painting in Auckland, free quotes',
    },
    ko: {
      skip: '견적 문의로 바로 가기',
      'nav.services': '칠하는 곳', 'nav.how': '견적 과정', 'nav.about': '소개',
      cta: '무료 견적 받기',
      'hero.place': '뉴질랜드 오클랜드',
      'hero.title': '오클랜드 주택, 안팎을 새로 칠해 드려요.',
      'hero.lede': 'Bryan Painting은 오클랜드에서 주택 외부와 내부를 칠해요. 사는 동네를 알려 주시면 무료 견적을 드려요.',
      'stat1.big': '10년', 'stat1.small': '주택 도장 경력',
      'stat2.big': '무료', 'stat2.small': '우리 집 견적',
      'stat3.big': '안팎 모두', 'stat3.small': '외부·내부 도장',
      'services.title': '칠하는 곳',
      'services.lede': '견적을 받을 때 하나만 골라도, 둘 다 골라도 돼요.',
      'svc.ext.title': '외부 도장',
      'svc.ext.body': '집 바깥: 외벽(웨더보드), 테두리 마감, 창틀과 문.',
      'svc.int.title': '내부 도장',
      'svc.int.body': '집 안: 벽, 천장, 문, 걸레받이.',
      'price.title': '견적이 정해지는 기준',
      'price.lede': '집마다 달라서 정해진 가격표는 없어요. 집을 보고 무료로 견적을 알려 드려요.',
      'price.size.title': '작업 크기', 'price.size.body': '칠할 방이 몇 개인지, 벽과 테두리가 얼마나 되는지.',
      'price.cond.title': '표면 상태', 'price.cond.body': '새로 칠하기 전에 기존 페인트를 긁어내거나 메우거나 사포질해야 하는지.',
      'price.scope.title': '내부, 외부, 또는 둘 다', 'price.scope.body': '집의 어느 부분을 칠하고 싶은지.',
      'how.title': '무료 견적은 이렇게 진행돼요',
      'how.1.title': '문의 남기기', 'how.1.body': '이름, 전화번호나 이메일, 사는 동네를 남겨 주세요.',
      'how.2.title': '연락드리기', 'how.2.body': 'Bryan Painting이 연락드려 작업 이야기를 나누고, 집을 볼 날을 정해요.',
      'how.3.title': '무료 견적 받기', 'how.3.body': '가격과 작업 기간을 알려 드려요. 그다음에 결정하시면 돼요.',
      'ticket.label': '견적 문의', 'ticket.contact': '연락처',
      'status.new': '새 문의', 'status.contacted': '연락함', 'status.done': '완료',
      'about.title': 'Bryan Painting 소개',
      'about.big': '10년 동안 집을 칠해 왔어요.',
      'about.body': 'Bryan Painting은 뉴질랜드 오클랜드에서 주택 외부와 내부 도장을 해요. 견적은 언제나 무료예요.',
      'form.title': '무료 견적 받기',
      'form.lede': '세 가지만 알려 주세요. 연락드려서 집 이야기를 나눌게요.',
      'form.alt': '이메일이 편하신가요?',
      'form.name': '이름', 'form.contact': '전화번호 또는 이메일', 'form.suburb': '사는 동네(Suburb)',
      'form.suburb.ph': '예: Mount Albert',
      'form.consent': '견적 연락을 위해서만 이 정보를 쓰는 데 동의해요.',
      'form.privacy': '개인정보 안내',
      'footer.place': '뉴질랜드 오클랜드',
      'msg.sending': '보내는 중…',
      'msg.ok': '문의가 접수됐어요. 확인 후 연락드릴게요.',
      'msg.missing': '이름과 전화번호 또는 이메일을 적어 주세요.',
      'msg.consent': '개인정보 이용에 동의하는 칸을 체크해 주세요.',
      'msg.server': '문의가 전송되지 않았어요. 잠시 뒤 다시 시도하거나 이메일로 보내 주세요.',
      'lang.switch': 'English', 'lang.label': 'View in English',
      title: 'Bryan Painting — 오클랜드 주택 도장, 무료 견적',
    },
  };

  const store = {
    get() { try { return localStorage.getItem('lang'); } catch { return null; } },
    set(v) { try { localStorage.setItem('lang', v); } catch { /* ignore */ } },
  };

  let lang = store.get() || ((navigator.language || '').toLowerCase().startsWith('ko') ? 'ko' : 'en');
  const t = (k) => (T[lang] && T[lang][k]) || T.en[k] || k;

  function apply() {
    document.documentElement.lang = lang;
    document.title = t('title');
    document.querySelectorAll('[data-i18n]').forEach((el) => { el.textContent = t(el.dataset.i18n); });
    document.querySelectorAll('[data-i18n-ph]').forEach((el) => { el.placeholder = t(el.dataset.i18nPh); });
    const btn = document.getElementById('langToggle');
    if (btn) { btn.textContent = t('lang.switch'); btn.setAttribute('aria-label', t('lang.label')); }
  }

  document.getElementById('langToggle')?.addEventListener('click', () => {
    lang = lang === 'ko' ? 'en' : 'ko';
    store.set(lang);
    apply();
  });
  apply();

  const year = document.getElementById('year');
  if (year) year.textContent = String(new Date().getFullYear());

  // Hero roller animation: skip straight to the finished house if motion is reduced
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    const rect = document.getElementById('revealRect');
    document.querySelectorAll('#revealAnim, #rollerAnim, #rollerFade').forEach((a) => a.remove());
    if (rect) rect.setAttribute('width', '400');
    document.getElementById('roller')?.setAttribute('opacity', '0');
  }

  // Quote form
  const form = document.getElementById('quoteForm');
  const msg = document.getElementById('formMsg');
  if (!form) return;

  const show = (key, kind) => { msg.textContent = t(key); msg.className = 'form-msg ' + (kind || ''); };

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const name = form.name.value.trim();
    const contact = form.contact.value.trim();
    form.name.setAttribute('aria-invalid', String(!name));
    form.contact.setAttribute('aria-invalid', String(!contact));
    if (!name || !contact) { show('msg.missing', 'err'); (name ? form.contact : form.name).focus(); return; }
    if (!form.consent.checked) { show('msg.consent', 'err'); form.consent.focus(); return; }

    const btn = form.querySelector('button[type="submit"]');
    btn.disabled = true;
    show('msg.sending');
    try {
      const r = await fetch('/api/inquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name,
          contact,
          suburb: form.suburb.value.trim(),
          website: form.website.value,
          consent: form.consent.checked,
          lang,
        }),
      });
      const data = await r.json().catch(() => ({}));
      if (r.ok && data.ok) {
        form.reset();
        show('msg.ok', 'ok');
      } else {
        show(data.code === 'missing' ? 'msg.missing' : data.code === 'consent' ? 'msg.consent' : 'msg.server', 'err');
      }
    } catch {
      show('msg.server', 'err');
    } finally {
      btn.disabled = false;
    }
  });
})();
