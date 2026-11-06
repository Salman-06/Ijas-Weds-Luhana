export interface WeddingEvent {
  id: string;
  name: string;
  tamilName: string;
  type: 'mehendi' | 'marriage' | 'reception';
  dateStr: string; // e.g. "Saturday, 12th December 2026"
  dateIso: string; // e.g. "2026-12-12T18:00:00"
  timeStr: string; // e.g. "6:00 PM Onwards"
  hijriDate?: string;
  venueName: string;
  address: string;
  city: string;
  dressCode: string;
  paletteColors: string[];
  description: string;
  mapLink: string;
  calendarTitle: string;
}

export const WEDDING_COUPLE = {
  groom: {
    fullName: 'A. Ijas Ahamed',
    title: 'B.E.',
    role: 'Groom',
    parents: 'Mr. M. Abdul Hakkeem & Mrs. S. Shafi',
    familyCity: 'Coimbatore',
    company: 'Smile Automation',
    tagline: 'Definite Machining Solution',
  },
  bride: {
    fullName: 'J. Luhana Fathima',
    title: 'M.Sc., (Muballidha)',
    role: 'Bride',
    parents: 'Mr. S. Jaffer Ali & Mrs. M.G. Sujitha',
    familyCity: 'Meenakshipuram',
  },
  monogram: 'IL',
  arabicCalligraphy: 'إيجاز ♥ لُهانَا',
  bismillahArabic: 'بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ',
  bismillahEnglish: 'In the name of Allah, the Most Merciful and Beneficent',
  quranVerseArabic: 'وَخَلَقْنَاكُمْ أَزْوَاجًا',
  quranVerseEnglish: '"And We created you in pairs"',
  quranVerseRef: 'Surah An-Naba (78:8)',
  propheticDuaArabic: 'بَارَكَ اللَّهُ لَكَ وَبَارَكَ عَلَيْكَ وَجَمَعَ بَيْنَكُمَا فِي خَيْرٍ',
  propheticDuaEnglish: '"May Allah bless you both, shower His blessings upon you both, and unite you both in goodness."',
  tamilDua: 'எங்கள் இறைவா! எங்கள் மனைவியரிடமும், எங்கள் சந்ததியரிடமும் இருந்து எங்களுக்குக் கண்களின் குளிர்ச்சியை அளிப்பாயாக! இன்னும் பயபக்தியுடையவர்களுக்கு எங்களை இமாமாக (வழிகாட்டியாக) ஆக்கியருள்வாயாக!',
  tamilDuaRef: '(அல்குர்ஆன்: 25:74)',
};

export const WEDDING_EVENTS: WeddingEvent[] = [
  {
    id: 'mehendi',
    name: 'Mehendi & Sangeet Celebration',
    tamilName: 'மஞ்சள் & மெஹந்தி திருவிழா',
    type: 'mehendi',
    dateStr: 'Saturday, 12th December 2026',
    dateIso: '2026-12-12T18:00:00+05:30',
    timeStr: '6:00 PM Onwards',
    hijriDate: 'Hijri 1448, Rajab 2',
    venueName: 'The Palm Enclave',
    address: 'Near Sundarapuram, Madukkarai Road',
    city: 'Coimbatore, Tamil Nadu',
    dressCode: 'Festive Mustard, Olive & Emerald Florals',
    paletteColors: ['#EAB308', '#15803D', '#B45309', '#FEF08A'],
    description:
      'An intimate evening of delicate henna patterns, joyous traditional melodies, laughter, and sweet pre-wedding celebrations.',
    mapLink: 'https://maps.google.com/?q=Sundarapuram+Coimbatore+Tamil+Nadu',
    calendarTitle: 'Ijas & Luhana - Mehendi Celebration',
  },
  {
    id: 'marriage',
    name: 'Nikah (Marriage) Ceremony',
    tamilName: 'நிக்காஹ் (எ) திருமண வைபவம்',
    type: 'marriage',
    dateStr: 'Sunday, 13th December 2026',
    dateIso: '2026-12-13T11:00:00+05:30',
    timeStr: '11:00 AM to 12:00 PM',
    hijriDate: 'Hijri 1448, Rajab 3',
    venueName: 'Sri Kantha Mahal',
    address: 'Coimbatore Main Road',
    city: 'Pollachi, Tamil Nadu',
    dressCode: 'Royal Traditional Silk & Kurta Sherwani',
    paletteColors: ['#7A1926', '#D4AF37', '#FFFBF2', '#991B1B'],
    description:
      'The sacred Islamic marriage solemnization (Nikah) amidst blessings of Almighty Allah, family elders, and cherished friends, followed by traditional wedding lunch feast.',
    mapLink: 'https://maps.google.com/?q=Sri+Kantha+Mahal+Coimbatore+Main+Road+Pollachi',
    calendarTitle: 'Ijas & Luhana - Nikah Marriage Ceremony',
  },
  {
    id: 'reception',
    name: 'Grand Wedding Reception',
    tamilName: 'திருமண வரவேற்பு விழா',
    type: 'reception',
    dateStr: 'Monday, 14th December 2026',
    dateIso: '2026-12-14T18:30:00+05:30',
    timeStr: '6:30 PM Onwards',
    hijriDate: 'Hijri 1448, Rajab 4',
    venueName: 'Lindes Garden',
    address: 'Madukkarai Road, Sundarapuram',
    city: 'Coimbatore - 641 105, Tamil Nadu',
    dressCode: 'Royal Evening Elegance / Indo-Western Attire',
    paletteColors: ['#4A0E17', '#ECC874', '#1E293B', '#F1F5F9'],
    description:
      'A majestic evening reception to congratulate the newlyweds with stage felicitations, photographic memories, and a grand celebratory dinner dawat.',
    mapLink: 'https://maps.google.com/?q=Lindes+Garden+Madukkarai+Road+Sundarapuram+Coimbatore+641105',
    calendarTitle: 'Ijas & Luhana - Grand Wedding Reception',
  },
];



