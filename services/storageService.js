import AsyncStorage from '@react-native-async-storage/async-storage';

// פונקציית עטיפה לבדיקת זמינות AsyncStorage
const isAsyncStorageAvailable = async () => {
    try {
        await AsyncStorage.setItem('__test__', '__test__');
        await AsyncStorage.removeItem('__test__');
        return true;
    } catch (e) {
        return false;
    }
};

// מערך גיבוי אם AsyncStorage לא זמין
let backupStorage = {};

/**
 * שומר מידע בזיכרון המקומי של המכשיר
 * @param {string} key - המפתח לשמירת המידע
 * @param {any} value - הערך לשמירה
 * @returns {Promise<void>}
 */
export const saveToStorage = async (key, value) => {
    try {
        // בדיקה אם AsyncStorage זמין
        const storageAvailable = await isAsyncStorageAvailable();

        // אם AsyncStorage זמין, השתמש בו
        if (storageAvailable) {
            const jsonValue = JSON.stringify(value);
            await AsyncStorage.setItem(key, jsonValue);
            console.log(`נשמר בהצלחה: ${key}`);
        } else {
            // אחרת, השתמש באחסון גיבוי
            backupStorage[key] = value;
            console.log(`נשמר בגיבוי: ${key}`);
        }
    } catch (error) {
        console.error(`שגיאה בשמירת ${key}:`, error);
        // נסיון גיבוי במקרה של שגיאה
        backupStorage[key] = value;
        console.log(`נשמר בגיבוי אחרי שגיאה: ${key}`);
    }
};

/**
 * מביא מידע מהזיכרון המקומי של המכשיר
 * @param {string} key - המפתח להבאת המידע
 * @returns {Promise<any>} - הערך שנשמר
 */
export const getFromStorage = async (key) => {
    try {
        // בדיקה אם AsyncStorage זמין
        const storageAvailable = await isAsyncStorageAvailable();

        // אם AsyncStorage זמין, השתמש בו
        if (storageAvailable) {
            const jsonValue = await AsyncStorage.getItem(key);
            return jsonValue != null ? JSON.parse(jsonValue) : null;
        } else {
            // אחרת, השתמש באחסון גיבוי
            return backupStorage[key] || null;
        }
    } catch (error) {
        console.error(`שגיאה בהבאת ${key}:`, error);
        // נסיון לקבל מהגיבוי במקרה של שגיאה
        return backupStorage[key] || null;
    }
};

/**
 * מוחק מידע מהזיכרון המקומי של המכשיר
 * @param {string} key - המפתח למחיקת המידע
 * @returns {Promise<void>}
 */
export const removeFromStorage = async (key) => {
    try {
        // בדיקה אם AsyncStorage זמין
        const storageAvailable = await isAsyncStorageAvailable();

        // אם AsyncStorage זמין, השתמש בו
        if (storageAvailable) {
            await AsyncStorage.removeItem(key);
        }

        // בכל מקרה, מחק גם מהגיבוי
        delete backupStorage[key];
        console.log(`נמחק בהצלחה: ${key}`);
    } catch (error) {
        console.error(`שגיאה במחיקת ${key}:`, error);
        // לפחות נמחק מהגיבוי
        delete backupStorage[key];
    }
};

/**
 * מוחק את כל המידע מהזיכרון המקומי של האפליקציה
 * @returns {Promise<void>}
 */
export const clearStorage = async () => {
    try {
        // בדיקה אם AsyncStorage זמין
        const storageAvailable = await isAsyncStorageAvailable();

        // אם AsyncStorage זמין, השתמש בו
        if (storageAvailable) {
            await AsyncStorage.clear();
        }

        // בכל מקרה, נקה את הגיבוי
        backupStorage = {};
        console.log('כל המידע נמחק בהצלחה');
    } catch (error) {
        console.error('שגיאה במחיקת כל המידע:', error);
        // לפחות נקה את הגיבוי
        backupStorage = {};
    }
};