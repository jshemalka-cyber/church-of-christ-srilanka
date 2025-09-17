/* ===== Language dropdown & translations (idempotent) ===== */
window.translations = window.translations || {
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
    study1Desc: "Understanding how God's word takes root in different hearts.",
    downloadStudy: "View Study",
    locationsTitle: "Our Locations",
    sundayWorship930: "Sunday Worship: 9:30 AM",
    sunday930: "Sunday: 9:30 AM",
    activityTitle: "5-Minute Bible Study: Gospel",
    activitySubtitle: "Fill-in-the-blank (answers are not case-sensitive).",
    timeLeft: "TIME LEFT",
    reveal: "Reveal Answers",
    reset: "Reset",
    score: "Score",
    questionLabel: "Question",
    galleryEmpty: "No images found in gallary/."
  },
  si: { languageLabel:"භාෂාව", sundayWorship930:"ඉරිදා නමස්කාරය: පෙ.ව. 9:30", sunday930:"ඉරිදා: පෙ.ව. 9:30" },
  ta: { languageLabel:"மொழி",  sundayWorship930:"ஞாயிறு ஆராதனை: காலை 9:30", sunday930:"ஞாயிறு: காலை 9:30" }
};

window.currentLanguage = window.currentLanguage || "en";

function applyTranslations(){
  document.querySelectorAll("[data-lang-key]").forEach(el=>{
    const k = el.getAttribute("data-lang-key");
    const t = window.translations[window.currentLanguage] && window.translations[window.currentLanguage][k];
    if (t) el.textContent = t;
  });
  document.body.classList.remove("font-sinhala","font-tamil");
  if (window.currentLanguage==="si") document.body.classList.add("font-sinhala");
  if (window.currentLanguage==="ta") document.body.classList.add("font-tamil");
}

(function initLanguage(){
  const btn   = document.getElementById("lang-btn");
  const menu  = document.getElementById("lang-menu");
  const label = document.getElementById("lang-label");
  if (!btn || !menu || !label) return; // safe guard

  function setLang(lang){
    window.currentLanguage = lang;
    label.textContent = window.translations[lang]?.languageLabel || "Language";
    applyTranslations();
    menu.classList.add("hidden");
    btn.setAttribute("aria-expanded","false");
  }

  btn.addEventListener("click", e=>{
    e.preventDefault();
    const open = menu.classList.toggle("hidden") === false;
    btn.setAttribute("aria-expanded", open ? "true" : "false");
  });

  document.querySelectorAll(".lang-item").forEach(item=>{
    item.addEventListener("click", e=>{
      e.preventDefault();
      setLang(item.dataset.lang);
    });
  });

  document.addEventListener("click", e=>{
    if (!btn.contains(e.target) && !menu.contains(e.target)) {
      menu.classList.add("hidden");
      btn.setAttribute("aria-expanded","false");
    }
  });

  setLang(window.currentLanguage); // default
})();
