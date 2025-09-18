/* =========================================================
   Church of Christ — Sri Lanka (GitHub Pages safe)
   Full app script (clean)
   ========================================================= */
(function(){
  if (window.__churchSriLankaBooted) return;
  window.__churchSriLankaBooted = true;

  const $ = (sel, root=document) => root.querySelector(sel);
  const $$ = (sel, root=document) => Array.from(root.querySelectorAll(sel));
  const on = (el, ev, fn) => el && el.addEventListener(ev, fn);

  /* ------------ Translations ------------ */
  const translations = {
    en: {
      languageLabel: "Language",
      churchName: "Church of Christ",
      heroTitle: "Welcome to the Church of Christ",
      heroSubtitle: "Seeking God's truth and sharing His love.",
      heroCta: "Find a Location Near You",
      bibleVerse: "The churches of Christ salute you.",
      bibleReference: "— Romans 16:16",
      aboutTitle: "Our Vision & Mission",
      missionStatement: "We strive to follow the New Testament pattern of worship and Christian living.",
      aboutCard1Title: "Bible Study",
      aboutCard1Text: "We believe in studying God's word together to grow in faith and understanding.",
      aboutCard2Title: "Fellowship",
      aboutCard2Text: "Building strong relationships within our Christian community.",
      aboutCard3Title: "Service",
      aboutCard3Text: "Serving our community and sharing Christ's love through action.",
      bibleStudiesTitle: "Bible Studies",
      bibleStudiesSubtitle: "Explore God's word through our interactive study materials",
      activitySectionHeading: "Interactive Activity: 5-Minute Gospel",
      study1Title: "The Parable of the Sower",
      study1Desc: "Understanding how God's word takes root in different hearts.",
      study2Title: "The Good Samaritan",
      study2Desc: "Learning about love and compassion for our neighbors.",
      study3Title: "The Prodigal Son",
      study3Desc: "Discovering God's forgiveness and unconditional love.",
      activityCardTitle: "5-Minute Gospel Activity",
      activityCardDesc: "Fill-in-the-blank quiz with timer and scoring.",
      downloadStudy: "View Study",
      locationsTitle: "Our Locations",
      sundayWorship930: "Sunday Worship: 9:30 AM",
      sunday930: "Sunday: 9:30 AM",
      activityTitle: "5-Minute Bible Study: Gospel",
      activitySubtitle: "Fill-in-the-blank (answers are not case-sensitive).",
      timeLeft: "TIME LEFT",
      reveal: "Reveal Answers",
      hideAnswers: "Hide Answers",
      reset: "Reset",
      score: "Score",
      questionLabel: "Question",
      galleryEmpty: "No images found in gallary/."
    },
    si: {
      languageLabel: "භාෂාව",
      churchName: "ක්‍රිස්තුස්වහන්සේගේ සභාව",
      heroTitle: "ක්‍රිස්තුස්වහන්සේගේ සභාවට සාදරයෙන් පිළිගනිමු",
      heroSubtitle: "දෙවියන්වහන්සේගේ සත්‍යය සොයමින්, ඊතන සෙනෙහස බෙදා හදමු.",
      heroCta: "අසළ මණ්ඩපයක් සොයන්න",
      bibleVerse: "ක්‍රිස්තුස්වහන්සේගේ සභාවන් ඔබට ආයුබෝවන් කියති.",
      bibleReference: "— රෝමවරුන් 16:16",
      aboutTitle: "අපගේ දර්ශනය සහ මෙහෙය",
      missionStatement: "නව ගිවිසුමේ ආදර්ශය අනුව අපගේ සෙවණ දිවියත් විනයත් ගෙන යමු.",
      aboutCard1Title: "බයිබල් අධ්‍යයනය",
      aboutCard1Text: "විශ්වාසය හා අවබෝධය වර්ධනය සඳහා එකට දෙවියන් වචනය අධ්‍යයනය කරමු.",
      aboutCard2Title: "සංග්‍රහය",
      aboutCard2Text: "කිර්තිස්තු සමාජය තුළ ශක්තිමත් සබඳතා ගොඩනගමු.",
      aboutCard3Title: "සේවය",
      aboutCard3Text: "ක්‍රිස්තුස්වහන්සේගේ ප්‍රේමය ක්‍රියාවෙන් පෙන්වමින් සමාජයට සේවය කරමු.",
      bibleStudiesTitle: "බයිබල් අධ්‍යයන",
      bibleStudiesSubtitle: "අන්තර්ක්‍රියාකාරී අධ්‍යයන ද්‍රව්‍ය හරහා දෙවියන් වචනය අධ්‍යයනය කරන්න",
      activitySectionHeading: "අන්තර්ක්‍රියාකාරී ක්‍රියාකාරකම: මිනිත්තු 5 එළිදරව්ව",
      study1Title: "බීජ වපුරුසගේ උපමාව",
      study1Desc: "දෙවියන් වචනය වෙනස් හෘදයන් තුල වර්ධනය වන ආකාරය.",
      study2Title: "සුභ සමාරියානියා",
      study2Desc: "අපගේ අසල්වැසියන්ට ප්‍රේමය හා කරුණාව පෙන්වීම ගැන ඉගෙනගන්නා ලදි.",
      study3Title: "වැනරපු පුතියා",
      study3Desc: "දෙවියන්වහන්සේගේ සමාව සහ නිර්කොන්දේසි ප්‍රේමය සොයාගැනීම.",
      activityCardTitle: "මිනිත්තු 5 සුවිශේෂ ක්‍රියාකාරකම",
      activityCardDesc: "කාලය මැනුම සහ ලකුණු කිරීම සහිත හිස්තැන් පුරවීම.",
      downloadStudy: "අධ්‍යයනය බලන්න",
      locationsTitle: "අපගේ ස්ථාන",
      sundayWorship930: "ඉරිදා නමස්කාරය: පෙ.ව. 9:30",
      sunday930: "ඉරිදා: පෙ.ව. 9:30",
      activityTitle: "මිනිත්තු 5 බයිබල් අධ්‍යයනය: සුවිශේෂය",
      activitySubtitle: "හිස් තැන් පුරවන්න (අක්‍ෂර ප්‍රමාණය නොසලකා).",
      timeLeft: "අවශේෂ කාලය",
      reveal: "පිළිතුරු පෙන්වන්න",
      hideAnswers: "පිළිතුරු සඟවන්න",
      reset: "යළි පිහිටුවන්න",
      score: "ලකුණු",
      questionLabel: "ප්‍රශ්නය",
      galleryEmpty: "gallary/ හි රූප නොමැත."
    },
    ta: {
      languageLabel: "மொழி",
      churchName: "கிறிஸ்துவின் சபை",
      heroTitle: "கிறிஸ்துவின் சபைக்கு வரவேற்கிறோம்",
      heroSubtitle: "இறைவன் சத்தியத்தைத் தேடி, அவர் அன்பைப் பகிர்வோம்.",
      heroCta: "உங்களுக்கு அருகில் உள்ள இடத்தை காண்க",
      bibleVerse: "கிறிஸ்துவின் சபைகள் உங்களுக்கு வணக்கம் சொல்லுகின்றன.",
      bibleReference: "— ரோமர் 16:16",
      aboutTitle: "எங்கள் நோக்கமும் பணியும்",
      missionStatement: "புதிய ஏற்பாட்டின் மாதிரியைப் பின்பற்றி ஆராதனைவும் வாழ்வும்.",
      aboutCard1Title: "வேதாகம ஆய்வு",
      aboutCard1Text: "ஏகமாய் தேவ வார்த்தையை ஆய்ந்து விசுவாசத்தில் வளர்வோம்.",
      aboutCard2Title: "சங்கமம்",
      aboutCard2Text: "கிறிஸ்துவில் வலுவான உறவுகளை கட்டுவோம்.",
      aboutCard3Title: "சேவை",
      aboutCard3Text: "செயலில் கிறிஸ்துவின் அன்பை பகிர்வோம்.",
      bibleStudiesTitle: "வேதாகம ஆய்வுகள்",
      bibleStudiesSubtitle: "உரையாடும் படிப்புப் பொருள்கள் மூலம் தேவ வார்த்தை",
      activitySectionHeading: "இணைய செயல்: 5 நிமிட சுவிசேஷம்",
      study1Title: "விதைப்பவர் உவமை",
      study1Desc: "விதவிதமான இதயங்களில் தேவ வார்த்தை வேரூன்றுவது.",
      study2Title: "நல்ல சமாரியர்",
      study2Desc: "அண்டைவர்களுக்கான அன்பும் கருணையும் பற்றி கற்பது.",
      study3Title: "தீராத மகன் (தவறிச் சென்ற மகன்)",
      study3Desc: "இறைவன் மன்னிப்பும் நிபந்தனையற்ற அன்பும் கண்டறிதல்.",
      activityCardTitle: "5 நிமிட சுவிசேஷச் செயல்",
      activityCardDesc: "நேரக் கணக்குடன்/மதிப்பெண்களுடன் காலியிடங்களை நிரப்பும் வினா.",
      downloadStudy: "ஆய்வைப் பார்க்க",
      locationsTitle: "எங்கள் இடங்கள்",
      sundayWorship930: "ஞாயிறு ஆராதனை: காலை 9:30",
      sunday930: "ஞாயிறு: காலை 9:30",
      activityTitle: "5 நிமிட வேதாகம ஆய்வு: சுவிசேஷம்",
      activitySubtitle: "காலியான இடங்களை நிரப்புக (உயிர்மெய் பெரிய/சிறிய பொருட்டல்ல).",
      timeLeft: "மீதமுள்ள நேரம்",
      reveal: "பதில் காண்பிக்க",
      hideAnswers: "பதில்களை மறைக்க",
      reset: "மீட்டமை",
      score: "மதிப்பெண்",
      questionLabel: "கேள்வி",
      galleryEmpty: "gallary/ இல் படங்கள் இல்லை."
    }
  };

  /* ------------ Language ------------ */
  const LANG_STORAGE_KEY = 'coc_lang';
  let currentLanguage = localStorage.getItem(LANG_STORAGE_KEY) || 'en';

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
  }

  function initLanguage(){
    const sel = $('#lang-select');
    if (sel) {
      sel.value = currentLanguage;
      on(sel, 'change', e=>{
        currentLanguage = e.target.value || 'en';
        localStorage.setItem(LANG_STORAGE_KEY, currentLanguage);
        applyTranslations();
      });
    }
    applyTranslations();
  }

  /* ------------ Year ------------ */
  function initYear(){ const y=$('#year'); if (y) y.textContent=new Date().getFullYear(); }

  /* ------------ Background (local) ------------ */
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

  /* ------------ Studies open/close ------------ */
  window.toggleStudy = function(id){
    const p = document.getElementById(`${id}-content`);
    if (!p) return;
    p.classList.toggle('hidden');
    p.scrollIntoView({behavior:'smooth', block:'start'});
  };

  /* ------------ Gallery (list.json + fallback) ------------ */
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

  /* ------------ Gospel Activity ------------ */
  function initActivity(){
    const root = $('#activity-root'); if (!root) return;

    const DATA=[
      {id:'q1',ref:'2 Timothy 1:8 (KJV)',text:['Therefore, do not be ashamed of the testimony of the Lord, nor of me His ','____',', but share with me in the sufferings for the ','____',' according to the ','____',' of God.'],answers:['prisoner','gospel','power']},
      {id:'q2',ref:'Hebrews 4:2 (KJV)',text:['For indeed the gospel was ','____',' to us as well as to them; but the word which they heard did not ','____',' them, not being mixed with ','____',' in those who heard it.'],answers:['preached','profit','faith']},
      {id:'q3',ref:'2 Corinthians 2:12 (KJV)',text:['Furthermore, when I came to ','____',' to preach ','____',' gospel, and a door was opened to me by the ','____','.'],answers:['troas','christs','lord']},
      {id:'q4',ref:'Romans 1:16 (KJV)',text:['For I am not ','____',' of the ','____',' of Christ, for it is the ','____',' of God to salvation for everyone who believes, for the Jew first and also for the Greek.'],answers:['ashamed','gospel','power']},
      {id:'q5',ref:'Romans 15:19 (KJV)',text:['In mighty signs and wonders, by the power of the Spirit of God, so that from ','____',', and round about to ','____',', I have fully preached the ','____',' of Christ.'],answers:['jerusalem','illyricum','gospel']},
      {id:'q6',ref:'Philippians 4:15 (KJV)',text:['Now you Philippians know also that in the ','____',' of the gospel, when I departed from Macedonia, no ','____',' shared with me concerning giving and receiving but you only.'],answers:['beginning','church']},
      {id:'q7',ref:'1 Thessalonians 3:2 (KJV)',text:['And sent Timothy, our brother and ','____',' of God, and our fellow laborer in the ','____',' of Christ, to establish you and encourage you concerning your faith.'],answers:['minister','gospel']},
    ];

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

  /* ------------ Boot ------------ */
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
