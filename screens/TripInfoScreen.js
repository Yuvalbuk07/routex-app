import React, { useState, useEffect } from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    ScrollView,
    KeyboardAvoidingView,
    Platform,
    Alert,
} from 'react-native';
import GlobalStyles from '../styles/theme';
import * as storageService from '../services/storageService';

const TripInfoScreen = ({ navigation, route }) => {
    const { travellerType } = route.params || {};
    const [destination, setDestination] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [people, setPeople] = useState('');
    const [budget, setBudget] = useState('');
    const [preferences, setPreferences] = useState('');
    const [selectedTags, setSelectedTags] = useState([]);

    // בדיקה אם יש פרטי טיול קיימים והצגתם בטופס
    useEffect(() => {
        if (route.params?.tripInfo) {
            const { tripInfo } = route.params;
            setDestination(tripInfo.destination || '');
            setStartDate(tripInfo.startDate || '');
            setEndDate(tripInfo.endDate || '');
            setPeople(tripInfo.people ? String(tripInfo.people) : '');
            setBudget(tripInfo.budget ? String(tripInfo.budget) : '');
            setPreferences(tripInfo.preferences || '');
            setSelectedTags(tripInfo.tags || []);
        }
    }, [route.params]);

    // רשימת התגיות לפי סוג המטייל
    const getTags = () => {
        switch(travellerType) {
            case 'nature':
                return ['שמורות טבע', 'טרקים', 'חופים', 'נופים', 'קמפינג', 'צפרות', 'מסלולי רגליים'];
            case 'urban':
                return ['מוזיאונים', 'גלריות', 'מסעדות', 'קניות', 'אדריכלות', 'שווקים', 'ברים'];
            case 'adventure':
                return ['טיפוס', 'רפטינג', 'סקי', 'צלילה', 'אופניים', 'ספורט אתגרי', 'טיולי ג\'יפים'];
            case 'cultural':
                return ['היסטוריה', 'אתרי מורשת', 'אומנות', 'פסטיבלים', 'מקדשים', 'אוכל מקומי', 'מופעים'];
            case 'family':
                return ['פארקים', 'גני חיות', 'אטרקציות לילדים', 'פעילויות משפחתיות', 'חופים', 'טיולים קלים'];
            default:
                return ['טבע', 'אוכל', 'אטרקציות', 'תרבות', 'שמש', 'שלג', 'היסטוריה'];
        }
    };

    const toggleTag = (tag) => {
        if (selectedTags.includes(tag)) {
            setSelectedTags(selectedTags.filter(t => t !== tag));
        } else {
            setSelectedTags([...selectedTags, tag]);
        }
    };

    const handleSave = async () => {
        if (!isFormValid()) {
            Alert.alert('שגיאה', 'אנא מלא לפחות את היעד ותאריך ההתחלה');
            return;
        }

        const tripInfo = {
            destination,
            startDate,
            endDate,
            people: parseInt(people, 10) || 1,
            budget: budget ? parseInt(budget, 10) : null,
            preferences,
            tags: selectedTags,
        };

        try {
            // שמירת מידע הטיול באחסון המקומי
            await storageService.saveToStorage('tripInfo', tripInfo);
            
            // הצגת הודעת אישור
            Alert.alert(
                'הודעה', 
                'פרטי הטיול נשמרו בהצלחה!',
                [
                    {
                        text: 'המשך',
                        onPress: () => navigation.navigate('Home')
                    }
                ]
            );
        } catch (error) {
            console.error('שגיאה בשמירת פרטי טיול:', error);
            
            // הצגת הודעת שגיאה
            Alert.alert(
                'שגיאה', 
                'הייתה בעיה בשמירת פרטי הטיול. נסה שוב מאוחר יותר.',
                [
                    {
                        text: 'המשך',
                        onPress: () => navigation.navigate('Home')
                    }
                ]
            );
        }
    };

    const isFormValid = () => {
        return destination.trim() !== '' && startDate.trim() !== '';
    };

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={GlobalStyles.container}
        >
            <ScrollView style={GlobalStyles.scrollViewContainer}>
                <View style={GlobalStyles.header}>
                    <Text style={GlobalStyles.title}>פרטי הטיול שלך</Text>
                    <Text style={GlobalStyles.subtitle}>
                        ספר לנו עוד על הטיול שאתה מתכנן
                    </Text>
                </View>

                <View style={GlobalStyles.formContainer}>
                    <View style={GlobalStyles.inputGroup}>
                        <Text style={GlobalStyles.label}>יעד</Text>
                        <TextInput
                            style={GlobalStyles.input}
                            placeholder="לאן אתה מטייל?"
                            value={destination}
                            onChangeText={setDestination}
                        />
                    </View>

                    <View style={GlobalStyles.rowContainer}>
                        <View style={GlobalStyles.inputGroupHalfRight}>
                            <Text style={GlobalStyles.label}>תאריך התחלה</Text>
                            <TextInput
                                style={GlobalStyles.input}
                                placeholder="DD/MM/YYYY"
                                value={startDate}
                                onChangeText={setStartDate}
                            />
                        </View>

                        <View style={GlobalStyles.inputGroupHalf}>
                            <Text style={GlobalStyles.label}>תאריך סיום</Text>
                            <TextInput
                                style={GlobalStyles.input}
                                placeholder="DD/MM/YYYY"
                                value={endDate}
                                onChangeText={setEndDate}
                            />
                        </View>
                    </View>

                    <View style={GlobalStyles.rowContainer}>
                        <View style={GlobalStyles.inputGroupHalfRight}>
                            <Text style={GlobalStyles.label}>מספר מטיילים</Text>
                            <TextInput
                                style={GlobalStyles.input}
                                placeholder="1"
                                value={people}
                                onChangeText={setPeople}
                                keyboardType="number-pad"
                            />
                        </View>

                        <View style={GlobalStyles.inputGroupHalf}>
                            <Text style={GlobalStyles.label}>תקציב (₪)</Text>
                            <TextInput
                                style={GlobalStyles.input}
                                placeholder="תקציב משוער"
                                value={budget}
                                onChangeText={setBudget}
                                keyboardType="number-pad"
                            />
                        </View>
                    </View>

                    <View style={GlobalStyles.inputGroup}>
                        <Text style={GlobalStyles.label}>תחומי עניין</Text>
                        <View style={GlobalStyles.tagsContainer}>
                            {getTags().map((tag) => (
                                <TouchableOpacity
                                    key={tag}
                                    style={[
                                        GlobalStyles.tag,
                                        selectedTags.includes(tag) && GlobalStyles.tagSelected,
                                    ]}
                                    onPress={() => toggleTag(tag)}
                                >
                                    <Text
                                        style={[
                                            GlobalStyles.tagText,
                                            selectedTags.includes(tag) && GlobalStyles.tagTextSelected,
                                        ]}
                                    >
                                        {tag}
                                    </Text>
                                </TouchableOpacity>
                            ))}
                        </View>
                    </View>

                    <View style={GlobalStyles.inputGroup}>
                        <Text style={GlobalStyles.label}>העדפות נוספות</Text>
                        <TextInput
                            style={[GlobalStyles.input, GlobalStyles.textArea]}
                            placeholder="ספר לנו על העדפות מיוחדות או דברים שחשוב לך לראות בטיול..."
                            value={preferences}
                            onChangeText={setPreferences}
                            multiline
                            numberOfLines={4}
                            textAlignVertical="top"
                        />
                    </View>
                </View>
            </ScrollView>

            <View style={GlobalStyles.footer}>
                <TouchableOpacity
                    style={[
                        GlobalStyles.button,
                        !isFormValid() && GlobalStyles.buttonDisabled,
                    ]}
                    onPress={handleSave}
                    disabled={!isFormValid()}
                >
                    <Text style={GlobalStyles.buttonText}>שמור והמשך</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    );
};

export default TripInfoScreen;