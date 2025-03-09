import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  Image,
  StatusBar,
} from 'react-native';
import { COLORS, STRINGS, ROUTES, TRAVELLER_TYPES } from '../../constants';

const TravellerTypeScreen = ({ navigation }) => {
  const [selectedType, setSelectedType] = useState(null);

  const handleTypeSelect = (type) => {
    setSelectedType(type);
  };

  const handleContinue = () => {
    if (selectedType) {
      // Em uma implementação real, você salvaria essa preferência
      // Aqui, apenas navegamos para a próxima tela
      navigation.navigate(ROUTES.HOME);
    }
  };

  const renderTravellerTypeCard = (type, title, description, icon) => {
    const isSelected = selectedType === type;
    
    return (
      <TouchableOpacity
        style={[
          styles.typeCard,
          isSelected && styles.selectedTypeCard,
        ]}
        onPress={() => handleTypeSelect(type)}
      >
        <View style={styles.typeIconContainer}>
          <Text style={styles.typeIcon}>{icon}</Text>
        </View>
        <View style={styles.typeInfo}>
          <Text style={[styles.typeTitle, isSelected && styles.selectedTypeText]}>
            {title}
          </Text>
          <Text style={[styles.typeDescription, isSelected && styles.selectedTypeDescription]}>
            {description}
          </Text>
        </View>
        {isSelected && (
          <View style={styles.selectedIndicator}>
            <Text style={styles.checkmark}>✓</Text>
          </View>
        )}
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor={COLORS.WHITE} />
      
      <View style={styles.header}>
        <Text style={styles.title}>{STRINGS.SELECT_TRAVELLER_TYPE}</Text>
        <Text style={styles.subtitle}>
          בחירת סוג המטייל תעזור לנו להתאים עבורך את המסלולים המושלמים
        </Text>
      </View>
      
      <ScrollView style={styles.scrollView}>
        {renderTravellerTypeCard(
          TRAVELLER_TYPES.NATURE,
          STRINGS.TRAVELLER_TYPE.NATURE,
          'אוהב טבע, פארקים, שמורות טבע ומסלולי הליכה',
          '🌲'
        )}
        
        {renderTravellerTypeCard(
          TRAVELLER_TYPES.URBAN,
          STRINGS.TRAVELLER_TYPE.URBAN,
          'מעדיף מוזיאונים, מסעדות ואטרקציות עירוניות',
          '🏙️'
        )}
        
        {renderTravellerTypeCard(
          TRAVELLER_TYPES.ADVENTURE,
          STRINGS.TRAVELLER_TYPE.ADVENTURE,
          'מחפש אדרנלין, טיולי אתגר ופעילויות אקסטרים',
          '🧗'
        )}
        
        {renderTravellerTypeCard(
          TRAVELLER_TYPES.CULTURE,
          STRINGS.TRAVELLER_TYPE.CULTURE,
          'מתעניין באתרים היסטוריים, מוזיאונים ותרבות מקומית',
          '🏛️'
        )}
        
        {renderTravellerTypeCard(
          TRAVELLER_TYPES.FAMILY,
          STRINGS.TRAVELLER_TYPE.FAMILY,
          'מחפש פעילויות מהנות לכל המשפחה',
          '👨‍👩‍👧‍👦'
        )}
      </ScrollView>
      
      <View style={styles.footer}>
        <TouchableOpacity
          style={[
            styles.continueButton,
            !selectedType && styles.disabledButton,
          ]}
          onPress={handleContinue}
          disabled={!selectedType}
        >
          <Text style={styles.continueButtonText}>{STRINGS.CONTINUE}</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.BACKGROUND,
  },
  header: {
    padding: 20,
    alignItems: 'flex-end',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: COLORS.PRIMARY,
    marginBottom: 10,
    textAlign: 'right',
  },
  subtitle: {
    fontSize: 16,
    color: COLORS.GRAY,
    textAlign: 'right',
  },
  scrollView: {
    flex: 1,
    padding: 20,
  },
  typeCard: {
    flexDirection: 'row-reverse',
    backgroundColor: COLORS.WHITE,
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  selectedTypeCard: {
    borderWidth: 2,
    borderColor: COLORS.PRIMARY,
    backgroundColor: 'rgba(52, 152, 219, 0.05)',
  },
  typeIconContainer: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: COLORS.LIGHT_GRAY,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 16,
  },
  typeIcon: {
    fontSize: 24,
  },
  typeInfo: {
    flex: 1,
    alignItems: 'flex-end',
  },
  typeTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 6,
    color: COLORS.BLACK,
  },
  selectedTypeText: {
    color: COLORS.PRIMARY,
  },
  typeDescription: {
    fontSize: 14,
    color: COLORS.GRAY,
    textAlign: 'right',
  },
  selectedTypeDescription: {
    color: COLORS.PRIMARY_DARK,
  },
  selectedIndicator: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: COLORS.PRIMARY,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkmark: {
    color: COLORS.WHITE,
    fontWeight: 'bold',
  },
  footer: {
    padding: 20,
    backgroundColor: COLORS.WHITE,
    borderTopWidth: 1,
    borderTopColor: COLORS.LIGHT_GRAY,
  },
  continueButton: {
    backgroundColor: COLORS.PRIMARY,
    height: 50,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  disabledButton: {
    backgroundColor: COLORS.LIGHT_GRAY,
  },
  continueButtonText: {
    color: COLORS.WHITE,
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default TravellerTypeScreen;