import React, { useEffect, useRef } from 'react';
import {
    View,
    Text,
    Animated,
    StyleSheet,
} from 'react-native';
import GlobalStyles from '../styles/theme';

const SplashScreen = ({ navigation }) => {
    // יצירת ערכי אנימציה כרפרנסים
    const fadeAnim = useRef(new Animated.Value(0)).current;
    const scaleAnim = useRef(new Animated.Value(0.5)).current;

    useEffect(() => {
        // אנימציה להופעת הלוגו והטקסט
        Animated.parallel([
            Animated.timing(fadeAnim, {
                toValue: 1,
                duration: 1000,
                useNativeDriver: true,
            }),
            Animated.spring(scaleAnim, {
                toValue: 1,
                tension: 10,
                friction: 3,
                useNativeDriver: true,
            }),
        ]).start();

        // מעבר למסך הבא אחרי 2.5 שניות
        const timer = setTimeout(() => {
            // כאן משנים את הניווט למסך הלוגין במקום להשתמש ב-onFinish
            navigation.replace('Login');
        }, 2500);

        // ניקוי הטיימר בעת הסרת הקומפוננטה
        return () => clearTimeout(timer);
    }, [fadeAnim, scaleAnim, navigation]);

    return (
        <View style={GlobalStyles.centeredContainer}>
            <Animated.View
                style={[
                    GlobalStyles.logoContainer,
                    styles.animatedContainer,
                    { opacity: fadeAnim, transform: [{ scale: scaleAnim }] },
                ]}
            >
                {/* לוגו זמני במקום תמונה */}
                <View style={GlobalStyles.logoPlaceholder}>
                    <Text style={GlobalStyles.logoText}>R</Text>
                </View>

                <Text style={GlobalStyles.titleMarginSmall}>RouteX</Text>
                <Text style={GlobalStyles.subtitle}>המסלול המושלם לכל מטייל</Text>
            </Animated.View>
        </View>
    );
};

// סגנונות מקומיים רק לאנימציה שלא ניתן להעביר לקובץ הגלובלי
const styles = StyleSheet.create({
    animatedContainer: {
        // ריק - הסגנונות מועברים באופן דינמי דרך האנימציה
    },
});

export default SplashScreen;