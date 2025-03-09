import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TextInput,
  TouchableOpacity,
  FlatList,
  Image,
  SafeAreaView,
  StatusBar,
  Dimensions,
} from 'react-native';
import { COLORS, STRINGS, ROUTES } from '../../constants';

// Dados simulados para demonstração
const RECOMMENDED_ROUTES = [
  {
    id: '1',
    title: 'שביל ישראל צפון',
    image: 'https://via.placeholder.com/150',
    location: 'גליל עליון',
    duration: '3 ימים',
    rating: 4.8,
  },
  {
    id: '2',
    title: 'חוף הים התיכון',
    image: 'https://via.placeholder.com/150',
    location: 'תל אביב - הרצליה',
    duration: 'יום שלם',
    rating: 4.5,
  },
  {
    id: '3',
    title: 'מסלול הכנרת',
    image: 'https://via.placeholder.com/150',
    location: 'כנרת',
    duration: '2 ימים',
    rating: 4.7,
  },
];

const SAVED_ROUTES = [
  {
    id: '4',
    title: 'טיול במדבר יהודה',
    image: 'https://via.placeholder.com/150',
    location: 'מדבר יהודה',
    date: '15/05/2025',
  },
  {
    id: '5',
    title: 'יום כיף בירושלים',
    image: 'https://via.placeholder.com/150',
    location: 'ירושלים',
    date: '01/06/2025',
  },
];

const { width } = Dimensions.get('window');

const HomeScreen = ({ navigation }) => {
  const [searchText, setSearchText] = useState('');

  const renderRecommendedItem = ({ item }) => (
    <TouchableOpacity
      style={styles.recommendedCard}
      onPress={() => navigation.navigate(ROUTES.ROUTE_DETAIL, { routeId: item.id })}
    >
      <View style={styles.cardImageContainer}>
        <Image source={{ uri: item.image }} style={styles.cardImage} />
        <View style={styles.ratingContainer}>
          <Text style={styles.ratingText}>{item.rating}</Text>
        </View>
      </View>
      <View style={styles.cardInfo}>
        <Text style={styles.cardTitle}>{item.title}</Text>
        <View style={styles.cardDetails}>
          <Text style={styles.cardLocation}>{item.location}</Text>
          <Text style={styles.cardDuration}>{item.duration}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  const renderSavedRouteItem = ({ item }) => (
    <TouchableOpacity
      style={styles.savedRouteCard}
      onPress={() => navigation.navigate(ROUTES.ROUTE_DETAIL, { routeId: item.id })}
    >
      <Image source={{ uri: item.image }} style={styles.savedRouteImage} />
      <View style={styles.savedRouteInfo}>
        <Text style={styles.savedRouteTitle}>{item.title}</Text>
        <Text style={styles.savedRouteLocation}>{item.location}</Text>
        <Text style={styles.savedRouteDate}>{item.date}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor={COLORS.WHITE} />
      
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>{STRINGS.APP_NAME}</Text>
        <TouchableOpacity onPress={() => navigation.navigate(ROUTES.PROFILE)}>
          <View style={styles.profileIconPlaceholder}>
            <Text style={styles.profileIconText}>י</Text>
          </View>
        </TouchableOpacity>
      </View>
      
      <ScrollView style={styles.scrollView}>
        {/* Search Bar */}
        <View style={styles.searchContainer}>
          <TextInput
            style={styles.searchInput}
            placeholder={STRINGS.SEARCH_PLACEHOLDER}
            value={searchText}
            onChangeText={setSearchText}
            textAlign="right"
          />
          <TouchableOpacity style={styles.searchButton}>
            <Text style={styles.searchButtonText}>{STRINGS.SEARCH}</Text>
          </TouchableOpacity>
        </View>
        
        {/* Recommended Routes */}
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>{STRINGS.RECOMMENDED}</Text>
          <FlatList
            data={RECOMMENDED_ROUTES}
            renderItem={renderRecommendedItem}
            keyExtractor={(item) => item.id}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.recommendedList}
          />
        </View>
        
        {/* Saved Routes */}
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>{STRINGS.SAVED_ROUTES}</Text>
          {SAVED_ROUTES.length > 0 ? (
            <FlatList
              data={SAVED_ROUTES}
              renderItem={renderSavedRouteItem}
              keyExtractor={(item) => item.id}
              scrollEnabled={false}
              contentContainerStyle={styles.savedRoutesList}
            />
          ) : (
            <View style={styles.noRoutesContainer}>
              <Text style={styles.noRoutesText}>{STRINGS.NO_ROUTES}</Text>
            </View>
          )}
        </View>
        
        {/* Create New Route Button */}
        <TouchableOpacity
          style={styles.createRouteButton}
          onPress={() => navigation.navigate(ROUTES.ROUTE_CREATE)}
        >
          <Text style={styles.createRouteButtonText}>{STRINGS.CREATE_ROUTE}</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.BACKGROUND,
  },
  header: {
    flexDirection: 'row-reverse', // RTL support
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: COLORS.WHITE,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.LIGHT_GRAY,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: COLORS.PRIMARY,
  },
  profileIconPlaceholder: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: COLORS.PRIMARY,
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileIconText: {
    color: COLORS.WHITE,
    fontSize: 18,
    fontWeight: 'bold',
  },
  scrollView: {
    flex: 1,
  },
  searchContainer: {
    flexDirection: 'row-reverse', // RTL support
    paddingHorizontal: 16,
    paddingVertical: 16,
    backgroundColor: COLORS.WHITE,
  },
  searchInput: {
    flex: 1,
    height: 46,
    borderWidth: 1,
    borderColor: COLORS.LIGHT_GRAY,
    borderRadius: 8,
    paddingHorizontal: 12,
    backgroundColor: COLORS.WHITE,
    marginLeft: 8,
  },
  searchButton: {
    backgroundColor: COLORS.PRIMARY,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 16,
    borderRadius: 8,
  },
  searchButtonText: {
    color: COLORS.WHITE,
    fontWeight: 'bold',
  },
  sectionContainer: {
    paddingHorizontal: 16,
    paddingTop: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 12,
    textAlign: 'right', // RTL support
  },
  recommendedList: {
    paddingRight: 8,
  },
  recommendedCard: {
    width: width * 0.7,
    backgroundColor: COLORS.WHITE,
    borderRadius: 12,
    overflow: 'hidden',
    marginLeft: 12,
    marginBottom: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  cardImageContainer: {
    position: 'relative',
  },
  cardImage: {
    width: '100%',
    height: 150,
  },
  ratingContainer: {
    position: 'absolute',
    bottom: 10,
    right: 10,
    backgroundColor: 'rgba(0,0,0,0.7)',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 16,
  },
  ratingText: {
    color: COLORS.WHITE,
    fontWeight: 'bold',
    fontSize: 12,
  },
  cardInfo: {
    padding: 12,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 6,
    textAlign: 'right', // RTL support
  },
  cardDetails: {
    flexDirection: 'row-reverse', // RTL support
    justifyContent: 'space-between',
  },
  cardLocation: {
    fontSize: 14,
    color: COLORS.GRAY,
  },
  cardDuration: {
    fontSize: 14,
    color: COLORS.SECONDARY,
  },
  savedRoutesList: {
    paddingBottom: 16,
  },
  savedRouteCard: {
    flexDirection: 'row-reverse', // RTL support
    backgroundColor: COLORS.WHITE,
    borderRadius: 12,
    overflow: 'hidden',
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  savedRouteImage: {
    width: 80,
    height: 80,
  },
  savedRouteInfo: {
    flex: 1,
    padding: 12,
    justifyContent: 'center',
    alignItems: 'flex-end', // RTL support
  },
  savedRouteTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  savedRouteLocation: {
    fontSize: 14,
    color: COLORS.GRAY,
    marginBottom: 4,
  },
  savedRouteDate: {
    fontSize: 12,
    color: COLORS.PRIMARY,
  },
  noRoutesContainer: {
    backgroundColor: COLORS.WHITE,
    padding: 20,
    borderRadius: 12,
    alignItems: 'center',
  },
  noRoutesText: {
    fontSize: 16,
    color: COLORS.GRAY,
  },
  createRouteButton: {
    backgroundColor: COLORS.PRIMARY,
    margin: 16,
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
    marginBottom: 30,
  },
  createRouteButtonText: {
    color: COLORS.WHITE,
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default HomeScreen;