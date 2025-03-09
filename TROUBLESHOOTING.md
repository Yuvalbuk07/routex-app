# פתרון בעיות נפוצות ב-RouteX

מסמך זה מכיל פתרונות לבעיות נפוצות שעלולות להופיע בפיתוח אפליקציית RouteX.

## בעיות בטעינה ראשונית

### שגיאה: Module not found

```
Error: Unable to resolve module [שם-מודול] from [נתיב]
```

**פתרון:**
1. וודא שהחבילה מותקנת:
   ```bash
   npm install --save [שם-המודול]
   ```
2. נקה את המטמון:
   ```bash
   npm run reset
   ```

### שגיאה: Multiple commands produce

**פתרון (iOS):**
1. הסר את build מתיקיית iOS:
   ```bash
   cd ios
   rm -rf build
   pod install
   cd ..
   ```

## בעיות באנדרואיד

### שגיאה: Execution failed for task ':app:processDebugResources'

**פתרון:**
1. נקה את הפרויקט:
   ```bash
   cd android
   ./gradlew clean
   cd ..
   ```
2. או השתמש בסקריפט:
   ```bash
   npm run clean
   ```

### שגיאה: SDK Location not found

**פתרון:**
1. צור קובץ `local.properties` בתיקיית `android` עם המיקום של ה-SDK:
   ```
   sdk.dir=/Users/[שם-משתמש]/Library/Android/sdk
   ```
   או בווינדוס:
   ```
   sdk.dir=C:\\Users\\[שם-משתמש]\\AppData\\Local\\Android\\Sdk
   ```

## בעיות ב-iOS

### שגיאה: Pod not found

**פתרון:**
```bash
cd ios
pod deintegrate
pod install
cd ..
```
או השתמש בסקריפט:
```bash
npm run clean:ios
```

### שגיאה: Build input file cannot be found

**פתרון:**
1. נקה את פרויקט ה-Xcode
2. הרץ מחדש pod install
3. פתח שוב את Xcode ובנה מחדש

## בעיות עם React Navigation

### שגיאה: Undefined is not an object (evaluating 'navigation.navigate')

**פתרון:**
וודא שאתה עובר את אובייקט ה-navigation כהלכה:
```javascript
const MyScreen = ({ navigation }) => {
  // כאן השתמש ב-navigation
};
```

## בעיות טעינה כלליות

### האפליקציה נתקעת או קורסת

**פתרון:**
1. בדוק את ה-error logs:
   ```bash
   npm run debug
   ```
2. נסה להריץ מחדש את הבאנדלר:
   ```bash
   npm run reset
   ```
3. נסה לייצר באנדל חדש:
   ```bash
   npm run bundle:android
   ```

## בעיות עם AsyncStorage

### שגיאה בזמן קריאה או כתיבה ל-AsyncStorage

**פתרון:**
1. וודא שהחבילה מותקנת כראוי:
   ```bash
   npm install @react-native-async-storage/async-storage
   ```
2. וודא שאתה משתמש בפונקציות אסינכרוניות כראוי:
   ```javascript
   try {
     await AsyncStorage.setItem('key', 'value');
   } catch (e) {
     console.error(e);
   }
   ```

## שגיאות שעלולות להופיע ספציפית לפרויקט זה

### סגירה פתאומית במעבר בין מסכים

**פתרון:**
1. בדוק את ההגדרות ב-AppNavigation.js
2. וודא שכל המסכים מיובאים כראוי
3. בדוק שאין שימוש ברכיבי Expo במסכים

### שגיאות עיצוב או תצוגה

**פתרון:**
1. בדוק את קובץ הנושא (theme.js)
2. וודא שסגנונות משמשים בצורה נכונה בכל המסכים
3. השתמש ב-Platform.select לטיפול בהבדלי עיצוב בין אנדרואיד ל-iOS

## עדכון האפליקציה כשמשתנה משהו ב-GitHub

כשאתה מושך שינויים מ-GitHub:

1. משוך את הקוד העדכני:
   ```bash
   git pull origin main
   ```

2. התקן תלויות חדשות (אם יש):
   ```bash
   npm install
   ```

3. עדכן pods (למשתמשי macOS):
   ```bash
   cd ios && pod install && cd ..
   ```

4. נקה ואתחל מחדש:
   ```bash
   npm run reset
   ```

5. הרץ את האפליקציה:
   ```bash
   npm run android
   # או
   npm run ios
   ```

## כיצד לתקן שגיאה שלא מופיעה במסמך זה

1. חפש את הודעת השגיאה המדויקת באינטרנט
2. בדוק את ה-logs המלאים:
   ```bash
   npm run debug
   ```
3. נסה להבין את מקור הבעיה: הרכיב, החבילה או הקוד
4. נסה לבודד את הבעיה על ידי הסרה זמנית של חלקים מהאפליקציה
5. שקול לפתוח issue ב-GitHub אם הבעיה נמשכת