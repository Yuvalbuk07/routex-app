// Cores do aplicativo
export const COLORS = {
  PRIMARY: '#3498db',        // Azul principal
  PRIMARY_DARK: '#2980b9',   // Azul escuro
  SECONDARY: '#e74c3c',      // Vermelho para destaque
  SUCCESS: '#2ecc71',        // Verde para sucesso
  WARNING: '#f39c12',        // Laranja para avisos
  DANGER: '#e74c3c',         // Vermelho para erros
  WHITE: '#FFFFFF',          // Branco
  BLACK: '#000000',          // Preto
  GRAY: '#7f8c8d',           // Cinza
  LIGHT_GRAY: '#ecf0f1',     // Cinza claro
  BACKGROUND: '#f5f5f5',     // Fundo geral da aplicação
};

// Rotas do aplicativo
export const ROUTES = {
  // Auth
  LOGIN: 'Login',
  REGISTER: 'Register',
  
  // Main
  MAIN: 'Main',
  HOME: 'Home',
  ROUTES: 'Routes',
  PROFILE: 'Profile',
  
  // Features
  TRAVELLER_TYPE: 'TravellerType',
  ROUTE_LIST: 'RouteList',
  ROUTE_DETAIL: 'RouteDetail',
  ROUTE_CREATE: 'RouteCreate',
};

// Tipos de viajantes
export const TRAVELLER_TYPES = {
  NATURE: 'nature',       // חובב טבע
  URBAN: 'urban',         // מטייל עירוני
  ADVENTURE: 'adventure', // מחפש אתגר
  CULTURE: 'culture',     // שוחר תרבות
  FAMILY: 'family',       // טיול משפחתי
};

// Configurações de armazenamento
export const STORAGE_KEYS = {
  USER_TOKEN: '@RouteX:userToken',
  USER_DATA: '@RouteX:userData',
  SAVED_ROUTES: '@RouteX:savedRoutes',
  APP_SETTINGS: '@RouteX:appSettings',
};

// Formato de data
export const DATE_FORMAT = 'DD/MM/YYYY';

// URLs da API
export const API = {
  BASE_URL: 'https://routex-api.example.com/api',
  ENDPOINTS: {
    AUTH: '/auth',
    USERS: '/users',
    ROUTES: '/routes',
    PLACES: '/places',
    RECOMMENDATIONS: '/recommendations',
  }
};

// Estilos globais
export const FONTS = {
  REGULAR: 'rubik-regular',
  MEDIUM: 'rubik-medium',
  BOLD: 'rubik-bold',
};

export const TEXT_SIZES = {
  TINY: 10,
  SMALL: 12,
  MEDIUM: 14,
  REGULAR: 16,
  LARGE: 18,
  XLARGE: 20,
  XXLARGE: 24,
  TITLE: 28,
};

// Textos em hebraico - exemplo básico
export const STRINGS = {
  APP_NAME: 'RouteX',
  TAGLINE: 'המסלול המושלם לכל מטייל',
  LOGIN: 'התחברות',
  REGISTER: 'הרשמה',
  EMAIL: 'דוא"ל',
  PASSWORD: 'סיסמה',
  CONFIRM_PASSWORD: 'אימות סיסמה',
  NAME: 'שם',
  CONTINUE_AS_GUEST: 'המשך כאורח',
  SEARCH_PLACEHOLDER: 'לאן אתה רוצה לטייל?',
  LOGIN_ERROR: 'שגיאה בהתחברות',
  NO_ACCOUNT: 'אין לך חשבון?',
  SEARCH: 'חיפוש',
  SAVED_ROUTES: 'מסלולים שמורים',
  RECOMMENDED: 'מומלצים',
  UPCOMING: 'קרובים',
  LOCATION: 'מיקום',
  DATE: 'תאריך',
  TRAVELERS: 'מטיילים',
  ADULTS: 'מבוגרים',
  CHILDREN: 'ילדים',
  ROUTE_DETAILS: 'פרטי מסלול',
  SAVE: 'שמור',
  SHARE: 'שתף',
  EDIT: 'ערוך',
  DELETE: 'מחק',
  CONFIRM: 'אישור',
  CANCEL: 'ביטול',
  LOADING: 'טוען...',
  DIRECTION: 'כיוון',
  DURATION: 'משך זמן',
  DISTANCE: 'מרחק',
  START: 'נקודת התחלה',
  END: 'נקודת סיום',
  STOPS: 'תחנות',
  ADD_STOP: 'הוסף תחנה',
  REMOVE: 'הסר',
  ROUTE_NAME: 'שם המסלול',
  DESCRIPTION: 'תיאור',
  CREATE_ROUTE: 'צור מסלול',
  NO_ROUTES: 'אין מסלולים שמורים',
  ORIGIN: 'מוצא',
  DESTINATION: 'יעד',
  DEPARTURE_DATE: 'תאריך יציאה',
  RETURN_DATE: 'תאריך חזרה',
  TRAVELLER_TYPE: {
    NATURE: 'חובב טבע',
    URBAN: 'מטייל עירוני',
    ADVENTURE: 'מחפש אתגר',
    CULTURE: 'שוחר תרבות',
    FAMILY: 'טיול משפחתי',
  },
  SELECT_TRAVELLER_TYPE: 'בחר סוג מטייל',
};