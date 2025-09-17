// ===== Utilities =====
function toast(text,type){
  const old=document.querySelector('.status-message'); if(old) old.remove();
  const el=document.createElement('div'); el.className='status-message';
  el.style.cssText=`position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);
    background:${type==='bad'?'#ef4444':'#10b981'};color:#fff;padding:15px 25px;border-radius:8px;
    z-index:10000;font-weight:600;box-shadow:0 10px 25px rgba(0,0,0,.3);backdrop-filter:blur(10px);
    font-size:14px;max-width:320px;text-align:center;`;
  el.textContent=text; document.body.appendChild(el);
  setTimeout(()=>{el.style.opacity='0'; setTimeout(()=>el.remove(),300)},2200);
}

// ===== Language strings =====
const translations={en:{churchName:"Church of Christ",heroTitle:"Welcome to the Church of Christ",heroSubtitle:"Seeking God's truth and sharing His love.",heroCta:"Find a Location Near You",bibleVerse:"The churches of Christ salute you.",bibleReference:"— Romans 16:16",aboutTitle:"Our Vision & Mission",missionStatement:"We strive to follow the New Testament pattern of worship and Christian living.",aboutCard1Title:"Bible Study",aboutCard1Text:"We believe in studying God's word together to grow in faith and understanding.",aboutCard2Title:"Fellowship",aboutCard2Text:"Building strong relationships within our Christian community.",aboutCard3Title:"Service",aboutCard3Text:"Serving our community and sharing Christ's love through action.",bibleStudiesTitle:"Bible Studies",bibleStudiesSubtitle:"Explore God's word through our interactive study materials",study1Title:"The Parable of the Sower",study1Desc:"Understanding how God's word takes root in different hearts.",study2Title:"The Good Samaritan",study2Desc:"Learning about love and compassion for our neighbors.",study3Title:"The Prodigal Son",study3Desc:"Discovering God's forgiveness and unconditional love.",downloadStudy:"View Study",locationsTitle:"Our Locations"},
si:{churchName:"ක්‍රිස්තුගේ සභාව",heroTitle:"ක්‍රිස්තුගේ සභාවට සාදරයෙන් පිළිගනිමු",heroSubtitle:"දෙවියන්ගේ සත්‍යය සොයා ගැනීම සහ ඔහුගේ ප්‍රේමය බෙදා ගැනීම.",heroCta:"ඔබ අසලින් ස්ථානයක් සොයන්න",bibleVerse:"ක්‍රිස්තුගේ සභා ඔබට ආචාර කරති.",bibleReference:"— රෝම 16:16",aboutTitle:"අපගේ දර්ශනය සහ මෙහෙවර",missionStatement:"අපි නව ගිණුමේ නමස්කාර සහ ක්‍රිස්තියානි ජීවන ක්‍රමය අනුගමනය කිරීමට උත්සාහ කරමු.",aboutCard1Title:"බයිබල් අධ්‍යයනය",aboutCard1Text:"විශ්වාසය සහ අවබෝධය වර්ධනය වීම සඳහා දෙවියන්ගේ වචනය එකට අධ්‍යයනය කිරීම.",aboutCard2Title:"සහයෝගිතාව",aboutCard2Text:"අපගේ ක්‍රිස්තියානි ප්‍රජාව තුළ ශක්තිමත් සබඳතා ගොඩනැගීම.",aboutCard3Title:"සේවාව",aboutCard3Text:"අපගේ ප්‍රජාවට සේවය කිරීම සහ ක්‍රිස්තුගේ ප්‍රේමය ක්‍රියාවෙන් බෙදා ගැනීම.",bibleStudiesTitle:"බයිබල් අධ්‍යයන",bibleStudiesSubtitle:"අපගේ අන්තර්ක්‍රියාකාරී අධ්‍යයන ද්‍රව්‍ය හරහා දෙවියන්ගේ වචනය ගවේෂණය කරන්න",study1Title:"වපුරන්නාගේ උපමාව",study1Desc:"දෙවියන්ගේ වචනය විවිධ හදවත්වල මුල් බැස යන ආකාරය.",study2Title:"හොඳ සමරිතානුවා",study2Desc:"අපගේ අසල්වැසියන්ට ඇති ප්‍රේමය සහ දයානුකම්පාව.",study3Title:"නාස්ති පුත්‍රයා",study3Desc:"දෙවියන්ගේ සමාව සහ කොන්දේසි රහිත ප්‍රේමය.",downloadStudy:"අධ්‍යයනය බලන්න",locationsTitle:"අපගේ ස්ථාන"},
ta:{churchName:"கிறிஸ்துவின் சபை",heroTitle:"கிறிஸ்துவின் சபைக்கு வருக",heroSubtitle:"கடவுளின் சத்தியத்தைத் தேடி அவருடைய அன்பைப் பகிர்ந்துகொள்வது.",heroCta:"உங்களுக்கு அருகிலுள்ள இடத்தைக் கண்டுபிடி",bibleVerse:"கிறிஸ்துவின் சபைகள் உங்களை வாழ்த்துகின்றன.",bibleReference:"— ரோமர் 16:16",aboutTitle:"எங்கள் தரிசனம் மற்றும் நோக்கம்",missionStatement:"புதிய ஏற்பாட்டின் வழிபாட்டு முறை மற்றும் கிறிஸ்தவ வாழ்க்கையைப் பின்பற்ற நாங்கள் முயற்சி செய்கிறோம்.",aboutCard1Title:"வேதாகம ஆய்வு",aboutCard1Text:"நம்பிக்கை மற்றும் புரிதலில் வளர கடவுளின் வார்த்தையை ஒன்றாக ஆய்வு செய்வதில் நாங்கள் நம்புகிறோம்.",aboutCard2Title:"கூட்டுறவு",aboutCard2Text:"எங்கள் கிறிஸ்தவ சமுதாயத்தில் வலுவான உறவுகளை உருவாக்குதல்.",aboutCard3Title:"சேவை",aboutCard3Text:"எங்கள் சமுதாயத்திற்கு சேவை செய்தல் மற்றும் கிறிஸ்துவின் அன்பை செயலால் பகிர்ந்துகொள்ளுதல்.",bibleStudiesTitle:"வேதாகம ஆய்வுகள்",bibleStudiesSubtitle:"எங்கள் ஊடாடும் ஆய்வுப் பொருட்கள் மூலம் கடவுளின் வார்த்தையை ஆராயுங்கள்",study1Title:"விதைப்பவனின் உவமை",study1Desc:"கடவுளின் வார்த்தை வெவ்வேறு இதயங்களில் எவ்வாறு வேரூன்றுகிறது.",study2Title:"நல்ல சமாரியன்",study2Desc:"அண்டை வீட்டாரிடம் அன்பும் இரக்கமும்.",study3Title:"வீணடித்த மகன்",study3Desc:"மன்னிப்பும் நிபந்தனையற்ற அன்பும்.",downloadStudy:"ஆய்வைப் பார்க்கவும்",locationsTitle:"எங்கள் இடங்கள்"}};
let currentLanguage='en';

// Language dropdown
document.getElementById('lang-btn').addEventListener('click',e=>{
  e.preventDefault();
  const m=document.getElementById('lang-menu');
  m.classList.toggle('hidden'); m.classList.toggle('show');
});
document.querySelectorAll('[data-lang]').forEach(a=>{
  a.addEventListener('click',e=>{
    e.preventDefault(); switchLanguage(a.dataset.lang);
    const m=document.getElementById('lang-menu'); m.classList.add('hidden'); m.classList.remove('show');
  });
});
document.addEventListener('click',e=>{
  const b=document.getElementById('lang-btn'); const m=document.getElementById('lang-menu');
  if(!b.contains(e.target)&&!m.contains(e.target)){ m.classList.add('hidden'); m.classList.remove('show'); }
});
function switchLanguage(lang){
  currentLanguage=lang;
  document.querySelectorAll('[data-lang-key]').forEach(el=>{
    const k=el.getAttribute('data-lang-key');
    if(translations[lang]&&translations[lang][k]) el.textContent=translations[lang][k];
  });
  document.body.classList.remove('font-sinhala','font-tamil');
  if(lang==='si') document.body.classList.add('font-sinhala');
  if(lang==='ta') document.body.classList.add('font-tamil');
  const names={en:'English',si:'සිංහල',ta:'தமிழ்'};
  const svg=document.querySelector('#lang-btn svg'); svg.previousSibling.textContent=names[lang]+' ';
}

// Study toggles
function toggleStudy(id){
  const c=document.getElementById(id+'-content');
  document.querySelectorAll('.study-content').forEach(s=>{ if(s!==c) s.classList.add('hidden'); });
  c.classList.toggle('hidden');
  if(!c.classList.contains('hidden')) setTimeout(()=>c.scrollIntoView({behavior:'smooth',block:'start'}),80);
}
window.toggleStudy=toggleStudy;

// Background (local only)
const imageInput=document.getElementById('imageInput');
const customBgOverlay=document.getElementById('customBgOverlay');
window.addEventListener('load',()=>{
  const saved=localStorage.getItem('churchCustomBackground'); if(saved) applyCustomBackground(saved);
  switchLanguage('en');
  const y=document.getElementById('year'); if(y) y.textContent=new Date().getFullYear();
  document.body.style.opacity='0'; setTimeout(()=>{document.body.style.transition='opacity .5s ease'; document.body.style.opacity='1'},100);
});
imageInput.addEventListener('change',e=>{
  const f=e.target.files[0]; if(!f) return;
  if(!f.type.startsWith('image/')) return toast('Please select an image file.','bad');
  if(f.size>5*1024*1024) return toast('Image too large (max 5MB).','bad');
  const r=new FileReader();
  r.onload=ev=>{ const url=ev.target.result; applyCustomBackground(url); localStorage.setItem('churchCustomBackground',url); toast('Background updated!'); };
  r.readAsDataURL(f);
});
function applyCustomBackground(url){
  customBgOverlay.style.backgroundImage=`url('${url}')`;
  customBgOverlay.style.display='block';
  document.body.classList.add('custom-background');
}
function resetBackground(){
  customBgOverlay.style.display='none';
  document.body.classList.remove('custom-background');
  localStorage.removeItem('churchCustomBackground');
  imageInput.value=''; toast('Background reset.');
}
window.resetBackground=resetBackground;

// Gospel Activity
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
  const norm=s=>s.toLowerCase().normalize('NFKD').replace(/[’'`]/g,'').replace(/[^a-z0-9 ]/g,' ').replace(/\s+/g,' ').trim();
  const root=document.getElementById('activity-root');

  const head=document.createElement('div'); head.className='flex items-start justify-between mb-4';
  head.innerHTML=`<div><h4 class="text-2xl font-bold">5-Minute Bible Study: Gospel</h4><p class="text-gray-600 text-sm">Fill-in-the-blank (answers are not case-sensitive).</p></div>
  <div class="shrink-0 text-center bg-gray-100 rounded-2xl px-4 py-2 shadow">
    <div class="text-xs uppercase tracking-wide text-gray-500">Time Left</div>
    <div id="timer" class="text-2xl font-bold tabular-nums">05:00</div>
  </div>`;
  root.appendChild(head);

  const list=document.createElement('div'); list.className='space-y-6'; root.appendChild(list);
  const inputs={};

  DATA.forEach((q,qi)=>{
    let bi=0;
    const card=document.createElement('div'); card.className='rounded-2xl border border-gray-200 p-4 md:p-5';
    const top=document.createElement('div'); top.className='flex items-baseline justify-between';
    top.innerHTML=`<h5 class="font-semibold">Question ${qi+1}</h5><span class="text-xs text-gray-500">${q.ref}</span>`;
    const p=document.createElement('p'); p.className='mt-3 leading-8';

    q.text.forEach(chunk=>{
      if(chunk==='____'){
        const key=`${q.id}_${bi}`; const inp=document.createElement('input');
        inp.className='mx-1 inline-block rounded-xl border px-2 py-1 text-sm md:text-base focus:outline-none focus:ring-2 transition shadow-sm min-w-[6rem] border-gray-300 focus:ring-indigo-300';
        inp.addEventListener('input',e=>{
          inputs[key]=e.target.value;
          validate(inp, q.answers[bi]); updateScore();
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

    function validate(input,answer){
      const good=norm(input.value)===norm(answer);
      input.classList.toggle('border-green-400',good);
      input.classList.toggle('bg-green-50',good);
      input.classList.toggle('focus:ring-green-300',good);
      const touched=input.value.length>0 && !good;
      input.classList.toggle('border-rose-300',touched);
      input.classList.toggle('bg-rose-50',touched);
      input.classList.toggle('focus:ring-rose-300',touched);
    }
  });

  const footer=document.createElement('div'); footer.className='mt-4 flex flex-wrap items-center gap-3';
  footer.innerHTML=`<button id="revealBtn" class="px-4 py-2 rounded-2xl bg-gray-900 text-white hover:opacity-90">Reveal Answers</button>
  <button id="resetBtn" class="px-4 py-2 rounded-2xl bg-gray-100 text-gray-900 hover:bg-gray-200">Reset</button>
  <div class="ml-auto text-sm text-gray-700">Score: <span id="scoreCorrect" class="font-semibold">0</span> / <span id="scoreTotal">${DATA.reduce((a,q)=>a+q.answers.length,0)}</span></div>`;
  root.appendChild(footer);

  function setAnswersVisible(show){
    list.querySelectorAll('.rounded-2xl').forEach(card=>{
      const ans=card.children[2]; ans.style.display=show?'block':'none';
    });
    document.getElementById('revealBtn').textContent=show?'Hide Answers':'Reveal Answers';
  }
  document.getElementById('revealBtn').addEventListener('click',()=>{
    const anyShown = !!list.querySelector('.rounded-2xl div[style*="display: block"]');
    setAnswersVisible(!anyShown);
  });
  document.getElementById('resetBtn').addEventListener('click',()=>{ location.reload() });

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

// ===== Static Gallery for GitHub Pages =====
// List your image files inside the repo folder "gallary/"
const STATIC_SLIDES = [
  'gallary/cb.jpeg',
  'gallary/c.jpeg',
  'gallary/ca.jpeg',
  'gallary/cc.jpeg'
];

function testImage(url, timeout=8000){
  return new Promise(resolve=>{
    const img=new Image(); let done=false;
    const finish=(ok)=>{ if(!done){done=true; resolve(ok?url:null)} };
    const t=setTimeout(()=>finish(false), timeout);
    img.onload=()=>{ clearTimeout(t); finish(true) };
    img.onerror=()=>{ clearTimeout(t); finish(false) };
    img.src=url+'?v='+(Date.now());
  });
}

const slider=document.getElementById('slider');
const dotsWrap=document.getElementById('dots');
const grid=document.getElementById('galleryGrid');
let current=0, timer=null, slidesEls=[];

function buildSlide(url, active=false){
  const s=document.createElement('div'); s.className='slide'+(active?' active':'');
  const img=document.createElement('img'); img.src=url; img.alt='Gallery image';
  s.appendChild(img); slider.appendChild(s); return s;
}
function go(i){
  const n=slidesEls.length; if(n<1) return;
  slidesEls[current]?.classList.remove('active'); dotsWrap.children[current]?.classList.remove('active');
  current=(i+n)%n; slidesEls[current].classList.add('active'); dotsWrap.children[current].classList.add('active'); resetTimer();
}
function next(){ go(current+1) } function prev(){ go(current-1) }
function start(){ stop(); if(slidesEls.length>1) timer=setInterval(next,5000) }
function stop(){ if(timer) clearInterval(timer) } function resetTimer(){ start() }

document.getElementById('nextBtn').addEventListener('click',next);
document.getElementById('prevBtn').addEventListener('click',prev);
slider.addEventListener('mouseenter',stop); slider.addEventListener('mouseleave',start);
let sx=0; slider.addEventListener('touchstart',e=>sx=e.changedTouches[0].clientX);
slider.addEventListener('touchend',e=>{const dx=e.changedTouches[0].clientX-sx;if(Math.abs(dx)>40){dx<0?next():prev()}});

async function loadGalleryStatic(){
  const ok = (await Promise.all(STATIC_SLIDES.map(testImage))).filter(Boolean);

  // slider
  slider.querySelectorAll('.slide').forEach(n=>n.remove()); slidesEls=[]; dotsWrap.innerHTML=''; current=0; stop();
  if(!ok.length){
    const empty=document.createElement('div'); empty.className='slide active';
    empty.innerHTML='<div class="w-full h-full flex items-center justify-center text-white/80">No images found in <code>gallary/</code>.</div>';
    slider.appendChild(empty); slidesEls=[empty];
  }else{
    ok.forEach((u,i)=>{
      slidesEls.push(buildSlide(u, i===0));
      const d=document.createElement('button'); d.className='dot'+(i===0?' active':''); d.addEventListener('click',()=>go(i)); dotsWrap.appendChild(d);
    });
    start();
  }

  // grid
  grid.innerHTML='';
  ok.forEach(u=>{
    const card=document.createElement('div'); card.className='gal-card';
    const img=document.createElement('img'); img.src=u; img.className='gal-thumb'; card.appendChild(img);
    grid.appendChild(card);
  });
}
loadGalleryStatic();
