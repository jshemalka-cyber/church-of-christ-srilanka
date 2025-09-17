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
// ===== Gospel Activity (builds inside #activity-root) =====
(function(){
  const DATA=[
    {id:'q1',ref:'2 Timothy 1:8 (KJV)',text:['Therefore, do not be ashamed of the testimony of the Lord, nor of me His ','____',', but share with me in the sufferings for the ','____',' according to the ','____',' of God.'],answers:['prisoner','gospel','power']},
    {id:'q2',ref:'Hebrews 4:2 (KJV)',text:['For indeed the gospel was ','____',' to us as well as to them; but the word which they heard did not ','____',' them, not being mixed with ','____',' in those who heard it.'],answers:['preached','profit','faith']},
    {id:'q3',ref:'2 Corinthians 2:12 (KJV)',text:['Furthermore, when I came to ','____',' to preach ','____',' gospel, and a door was opened to me by the ','____','.'],answers:['troas','christs','lord']},
    {id:'q4',ref:'Romans 1:16 (KJV)',text:['For I am not ','____',' of the ','____',' of Christ, for it is the ','____',' of God to salvation for everyone who believes, for the Jew first and also for the Greek.'],answers:['ashamed','gospel','power']},
    {id:'q5',ref:'Romans 15:19 (KJV)',text:['In mighty signs and wonders, by the power of the Spirit of God, so that from ','____',', and round about to ','____',', I have fully preached the ','____',' of Christ.'],answers:['jerusalem','illyricum','gospel']},
    {id:'q6',ref:'Philippians 4:15 (KJV)',text:['Now you Philippians know also that in the ','____',' of the gospel, when I departed from Macedonia, no ','____',' shared with me concerning giving and receiving but you only.'],answers:['beginning','church']},
    {id:'q7',ref:'1 Thessalonians 3:2 (KJV)',text:['And sent Timothy, our brother and ','____',' of God, and our fellow laborer in the ','____',' of Christ, to establish you and encourage you concerning your faith.'],answers:['minister','gospel']},
  ];
  const t = (k)=> (window.translations?.[window.currentLanguage||'en']?.[k]) || k;
  const norm=s=>s.toLowerCase().normalize('NFKD').replace(/[’'`]/g,'').replace(/[^a-z0-9 ]/g,' ').replace(/\s+/g,' ').trim();
  const root=document.getElementById('activity-root'); if(!root) return;

  const head=document.createElement('div'); head.className='flex items-start justify-between mb-4';
  head.innerHTML=`<div><h4 class="text-2xl font-bold" data-lang-key="activityTitle">5-Minute Bible Study: Gospel</h4>
  <p class="text-gray-600 text-sm" data-lang-key="activitySubtitle">Fill-in-the-blank (answers are not case-sensitive).</p></div>
  <div class="shrink-0 text-center bg-gray-100 rounded-2xl px-4 py-2 shadow">
    <div class="text-xs uppercase tracking-wide text-gray-500" data-lang-key="timeLeft">TIME LEFT</div>
    <div id="timer" class="text-2xl font-bold tabular-nums">05:00</div>
  </div>`;
  root.appendChild(head);

  const list=document.createElement('div'); list.className='space-y-6'; root.appendChild(list);
  const inputs={};

  DATA.forEach((q,qi)=>{
    let bi=0;
    const card=document.createElement('div'); card.className='rounded-2xl border border-gray-200 p-4 md:p-5';
    const top=document.createElement('div'); top.className='flex items-baseline justify-between';
    top.innerHTML=`<h5 class="font-semibold"><span data-lang-key="questionLabel">Question</span> ${qi+1}</h5><span class="text-xs text-gray-500">${q.ref}</span>`;
    const p=document.createElement('p'); p.className='mt-3 leading-8';

    q.text.forEach(chunk=>{
      if(chunk==='____'){
        const key=`${q.id}_${bi}`; const inp=document.createElement('input');
        inp.className='mx-1 inline-block rounded-xl border px-2 py-1 text-sm md:text-base focus:outline-none focus:ring-2 transition shadow-sm min-w-[6rem] border-gray-300 focus:ring-indigo-300';
        inp.addEventListener('input',e=>{
          inputs[key]=e.target.value;
          const good=norm(e.target.value)===norm(q.answers[bi]);
          e.target.classList.toggle('border-green-400',good);
          e.target.classList.toggle('bg-green-50',good);
          const bad=e.target.value && !good;
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
  footer.innerHTML=`<button id="revealBtn" class="px-4 py-2 rounded-2xl bg-gray-900 text-white hover:opacity-90" data-lang-key="reveal">Reveal Answers</button>
  <button id="resetBtn" class="px-4 py-2 rounded-2xl bg-gray-100 text-gray-900 hover:bg-gray-200" data-lang-key="reset">Reset</button>
  <div class="ml-auto text-sm text-gray-700"><span data-lang-key="score">Score</span>: <span id="scoreCorrect" class="font-semibold">0</span> / <span id="scoreTotal">${DATA.reduce((a,q)=>a+q.answers.length,0)}</span></div>`;
  root.appendChild(footer);

  function setAnswersVisible(show){
    list.querySelectorAll('.rounded-2xl').forEach(card=>{
      const ans=card.children[2]; ans.style.display=show?'block':'none';
    });
    document.getElementById('revealBtn').textContent = show ? 'Hide Answers' : 'Reveal Answers';
  }
  document.getElementById('revealBtn').addEventListener('click',()=>{
    const shown = !!list.querySelector('.rounded-2xl div[style*="display: block"]');
    setAnswersVisible(!shown);
  });
  document.getElementById('resetBtn').addEventListener('click',()=>location.reload());

  function updateScore(){
    let correct=0;
    DATA.forEach(q=>q.answers.forEach((a,i)=>{
      const k=`${q.id}_${i}`; if(norm(inputs[k]||'')===norm(a)) correct++;
    }));
    document.getElementById('scoreCorrect').textContent=String(correct);
  }

  // timer
  let timeLeft=300; const timerEl=document.getElementById('timer');
  setInterval(()=>{ if(timeLeft<=0) return; timeLeft--; const m=String(Math.floor(timeLeft/60)).padStart(2,'0'); const s=String(timeLeft%60).padStart(2,'0'); timerEl.textContent=`${m}:${s}`; },1000);
})();

