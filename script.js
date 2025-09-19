(function(){
  if (window.__churchSriLankaBooted) return;
  window.__churchSriLankaBooted = true;

  const $ = (sel, root=document) => root.querySelector(sel);
  const $$ = (sel, root=document) => Array.from(root.querySelectorAll(sel));
  const on = (el, ev, fn) => el && el.addEventListener(ev, fn);

  /* ------------ Translations ------------ */
  const translations = {
    en: {
      // ... [existing keys unchanged] ...
      startActivity: "Start Activity",

      study1Path: "The Path: Hearts hardened to God's word",
      study1Rocky: "Rocky Ground: Shallow faith that withers under pressure",
      study1Thorns: "Thorns: Hearts choked by worldly concerns",
      study1Good: "Good Soil: Hearts that receive and act on God's word",

      study2Compassion: "Compassion: Seeing others' needs and being moved to help",
      study2Action: "Action: Not just feeling sorry, but doing something",
      study2Sacrifice: "Sacrifice: Giving of our time, money, and energy",
      study2Universality: "Universality: Love knows no boundaries",

      study3Rebellion: "Rebellion",
      study3Consequences: "Consequences",
      study3Repentance: "Repentance",
      study3Grace: "Grace",

      // Quiz translations
      quiz: [
        {id:'q1',ref:'2 Timothy 1:8 (KJV)',text:['Therefore, do not be ashamed of the testimony of the Lord, nor of me His ','____',', but share with me in the sufferings for the ','____',' according to the ','____',' of God.'],answers:['prisoner','gospel','power']},
        {id:'q2',ref:'Hebrews 4:2 (KJV)',text:['For indeed the gospel was ','____',' to us as well as to them; but the word which they heard did not ','____',' them, not being mixed with ','____',' in those who heard it.'],answers:['preached','profit','faith']},
        {id:'q3',ref:'2 Corinthians 2:12 (KJV)',text:['Furthermore, when I came to ','____',' to preach ','____',' gospel, and a door was opened to me by the ','____','.'],answers:['troas','christs','lord']},
        {id:'q4',ref:'Romans 1:16 (KJV)',text:['For I am not ','____',' of the ','____',' of Christ, for it is the ','____',' of God to salvation for everyone who believes, for the Jew first and also for the Greek.'],answers:['ashamed','gospel','power']},
        {id:'q5',ref:'Romans 15:19 (KJV)',text:['In mighty signs and wonders, by the power of the Spirit of God, so that from ','____',', and round about to ','____',', I have fully preached the ','____',' of Christ.'],answers:['jerusalem','illyricum','gospel']},
        {id:'q6',ref:'Philippians 4:15 (KJV)',text:['Now you Philippians know also that in the ','____',' of the gospel, when I departed from Macedonia, no ','____',' shared with me concerning giving and receiving but you only.'],answers:['beginning','church']},
        {id:'q7',ref:'1 Thessalonians 3:2 (KJV)',text:['And sent Timothy, our brother and ','____',' of God, and our fellow laborer in the ','____',' of Christ, to establish you and encourage you concerning your faith.'],answers:['minister','gospel']},
      ]
    },
    si: {
      // ... [existing keys unchanged] ...
      startActivity: "ක්‍රියාකාරකම ආරම්භ කරන්න",

      study1Path: "මාර්ගය: දෙවියන් වචනයට හෘදය දැල්වී ඇත",
      study1Rocky: "පැළැවුණු ඉඩම: පීඩනයට යටත් වන මතුපිට විශ්වාසය",
      study1Thorns: "ඉගිළුණු: ලෝක සලකා බැලීමෙන් හෘදයන් ගැටේ",
      study1Good: "හොඳ ඉඩම: දෙවියන් වචනය ලබාගෙන ක්‍රියා කරන හෘදයන්",

      study2Compassion: "කරුණාව: අනෙකුත් අවශ්‍යතා දැක උදව් කිරීමට උනන්දු වීම",
      study2Action: "ක්‍රියාව: දුකින් පමණක් නොව, ක්‍රියාවෙන්ද පෙන්වීම",
      study2Sacrifice: "බලපෑම: අපගේ කාලය, මුදල්, ශක්තිය දීමට",
      study2Universality: "සාමාන්‍යතාව: ආදරයට සීමාවක් නැත",

      study3Rebellion: "කැරැල්ල",
      study3Consequences: "ප්‍රතිඵල",
      study3Repentance: "පසුතැවිල්ල",
      study3Grace: "කාරුණිකත්වය",

      quiz: [
        {id:'q1',ref:'2 තිමෝති 1:8',text:['එබැවින්, ස්වාමිපුරුෂයාගේ සාක්ෂියෙන් හෝ මම ඔහුගේ ','____',' බවට ලජ්ජාවට පත් නොවන්න. ','____',' සඳහා උත්සාහයෙන් මා සමඟ බෙදාගන්න. දෙවියන්ගේ ','____',' අනුව.'],answers:['බන්ධනාගාර','සුවිශේෂය','බලය']},
        {id:'q2',ref:'හීබ්‍රෙව් 4:2',text:['සුවිශේෂය ','____',' අපට සහ ඔවුන්ට ද ලබාදී තිබුණි; ඔවුන් අසා තිබූ වචනය ','____',' නොව, ','____',' සමඟ මිශ්‍ර නොවීම නිසා නොලාභ විය.'],answers:['ප්‍රකාශ','ලාභ','විශ්වාසය']},
        // ...continue for others (fill actual translations as needed)
      ]
    },
    ta: {
      // ... [existing keys unchanged] ...
      startActivity: "செயல்பாட்டை தொடங்கு",

      study1Path: "பாதை: தேவனுடைய வார்த்தைக்கு மனம் கடினமாகும்",
      study1Rocky: "பாறை நிலம்: அழுத்தத்தில் ஒட்டுமொத்த விசுவாசம் தளர்ச்சி",
      study1Thorns: "முள்ள்கள்: உலகப் பொருள்கள் மனதை ஒட்டிக்கொள்ளும்",
      study1Good: "நல்ல மண்: தேவனுடைய வார்த்தையை ஏற்றுக்கொண்டு செயல்படும் மனங்கள்",

      study2Compassion: "இரக்கம்: பிறர் தேவைகளைக் காணும் உணர்வும் உதவ உந்துதல்",
      study2Action: "நடவடிக்கை: பச்சை உணர்வு மட்டும் அல்ல, செயலில் காட்டுதல்",
      study2Sacrifice: "தியாகம்: நேரம், பணம், சக்தி வழங்குதல்",
      study2Universality: "பொதுமை: அன்பிற்கு எல்லை இல்லை",

      study3Rebellion: "துரோகம்",
      study3Consequences: "விளைவுகள்",
      study3Repentance: "பரிதாபம்",
      study3Grace: "அருள்",

      quiz: [
        {id:'q1',ref:'2 தீமோதெய் 1:8',text:['ஆகையால், ஆண்டவரின் சாட்சி அல்லது அவருடைய ','____',' என்று வெட்கப்படாதீர். ','____',' க்கு உங்களுடன் இணைந்து பங்குபற்றுங்கள். தேவனுடைய ','____',' படி.'],answers:[' கைதி','சுவிஷேஷம்','சக்தி']},
        {id:'q2',ref:'எபிரேயர் 4:2',text:['சுவிஷேஷம் ','____',' நமக்கும் அவர்களுக்கும் அறிவிக்கப்பட்டது; அவர்கள் கேட்ட வார்த்தை ','____',' அவர்களுக்கு பயனளிக்கவில்லை, ','____',' உடன் கலந்திருக்கவில்லை.'],answers:['பறைசாற்றப்பட்டது','பயன்','விசுவாசம்']},
        // ...continue for others (fill actual translations as needed)
      ]
    }
  };

  /* ------------ Language ------------ */
  const LANG_STORAGE_KEY = 'coc_lang';
  let currentLanguage = localStorage.getItem(LANG_STORAGE_KEY) || 'en';

  function updateHtmlLangAttr() {
    document.documentElement.lang = currentLanguage;
  }

  function applyTranslations(){
    $$('[data-lang-key]').forEach(el=>{
      const key = el.getAttribute('data-lang-key');
      const txt = translations[currentLanguage] && translations[currentLanguage][key];
      if (txt) el.textContent = txt;
    });
    document.body.classList.remove('font-sinhala','font-tamil');
    if (currentLanguage === 'si') document.body.classList.add('font-sinhala');
    if (currentLanguage === 'ta') document.body.classList.add('font-tamil');
    const sel = $('#lang-select'); if (sel) sel.value = currentLanguage;
    updateHtmlLangAttr();
  }

  function initLanguage(){
    const sel = $('#lang-select');
    if (sel) {
      sel.value = currentLanguage;
      on(sel, 'change', e=>{
        currentLanguage = e.target.value || 'en';
        localStorage.setItem(LANG_STORAGE_KEY, currentLanguage);
        applyTranslations();
        // Re-initialize dynamic activities if needed
        initActivity();
      });
    }
    applyTranslations();
  }

  function initYear(){ const y=$('#year'); if (y) y.textContent=new Date().getFullYear(); }

  const BG_KEY = 'coc_custom_bg';
  function applyBackground(url){
    const ov = $('#customBgOverlay'); if (!ov) return;
    if (url) { ov.style.backgroundImage = `url("${url}")`; ov.style.display='block'; }
    else { ov.style.backgroundImage=''; ov.style.display='none'; }
  }
  function initBackground(){
    const saved = localStorage.getItem(BG_KEY);
    if (saved) applyBackground(saved);
    const input = $('#imageInput');
    on(input,'change',e=>{
      const f = e.target.files?.[0]; if (!f) return;
      const r = new FileReader();
      r.onload = ()=>{ const data=r.result; localStorage.setItem(BG_KEY,data); applyBackground(data); };
      r.readAsDataURL(f);
    });
    window.resetBackground = function(){ localStorage.removeItem(BG_KEY); applyBackground(null); };
  }

  window.toggleStudy = function(id){
    const p = document.getElementById(`${id}-content`);
    if (!p) return;
    p.classList.toggle('hidden');
    p.scrollIntoView({behavior:'smooth', block:'start'});
  };

  async function initGallery(){
    const slider = $('#slider'), dots = $('#dots'), grid = $('#galleryGrid');
    if (!slider || !dots || !grid) return;

    const build = (urls)=>{
      slider.innerHTML=''; dots.innerHTML=''; grid.innerHTML='';
      if (!urls.length) {
        const empty=document.createElement('div');
        empty.className='slide active';
        empty.innerHTML=`<div class="w-full h-full flex items-center justify-center text-white/80">${translations[currentLanguage]?.galleryEmpty || 'No images found in gallary/.'}</div>`;
        slider.appendChild(empty);
        return;
      }
      const slides=[]; let cur=0; let timer=null;

      urls.forEach((u,i)=>{
        const s=document.createElement('div'); s.className='slide' + (i===0?' active':'');
        const img=document.createElement('img'); img.src=u+'?v='+Date.now(); img.alt='Gallery';
        s.appendChild(img); slider.appendChild(s); slides.push(s);

        const d=document.createElement('button'); d.className='dot' + (i===0?' active':'');
        on(d,'click',()=>go(i)); dots.appendChild(d);

        const card=document.createElement('div'); card.className='gal-card';
        const t=document.createElement('img'); t.className='gal-thumb'; t.src=u; t.alt='Gallery';
        card.appendChild(t); grid.appendChild(card);
      });

      function go(i){
        slides[cur].classList.remove('active'); dots.children[cur].classList.remove('active');
        cur=(i+slides.length)%slides.length;
        slides[cur].classList.add('active'); dots.children[cur].classList.add('active');
        restart();
      }
      function next(){ go(cur+1) } function prev(){ go(cur-1) }
      const nextBtn=$('#nextBtn'), prevBtn=$('#prevBtn');
      if (nextBtn) nextBtn.onclick=next;
      if (prevBtn) prevBtn.onclick=prev;

      function restart(){ if (timer) clearInterval(timer); if (slides.length>1) timer=setInterval(next,5000); }
      restart();
    };

    try{
      const r = await fetch('gallary/list.json?ts='+Date.now(), {cache:'no-store'});
      if (!r.ok) throw new Error('no list.json');
      const names = await r.json();
      const urls = names.map(n=>`gallary/${n}`);
      if (urls.length) return build(urls);
      throw new Error('empty list');
    }catch(_){}

    const candidates=['gallary/c.jpeg','gallary/ca.jpeg','gallary/cb.jpeg','gallary/cc.jpeg'];
    const urls=[];
    for (const u of candidates){
      try{ const head=await fetch(u,{method:'HEAD',cache:'no-store'}); if(head.ok) urls.push(u); }catch{}
    }
    build(urls);
  }

  function initActivity(){
    const root = $('#activity-root');
    if (!root) return;
    root.innerHTML = ''; // Clear for language switch

    const DATA = translations[currentLanguage].quiz;
    const t = k => (translations[currentLanguage]?.[k]) || k;
    const norm = s => s.toLowerCase().normalize('NFKD').replace(/[’'`]/g,'').replace(/[^a-z0-9 ]/g,' ').replace(/\s+/g,' ').trim();
    const head=document.createElement('div'); head.className='flex items-start justify-between mb-4';
    head.innerHTML=`<div>
      <h4 class="text-2xl font-bold" data-lang-key="activityTitle">${t('activityTitle')}</h4>
      <p class="text-gray-600 text-sm" data-lang-key="activitySubtitle">${t('activitySubtitle')}</p>
    </div>
    <div class="shrink-0 text-center bg-gray-100 rounded-2xl px-4 py-2 shadow">
      <div class="text-xs uppercase tracking-wide text-gray-500" data-lang-key="timeLeft">${t('timeLeft')}</div>
      <div id="timer" class="text-2xl font-bold tabular-nums">05:00</div>
    </div>`;
    root.appendChild(head);

    const list=document.createElement('div'); list.className='space-y-6'; root.appendChild(list);
    const inputs={};

    DATA.forEach((q,qi)=>{
      let bi=0;
      const card=document.createElement('div'); card.className='rounded-2xl border border-gray-200 p-4 md:p-5';
      const top=document.createElement('div'); top.className='flex items-baseline justify-between';
      top.innerHTML=`<h5 class="font-semibold"><span data-lang-key="questionLabel">${t('questionLabel')}</span> ${qi+1}</h5><span class="text-xs text-gray-500">${q.ref}</span>`;
      const p=document.createElement('p'); p.className='mt-3 leading-8';

      q.text.forEach(chunk=>{
        if(chunk==='____'){
          const key=`${q.id}_${bi}`;
          const inp=document.createElement('input');
          inp.className='mx-1 inline-block rounded-xl border px-2 py-1 text-sm md:text-base focus:outline-none focus:ring-2 transition shadow-sm min-w-[6rem] border-gray-300 focus:ring-indigo-300';
          on(inp,'input',e=>{
            inputs[key]=e.target.value;
            const good = norm(e.target.value)===norm(q.answers[bi]);
            e.target.classList.toggle('border-green-400',good);
            e.target.classList.toggle('bg-green-50',good);
            const bad = e.target.value && !good;
            e.target.classList.toggle('border-rose-300',bad);
            e.target.classList.toggle('bg-rose-50',bad);
            updateScore();
          });
          p.appendChild(inp); bi++;
        } else {
          const span=document.createElement('span'); span.textContent=chunk; p.appendChild(span);
        }
      });

      card.appendChild(top); card.appendChild(p);

      const ans=document.createElement('div'); ans.className='mt-2 text-sm text-gray-600'; ans.style.display='none';
      ans.innerHTML='<strong>Answer:</strong> ' + q.answers.map(a=>`<code class="mx-1 bg-gray-100 rounded px-1.5 py-0.5">${a}</code>`).join('');
      card.appendChild(ans);
      list.appendChild(card);
    });

    const footer=document.createElement('div'); footer.className='mt-4 flex flex-wrap items-center gap-3';
    footer.innerHTML=`<button id="revealBtn" class="px-4 py-2 rounded-2xl bg-gray-900 text-white hover:opacity-90" data-lang-key="reveal">${t('reveal')}</button>
    <button id="resetBtn" class="px-4 py-2 rounded-2xl bg-gray-100 text-gray-900 hover:bg-gray-200" data-lang-key="reset">${t('reset')}</button>
    <div class="ml-auto text-sm text-gray-700"><span data-lang-key="score">${t('score')}</span>: <span id="scoreCorrect" class="font-semibold">0</span> / <span id="scoreTotal">${DATA.reduce((a,q)=>a+q.answers.length,0)}</span></div>`;
    root.appendChild(footer);

    function setAnswersVisible(show){
      $$('.rounded-2xl', list).forEach(card=>{
        const ans = card.children[2];
        ans.style.display = show ? 'block' : 'none';
      });
      const rb = $('#revealBtn');
      if (rb) rb.textContent = show ? (translations[currentLanguage]?.hideAnswers || 'Hide Answers') : (translations[currentLanguage]?.reveal || 'Reveal Answers');
    }
    on($('#revealBtn'),'click',()=>{
      const shown = !!list.querySelector('.rounded-2xl div[style*="display: block"]');
      setAnswersVisible(!shown);
    });
    on($('#resetBtn'),'click',()=>location.reload());

    function updateScore(){
      let correct=0;
      DATA.forEach(q=>q.answers.forEach((a,i)=>{
        const k=`${q.id}_${i}`; if (norm(inputs[k]||'')===norm(a)) correct++;
      }));
      const sc=$('#scoreCorrect'); if (sc) sc.textContent=String(correct);
    }

    // timer 5:00
    let timeLeft=300; const timerEl=$('#timer');
    setInterval(()=>{
      if (timeLeft<=0) return;
      timeLeft--;
      const m=String(Math.floor(timeLeft/60)).padStart(2,'0');
      const s=String(timeLeft%60).padStart(2,'0');
      if (timerEl) timerEl.textContent=`${m}:${s}`;
    },1000);
  }

  function boot(){
    initLanguage();
    initYear();
    initBackground();
    initGallery();
    initActivity();
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot);
  else boot();

})();
