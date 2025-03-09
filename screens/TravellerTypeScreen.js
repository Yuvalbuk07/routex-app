import React, { useState } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    ScrollView,
} from 'react-native';
import GlobalStyles from '../styles/theme';
import * as storageService from '../services/storageService';

const TravellerTypeScreen = ({ navigation }) => {
    const [selectedType, setSelectedType] = useState(null);

    const travellerTypes = [
        {
            id: 'nature',
            title: 'חובב טבע',
            description: 'אוהב טיולים בטבע, מסלולי הליכה ונופים מרהיבים',
        },
        {
            id: 'urban',
            title: 'מטייל עירוני',
            description: 'מעדיף מוזיאונים, גלריות, מסעדות ואטרקציות עירוניות',
        },
        {
            id: 'adventure',
            title: 'מחפש אתגר',
            description: 'אוהב אדרנלין, ספורט אתגרי וחוויות ייחודיות',
        },
        {
            id: 'cultural',
            title: 'שוחר תרבות',
            description: 'מתעניין בהיסטוריה, תרבות מקומית ומסורות',
        },
        {
            id: 'family',
            title: 'טיול משפחתי',
            description: 'מחפש אטרקציות מתאימות למשפחות וילדים',
        },
    ];

    const handleTypeSelect = (typeId) => {
        setSelectedType(typeId);
    };

    const handleContinue = async () => {
        if (selectedType) {
            try {
                // שמירת סוג המטייל באחסון המקומי
                await storageService.saveToStorage('travellerType', selectedType);
                // מעבר למסך הבא
                navigation.navigate('TripInfo', { travellerType: selectedType });
            } catch (error) {
                console.error('שגיאה בשמירת סוג מטייל:', error);
                // מעבר למסך הבא למרות השגיאה
                navigation.navigate('TripInfo', { travellerType: selectedType });
            }
        }
    };

    return (
        <View style={GlobalStyles.container}>
            <View style={GlobalStyles.header}>
                <Text style={GlobalStyles.title}>איזה סוג מטייל אתה?</Text>
                <Text style={GlobalStyles.subtitle}>
                    בחר את הסגנון שהכי מתאים לך כדי שנוכל להתאים את המסלולים בדיוק בשבילך
                </Text>
            </View>

            <ScrollView style={GlobalStyles.scrollViewContainer}>
                {travellerTypes.map((type) => (
                    <TouchableOpacity
                        key={type.id}
                        style={[
                            GlobalStyles.cardRow,
                            selectedType === type.id && GlobalStyles.cardSelected,
                        ]}
                        onPress={() => handleTypeSelect(type.id)}
                    >
                        <View style={GlobalStyles.cardContent}>
                            <Text style={GlobalStyles.label}>{type.title}</Text>
                            <Text style={GlobalStyles.smallText}>{type.description}</Text>
                        </View>
                        {selectedType === type.id && (
                            <View style={GlobalStyles.checkmark}>
                                <Text style={GlobalStyles.checkmarkText}>✓</Text>
                            </View>
                        )}
                    </TouchableOpacity>
                ))}
            </ScrollView>

            <View style={GlobalStyles.footer}>
                <TouchableOpacity
                    style={[
                        GlobalStyles.button,
                        !selectedType && GlobalStyles.buttonDisabled,
                    ]}
                    onPress={handleContinue}
                    disabled={!selectedType}
                >
                    <Text style={GlobalStyles.buttonText}>המשך</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default TravellerTypeScreen;