import React from 'react';
import { View, Text, StyleSheet, Button, ImageBackground } from 'react-native';
import { Card } from 'react-native-paper';

const tickets = [
    { id: '1', type: 'Platinum', price: '$200' },
    { id: '2', type: 'Gold', price: '$100' },
    { id: '3', type: 'Sliver', price: '$50' },
  ];

export default function ConcertDetailsScreen({ route, navigation }) {
  const { concertId } = route.params;
  const concert = { id: concertId,  name: 'The OG concert', location: 'Tanjore', date: '2024-12-20'};

  return (
    <ImageBackground
      source={require('C:/Users/254062/Inlustro/cfa/assets/background.png')}
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.container}>
        <Text style={styles.title}>{concert.name}</Text>
        <Text style={styles.subtitle}>{concert.location}</Text>
        <Text style={styles.date}>{concert.date}</Text>

        <Text style={styles.ticketHeader}>Available Tickets</Text>
        {tickets.map((ticket) => (
          <Card style={styles.card} key={ticket.id}>
            <View style={styles.cardContent}>
              <Text style={styles.ticketType}>{ticket.type}</Text>
              <Text style={styles.ticketPrice}>{ticket.price}</Text>
              <Button
                title="Book Ticket"
                color="#6200EE"
                onPress={() => navigation.navigate('TicketBooking', { ticketId: ticket.id })}
              />
            </View>
          </Card>
        ))}
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
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 20,
    color: '#555',
    marginBottom: 5,
  },
  date: {
    fontSize: 16,
    color: '#888',
    marginBottom: 20,
  },
  ticketHeader: {
    fontSize: 20,
    fontWeight: '500',
    color: '#333',
    marginBottom: 10,
  },
  card: {
    marginBottom: 15,
    borderRadius: 8,
    elevation: 4,
    backgroundColor: '#fff',
  },
  cardContent: {
    padding: 15,
  },
  ticketType: {
    fontSize: 18,
    fontWeight: '500',
    color: '#333',
  },
  ticketPrice: {
    fontSize: 16,
    color: '#6200EE',
    marginBottom: 10,
  },
});
