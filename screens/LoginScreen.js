import React, { useState } from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    ActivityIndicator,
    KeyboardAvoidingView,
    Platform,
    Alert,
} from 'react-native';
import GlobalStyles from '../styles/theme';
import { COLORS } from '../styles/theme';

const LoginScreen = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleLogin = async () => {
        // בדיקות בסיסיות
        if (!email || !password) {
            Alert.alert('שגיאה', 'אנא מלא את כל השדות');
            return;
        }

        // סימולציה של תהליך התחברות
        setIsLoading(true);
        
        // סימולציה של קריאת שרת
        setTimeout(() => {
            setIsLoading(false);
            // בשלב פיתוח, נקבל כל התחברות כתקינה
            navigation.navigate('Home');
        }, 1500);
    };

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={GlobalStyles.container}
        >
            <View style={GlobalStyles.centeredContainer}>
                <View style={GlobalStyles.logoContainer}>
                    <View style={GlobalStyles.logoPlaceholder}>
                        <Text style={GlobalStyles.logoText}>R</Text>
                    </View>
                    <Text style={GlobalStyles.titleMarginSmall}>RouteX</Text>
                    <Text style={GlobalStyles.subtitle}>המסלול המושלם לכל מטייל</Text>
                </View>

                <View style={GlobalStyles.formContainer}>
                    <View style={GlobalStyles.inputGroup}>
                        <Text style={GlobalStyles.label}>אימייל</Text>
                        <TextInput
                            style={GlobalStyles.input}
                            placeholder="הזן את האימייל שלך"
                            keyboardType="email-address"
                            autoCapitalize="none"
                            value={email}
                            onChangeText={setEmail}
                        />
                    </View>

                    <View style={GlobalStyles.inputGroup}>
                        <Text style={GlobalStyles.label}>סיסמה</Text>
                        <TextInput
                            style={GlobalStyles.input}
                            placeholder="הזן את הסיסמה שלך"
                            secureTextEntry
                            value={password}
                            onChangeText={setPassword}
                        />
                    </View>

                    <TouchableOpacity
                        onPress={() => navigation.navigate('Register')}
                        style={{ alignSelf: 'flex-end', marginBottom: 20 }}
                    >
                        <Text style={{ color: COLORS.primary }}>אין לך חשבון? הירשם עכשיו</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={GlobalStyles.button}
                        onPress={handleLogin}
                        disabled={isLoading}
                    >
                        {isLoading ? (
                            <ActivityIndicator color={COLORS.white} />
                        ) : (
                            <Text style={GlobalStyles.buttonText}>התחבר</Text>
                        )}
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => navigation.navigate('TravellerType')}
                        style={{ alignSelf: 'center', marginTop: 20 }}
                    >
                        <Text style={{ color: COLORS.darkGray }}>המשך כאורח</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </KeyboardAvoidingView>
    );
};

export default LoginScreen;