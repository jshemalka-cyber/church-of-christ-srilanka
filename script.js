// Translation content
const translations = {
    'en': {
        churchName: 'Church of Christ',
        navAbout: 'About Us',
        navLocations: 'Our Locations', // New
        navSermons: 'Sermons',
        navEvents: 'Events',
        navContact: 'Contact Us',
        heroTitle: 'Welcome to the Church of Christ',
        heroSubtitle: 'Seeking God\'s truth and sharing His love.',
        heroCta: 'Find a Location Near You',
        bibleVerse: 'The churches of Christ salute you.',
        bibleReference: '— Romans 16:16',
        aboutTitle: 'Our Vision & Mission', // Changed
        missionStatement: 'Teaching the Bible towards salvation individually or collectively.', // New
        missionVerse1: '"Freely you have received, freely you give." Matt. 10:8', // New
        missionVerse2: '"Come to me, all who are weary and burdened, and I will give you rest." Matt. 11:28', // New
        beliefsTitle: 'Our Core Beliefs', // New
        aboutCard1Title: 'Biblical Authority',
        aboutCard1Text: 'We believe the Bible is our sole guide for faith and practice, with "no creed but Christ."',
        aboutCard2Title: 'A Cappella Worship',
        aboutCard2Text: 'Our worship services feature only vocal music, as we seek to follow the New Testament example.',
        aboutCard3Title: 'Weekly Communion',
        aboutCard3Text: 'We observe the Lord\'s Supper every Sunday, in remembrance of Jesus\' sacrifice.',
        locationsTitle: 'Our Locations', // New
        locationColombo: 'Colombo City', // New
        colomboAddress: 'Colombo City, Sri Lanka', // New
        colomboWorship: 'Sunday Worship - 9.30 AM', // New
        colomboContactInfo: 'For more information: 0773029098 / 0112580488', // New
        locationWennappuwa: 'Wennappuwa', // New
        wennappuwaAddress: '45A, Main Street, Wennappuwa, Sri Lanka', // New
        wennappuwaWorship: 'Sunday Worship - 9.30 AM', // New
        locationTrincomalee: 'Trincomalee', // New
        trincoAddress: 'Trincomalee, Sri Lanka', // New
        trincoWorship: 'Sunday Worship - 10.00 AM', // New
        locationBambalapitiya: 'Bambalapitiya', // New
        bambalapitiyaAddress: 'Bambalapitiya, Colombo 4, Sri Lanka', // New
        bambalapitiyaWorship: 'Sunday Worship - 9.00 AM', // New
        locationDehiwala: 'Dehiwala', // New
        dehiwalaAddress: 'Dehiwala, Sri Lanka', // New
        dehiwalaWorship: 'Sunday Worship - 11.00 AM', // New
        learnMore: 'Learn More', // New
        contactTitle: 'General Contact & Information', // Changed
        contactText: 'For general inquiries about the Church of Christ in Sri Lanka, please use the contact details below. You can also send us a message using the form.', // Changed
        generalContact: 'General Inquiries:', // New
        contactPhone1: '📞 0773029098', // Changed
        contactPhone2: '📞 0112580488', // Changed
        sundayWorshipGeneral: 'Sunday Worship: 9.30 AM', // New
        allAreWelcome: 'ALL ARE WELCOME', // New
        formName: 'Your Name',
        formNamePlaceholder: 'Your Name',
        formEmail: 'Your Email',
        formEmailPlaceholder: 'Your Email',
        formMessage: 'Your Message',
        formMessagePlaceholder: 'Your Message',
        formSubmit: 'Send Message',
        footerCopyright: '&copy; 2024 Church of Christ. All rights reserved.', // Changed
        footerPrivacy: 'Privacy Policy',
        footerTerms: 'Terms of Service'
    },
    'si': {
        churchName: 'ක්‍රිස්තු සභාව',
        navAbout: 'අප ගැන',
        navLocations: 'අපගේ ස්ථාන', // New
        navSermons: 'දේශනා',
        navEvents: 'සිදුවීම්',
        navContact: 'අප අමතන්න',
        heroTitle: 'ක්‍රිස්තු සභාවට ඔබව සාදරයෙන් පිළිගනිමු',
        heroSubtitle: 'දෙවියන් වහන්සේගේ සත්‍යය සොයමින්, උන්වහන්සේගේ ප්‍රේමය බෙදාහරිමු.',
        heroCta: 'ඔබට සමීප ස්ථානයක් සොයන්න',
        bibleVerse: 'ක්‍රිස්තුස් වහන්සේගේ සියලුම සභාවල සාමාජිකයෝ ඔබට ආචාර කරති.',
        bibleReference: '— රෝම 16:16',
        aboutTitle: 'අපගේ දැක්ම සහ මෙහෙවර', // Changed
        missionStatement: 'තනි තනිව හෝ සාමූහිකව ගැලවීම සඳහා බයිබලය ඉගැන්වීම.', // New
        missionVerse1: '"ඔබ නොමිලේ ලැබුවා, නොමිලේ දෙන්න." මතෙව් 10:8', // New
        missionVerse2: '"වෙහෙස වී බර උසුලන සියල්ලෙනි, මා වෙත එන්න, මම ඔබට සහනය දෙන්නෙමි." මතෙව් 11:28', // New
        beliefsTitle: 'අපගේ මූලික විශ්වාසයන්', // New
        aboutCard1Title: 'බයිබලීය අධිකාරය',
        aboutCard1Text: 'ක්‍රිස්තුස් වහන්සේ හැර වෙනත් ඇදහිල්ලක් නොමැතිව, බයිබලය අපගේ ඇදහිල්ලට සහ භාවිතයට එකම මග පෙන්වීම බව අපි විශ්වාස කරමු.',
        aboutCard2Title: 'වාචික නමස්කාරය',
        aboutCard2Text: 'අපගේ නමස්කාර සේවාවන්හිදී අපි ශබ්ද පමණක් භාවිතා කරන්නෙමු, මක්නිසාද අපි නව ගිවිසුමේ ආදර්ශය අනුගමනය කරන්නෙමු.',
        aboutCard3Title: 'සතිපතා හවුල',
        aboutCard3Text: 'ජේසුස් වහන්සේගේ පූජාව සිහිපත් කිරීම සඳහා අපි සෑම ඉරිදාවකම ස්වාමින් වහන්සේගේ රාත්‍රී භෝජනය පවත්වමු.',
        locationsTitle: 'අපගේ ස්ථාන', // New
        locationColombo: 'කොළඹ නගරය', // New
        colomboAddress: 'කොළඹ නගරය, ශ්‍රී ලංකාව', // New
        colomboWorship: 'ඉරිදා දේව මෙහෙය - පෙ.ව. 9.30', // New
        colomboContactInfo: 'වැඩි විස්තර සඳහා: 0773029098 / 0112580488', // New
        locationWennappuwa: 'වෙන්නප්පුව', // New
        wennappuwaAddress: '45A, ප්‍රධාන වීදිය, වෙන්නප්පුව, ශ්‍රී ලංකාව', // New
        wennappuwaWorship: 'ඉරිදා දේව මෙහෙය - පෙ.ව. 9.30', // New
        locationTrincomalee: 'ත්‍රිකුණාමලය', // New
        trincoAddress: 'ත්‍රිකුණාමලය, ශ්‍රී ලංකාව', // New
        trincoWorship: 'ඉරිදා දේව මෙහෙය - පෙ.ව. 10.00', // New
        locationBambalapitiya: 'බම්බලපිටිය', // New
        bambalapitiyaAddress: 'බම්බලපිටිය, කොළඹ 4, ශ්‍රී ලංකාව', // New
        bambalapitiyaWorship: 'ඉරිදා දේව මෙහෙය - පෙ.ව. 9.00', // New
        locationDehiwala: 'දෙහිවල', // New
        dehiwalaAddress: 'දෙහිවල, ශ්‍රී ලංකාව', // New
        dehiwalaWorship: 'ඉරිදා දේව මෙහෙය - පෙ.ව. 11.00', // New
        learnMore: 'තව දැනගන්න', // New
        contactTitle: 'පොදු සම්බන්ධතා සහ තොරතුරු', // Changed
        contactText: 'ශ්‍රී ලංකාවේ ක්‍රිස්තු සභාව පිළිබඳ සාමාන්‍ය විමසීම් සඳහා, කරුණාකර පහත සම්බන්ධතා විස්තර භාවිතා කරන්න. ඔබට පෝරමය භාවිතයෙන් අපට පණිවිඩයක් ද යැවිය හැක.', // Changed
        generalContact: 'පොදු විමසීම්:', // New
        contactPhone1: '📞 0773029098', // Changed
        contactPhone2: '📞 0112580488', // Changed
        sundayWorshipGeneral: 'ඉරිදා දේව මෙහෙය: පෙ.ව. 9.30', // New
        allAreWelcome: 'සියලු දෙනා සාදරයෙන් පිළිගනිමු', // New
        formName: 'ඔබගේ නම',
        formNamePlaceholder: 'ඔබගේ නම',
        formEmail: 'ඔබගේ විද්‍යුත් තැපෑල',
        formEmailPlaceholder: 'ඔබගේ විද්‍යුත් තැපෑල',
        formMessage: 'ඔබගේ පණිවිඩය',
        formMessagePlaceholder: 'ඔබගේ පණිවිඩය',
        formSubmit: 'පණිවිඩය යවන්න',
        footerCopyright: '&copy; 2024 ක්‍රිස්තු සභාව. සියලු හිමිකම් ඇවිරිණි.', // Changed
        footerPrivacy: 'පෞද්ගලිකත්ව ප්‍රතිපත්තිය',
        footerTerms: 'සේවා කොන්දේසි'
    },
    'ta': {
        churchName: 'கிறிஸ்து சபை',
        navAbout: 'எங்களைப் பற்றி',
        navLocations: 'எங்கள் இடங்கள்', // New
        navSermons: 'பிரசங்கங்கள்',
        navEvents: 'நிகழ்வுகள்',
        navContact: 'தொடர்பு கொள்க',
        heroTitle: 'கிறிஸ்து சபைக்கு உங்களை வரவேற்கிறோம்',
        heroSubtitle: 'கடவுளின் சத்தியத்தைத் தேடி, அவரது அன்பைப் பகிர்ந்து கொள்கிறோம்.',
        heroCta: 'உங்களுக்கு அருகிலுள்ள ஒரு இடத்தைக் கண்டறியவும்',
        bibleVerse: 'கிறிஸ்துவினுடைய சபையார் உங்களை வாழ்த்துகிறார்கள்.',
        bibleReference: '— ரோமர் 16:16',
        aboutTitle: 'எங்கள் நோக்கம் மற்றும் பணி', // Changed
        missionStatement: 'தனிப்பட்ட முறையில் அல்லது கூட்டாக இரட்சிப்புக்காக வேதாகமத்தை கற்பித்தல்.', // New
        missionVerse1: '"இலவசமாய் பெற்றீர்கள், இலவசமாய் கொடுங்கள்." மத்தேயு 10:8', // New
        missionVerse2: '"பாடுபட்டுப் பாரஞ்சுமக்கிறவர்களே, நீங்கள் எல்லாரும் என்னிடத்தில் வாருங்கள்; நான் உங்களுக்கு இளைப்பாறுதல் தருவேன்." மத்தேயு 11:28', // New
        beliefsTitle: 'எங்கள் முக்கிய நம்பிக்கைகள்', // New
        aboutCard1Title: 'வேதாகம அதிகாரம்',
        aboutCard1Text: 'கிறிஸ்துவைத் தவிர வேறு எந்த விசுவாசமும் இல்லை என்பதால், வேதாகமம் மட்டுமே நமது விசுவாசத்திற்கும் நடைமுறைக்கும் ஒரே வழிகாட்டி என்று நாங்கள் நம்புகிறோம்.',
        aboutCard2Title: 'பாட்டுடன் ஆராதனை',
        aboutCard2Text: 'புதிய ஏற்பாட்டு உதாரணத்தைப் பின்பற்ற நாங்கள் தேடுவதால், எங்கள் ஆராதனை சேவைகளில் குரல் இசையை மட்டுமே பயன்படுத்துகிறோம்.',
        aboutCard3Title: 'வாராந்திர திருவிருந்து',
        aboutCard3Text: 'இயேசுவின் தியாகத்தை நினைவுகூரும் வகையில் ஒவ்வொரு ஞாயிற்றுக்கிழமையும் கர்த்தருடைய இராப்போஜனத்தை நாங்கள் கடைப்பிடிக்கிறோம்.',
        locationsTitle: 'எங்கள் இடங்கள்', // New
        locationColombo: 'கொழும்பு நகரம்', // New
        colomboAddress: 'கொழும்பு நகரம், இலங்கை', // New
        colomboWorship: 'ஞாயிறு ஆராதனை - காலை 9.30', // New
        colomboContactInfo: 'மேலும் தகவலுக்கு: 0773029098 / 0112580488', // New
        locationWennappuwa: 'வென்னப்புவ', // New
        wennappuwaAddress: '45A, மெயின் வீதி, வென்னப்புவ, இலங்கை', // New
        wennappuwaWorship: 'ஞாயிறு ஆராதனை - காலை 9.30', // New
        locationTrincomalee: 'திருகோணமலை', // New
        trincoAddress: 'திருகோணமலை, இலங்கை', // New
        trincoWorship: 'ஞாயிறு ஆராதனை - காலை 10.00', // New
        locationBambalapitiya: 'பம்பலப்பிட்டி', // New
        bambalapitiyaAddress: 'பம்பலப்பிட்டி, கொழும்பு 4, இலங்கை', // New
        bambalapitiyaWorship: 'ஞாயிறு ஆராதனை - காலை 9.00', // New
        locationDehiwala: 'தெஹிவளை', // New
        dehiwalaAddress: 'தெஹிவளை, இலங்கை', // New
        dehiwalaWorship: 'ஞாயிறு ஆராதனை - காலை 11.00', // New
        learnMore: 'மேலும் அறிக', // New
        contactTitle: 'பொதுவான தொடர்பு மற்றும் தகவல்', // Changed
        contactText: 'இலங்கையில் உள்ள கிறிஸ்து சபை குறித்த பொதுவான விசாரணைகளுக்கு, கீழே உள்ள தொடர்பு விவரங்களைப் பயன்படுத்தவும். படிவத்தைப் பயன்படுத்தி எங்களுக்கு ஒரு செய்தியையும் அனுப்பலாம்.', // Changed
        generalContact: 'பொதுவான விசாரணைகள்:', // New
        contactPhone1: '📞 0773029098', // Changed
        contactPhone2: '📞 0112580488', // Changed
        sundayWorshipGeneral: 'ஞாயிறு ஆராதனை: காலை 9.30', // New
        allAreWelcome: 'அனைவரும் வரவேற்கப்படுகிறார்கள்', // New
        formName: 'உங்கள் பெயர்',
        formNamePlaceholder: 'உங்கள் பெயர்',
        formEmail: 'உங்கள் மின்னஞ்சல்',
        formEmailPlaceholder: 'உங்கள் மின்னஞ்சல்',
        formMessage: 'உங்கள் செய்தி',
        formMessagePlaceholder: 'உங்கள் செய்தி',
        formSubmit: 'செய்தியை அனுப்பவும்',
        footerCopyright: '&copy; 2024 கிறிஸ்து சபை. அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை.', // Changed
        footerPrivacy: 'தனியுரிமைக் கொள்கை',
        footerTerms: 'சேவை விதிமுறைகள்'
    }
};

const elementsToTranslate = document.querySelectorAll('[data-lang-key]');
const langMenuBtn = document.getElementById('lang-menu-btn');
const langMenuDropdown = document.getElementById('lang-menu-dropdown');
const langLinks = document.querySelectorAll('#lang-menu-dropdown a');
const currentLangText = document.getElementById('current-lang-text');
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

// Set default language and update content
let currentLanguage = 'en';

const setLanguage = (lang) => {
    currentLanguage = lang;
    document.documentElement.lang = lang; // Set the lang attribute on the html tag

    elementsToTranslate.forEach(element => {
        const key = element.dataset.langKey;
        if (translations[lang][key]) {
            if (element.placeholder) {
                element.placeholder = translations[lang][key];
            } else {
                element.textContent = translations[lang][key];
            }
        }
    });

    // Update the text in the language dropdown button
    if (lang === 'en') {
        currentLangText.textContent = 'English';
    } else if (lang === 'si') {
        currentLangText.textContent = 'සිංහල';
    } else if (lang === 'ta') {
        currentLangText.textContent = 'தமிழ்';
    }
};

// Event listener for language dropdown
langMenuBtn.addEventListener('click', () => {
    langMenuDropdown.classList.toggle('hidden');
});

langLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const lang = e.target.dataset.lang;
        setLanguage(lang);
        langMenuDropdown.classList.add('hidden'); // Hide dropdown after selection
    });
});

// Event listener for mobile menu button
mobileMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});

// Close language dropdown if clicked outside
window.addEventListener('click', (e) => {
    if (!langMenuBtn.contains(e.target) && !langMenuDropdown.contains(e.target)) {
        langMenuDropdown.classList.add('hidden');
    }
});

// Set initial language on page load
document.addEventListener('DOMContentLoaded', () => {
    setLanguage(currentLanguage);
});