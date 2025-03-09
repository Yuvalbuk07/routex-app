import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
  Alert,
  ActivityIndicator,
  ScrollView,
} from 'react-native';
import { COLORS, STRINGS, ROUTES } from '../../constants';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async () => {
    // Validações básicas
    if (!email || !password) {
      Alert.alert('שגיאה', 'אנא מלא את כל השדות');
      return;
    }

    setIsLoading(true);

    try {
      // Simulação de login (substituir com chamada de API real)
      setTimeout(() => {
        setIsLoading(false);
        navigation.navigate(ROUTES.HOME);
      }, 1500);
    } catch (error) {
      setIsLoading(false);
      Alert.alert('שגיאה', error.message || 'שגיאה בהתחברות');
    }
  };

  const handleRegister = () => {
    navigation.navigate(ROUTES.REGISTER);
  };

  const handleContinueAsGuest = () => {
    navigation.navigate(ROUTES.TRAVELLER_TYPE);
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.keyboardAvoidView}
      >
        <ScrollView contentContainerStyle={styles.scrollView}>
          <View style={styles.logoContainer}>
            {/* Substitua com sua imagem de logo real */}
            <View style={styles.logoCircle}>
              <Text style={styles.logoText}>R</Text>
            </View>
            <Text style={styles.appName}>{STRINGS.APP_NAME}</Text>
            <Text style={styles.subtitle}>{STRINGS.TAGLINE}</Text>
          </View>

          <View style={styles.formContainer}>
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

            <TouchableOpacity
              style={styles.registerLink}
              onPress={handleRegister}
            >
              <Text style={styles.registerText}>
                {STRINGS.NO_ACCOUNT} {STRINGS.REGISTER}
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.loginButton}
              onPress={handleLogin}
              disabled={isLoading}
            >
              {isLoading ? (
                <ActivityIndicator size="small" color={COLORS.WHITE} />
              ) : (
                <Text style={styles.loginButtonText}>{STRINGS.LOGIN}</Text>
              )}
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.guestButton}
              onPress={handleContinueAsGuest}
            >
              <Text style={styles.guestButtonText}>
                {STRINGS.CONTINUE_AS_GUEST}
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
    justifyContent: 'center',
    padding: 20,
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 40,
  },
  logoCircle: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: COLORS.PRIMARY,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 15,
  },
  logoText: {
    fontSize: 60,
    fontWeight: 'bold',
    color: COLORS.WHITE,
  },
  appName: {
    fontSize: 28,
    fontWeight: 'bold',
    color: COLORS.PRIMARY,
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 16,
    color: COLORS.GRAY,
    textAlign: 'center',
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
  registerLink: {
    alignSelf: 'flex-end',
    marginBottom: 20,
  },
  registerText: {
    color: COLORS.PRIMARY,
    fontSize: 14,
  },
  loginButton: {
    backgroundColor: COLORS.PRIMARY,
    height: 50,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
  },
  loginButtonText: {
    color: COLORS.WHITE,
    fontSize: 18,
    fontWeight: 'bold',
  },
  guestButton: {
    height: 50,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: COLORS.GRAY,
  },
  guestButtonText: {
    color: COLORS.GRAY,
    fontSize: 16,
  },
});

export default LoginScreen;