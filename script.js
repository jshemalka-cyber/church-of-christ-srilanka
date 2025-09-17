/* ===== Language dropdown & translations ===== */
window.translations = window.translations || {
  en:{ languageLabel:"Language", /* …other keys already in your file… */ },
  si:{ languageLabel:"භාෂාව",   /* … */ },
  ta:{ languageLabel:"மொழி",      /* … */ }
};
let currentLanguage = 'en';

function applyTranslations(){
  document.querySelectorAll('[data-lang-key]').forEach(el=>{
    const k = el.getAttribute('data-lang-key');
    const t = window.translations[currentLanguage] && window.translations[currentLanguage][k];
    if (t) el.textContent = t;
  });
  document.body.classList.remove('font-sinhala','font-tamil');
  if (currentLanguage==='si') document.body.classList.add('font-sinhala');
  if (currentLanguage==='ta') document.body.classList.add('font-tamil');
}

(function initLanguage(){
  const btn   = document.getElementById('lang-btn');
  const menu  = document.getElementById('lang-menu');
  const label = document.getElementById('lang-label');
  if(!btn || !menu || !label) return;   // safe guard

  const names = { en:'English', si:'සිංහල', ta:'தமிழ்' };

  function setLang(lang){
    currentLanguage = lang;
    label.textContent = window.translations[lang]?.languageLabel || names[lang] || 'Language';
    applyTranslations();
    menu.classList.add('hidden');
    btn.setAttribute('aria-expanded','false');
  }

  btn.addEventListener('click', e=>{
    e.preventDefault();
    const show = menu.classList.toggle('hidden') === false;
    btn.setAttribute('aria-expanded', show ? 'true' : 'false');
  });

  document.querySelectorAll('.lang-item').forEach(item=>{
    item.addEventListener('click', e=>{
      e.preventDefault();
      setLang(item.dataset.lang);
    });
  });

  document.addEventListener('click', e=>{
    if (!btn.contains(e.target) && !menu.contains(e.target)) {
      menu.classList.add('hidden');
      btn.setAttribute('aria-expanded','false');
    }
  });

  // default language on load
  setLang('en');
})();
