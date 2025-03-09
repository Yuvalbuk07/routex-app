import React, { useState } from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    ScrollView,
    ActivityIndicator,
    KeyboardAvoidingView,
    Platform,
    Alert,
} from 'react-native';
import GlobalStyles from '../styles/theme';
import { COLORS } from '../styles/theme';

const RegisterScreen = ({ navigation }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleRegister = async () => {
        // בדיקות בסיסיות
        if (!name || !email || !password || !confirmPassword) {
            Alert.alert('שגיאה', 'אנא מלא את כל השדות');
            return;
        }

        if (password !== confirmPassword) {
            Alert.alert('שגיאה', 'הסיסמאות אינן תואמות');
            return;
        }

        // סימולציה של תהליך הרשמה
        setIsLoading(true);
        
        // סימולציה של קריאת שרת
        setTimeout(() => {
            setIsLoading(false);
            Alert.alert(
                'הרשמה הצליחה',
                'חשבונך נוצר בהצלחה!',
                [
                    {
                        text: 'המשך',
                        onPress: () => navigation.navigate('TravellerType')
                    }
                ]
            );
        }, 1500);
    };

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={GlobalStyles.container}
        >
            <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                <View style={GlobalStyles.header}>
                    <Text style={GlobalStyles.title}>הרשמה</Text>
                    <Text style={GlobalStyles.subtitle}>צור חשבון חדש וגלה את המסלולים הייחודיים שלנו</Text>
                </View>

                <View style={GlobalStyles.formContainer}>
                    <View style={GlobalStyles.inputGroup}>
                        <Text style={GlobalStyles.label}>שם מלא</Text>
                        <TextInput
                            style={GlobalStyles.input}
                            placeholder="הזן את שמך המלא"
                            value={name}
                            onChangeText={setName}
                        />
                    </View>

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
                            placeholder="בחר סיסמה"
                            secureTextEntry
                            value={password}
                            onChangeText={setPassword}
                        />
                    </View>

                    <View style={GlobalStyles.inputGroup}>
                        <Text style={GlobalStyles.label}>אימות סיסמה</Text>
                        <TextInput
                            style={GlobalStyles.input}
                            placeholder="הזן שוב את הסיסמה"
                            secureTextEntry
                            value={confirmPassword}
                            onChangeText={setConfirmPassword}
                        />
                    </View>

                    <TouchableOpacity
                        onPress={() => navigation.navigate('Login')}
                        style={{ alignSelf: 'flex-end', marginBottom: 20 }}
                    >
                        <Text style={{ color: COLORS.primary }}>כבר יש לך חשבון? התחבר</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={GlobalStyles.button}
                        onPress={handleRegister}
                        disabled={isLoading}
                    >
                        {isLoading ? (
                            <ActivityIndicator color={COLORS.white} />
                        ) : (
                            <Text style={GlobalStyles.buttonText}>הירשם</Text>
                        )}
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    );
};

export default RegisterScreen;