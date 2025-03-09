import React, { useState, useEffect } from 'react';
import {
    View,
    Text,
    ScrollView,
    TouchableOpacity,
    FlatList,
    Image,
} from 'react-native';
import GlobalStyles from '../styles/theme';
import { COLORS, SPACING, RADIUS } from '../styles/theme';
import * as storageService from '../services/storageService';

const HomeScreen = ({ navigation, route }) => {
    const [userName, setUserName] = useState('מטייל');
    const [userType, setUserType] = useState(null);
    const [savedTrips, setSavedTrips] = useState([]);
    const [recommendedRoutes, setRecommendedRoutes] = useState([]);

    // טעינת נתונים בעת טעינת המסך
    useEffect(() => {
        loadData();
        // טעינת מסלולים מומלצים (בינתיים דמה)
        loadRecommendedRoutes();
    }, []);

    // פונקציה לטעינת נתונים מהאחסון המקומי
    const loadData = async () => {
        try {
            // טעינת סוג מטייל
            const type = await storageService.getFromStorage('travellerType');
            if (type) {
                setUserType(type);
            }

            // טעינת מידע על המשתמש (בינתיים דמה)
            // בעתיד יבוא מהשרת
            setUserName('מטייל');

            // טעינת טיולים שמורים (בינתיים דמה)
            const tripInfo = await storageService.getFromStorage('tripInfo');
            if (tripInfo) {
                setSavedTrips([tripInfo]);
            }
        } catch (error) {
            console.error('שגיאה בטעינת נתונים:', error);
        }
    };

    // מסלולים מומלצים - בינתיים נתוני דמה
    const loadRecommendedRoutes = () => {
        const demoRoutes = [
            {
                id: '1',
                title: 'טיול בצפון הארץ',
                image: null, // בהמשך יהיו תמונות אמיתיות
                days: 3,
                rating: 4.8,
                type: 'nature',
            },
            {
                id: '2',
                title: 'סיור במוזיאונים בירושלים',
                image: null,
                days: 2,
                rating: 4.6,
                type: 'urban',
            },
            {
                id: '3',
                title: 'טיול אתגרי בדרום',
                image: null,
                days: 4,
                rating: 4.9,
                type: 'adventure',
            },
            {
                id: '4',
                title: 'מסלול תרבותי בתל אביב',
                image: null,
                days: 2,
                rating: 4.7,
                type: 'cultural',
            },
        ];

        // סינון מסלולים לפי סוג המטייל
        if (userType) {
            const filtered = demoRoutes.filter(route => route.type === userType);
            setRecommendedRoutes([...filtered, ...demoRoutes.filter(route => route.type !== userType)]);
        } else {
            setRecommendedRoutes(demoRoutes);
        }
    };

    // הפונקציה להצגת השם של סוג המטייל בעברית
    const getTravellerTypeText = (type) => {
        switch (type) {
            case 'nature':
                return 'חובב טבע';
            case 'urban':
                return 'מטייל עירוני';
            case 'adventure':
                return 'מחפש אתגר';
            case 'cultural':
                return 'שוחר תרבות';
            case 'family':
                return 'טיול משפחתי';
            default:
                return 'מטייל';
        }
    };

    // פריט מסלול מומלץ
    const renderRouteItem = ({ item }) => (
        <TouchableOpacity
            style={{
                marginRight: SPACING.medium,
                width: 240,
                backgroundColor: COLORS.lightGray,
                borderRadius: RADIUS.medium,
                overflow: 'hidden',
                ...GlobalStyles.SHADOWS.small,
            }}
            onPress={() => {
                // נווט לפרטי מסלול בהמשך
                alert(`פרטי מסלול: ${item.title}`);
            }}
        >
            {/* מקום לתמונה אמיתית בהמשך */}
            <View 
                style={{
                    height: 120,
                    backgroundColor: COLORS.mediumGray,
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <Text style={{ color: COLORS.darkGray }}>תמונת מסלול</Text>
            </View>

            <View style={{ padding: SPACING.medium }}>
                <Text style={{ fontWeight: 'bold', fontSize: 16, marginBottom: 5 }}>{item.title}</Text>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text>{item.days} ימים</Text>
                    <Text style={{ color: COLORS.primary }}>⭐ {item.rating}</Text>
                </View>
                <Text style={{ marginTop: 5, color: COLORS.darkGray }}>{getTravellerTypeText(item.type)}</Text>
            </View>
        </TouchableOpacity>
    );

    // פריט טיול שמור
    const renderSavedTripItem = ({ item }) => (
        <TouchableOpacity
            style={{
                backgroundColor: COLORS.lightGray,
                borderRadius: RADIUS.medium,
                padding: SPACING.medium,
                marginBottom: SPACING.medium,
                ...GlobalStyles.SHADOWS.small,
            }}
            onPress={() => {
                navigation.navigate('TripInfo', { 
                    tripInfo: item,
                    travellerType: userType
                });
            }}
        >
            <Text style={{ fontWeight: 'bold', fontSize: 16 }}>{item.destination || 'טיול ללא שם'}</Text>
            <View style={{ flexDirection: 'row', marginTop: 5 }}>
                <Text style={{ marginRight: 10 }}>תאריך: {item.startDate}</Text>
                {item.endDate && <Text>עד: {item.endDate}</Text>}
            </View>
            {item.tags && item.tags.length > 0 && (
                <View style={{ flexDirection: 'row', flexWrap: 'wrap', marginTop: 5 }}>
                    {item.tags.slice(0, 3).map((tag, index) => (
                        <View key={index} style={{
                            backgroundColor: COLORS.selectedBackground,
                            padding: 5,
                            borderRadius: RADIUS.small,
                            marginRight: 5,
                            marginTop: 5,
                        }}>
                            <Text style={{ fontSize: 12 }}>{tag}</Text>
                        </View>
                    ))}
                    {item.tags.length > 3 && (
                        <View style={{
                            padding: 5,
                            borderRadius: RADIUS.small,
                            marginTop: 5,
                        }}>
                            <Text style={{ fontSize: 12 }}>+{item.tags.length - 3}</Text>
                        </View>
                    )}
                </View>
            )}
        </TouchableOpacity>
    );

    return (
        <View style={GlobalStyles.container}>
            {/* כותרת וברכה */}
            <View style={[GlobalStyles.header, { padding: SPACING.medium }]}>
                <Text style={GlobalStyles.title}>שלום, {userName}</Text>
                <Text style={GlobalStyles.subtitle}>
                    {userType 
                        ? `נמצאו מסלולים מומלצים עבורך כ${getTravellerTypeText(userType)}`
                        : 'מה תרצה לחקור היום?'}
                </Text>
            </View>

            <ScrollView style={GlobalStyles.scrollViewContainer}>
                {/* מסלולים מומלצים */}
                <View style={{ marginBottom: SPACING.large }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: SPACING.medium }}>
                        <Text style={{ fontSize: 18, fontWeight: 'bold' }}>מסלולים מומלצים</Text>
                        <TouchableOpacity>
                            <Text style={{ color: COLORS.primary }}>הצג הכל</Text>
                        </TouchableOpacity>
                    </View>

                    <FlatList
                        data={recommendedRoutes}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        renderItem={renderRouteItem}
                        keyExtractor={item => item.id}
                        contentContainerStyle={{ paddingRight: SPACING.medium }}
                    />
                </View>

                {/* טיולים שמורים */}
                <View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: SPACING.medium }}>
                        <Text style={{ fontSize: 18, fontWeight: 'bold' }}>הטיולים שלי</Text>
                        <TouchableOpacity onPress={() => navigation.navigate('TravellerType')}>
                            <Text style={{ color: COLORS.primary }}>צור טיול חדש</Text>
                        </TouchableOpacity>
                    </View>

                    {savedTrips.length > 0 ? (
                        <FlatList
                            data={savedTrips}
                            renderItem={renderSavedTripItem}
                            keyExtractor={(item, index) => `trip-${index}`}
                            scrollEnabled={false}
                        />
                    ) : (
                        <View style={{
                            backgroundColor: COLORS.lightGray,
                            borderRadius: RADIUS.medium,
                            padding: SPACING.large,
                            alignItems: 'center',
                        }}>
                            <Text style={{ color: COLORS.darkGray, marginBottom: 10 }}>
                                אין לך טיולים שמורים עדיין
                            </Text>
                            <TouchableOpacity
                                style={GlobalStyles.button}
                                onPress={() => navigation.navigate('TravellerType')}
                            >
                                <Text style={GlobalStyles.buttonText}>צור טיול חדש</Text>
                            </TouchableOpacity>
                        </View>
                    )}
                </View>
            </ScrollView>
        </View>
    );
};

export default HomeScreen;