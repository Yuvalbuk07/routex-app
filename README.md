# RouteX - אפליקציית תכנון מסלולי טיולים

RouteX היא אפליקציית מובייל המאפשרת למשתמשים לתכנן את הטיול המושלם עבורם על פי סוג המטייל, העדפות אישיות ויעדים מועדפים.

<p align="center">
  <img src="https://via.placeholder.com/150?text=RouteX" alt="RouteX Logo" width="150" height="150"/>
</p>

## 📋 תכונות עיקריות

- 🧭 בחירת סוג מטייל (חובב טבע, מטייל עירוני, מחפש אתגר, שוחר תרבות, טיול משפחתי)
- 📝 שמירת פרטי טיול (יעד, תאריכים, מספר מטיילים, תקציב, העדפות)
- 🗺️ המלצות מסלולים מותאמות אישית
- 🇮🇱 ממשק משתמש נוח בעברית

## 🛠️ טכנולוגיות

- React Native CLI
- React Navigation
- AsyncStorage

## ⚙️ התקנה והרצה

ראה [הוראות התקנה מפורטות](SETUP.md) לקבלת מידע מלא על אופן ההתקנה וההרצה של האפליקציה.

```bash
# התקנת תלויות
npm install

# הרצת האפליקציה באנדרואיד
npm run android

# הרצת האפליקציה ב-iOS (דורש macOS)
npm run ios
```

## 📚 מדריכים ותיעוד

- [תהליך עבודה מומלץ](WORKFLOW.md) - תהליך העבודה המומלץ לפיתוח האפליקציה
- [פתרון בעיות](TROUBLESHOOTING.md) - פתרונות לבעיות נפוצות
- [מיגרציה מ-Expo](MIGRATION.md) - מידע על המעבר מ-Expo ל-React Native CLI

## 📁 מבנה הפרויקט

```
routex-app/
├── android/             # קוד ספציפי לאנדרואיד
├── ios/                 # קוד ספציפי ל-iOS
├── screens/             # מסכי האפליקציה
│   ├── SplashScreen.js  # מסך פתיחה
│   ├── LoginScreen.js   # מסך התחברות
│   └── ...
├── services/            # שירותים ולוגיקה עסקית
│   └── storageService.js # שירותי אחסון מקומי
├── styles/              # סגנונות וערכות נושא
│   └── theme.js         # הגדרות עיצוב גלובליות
├── App.js               # קומפוננטה ראשית
└── AppNavigation.js     # הגדרות ניווט
```

## 🧰 סקריפטים שימושיים

```bash
# הפעלת שרת פיתוח
npm run start

# ניקוי מטמון והפעלה מחדש של השרת
npm run reset

# ניקוי תלויות והתקנה מחדש
npm run clean

# ניקוי ספריות iOS והתקנה מחדש (דורש macOS)
npm run clean:ios

# צפייה בלוגים מהאפליקציה
npm run debug
```

## 🤝 תרומה לפרויקט

תוספות ושיפורים מוזמנים. אנא השתמש בתהליך הבא:

1. Fork למאגר
2. צור ענף חדש (`git checkout -b feature/amazing-feature`)
3. Commit את השינויים שלך (`git commit -m 'הוספת פיצ'ר מדהים'`)
4. Push לענף (`git push origin feature/amazing-feature`)
5. פתח Pull Request

## 📄 רישיון

זכויות יוצרים © 2025 RouteX
