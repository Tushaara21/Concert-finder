import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import TicketBookingScreen from './screens/TicketBookingScreen';
import RapwithHipHop from './screens/RapwithHipHop';
import Theogconcert from './screens/Theogconcert';
import U1drugs from './screens/U1drugs';
import Feelwithgv from './screens/Feelwithgv';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: { backgroundColor: '#6200EE' },
          headerTintColor: '#fff',
          headerTitleStyle: { fontWeight: 'bold' },
        }}
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="ConcertDetails" component={ConcertDetails} />
        <Stack.Screen name="TicketBooking" component={TicketBookingScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// Helper Component to Route Based on Concert ID
function ConcertDetails({ route, navigation }) {
  const { concertId } = route.params;

  // Map concertId to the respective component
  const screens = {
    '1': RapwithHipHop,
    '2': Theogconcert,
    '3': U1drugs,
    '4': Feelwithgv,
  };

  const ConcertComponent = screens[concertId] || (() => <Text>Error: Invalid Concert ID</Text>);
  return <ConcertComponent route={route} navigation={navigation} />;
}
