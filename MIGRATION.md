# מסמך מיגרציה מ-Expo ל-React Native CLI

מסמך זה מפרט את השלבים המדויקים הנדרשים למעבר מפרויקט Expo לפרויקט React Native CLI עבור אפליקציית RouteX.

## 1. יצירת פרויקט React Native חדש

הדרך הנקייה ביותר לבצע את המעבר היא ליצור פרויקט React Native CLI חדש לגמרי:

```bash
npx react-native@latest init RouteX --version 0.73.4
```

## 2. העתקת קבצי המקור

לאחר יצירת פרויקט חדש, יש להעתיק את הקבצים הבאים מהפרויקט הקיים:

### א. העתקת קבצי תוכן
```bash
# צור את התיקיות הבאות אם הן לא קיימות
mkdir -p RouteX/screens
mkdir -p RouteX/services
mkdir -p RouteX/styles

# העתק קבצים
cp -r routex-app/screens/* RouteX/screens/
cp -r routex-app/services/* RouteX/services/
cp -r routex-app/styles/* RouteX/styles/
```

### ב. העתקת קבצי תשתית עם שינויים

העתק את הקבצים הבאים מאחר שכבר עודכנו:
- `App.js`
- `AppNavigation.js`
- `index.js`
- `app.json`
- `package.json` (תצטרך להריץ `npm install` לאחר מכן)
- `README.md`
- `SETUP.md`

## 3. התקנת תלויות

לאחר העתקת קובץ `package.json`:

```bash
cd RouteX
npm install

# עבור iOS (דורש macOS)
cd ios
pod install
cd ..
```

## 4. יצירת משאבים ותיקיות נדרשות

### א. יצירת תיקיות משאבים
```bash
# עבור אנדרואיד
mkdir -p android/app/src/main/assets/fonts

# עבור iOS (יש לעשות זאת גם ב-Xcode)
mkdir -p ios/RouteX/Fonts
mkdir -p ios/RouteX/Assets
```

### ב. הגדרת Info.plist עבור iOS

פתח את הקובץ `ios/RouteX/Info.plist` והוסף את הקוד הבא לתמיכה בגופנים מותאמים:

```xml
<key>UIAppFonts</key>
<array>
  <!-- הוסף כאן את שמות קבצי הגופן, לדוגמה: -->
  <!-- <string>OpenSans-Regular.ttf</string> -->
</array>
```

## 5. שינויים נדרשים לתמיכה ב-Native Code

### א. Android Manifest

פתח את `android/app/src/main/AndroidManifest.xml` והוסף הרשאות נדרשות כגון:

```xml
<uses-permission android:name="android.permission.INTERNET" />
<uses-permission android:name="android.permission.ACCESS_NETWORK_STATE" />
<!-- הוסף הרשאות נוספות לפי הצורך -->
```

### ב. התאמות iOS

בדוק האם יש צורך להוסיף הגדרות ב-Capabilities או הרשאות נוספות ב-Info.plist.

## 6. בדיקה והרצה

לאחר ביצוע כל השלבים, הרץ את האפליקציה:

```bash
# אנדרואיד
npx react-native run-android

# iOS
npx react-native run-ios
```

## 7. התאמת קוד (אם נדרש)

עבור על הקוד ובדוק:
1. ייבואים של חבילות Expo שצריך להחליף
2. API-ים ייחודיים ל-Expo שצריך להמיר לגרסאות React Native
3. קומפוננטות ייחודיות ל-Expo שצריך להחליף

### דוגמאות להמרות נפוצות:

#### ייבואים
```javascript
// מקודם (Expo)
import { StatusBar } from 'expo-status-bar';
// עכשיו
import { StatusBar } from 'react-native';
```

#### גופנים
```javascript
// מקודם (Expo)
import * as Font from 'expo-font';
await Font.loadAsync({ ... });
// עכשיו - אין צורך בטעינה דינמית
```

#### משאבים
```javascript
// מקודם (Expo)
import { Asset } from 'expo-asset';
// עכשיו
// רק require רגיל
const image = require('../assets/images/logo.png');
```

## 8. חבילות React Native שימושיות להחלפת פונקציונליות של Expo

- `react-native-image-picker` - עבור בחירת/צילום תמונות
- `react-native-vector-icons` - עבור אייקונים
- `react-native-splash-screen` - עבור מסך פתיחה
- `@react-native-community/netinfo` - עבור מידע רשת
- `react-native-device-info` - עבור מידע על המכשיר

## 9. בעיות נפוצות ופתרונן

- **שגיאות קומפילציה**: נקה את הקאש עם `cd android && ./gradlew clean && cd ..`
- **גרסאות תלויות לא תואמות**: בדוק גרסאות והתאם ב-package.json
- **בעיות iOS**: נסה `cd ios && pod deintegrate && pod install && cd ..`
- **גופנים לא נטענים**: וודא שהם במיקום הנכון והוגדרו כראוי ב-Info.plist

## סיכום
המעבר מ-Expo ל-React Native CLI דורש עבודה, אך מספק גמישות רבה יותר ושליטה בקוד הילידי. עקוב אחר ההוראות בקפידה וטפל בבעיות אחת אחת.