import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
  Alert,
  ActivityIndicator,
  ScrollView,
} from 'react-native';
import { COLORS, STRINGS, ROUTES } from '../../constants';

const RegisterScreen = ({ navigation }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleRegister = async () => {
    // Validações básicas
    if (!name || !email || !password || !confirmPassword) {
      Alert.alert('שגיאה', 'אנא מלא את כל השדות');
      return;
    }

    if (password !== confirmPassword) {
      Alert.alert('שגיאה', 'הסיסמאות אינן תואמות');
      return;
    }

    // Validação simples de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      Alert.alert('שגיאה', 'כתובת האימייל אינה תקינה');
      return;
    }

    setIsLoading(true);

    try {
      // Simulação de registro (substituir com chamada de API real)
      setTimeout(() => {
        setIsLoading(false);
        Alert.alert(
          'הרשמה הצליחה',
          'נרשמת בהצלחה! כעת תוכל להתחבר.',
          [{ text: 'אישור', onPress: () => navigation.navigate(ROUTES.LOGIN) }]
        );
      }, 1500);
    } catch (error) {
      setIsLoading(false);
      Alert.alert('שגיאה', error.message || 'שגיאה בהרשמה');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.keyboardAvoidView}
      >
        <ScrollView contentContainerStyle={styles.scrollView}>
          <View style={styles.headerContainer}>
            <Text style={styles.headerTitle}>{STRINGS.REGISTER}</Text>
            <Text style={styles.headerSubtitle}>
              צור חשבון חדש ב-{STRINGS.APP_NAME}
            </Text>
          </View>

          <View style={styles.formContainer}>
            <View style={styles.inputGroup}>
              <Text style={styles.label}>{STRINGS.NAME}</Text>
              <TextInput
                style={styles.input}
                placeholder="ישראל ישראלי"
                placeholderTextColor={COLORS.GRAY}
                value={name}
                onChangeText={setName}
                autoCapitalize="words"
                textAlign="right" // RTL support
              />
            </View>

            <View style={styles.inputGroup}>
              <Text style={styles.label}>{STRINGS.EMAIL}</Text>
              <TextInput
                style={styles.input}
                placeholder="email@example.com"
                placeholderTextColor={COLORS.GRAY}
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                autoCapitalize="none"
                textAlign="right" // RTL support
              />
            </View>

            <View style={styles.inputGroup}>
              <Text style={styles.label}>{STRINGS.PASSWORD}</Text>
              <TextInput
                style={styles.input}
                placeholder="******"
                placeholderTextColor={COLORS.GRAY}
                value={password}
                onChangeText={setPassword}
                secureTextEntry
                textAlign="right" // RTL support
              />
            </View>

            <View style={styles.inputGroup}>
              <Text style={styles.label}>{STRINGS.CONFIRM_PASSWORD}</Text>
              <TextInput
                style={styles.input}
                placeholder="******"
                placeholderTextColor={COLORS.GRAY}
                value={confirmPassword}
                onChangeText={setConfirmPassword}
                secureTextEntry
                textAlign="right" // RTL support
              />
            </View>

            <TouchableOpacity
              style={styles.registerButton}
              onPress={handleRegister}
              disabled={isLoading}
            >
              {isLoading ? (
                <ActivityIndicator size="small" color={COLORS.WHITE} />
              ) : (
                <Text style={styles.registerButtonText}>{STRINGS.REGISTER}</Text>
              )}
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.loginLink}
              onPress={() => navigation.navigate(ROUTES.LOGIN)}
            >
              <Text style={styles.loginLinkText}>
                כבר יש לך חשבון? {STRINGS.LOGIN}
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.WHITE,
  },
  keyboardAvoidView: {
    flex: 1,
  },
  scrollView: {
    flexGrow: 1,
    padding: 20,
  },
  headerContainer: {
    marginTop: 20,
    marginBottom: 30,
    alignItems: 'flex-end', // RTL support
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: COLORS.PRIMARY,
    marginBottom: 5,
    textAlign: 'right', // RTL support
  },
  headerSubtitle: {
    fontSize: 16,
    color: COLORS.GRAY,
    textAlign: 'right', // RTL support
  },
  formContainer: {
    width: '100%',
  },
  inputGroup: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
    color: COLORS.BLACK,
    textAlign: 'right', // RTL support
  },
  input: {
    height: 50,
    borderWidth: 1,
    borderColor: COLORS.LIGHT_GRAY,
    borderRadius: 8,
    paddingHorizontal: 15,
    fontSize: 16,
    backgroundColor: COLORS.WHITE,
    color: COLORS.BLACK,
  },
  registerButton: {
    backgroundColor: COLORS.PRIMARY,
    height: 50,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
    marginTop: 10,
  },
  registerButtonText: {
    color: COLORS.WHITE,
    fontSize: 18,
    fontWeight: 'bold',
  },
  loginLink: {
    alignItems: 'center',
    marginTop: 10,
  },
  loginLinkText: {
    color: COLORS.PRIMARY,
    fontSize: 16,
  },
});

export default RegisterScreen;