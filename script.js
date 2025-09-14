// Translations content
const translations = {
    'en': {
        churchName: 'Church of Christ',
        navAbout: 'About Us',
        navLocations: 'Our Locations',
        navSermons: 'Sermons',
        navEvents: 'Events',
        navContact: 'Contact Us',
        heroTitle: 'Welcome to the Church of Christ',
        heroSubtitle: 'Seeking God\'s truth and sharing His love.',
        heroCta: 'Find a Location Near You',
        bibleVerse: 'The churches of Christ salute you.',
        bibleReference: '— Romans 16:16',
        aboutTitle: 'Our Vision & Mission',
        missionStatement: 'Teaching the Bible towards salvation individually or collectively.',
        missionVerse1: '"Freely you have received, freely you give." Matt. 10:8',
        missionVerse2: '"Come to me, all who are weary and burdened, and I will give you rest." Matt. 11:28',
        beliefsTitle: 'Our Core Beliefs',
        aboutCard1Title: 'Biblical Authority',
        aboutCard1Text: 'We believe the Bible is our sole guide for faith and practice, with "no creed but Christ."',
        aboutCard2Title: 'A Cappella Worship',
        aboutCard2Text: 'Our worship services feature only vocal music, as we seek to follow the New Testament example.',
        aboutCard3Title: 'Weekly Communion',
        aboutCard3Text: 'We observe the Lord\'s Supper every Sunday, in remembrance of Jesus\' sacrifice.',
        locationsTitle: 'Our Locations',
        study1Title: 'The Parable of the Sower',
        study1Desc: 'Understanding how we receive God\'s Word and bear fruit in our lives.',
        study2Title: 'The Good Samaritan',
        study2Desc: 'Learning to love our neighbors as ourselves through practical kindness.',
        study3Title: 'The Prodigal Son',
        study3Desc: 'God\'s unconditional love and forgiveness for those who return to Him.',
        downloadStudy: 'Download Study',
        weeklyStudyTitle: 'Weekly Bible Study Schedule',
        wednesdayStudy: 'Wednesday Evening Study',
        sundayStudy: 'Sunday Morning Bible Class',
        contactTitle: 'Contact Us'
    },
    'si': {
        churchName: 'ක්‍රිස්තුස්වහන්සේගේ සභාව',
        navAbout: 'අප ගැන',
        navLocations: 'අපගේ ස්ථාන',
        navSermons: 'දේශනා',
        navEvents: 'සිදුවීම්',
        navContact: 'අප අමතන්න',
        heroTitle: 'ක්‍රිස්තුස්වහන්සේගේ සභාවට ඔබව සාදරයෙන් පිළිගනිමු',
        heroSubtitle: 'දෙවියන් වහන්සේගේ සත්‍යය සොයා උන්වහන්සේගේ ප්‍රේමය බෙදාගැනීම.',
        heroCta: 'ඔබට ආසන්න ස්ථානයක් සොයන්න',
        bibleVerse: 'ක්‍රිස්තුස්වහන්සේගේ සභාවෝ ඔබට ආචාර කරති.',
        bibleReference: '— රෝම 16:16',
        aboutTitle: 'අපගේ දැක්ම සහ මෙහෙවර',
        missionStatement: 'තනි තනිව හෝ සාමූහිකව ගැලවීම සඳහා බයිබලය ඉගැන්වීම.',
        missionVerse1: '"නොමිලයේම නුඹලාට ලැබුණේය, නොමිලයේම දෙන්න." මතෙව් 10:8',
        missionVerse2: '"වෙහෙස වී බර උසුලන සියල්ලෙනි, මා වෙතට එන්න, මම ඔබට සහනය දෙන්නෙමි." මතෙව් 11:28',
        beliefsTitle: 'අපගේ මූලික විශ්වාසයන්',
        aboutCard1Title: 'බයිබලයේ අධිකාරය',
        aboutCard1Text: '"ක්‍රිස්තුස්වහන්සේ හැර වෙනත් ධර්මයක් නැත" යනුවෙන් අපි බයිබලය අපගේ ඇදහිල්ලට සහ පිළිවෙතට එකම මඟ පෙන්වීම ලෙස විශ්වාස කරමු.',
        aboutCard2Title: 'වෝකල් සංගීතයෙන් පමණක් නමස්කාරය',
        aboutCard2Text: 'අළුත් ගිවිසුමේ ආදර්ශය අනුගමනය කිරීමට අපි උත්සාහ කරන බැවින්, අපගේ නමස්කාර සේවාවලට ඇතුළත් වන්නේ වෝකල් සංගීතය පමණි.',
        aboutCard3Title: 'සතිපතා හවුල',
        aboutCard3Text: 'අපි යේසුස්වහන්සේගේ පූජාව සිහිපත් කිරීම සඳහා සෑම ඉරිදාම ස්වාමින්වහන්සේගේ රාත්‍රී භෝජනය පවත්වන්නෙමු.',
        locationsTitle: 'අපගේ ස්ථාන',
        study1Title: 'වපුරන්නාගේ උපමාව',
        study1Desc: 'අපි දෙවියන් වහන්සේගේ වචනය ලබාගෙන අපගේ ජීවිතවල ඵල දරන ආකාරය තේරුම් ගැනීම.',
        study2Title: 'යහපත් සමරිතානුවා',
        study2Desc: 'ප්‍රායෝගික කරුණාව හරහා අපගේ අසල්වැසියන්ට අප මෙන් ප්‍රේම කිරීමට ඉගෙන ගැනීම.',
        study3Title: 'නිර්ධන පුත්‍රයා',
        study3Desc: 'උන්වහන්සේ වෙත ආපසු එන අය සඳහා දෙවියන් වහන්සේගේ කොන්දේසි රහිත ප්‍රේමය සහ සමාව.',
        downloadStudy: 'අධ්‍යයනය බාගන්න',
        weeklyStudyTitle: 'සතිපතා බයිබල් අධ්‍යයන කාලසටහන',
        wednesdayStudy: 'බදාදා සවස අධ්‍යයනය',
        sundayStudy: 'ඉරිදා උදෑසන බයිබල් පන්තිය',
        contactTitle: 'අප අමතන්න'
    },
    'ta': {
        churchName: 'கிறிஸ்துவின் சபை',
        navAbout: 'எங்களை பற்றி',
        navLocations: 'எங்கள் இடங்கள்',
        navSermons: 'பிரசங்கங்கள்',
        navEvents: 'நிகழ்வுகள்',
        navContact: 'தொடர்பு கொள்ளவும்',
        heroTitle: 'கிறிஸ்துவின் சபைக்கு வரவேற்கிறோம்',
        heroSubtitle: 'கடவுளின் சத்தியத்தைத் தேடி, அவரது அன்பைப் பகிர்ந்து கொள்கிறோம்.',
        heroCta: 'உங்களுக்கு அருகிலுள்ள இடத்தைக் கண்டறியவும்',
        bibleVerse: 'கிறிஸ்துவின் சபைகள் உங்களுக்கு வாழ்த்து தெரிவிக்கின்றன.',
        bibleReference: '— ரோமர் 16:16',
        aboutTitle: 'எங்கள் நோக்கம் மற்றும் பணி',
        missionStatement: 'தனிப்பட்ட அல்லது கூட்டு இரட்சிப்புக்காக வேதாகமத்தை போதிப்பது.',
        missionVerse1: '"நீங்கள் இலவசமாய் பெற்றீர்கள், இலவசமாய்க் கொடுங்கள்." மத்தேயு 10:8',
        missionVerse2: '"வருத்தப்பட்டு பாரஞ்சுமக்கிறவர்களே, நீங்கள் எல்லாரும் என்னிடத்தில் வாருங்கள்; நான் உங்களுக்கு இளைப்பாறுதல் தருவேன்." மத்தேயு 11:28',
        beliefsTitle: 'எங்கள் முக்கிய நம்பிக்கைகள்',
        aboutCard1Title: 'வேதாகம அதிகாரம்',
        aboutCard1Text: 'வேதாகமமே நமது விசுவாசத்திற்கும் நடைமுறைக்கும் ஒரே வழிகாட்டி என்று நம்புகிறோம், "கிறிஸ்துவைத் தவிர வேறு கோட்பாடு இல்லை."',
        aboutCard2Title: 'பாட்டுப்பாடும் வழிபாடு',
        aboutCard2Text: 'புதிய ஏற்பாட்டு உதாரணத்தைப் பின்பற்ற முயல்வதால், எங்கள் வழிபாட்டு சேவைகளில் குரலிசை மட்டுமே இடம்பெறுகிறது.',
        aboutCard3Title: 'வாராந்திர கூட்டுறவு',
        aboutCard3Text: 'இயேசுவின் தியாகத்தை நினைவுகூரும் வகையில் ஒவ்வொரு ஞாயிற்றுக்கிழமையும் கர்த்தருடைய இரவு விருந்தை அனுசரிக்கிறோம்.',
        locationsTitle: 'எங்கள் இடங்கள்',
        study1Title: 'விதைப்பவரின் உவமை',
        study1Desc: 'நாம் கடவுளின் வார்த்தையை எவ்வாறு பெற்று நம் வாழ்வில் கனி கொடுக்கிறோம் என்பதைப் புரிந்துகொள்வது.',
        study2Title: 'நல்ல சமாரியன்',
        study2Desc: 'நடைமுறை இரக்கத்தின் மூலம் நம் அண்டை வீட்டாரை நம்மைப் போல நேசிக்க கற்றுக்கொள்வது.',
        study3Title: 'ஊதாரி மகன்',
        study3Desc: 'அவரிடம் திரும்பி வருபவர்களுக்கு கடவுளின் நிபந்தனையற்ற அன்பும் மன்னிப்பும்.',
        downloadStudy: 'ஆய்வைப் பதிவிறக்கவும்',
        weeklyStudyTitle: 'வாராந்திர வேதாகம ஆய்வு அட்டவணை',
        wednesdayStudy: 'புதன்கிழமை மாலை ஆய்வு',
        sundayStudy: 'ஞாயிற்றுக்கிழமை காலை வேதாகம வகுப்பு',
        contactTitle: 'தொடர்பு கொள்ளவும்'
    }
};

// Function for the Bible study buttons
function toggleStudy(studyId) {
    const selectedStudyContent = document.getElementById(studyId + '-content');
    const allStudyContents = document.querySelectorAll('.study-content');

    const isCurrentlyVisible = !selectedStudyContent.classList.contains('hidden');

    allStudyContents.forEach(study => {
        study.classList.add('hidden');
    });

    if (!isCurrentlyVisible) {
        selectedStudyContent.classList.remove('hidden');
        selectedStudyContent.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

// Functionality for the language button and translations
document.addEventListener('DOMContentLoaded', () => {
    const langMenu = document.getElementById('lang-menu');
    const langButton = document.getElementById('lang-btn');
    const htmlTag = document.querySelector('html');

    function updateContent(lang) {
        const elements = document.querySelectorAll('[data-lang-key]');
        elements.forEach(el => {
            const key = el.getAttribute('data-lang-key');
            if (translations[lang] && translations[lang][key]) {
                el.textContent = translations[lang][key];
            }
        });
        htmlTag.setAttribute('lang', lang);
        localStorage.setItem('userLang', lang);
    }

    const savedLang = localStorage.getItem('userLang') || 'en';
    updateContent(savedLang);

    langButton.addEventListener('click', () => {
        langMenu.classList.toggle('hidden');
    });

    langMenu.addEventListener('click', (e) => {
        if (e.target.tagName === 'A') {
            e.preventDefault();
            const newLang = e.target.getAttribute('data-lang');
            if (newLang) {
                updateContent(newLang);
                langMenu.classList.add('hidden');
            }
        }
    });
});