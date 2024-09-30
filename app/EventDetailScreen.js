import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const EventDetailScreen = ({ route }) => {
  const navigation = useNavigation(); // Hook to access navigation
  const { event } = route.params;

  return (
    <View style={styles.container}>
      {/* Back Button */}
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Text style={styles.backButtonText}>Back</Text>
      </TouchableOpacity>

      {/* Event Image */}
      <Image source={{ uri: event.image }} style={styles.image} />

      {/* Event Details */}
      <Text style={styles.title}>{event.title}</Text>
      <Text style={styles.date}>{event.date}</Text>
      <Text style={styles.location}>{event.location}</Text>
      <Text style={styles.description}>{event.description}</Text>

      {/* Book Now Button */}
      <TouchableOpacity 
        style={styles.bookButton} 
        onPress={() => navigation.navigate('Booking', { event })} // Navigate to BookingScreen
      >
        <Text style={styles.bookButtonText}>Book Now</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff', // Background color
  },
  backButton: {
    marginBottom: 10,
    padding: 10,
    backgroundColor: '#007BFF', // Back button color
    borderRadius: 5,
    alignSelf: 'flex-start', // Align to the left
  },
  backButtonText: {
    color: '#fff', // Text color
    fontWeight: 'bold',
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    borderRadius: 10, // Rounded corners for the image
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  date: {
    fontSize: 16,
    color: '#888', // Color for the date
  },
  location: {
    fontSize: 16,
    color: '#888', // Color for the location
    marginVertical: 5,
  },
  description: {
    fontSize: 16,
    color: '#666', // Description color
    marginVertical: 10,
  },
  bookButton: {
    marginTop: 20,
    padding: 15,
    backgroundColor: '#28a745', // Book button color
    borderRadius: 5,
    alignItems: 'center', // Center the text
  },
  bookButtonText: {
    color: '#fff', // Text color for the book button
    fontWeight: 'bold',
    fontSize: 18,
  },
});

export default EventDetailScreen;
