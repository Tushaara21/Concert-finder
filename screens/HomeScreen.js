import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, ImageBackground, Dimensions } from 'react-native';
import { Card } from 'react-native-paper';

const concerts = [
  { id: '1', name: 'Rap with Hip Hop', location: 'Coimbatore', date: '2024-12-01' },
  { id: '2', name: 'The OG concert', location: 'Tanjore', date: '2024-12-20' },
  { id: '3', name: 'U1 Drugs', location: 'Chennai', date: '2024-12-10' },
  { id: '4', name: 'Feel with GV', location: 'Trichy', date: '2024-12-30' },
];

export default function HomeScreen({ navigation }) {
  return (
    <ImageBackground
      source={require('C:/Users/254062/Inlustro/cfa/assets/background.png')}
      style={styles.background}
      imageStyle={{ resizeMode: 'cover' }}
    >
      <View style={styles.overlay}>
        <Text style={styles.title}>VibeScout</Text>
        <Text style={styles.subtitle}>Upcoming Concerts</Text>

        <FlatList
          data={concerts}
          renderItem={({ item }) => (
            <Card style={styles.card}>
              <TouchableOpacity onPress={() => navigation.navigate('ConcertDetails', { concertId: item.id })}>
                <View style={styles.cardContent}>
                  <Text style={styles.cardTitle}>{item.name}</Text>
                  <Text style={styles.cardText}>{item.location}</Text>
                  <Text style={styles.cardText}>{item.date}</Text>
                </View>
              </TouchableOpacity>
            </Card>
          )}
          keyExtractor={(item) => item.id}
        />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  overlay: {
    flex: 1,
    padding: 20,
    backgroundColor: 'rgba(244, 244, 249, 0.8)',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#6200EE',
    textAlign: 'center',
    marginVertical: 20,
  },
  subtitle: {
    fontSize: 20,
    fontWeight: '500',
    color: '#333',
    marginBottom: 20,
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
  cardTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
  },
  cardText: {
    fontSize: 14,
    color: '#555',
  },
});
