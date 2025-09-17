/* --- constants --- */
const GH_OWNER='jshemalka-cyber';
const GH_REPO='church-of-christ-srilanka';
const GH_PATH='gallary'; // keep your folder name

/* 1) read list.json from the site (same origin) */
async function listFromLocalJson(){
  try{
    const r = await fetch('gallary/list.json', { cache: 'no-store' });
    if(!r.ok) return [];
    const names = await r.json();
    return names.map(n => `gallary/${n}`);
  }catch(_){ return []; }
}

/* 2) fallback to GitHub API if list.json missing */
async function listGitHubImages(){
  const url=`https://api.github.com/repos/${GH_OWNER}/${GH_REPO}/contents/${encodeURIComponent(GH_PATH)}`;
  const res=await fetch(url,{headers:{'Accept':'application/vnd.github.v3+json'}});
  if(!res.ok) return [];
  const arr=await res.json();
  return arr.filter(it=>it.type==='file' && /\.(png|jpe?g|gif|webp|bmp)$/i.test(it.name))
            .map(it=>it.download_url);
}

/* 3) final fallback: hard-coded names that actually exist */
const STATIC_SLIDES=['gallary/c.jpeg','gallary/ca.jpeg','gallary/cb.jpeg','gallary/cc.jpeg'];
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

/* ---- render helpers (keep yours if already defined) ---- */
const slider=document.getElementById('slider');
const dotsWrap=document.getElementById('dots');
const grid=document.getElementById('galleryGrid');
let current=0, timer=null, slidesEls=[];
function buildSlide(url, active=false){ const s=document.createElement('div'); s.className='slide'+(active?' active':''); const img=document.createElement('img'); img.src=url; img.alt='Gallery image'; s.appendChild(img); slider.appendChild(s); return s; }
function go(i){ const n=slidesEls.length; if(n<1) return; slidesEls[current]?.classList.remove('active'); dotsWrap.children[current]?.classList.remove('active'); current=(i+n)%n; slidesEls[current].classList.add('active'); dotsWrap.children[current].classList.add('active'); start(); }
function next(){ go(current+1) } function prev(){ go(current-1) }
function start(){ if(timer) clearInterval(timer); if(slidesEls.length>1) timer=setInterval(next,5000) }
document.getElementById('nextBtn').addEventListener('click',next);
document.getElementById('prevBtn').addEventListener('click',prev);

/* ---- main loader ---- */
async function loadGallery(){
  let urls = await listFromLocalJson();
  if(!urls.length){ try{ urls = await listGitHubImages(); }catch{} }
  if(!urls.length){ urls = (await Promise.all(STATIC_SLIDES.map(testImage))).filter(Boolean); }

  // slider
  slider.querySelectorAll('.slide').forEach(n=>n.remove()); slidesEls=[]; dotsWrap.innerHTML=''; current=0;
  if(!urls.length){
    const empty=document.createElement('div'); empty.className='slide active';
    empty.innerHTML='<div class="w-full h-full flex items-center justify-center text-white/80">No images found in <code>gallary/</code>.</div>';
    slider.appendChild(empty); slidesEls=[empty];
  }else{
    urls.forEach((u,i)=>{ slidesEls.push(buildSlide(u,i===0)); const d=document.createElement('button'); d.className='dot'+(i===0?' active':''); d.addEventListener('click',()=>go(i)); dotsWrap.appendChild(d); });
    start();
  }

  // grid
  grid.innerHTML='';
  urls.forEach(u=>{ const card=document.createElement('div'); card.className='gal-card'; const img=document.createElement('img'); img.src=u; img.className='gal-thumb'; card.appendChild(img); grid.appendChild(card); });
}
loadGallery();
