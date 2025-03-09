import React, { useEffect, useRef } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  Animated, 
  Dimensions, 
  StatusBar 
} from 'react-native';

const { width, height } = Dimensions.get('window');

// Constantes de cores e textos
const COLORS = {
  PRIMARY: '#3498db',
  WHITE: '#FFFFFF',
};

const STRINGS = {
  APP_NAME: 'RouteX',
  TAGLINE: 'המסלול המושלם לכל מטייל',
};

const SplashScreen = ({ navigation }) => {
  // Valores de animação
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const scaleAnim = useRef(new Animated.Value(0.3)).current;
  const translateYAnim = useRef(new Animated.Value(height * 0.1)).current;

  useEffect(() => {
    // Sequência de animação
    Animated.sequence([
      // Fade in e escala do logo
      Animated.parallel([
        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: 800,
          useNativeDriver: true,
        }),
        Animated.spring(scaleAnim, {
          toValue: 1,
          tension: 10,
          friction: 3,
          useNativeDriver: true,
        }),
        Animated.timing(translateYAnim, {
          toValue: 0,
          duration: 800,
          useNativeDriver: true,
        }),
      ]),
    ]).start();

    // Navegar para tela de login após 2.5 segundos
    const timer = setTimeout(() => {
      navigation.replace('Login');
    }, 2500);

    return () => clearTimeout(timer);
  }, [fadeAnim, scaleAnim, translateYAnim, navigation]);

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={COLORS.PRIMARY} />
      
      <Animated.View
        style={[
          styles.logoContainer,
          {
            opacity: fadeAnim,
            transform: [
              { scale: scaleAnim },
              { translateY: translateYAnim }
            ],
          },
        ]}
      >
        {/* Logo (Placeholder) */}
        <View style={styles.logoCircle}>
          <Text style={styles.logoText}>R</Text>
        </View>
        
        {/* Nome do aplicativo */}
        <Text style={styles.appName}>{STRINGS.APP_NAME}</Text>
        
        {/* Slogan */}
        <Text style={styles.tagline}>{STRINGS.TAGLINE}</Text>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.PRIMARY,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoCircle: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: COLORS.WHITE,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
    elevation: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  logoText: {
    fontSize: 60,
    fontWeight: 'bold',
    color: COLORS.PRIMARY,
  },
  appName: {
    fontSize: 32,
    fontWeight: 'bold',
    color: COLORS.WHITE,
    marginBottom: 10,
    textAlign: 'center',
  },
  tagline: {
    fontSize: 18,
    color: COLORS.WHITE,
    textAlign: 'center',
    opacity: 0.9,
  },
});

export default SplashScreen;