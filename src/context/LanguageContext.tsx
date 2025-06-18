import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'fr' | 'ar';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    // Navigation
    home: 'Home',
    news: 'News',
    programs: 'Programs',
    publications: 'Publications',
    events: 'Events',
    contact: 'Contact',
    settings: 'Settings',
    
    // Home
    welcome: 'Welcome to UNFPA Algeria',
    mission: 'Delivering a world where every pregnancy is wanted, every childbirth is safe and every young person\'s potential is fulfilled.',
    latestNews: 'Latest News',
    ourPrograms: 'Our Programs',
    upcomingEvents: 'Upcoming Events',
    viewAll: 'View All',
    
    // Events
    eventDetails: 'Event Details',
    registerNow: 'Register Now',
    eventDate: 'Date',
    eventTime: 'Time',
    eventLocation: 'Location',
    eventCapacity: 'Capacity',
    spotsLeft: 'spots left',
    eventFull: 'Event Full',
    registrationClosed: 'Registration Closed',
    eventRegistration: 'Event Registration',
    personalInfo: 'Personal Information',
    additionalInfo: 'Additional Information',
    firstName: 'First Name',
    lastName: 'Last Name',
    organization: 'Organization',
    position: 'Position',
    dietaryRestrictions: 'Dietary Restrictions',
    specialNeeds: 'Special Needs',
    howDidYouHear: 'How did you hear about this event?',
    register: 'Register',
    registrationSuccess: 'Registration Successful!',
    registrationConfirmation: 'You will receive a confirmation email shortly.',
    
    // Programs
    youthProgram: 'Youth Empowerment',
    genderEquality: 'Gender Equality',
    reproductiveHealth: 'Reproductive Health',
    maternalHealth: 'Maternal Health',
    populationData: 'Population Data',
    emergencyResponse: 'Emergency Response',
    
    // Common
    readMore: 'Read More',
    back: 'Back',
    share: 'Share',
    download: 'Download',
    search: 'Search',
    filter: 'Filter',
    language: 'Language',
    notifications: 'Notifications',
    offline: 'Offline Content',
    
    // Contact
    contactUs: 'Contact Us',
    name: 'Name',
    email: 'Email',
    message: 'Message',
    send: 'Send',
    phone: 'Phone',
    address: 'Address',
    
    // Settings
    appSettings: 'App Settings',
    pushNotifications: 'Push Notifications',
    offlineReading: 'Offline Reading',
    dataUsage: 'Data Usage',
    about: 'About',
  },
  fr: {
    // Navigation
    home: 'Accueil',
    news: 'Actualités',
    programs: 'Programmes',
    publications: 'Publications',
    events: 'Événements',
    contact: 'Contact',
    settings: 'Paramètres',
    
    // Home
    welcome: 'Bienvenue à UNFPA Algérie',
    mission: 'Construire un monde où chaque grossesse est désirée, chaque accouchement est sans danger et le potentiel de chaque jeune est accompli.',
    latestNews: 'Dernières Actualités',
    ourPrograms: 'Nos Programmes',
    upcomingEvents: 'Événements à Venir',
    viewAll: 'Voir Tout',
    
    // Events
    eventDetails: 'Détails de l\'Événement',
    registerNow: 'S\'inscrire Maintenant',
    eventDate: 'Date',
    eventTime: 'Heure',
    eventLocation: 'Lieu',
    eventCapacity: 'Capacité',
    spotsLeft: 'places restantes',
    eventFull: 'Événement Complet',
    registrationClosed: 'Inscription Fermée',
    eventRegistration: 'Inscription à l\'Événement',
    personalInfo: 'Informations Personnelles',
    additionalInfo: 'Informations Supplémentaires',
    firstName: 'Prénom',
    lastName: 'Nom',
    organization: 'Organisation',
    position: 'Poste',
    dietaryRestrictions: 'Restrictions Alimentaires',
    specialNeeds: 'Besoins Spéciaux',
    howDidYouHear: 'Comment avez-vous entendu parler de cet événement?',
    register: 'S\'inscrire',
    registrationSuccess: 'Inscription Réussie!',
    registrationConfirmation: 'Vous recevrez un email de confirmation sous peu.',
    
    // Programs
    youthProgram: 'Autonomisation des Jeunes',
    genderEquality: 'Égalité des Sexes',
    reproductiveHealth: 'Santé Reproductive',
    maternalHealth: 'Santé Maternelle',
    populationData: 'Données Démographiques',
    emergencyResponse: 'Réponse d\'Urgence',
    
    // Common
    readMore: 'Lire Plus',
    back: 'Retour',
    share: 'Partager',
    download: 'Télécharger',
    search: 'Rechercher',
    filter: 'Filtrer',
    language: 'Langue',
    notifications: 'Notifications',
    offline: 'Contenu Hors Ligne',
    
    // Contact
    contactUs: 'Nous Contacter',
    name: 'Nom',
    email: 'Email',
    message: 'Message',
    send: 'Envoyer',
    phone: 'Téléphone',
    address: 'Adresse',
    
    // Settings
    appSettings: 'Paramètres de l\'App',
    pushNotifications: 'Notifications Push',
    offlineReading: 'Lecture Hors Ligne',
    dataUsage: 'Utilisation des Données',
    about: 'À Propos',
  },
  ar: {
    // Navigation
    home: 'الرئيسية',
    news: 'الأخبار',
    programs: 'البرامج',
    publications: 'المنشورات',
    events: 'الفعاليات',
    contact: 'اتصل بنا',
    settings: 'الإعدادات',
    
    // Home
    welcome: 'مرحباً بكم في صندوق الأمم المتحدة للسكان الجزائر',
    mission: 'تحقيق عالم يكون فيه كل حمل مرغوباً فيه، وكل ولادة آمنة، وإمكانات كل شاب محققة.',
    latestNews: 'آخر الأخبار',
    ourPrograms: 'برامجنا',
    upcomingEvents: 'الفعاليات القادمة',
    viewAll: 'عرض الكل',
    
    // Events
    eventDetails: 'تفاصيل الفعالية',
    registerNow: 'سجل الآن',
    eventDate: 'التاريخ',
    eventTime: 'الوقت',
    eventLocation: 'المكان',
    eventCapacity: 'السعة',
    spotsLeft: 'مقعد متبقي',
    eventFull: 'الفعالية مكتملة',
    registrationClosed: 'التسجيل مغلق',
    eventRegistration: 'تسجيل الفعالية',
    personalInfo: 'المعلومات الشخصية',
    additionalInfo: 'معلومات إضافية',
    firstName: 'الاسم الأول',
    lastName: 'اسم العائلة',
    organization: 'المنظمة',
    position: 'المنصب',
    dietaryRestrictions: 'القيود الغذائية',
    specialNeeds: 'الاحتياجات الخاصة',
    howDidYouHear: 'كيف سمعت عن هذه الفعالية؟',
    register: 'تسجيل',
    registrationSuccess: 'تم التسجيل بنجاح!',
    registrationConfirmation: 'ستتلقى رسالة تأكيد قريباً.',
    
    // Programs
    youthProgram: 'تمكين الشباب',
    genderEquality: 'المساواة بين الجنسين',
    reproductiveHealth: 'الصحة الإنجابية',
    maternalHealth: 'صحة الأمهات',
    populationData: 'البيانات السكانية',
    emergencyResponse: 'الاستجابة للطوارئ',
    
    // Common
    readMore: 'اقرأ المزيد',
    back: 'العودة',
    share: 'مشاركة',
    download: 'تحميل',
    search: 'بحث',
    filter: 'تصفية',
    language: 'اللغة',
    notifications: 'الإشعارات',
    offline: 'المحتوى غير المتصل',
    
    // Contact
    contactUs: 'اتصل بنا',
    name: 'الاسم',
    email: 'البريد الإلكتروني',
    message: 'الرسالة',
    send: 'إرسال',
    phone: 'الهاتف',
    address: 'العنوان',
    
    // Settings
    appSettings: 'إعدادات التطبيق',
    pushNotifications: 'الإشعارات الفورية',
    offlineReading: 'القراءة غير المتصلة',
    dataUsage: 'استخدام البيانات',
    about: 'حول',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['en']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      <div className={language === 'ar' ? 'rtl' : 'ltr'}>
        {children}
      </div>
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};