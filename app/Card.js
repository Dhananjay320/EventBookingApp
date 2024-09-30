import React from 'react';
import { TouchableOpacity, View, Text, Image, StyleSheet } from 'react-native';

const Card = ({ event, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.card}>
      <Image source={{ uri: event.thumbnail }} style={styles.image} />
      <Text style={styles.title}>{event.title}</Text>
      <Text style={styles.date}>{event.date}</Text>
      <Text style={styles.location}>{event.location}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    margin: 10,
    borderRadius: 10,
    overflow: 'hidden',
    backgroundColor: '#fff',
    elevation: 3,
  },
  image: {
    width: '100%',
    height: 150,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    padding: 10,
  },
  date: {
    fontSize: 14,
    color: '#555',
    paddingHorizontal: 10,
  },
  location: {
    fontSize: 14,
    color: '#555',
    paddingBottom: 10,
    paddingHorizontal: 10,
  },
});

export default Card;
