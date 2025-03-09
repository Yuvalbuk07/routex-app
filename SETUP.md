# הוראות התקנה והרצה - RouteX ללא Expo

## התקנה ראשונית

### 1. הורדת הקוד
```bash
git clone https://github.com/Yuvalbuk07/routex-app.git
cd routex-app
```

### 2. התקנת תלויות
```bash
npm install
```

### 3. הגדרות פלטפורמה

#### iOS (דורש macOS)
```bash
cd ios
pod install
cd ..
```

#### אנדרואיד
וודא שסביבת אנדרואיד מוגדרת בצורה נכונה:
- JDK מותקן (גרסה 11 לפחות)
- Android SDK מותקן
- משתני סביבה מוגדרים כראוי (ANDROID_HOME וכו')

## הרצת האפליקציה

#### מטרו בנדלר (שרת פיתוח)
```bash
npx react-native start
```

#### אנדרואיד
```bash
npx react-native run-android
```

#### iOS (דורש macOS)
```bash
npx react-native run-ios
```

## מבנה פרויקט React Native CLI

### תיקיות מרכזיות
- `/android` - קוד ספציפי לאנדרואיד (יווצר עם יצירת פרויקט חדש)
- `/ios` - קוד ספציפי ל-iOS (יווצר עם יצירת פרויקט חדש)
- `/screens` - מסכי האפליקציה 
- `/services` - שירותים כמו אחסון נתונים
- `/styles` - סגנונות גלובליים

### קבצים מרכזיים
- `package.json` - הגדרות פרויקט ותלויות
- `app.json` - שם ומזהה האפליקציה
- `index.js` - נקודת כניסה ראשית
- `App.js` - קומפוננטה ראשית
- `AppNavigation.js` - הגדרות ניווט בין מסכים

## פתרון בעיות

### בעיות כלליות
- בדוק שכל התלויות מותקנות: `npm install`
- נקה את ה-cache: `npm cache clean --force`
- הפעל מחדש את ה-bundler: `npx react-native start --reset-cache`

### בעיות באנדרואיד
- נקה את הבנייה: `cd android && ./gradlew clean && cd ..`
- בדוק הרשאות במכשיר או באמולטור

### בעיות ב-iOS
- נקה ספריות: `cd ios && pod deintegrate && pod install && cd ..`
- בצע build חדש ב-Xcode

## משאבים 
אם אתה מוסיף משאבים כמו תמונות או גופנים:

### תמונות
- הוסף ל-`android/app/src/main/res/drawable-*` (בגדלים שונים)
- הוסף ל-`ios/RouteX/Images.xcassets`

### גופנים
- הוסף ל-`android/app/src/main/assets/fonts`
- הוסף ל-`ios/RouteX/Fonts`
- עדכן `ios/RouteX/Info.plist` עם שמות הגופנים