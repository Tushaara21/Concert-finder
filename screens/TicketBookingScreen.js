import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, ImageBackground } from 'react-native';

export default function TicketBookingScreen({ route }) {
  const { ticketId } = route.params;
  const ticket = { id: ticketId, type: 'VIP', price: '$200' };

  const [isBooked, setIsBooked] = useState(false);

  const handleBooking = () => {
    setIsBooked(true);
  };

  return (
    <ImageBackground
      source={require('C:/Users/254062/Inlustro/cfa/assets/background.png')}
      style={styles.background}
    >
      <View style={styles.container}>
        <Text style={styles.title}>Booking {ticket.type} Ticket</Text>
        <Text style={styles.price}>Price: {ticket.price}</Text>
        {isBooked ? (
          <Text style={styles.successMessage}>Booking Successful!</Text>
        ) : (
          <Button
            title="Confirm Booking"
            color="#6200EE"
            onPress={handleBooking}
          />
        )}
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
 background: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'rgba(244, 244, 249, 0.8)',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#6200EE',
    marginBottom: 20,
  },
  price: {
    fontSize: 20,
    color: '#555',
    marginBottom: 30,
  },
  successMessage: {
    fontSize: 18,
    color: 'green',
    marginTop: 20,
  },
});
