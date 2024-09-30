// app/BookingScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const BookingScreen = ({ route }) => {
  const navigation = useNavigation(); // Hook to access navigation
  const { event } = route.params; // Get event details from params
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [tickets, setTickets] = useState(1);

  const handleBooking = () => {
    // Show alert for successful booking
    Alert.alert(
      'Booking Successful',
      `Booked ${tickets} ticket(s) for ${event.title} for ${name} (${email}).`,
      [
        {
          text: 'OK',
          onPress: () => {
            // Navigate back to Home screen after alert confirmation
            navigation.navigate('Home');
          },
        },
      ]
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Booking for {event.title}</Text>
      <TextInput
        placeholder="Your Name"
        value={name}
        onChangeText={setName}
        style={styles.input}
      />
      <TextInput
        placeholder="Your Email"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
        keyboardType="email-address"
      />
      <TextInput
        placeholder="Number of Tickets"
        value={tickets.toString()}
        onChangeText={(text) => setTickets(Number(text))}
        style={styles.input}
        keyboardType="numeric"
      />
      <Button title="Confirm Booking" onPress={handleBooking} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
});

export default BookingScreen;
