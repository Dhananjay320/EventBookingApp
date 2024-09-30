import React, { useEffect, useState } from 'react';
import { View, FlatList, ActivityIndicator, Text, TextInput, StyleSheet } from 'react-native';
import { fetchEvents } from './api'; // Fetch function
import Card from './Card';

const HomeScreen = ({ navigation }) => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const loadEvents = async () => {
      try {
        const data = await fetchEvents(); 
        setEvents(data);
      } catch (error) {
        console.error('Error fetching events:', error);
      } finally {
        setLoading(false);
      }
    };

    loadEvents();
  }, []);
 
  const filteredEvents = events.filter(event =>
    event.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const renderEvent = ({ item }) => (
    
    <Card 
      event={item} 
      onPress={() => navigation.navigate('EventDetail', { event: item })} // Navigate to EventDetail
    />
    
    
  );

  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" style={styles.loadingIndicator} />;
  }

  return (
    <View style={styles.container}>
      <TextInput
        value={searchQuery}
        onChangeText={setSearchQuery}
        placeholder="Search events"
        style={styles.searchInput}
      />
      <FlatList
        data={filteredEvents}
        renderItem={renderEvent}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.flatListContent}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f5f5f5', // Light background color
  },
  searchInput: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 50,
    paddingHorizontal: 10,
    marginBottom: 16,
    backgroundColor: '#ffffff', // White background for input
    fontSize: 16,
  },
  flatListContent: {
    paddingBottom: 16, // Add some padding to the bottom
  },
  loadingIndicator: {
    flex: 1,
    justifyContent: 'center', // Center the loading indicator
    alignItems: 'center', // Center the loading indicator
    backgroundColor: '#f5f5f5',
  },
});

export default HomeScreen;
