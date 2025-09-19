/* =========================================================
   Church of Christ — Sri Lanka
   Single, idempotent app script for GitHub Pages
   ========================================================= */
(function () {
  // Prevent double boot if the script is accidentally loaded twice
  if (window.__churchSriLankaBooted) return;
  window.__churchSriLankaBooted = true;

  /* ------------------ Utilities ------------------ */
  const $  = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));
  const on = (el, ev, fn) => el && el.addEventListener(ev, fn);

  /* ------------------ Translations (UI copy) ------------------ */
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
      activityCardTitle: "5-Minute Gospel Activity",
      activityCardDesc: "Fill-in-the-blank quiz with timer and scoring.",
      study1Title: "The Parable of the Sower",
      study1Desc: "Understanding how God's word takes root in different hearts.",
      study2Title: "The Good Samaritan",
      study2Desc: "Learning about love and compassion for our neighbors.",
      study3Title: "The Prodigal Son",
      study3Desc: "Discovering God's forgiveness and unconditional love.",
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
      heroSubtitle: "දෙවියන්වහන්සේගේ සත්‍යය සොයමින්, උන්වහන්සේගේ ආදරය බෙදාගනිමු.",
      heroCta: "ආසන්න ස්ථානයක් සොයන්න",
      bibleVerse: "ක්‍රිස්තුස්වහන්සේගේ සභාවන් ඔබට ආයුබෝවන් කියති.",
      bibleReference: "— රෝමා 16:16",
      aboutTitle: "අපගේ දර්ශනය සහ මෙහෙය",
      missionStatement: "නව ගිවිසුමේ ආකාරයට අපගේ නමස්කාරය හා ක්‍රිස්තීය ජීවිතය ගෙනයමු.",
      aboutCard1Title: "බයිබල් අධ්‍යයනය",
      aboutCard1Text: "විශ්වාසය හා අවබෝධය වර්ධනයට එකමුතුව දෙවියන් වචනය අධ්‍යයනය කරමු.",
      aboutCard2Title: "සංග්‍රහය",
      aboutCard2Text: "ක්‍රිස්තීය සමාජයේ ශක්තිමත් සම්බන්ධතා ගොඩනගමු.",
      aboutCard3Title: "සේවය",
      aboutCard3Text: "ක්‍රියාවෙන් ක්‍රිස්තුස්වහන්සේගේ ප්‍රේමය බෙදාගනිමු.",
      bibleStudiesTitle: "බයිබල් අධ්‍යයන",
      bibleStudiesSubtitle: "අන්තර්ක්‍රියාකාරී අධ්‍යයන මගින් දෙවියන් වචනය අධ්‍යයනය කරන්න",
      activitySectionHeading: "අන්තර්ක්‍රියාකාරී ක්‍රියාකාරකම: මිනිත්තු 5 සුවිශේෂය",
      activityCardTitle: "මිනිත්තු 5 සුවිශේෂ ක්‍රියාකාරකම",
      activityCardDesc: "කාල මැනුම හා ලකුණු කිරීම සමඟ හිස්තැන් පුරවීම.",
      study1Title: "බීජ වපුරුසගේ උපමාව",
      study1Desc: "දෙවියන් වචනය විවිධ හෘදයන් තුළ ගොඩවීම.",
      study2Title: "සුභ සමාරියානියා",
      study2Desc: "අසන්නකාරයන්ට ඇති ප්‍රෙමය හා කරුණාව ඉගෙනගනිමු.",
      study3Title: "වැනරපු පුතියා",
      study3Desc: "දෙවියන්වහන්සේගේ සමාව හා නිර්කොන්දේසි ප්‍රේමය සොයාගැනීම.",
      downloadStudy: "අධ්‍යයනය බලන්න",
      locationsTitle: "අපගේ ස්ථාන",
      sundayWorship930: "ඉරිදා නමස්කාරය: පෙ.ව. 9:30",
      sunday930: "ඉරිදා: පෙ.ව. 9:30",
      activityTitle: "මිනිත්තු 5 බයිබල් අධ්‍යයනය: සුවිශේෂය",
      activitySubtitle: "හිස් තැන් පුරවන්න (අකුරු විශේෂයෙන් වැදගත් නොවේ).",
      timeLeft: "අවශ්‍ය කාලය",
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
      heroSubtitle: "இறைவனின் சத்தியத்தைத் தேடி, அவருடைய அன்பைப் பகிர்வோம்.",
      heroCta: "உங்களுக்கு அருகிலுள்ள இடத்தை காண்க",
      bibleVerse: "கிறிஸ்துவின் சபைகள் உங்களுக்கு வணக்கம் செலுத்துகின்றன.",
      bibleReference: "— ரோமர் 16:16",
      aboutTitle: "எங்கள் நோக்கமும் பணியும்",
      missionStatement: "புதிய ஏற்பாட்டின் மாதிரியைப் பின்பற்றி ஆராதனையும் வாழ்வும்.",
      aboutCard1Title: "வேதாகம ஆய்வு",
      aboutCard1Text: "தேவவார்த்தையை சேர்ந்து ஆய்ந்து விசுவாசத்தில் வளர்வோம்.",
      aboutCard2Title: "சங்கமம்",
      aboutCard2Text: "கிறிஸ்துவில் வலுவான உறவுகளை கட்டுவோம்.",
      aboutCard3Title: "சேவை",
      aboutCard3Text: "செயலில் கிறிஸ்துவின் அன்பைப் பகிர்வோம்.",
      bibleStudiesTitle: "வேதாகம ஆய்வுகள்",
      bibleStudiesSubtitle: "உரையாடும் படிப்புப் பொருள்கள் மூலம் தேவவார்த்தை",
      activitySectionHeading: "இணைய செயல்: 5 நிமிட சுவிசேஷம்",
      activityCardTitle: "5 நிமிட சுவிசேஷச் செயல்",
      activityCardDesc: "நேரக் கணக்குடன் மற்றும் மதிப்பெண்களுடன் காலியிடங்களை நிரப்புக.",
      study1Title: "விதைப்பவர் உவமை",
      study1Desc: "விதவிதமான இதயங்களில் தேவவார்த்தை வேரூன்றுவது.",
      study2Title: "நல்ல சமாரியர்",
      study2Desc: "அண்டைவர்களுக்கான அன்பும் கருணையும் பற்றி கற்பது.",
      study3Title: "தவறிச் சென்ற மகன்",
      study3Desc: "இறைவன் மன்னிப்பும் நிபந்தனையற்ற அன்பும் கண்டறிதல்.",
      downloadStudy: "ஆய்வைப் பார்க்க",
      locationsTitle: "எங்கள் இடங்கள்",
      sundayWorship930: "ஞாயிறு ஆராதனை: காலை 9:30",
      sunday930: "ஞாயிறு: காலை 9:30",
      activityTitle: "5 நிமிட வேதாகம ஆய்வு: சுவிசேஷம்",
      activitySubtitle: "காலியிடங்களை நிரப்புக (பெரிய/சிறிய எழுத்து பொருட்டல்ல).",
      timeLeft: "மீதமுள்ள நேரம்",
      reveal: "பதில்கள் காட்டு",
      hideAnswers: "பதில்களை மறை",
      reset: "மீட்டமை",
      score: "மதிப்பெண்",
      questionLabel: "கேள்வி",
      galleryEmpty: "gallary/ இல் படங்கள் இல்லை."
    }
  };

  /* ------------------ Multi-language verse text for activity ------------------ */
  // Note: Scripture lines are kept in KJV English in all languages (UI around it localizes).
  const VERSE_CHUNKS = {
    en: {
      q1: ["Therefore, do not be ashamed of the testimony of the Lord, nor of me His ", "____", ", but share with me in the sufferings for the ", "____", " according to the ", "____", " of God."],
      q2: ["For indeed the gospel was ", "____", " to us as well as to them; but the word which they heard did not ", "____", " them, not being mixed with ", "____", " in those who heard it."],
      q3: ["Furthermore, when I came to ", "____", " to preach ", "____", " gospel, and a door was opened to me by the ", "____", "."],
      q4: ["For I am not ", "____", " of the ", "____", " of Christ, for it is the ", "____", " of God to salvation for everyone who believes, for the Jew first and also for the Greek."],
      q5: ["In mighty signs and wonders, by the power of the Spirit of God, so that from ", "____", ", and round about to ", "____", ", I have fully preached the ", "____", " of Christ."],
      q6: ["Now you Philippians know also that in the ", "____", " of the gospel, when I departed from Macedonia, no ", "____", " shared with me concerning giving and receiving but you only."],
      q7: ["And sent Timothy, our brother and ", "____", " of God, and our fellow laborer in the ", "____", " of Christ, to establish you and encourage you concerning your faith."]
    },
    si: {}, // falls back to en text
    ta: {}  // falls back to en text
  };

  // Answers (lowercased for matching)
  const VERSE_META = [
    { id: "q1", ref: "2 Timothy 1:8 (KJV)", answers: ["prisoner", "gospel", "power"] },
    { id: "q2", ref: "Hebrews 4:2 (KJV)", answers: ["preached", "profit", "faith"] },
    { id: "q3", ref: "2 Corinthians 2:12 (KJV)", answers: ["troas", "christs", "lord"] },
    { id: "q4", ref: "Romans 1:16 (KJV)", answers: ["ashamed", "gospel", "power"] },
    { id: "q5", ref: "Romans 15:19 (KJV)", answers: ["jerusalem", "illyricum", "gospel"] },
    { id: "q6", ref: "Philippians 4:15 (KJV)", answers: ["beginning", "church"] },
    { id: "q7", ref: "1 Thessalonians 3:2 (KJV)", answers: ["minister", "gospel"] }
  ];

  /* ------------------ Language system ------------------ */
  const LANG_STORAGE_KEY = "coc_lang";
  let currentLanguage = localStorage.getItem(LANG_STORAGE_KEY) || "en";

  function applyTranslations() {
    const dict = translations[currentLanguage] || translations.en;
    $$("[data-lang-key]").forEach(el => {
      const key = el.getAttribute("data-lang-key");
      if (dict[key]) el.textContent = dict[key];
    });

    // font helpers
    document.body.classList.remove("font-sinhala", "font-tamil");
    if (currentLanguage === "si") document.body.classList.add("font-sinhala");
    if (currentLanguage === "ta") document.body.classList.add("font-tamil");
  }

  function initLanguage() {
    const sel = $("#lang-select");
    if (sel) {
      sel.value = currentLanguage;
      on(sel, "change", e => {
        currentLanguage = e.target.value || "en";
        localStorage.setItem(LANG_STORAGE_KEY, currentLanguage);
        applyTranslations();
        // Rebuild dynamic areas that depend on language
        rebuildActivity();
        rebuildGalleryEmptyState();
      });
    }
    applyTranslations();
  }

  /* ------------------ Year ------------------ */
  function initYear() {
    const y = $("#year");
    if (y) y.textContent = String(new Date().getFullYear());
  }

  /* ------------------ Background (per visitor) ------------------ */
  const BG_KEY = "coc_custom_bg";

  function applyBackground(url) {
    const ov = $("#customBgOverlay");
    if (!ov) return;
    if (url) {
      ov.style.backgroundImage = `url("${url}")`;
      ov.style.display = "block";
    } else {
      ov.style.backgroundImage = "";
      ov.style.display = "none";
    }
  }

  function initBackground() {
    const saved = localStorage.getItem(BG_KEY);
    if (saved) applyBackground(saved);

    const input = $("#imageInput");
    on(input, "change", e => {
      const f = e.target.files && e.target.files[0];
      if (!f) return;
      const reader = new FileReader();
      reader.onload = () => {
        const data = reader.result;
        localStorage.setItem(BG_KEY, data);
        applyBackground(data);
      };
      reader.readAsDataURL(f);
    });

    // Expose reset for button in HTML
    window.resetBackground = function () {
      localStorage.removeItem(BG_KEY);
      applyBackground(null);
    };
  }

  /* ------------------ Studies open/close ------------------ */
  window.toggleStudy = function (id) {
    const panel = document.getElementById(`${id}-content`);
    if (!panel) return;
    panel.classList.toggle("hidden");
    panel.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  /* ------------------ Gallery ------------------ */
  let galleryBuiltOnce = false;

  function buildGallery(urls) {
    const slider = $("#slider");
    const dots = $("#dots");
    const grid = $("#galleryGrid");
    if (!slider || !dots || !grid) return;

    slider.innerHTML = "";
    dots.innerHTML = "";
    grid.innerHTML = "";

    if (!urls || !urls.length) {
      const dict = translations[currentLanguage] || translations.en;
      const empty = document.createElement("div");
      empty.className = "slide active";
      empty.innerHTML = `<div class="w-full h-full flex items-center justify-center text-white/80">${dict.galleryEmpty}</div>`;
      slider.appendChild(empty);
      return;
    }

    const slides = [];
    let cur = 0;
    let timer = null;

    urls.forEach((u, i) => {
      const s = document.createElement("div");
      s.className = "slide" + (i === 0 ? " active" : "");
      const img = document.createElement("img");
      img.src = u + "?v=" + Date.now();
      img.alt = "Gallery";
      s.appendChild(img);
      slider.appendChild(s);
      slides.push(s);

      const d = document.createElement("button");
      d.className = "dot" + (i === 0 ? " active" : "");
      on(d, "click", () => go(i));
      dots.appendChild(d);

      const card = document.createElement("div");
      card.className = "gal-card";
      const t = document.createElement("img");
      t.className = "gal-thumb";
      t.src = u;
      t.alt = "Gallery";
      card.appendChild(t);
      grid.appendChild(card);
    });

    function go(i) {
      slides[cur].classList.remove("active");
      dots.children[cur].classList.remove("active");
      cur = (i + slides.length) % slides.length;
      slides[cur].classList.add("active");
      dots.children[cur].classList.add("active");
      restart();
    }
    function next() { go(cur + 1); }
    function prev() { go(cur - 1); }

    const nextBtn = $("#nextBtn");
    const prevBtn = $("#prevBtn");
    if (nextBtn) nextBtn.onclick = next;
    if (prevBtn) prevBtn.onclick = prev;

    function restart() {
      if (timer) clearInterval(timer);
      if (slides.length > 1) timer = setInterval(next, 5000);
    }
    restart();
  }

  async function initGallery() {
    // fetch list.json first
    try {
      const res = await fetch("gallary/list.json?ts=" + Date.now(), { cache: "no-store" });
      if (!res.ok) throw new Error("no list.json");
      const names = await res.json(); // ["c.jpeg", "ca.jpeg", ...]
      const urls = names.map(n => `gallary/${n}`);
      buildGallery(urls);
      galleryBuiltOnce = true;
      return;
    } catch (e) {
      // fallback probe
      const candidates = ["gallary/c.jpeg", "gallary/ca.jpeg", "gallary/cb.jpeg", "gallary/cc.jpeg"];
      const urls = [];
      for (const u of candidates) {
        try {
          const head = await fetch(u, { method: "HEAD", cache: "no-store" });
          if (head.ok) urls.push(u);
        } catch {}
      }
      buildGallery(urls);
      galleryBuiltOnce = true;
    }
  }

  // When only the language changed and gallery already built, just update empty message if needed
  function rebuildGalleryEmptyState() {
    if (!galleryBuiltOnce) return;
    const slide = $("#slider .slide.active");
    if (!slide) return;
    if (slide.querySelector("img")) return; // has an image; nothing to change
    const dict = translations[currentLanguage] || translations.en;
    slide.innerHTML = `<div class="w-full h-full flex items-center justify-center text-white/80">${dict.galleryEmpty}</div>`;
  }

  /* ------------------ 5-Minute Gospel Activity ------------------ */
  function normalize(s) {
    return String(s || "")
      .toLowerCase()
      .normalize("NFKD")
      .replace(/[’'`]/g, "")
      .replace(/[^a-z0-9 ]/g, " ")
      .replace(/\s+/g, " ")
      .trim();
  }

  function buildActivity(root) {
    const dict = translations[currentLanguage] || translations.en;
    const chunks = VERSE_CHUNKS[currentLanguage] || VERSE_CHUNKS.en;

    root.innerHTML = "";

    const head = document.createElement("div");
    head.className = "flex items-start justify-between mb-4";
    head.innerHTML = `
      <div>
        <h4 class="text-2xl font-bold" data-lang-key="activityTitle">${dict.activityTitle}</h4>
        <p class="text-gray-600 text-sm" data-lang-key="activitySubtitle">${dict.activitySubtitle}</p>
      </div>
      <div class="shrink-0 text-center bg-gray-100 rounded-2xl px-4 py-2 shadow">
        <div class="text-xs uppercase tracking-wide text-gray-500" data-lang-key="timeLeft">${dict.timeLeft}</div>
        <div id="timer" class="text-2xl font-bold tabular-nums">05:00</div>
      </div>
    `;
    root.appendChild(head);

    const list = document.createElement("div");
    list.className = "space-y-6";
    root.appendChild(list);

    const inputs = {};
    VERSE_META.forEach((q, qi) => {
      let bi = 0;
      const card = document.createElement("div");
      card.className = "rounded-2xl border border-gray-200 p-4 md:p-5";
      const top = document.createElement("div");
      top.className = "flex items-baseline justify-between";
      top.innerHTML = `<h5 class="font-semibold"><span data-lang-key="questionLabel">${dict.questionLabel}</span> ${qi + 1}</h5><span class="text-xs text-gray-500">${q.ref}</span>`;
      const p = document.createElement("p");
      p.className = "mt-3 leading-8";

      const line = chunks[q.id] || (VERSE_CHUNKS.en[q.id] || []);
      line.forEach(part => {
        if (part === "____") {
          const key = `${q.id}_${bi}`;
          const inp = document.createElement("input");
          inp.className = "mx-1 inline-block rounded-xl border px-2 py-1 text-sm md:text-base focus:outline-none focus:ring-2 transition shadow-sm min-w-[6rem] border-gray-300 focus:ring-indigo-300";
          on(inp, "input", e => {
            inputs[key] = e.target.value;
            const good = normalize(e.target.value) === normalize(q.answers[bi]);
            e.target.classList.toggle("border-green-400", good);
            e.target.classList.toggle("bg-green-50", good);
            const bad = e.target.value && !good;
            e.target.classList.toggle("border-rose-300", bad);
            e.target.classList.toggle("bg-rose-50", bad);
            updateScore();
          });
          p.appendChild(inp);
          bi++;
        } else {
          const span = document.createElement("span");
          span.textContent = part;
          p.appendChild(span);
        }
      });

      card.appendChild(top);
      card.appendChild(p);

      const ans = document.createElement("div");
      ans.className = "mt-2 text-sm text-gray-600";
      ans.style.display = "none";
      ans.innerHTML = `<strong>Answer:</strong> ${q.answers
        .map(a => `<span class="mx-1 bg-gray-100 rounded px-1.5 py-0.5">${a}</span>`)
        .join("")}`;
      card.appendChild(ans);

      list.appendChild(card);
    });

    const footer = document.createElement("div");
    footer.className = "mt-4 flex flex-wrap items-center gap-3";
    footer.innerHTML = `
      <button id="revealBtn" class="px-4 py-2 rounded-2xl bg-gray-900 text-white hover:opacity-90" data-lang-key="reveal">${dict.reveal}</button>
      <button id="resetBtn"  class="px-4 py-2 rounded-2xl bg-gray-100 text-gray-900 hover:bg-gray-200" data-lang-key="reset">${dict.reset}</button>
      <div class="ml-auto text-sm text-gray-700">
        <span data-lang-key="score">${dict.score}</span>:
        <span id="scoreCorrect" class="font-semibold">0</span> /
        <span id="scoreTotal">${VERSE_META.reduce((a, q) => a + q.answers.length, 0)}</span>
      </div>
    `;
    root.appendChild(footer);

    function setAnswersVisible(show) {
      $$(".rounded-2xl", list).forEach(card => {
        const ans = card.children[2];
        ans.style.display = show ? "block" : "none";
      });
      const rb = $("#revealBtn");
      if (rb) rb.textContent = show ? (translations[currentLanguage]?.hideAnswers || "Hide Answers")
                                   : (translations[currentLanguage]?.reveal || "Reveal Answers");
    }

    on($("#revealBtn"), "click", () => {
      const anyShown = !!list.querySelector('.rounded-2xl div[style*="display: block"]');
      setAnswersVisible(!anyShown);
    });

    on($("#resetBtn"), "click", () => location.reload());

    function updateScore() {
      let correct = 0;
      VERSE_META.forEach(q =>
        q.answers.forEach((a, i) => {
          const k = `${q.id}_${i}`;
          if (normalize(inputs[k]) === normalize(a)) correct++;
        })
      );
      const sc = $("#scoreCorrect");
      if (sc) sc.textContent = String(correct);
    }

    // Timer
    let timeLeft = 300; // 5 minutes
    const timerEl = $("#timer");
    const interval = setInterval(() => {
      if (timeLeft <= 0) {
        clearInterval(interval);
        return;
      }
      timeLeft--;
      const m = String(Math.floor(timeLeft / 60)).padStart(2, "0");
      const s = String(timeLeft % 60).padStart(2, "0");
      if (timerEl) timerEl.textContent = `${m}:${s}`;
    }, 1000);
  }

  function rebuildActivity() {
    const root = $("#activity-root");
    if (!root) return;
    buildActivity(root);
    // re-apply translated labels inside the newly built DOM
    applyTranslations();
  }

  function initActivity() {
    rebuildActivity();
  }

  /* ------------------ Boot ------------------ */
  document.addEventListener("DOMContentLoaded", () => {
    initLanguage();
    initYear();
    initBackground();
    initGallery();
    initActivity();
  });
})();
