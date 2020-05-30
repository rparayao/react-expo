import React from 'react';
import Main from './app/Main';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Button, StyleSheet, Text, View } from 'react-native';


const Stack = createStackNavigator();

function HomeScreen({ navigation }) {
  return (
    <Button
      title="Go to Jane's profile"
      onPress={() =>
        navigation.navigate('Profile', { name: 'Jane' })
      }
    />
  );
}


function DetailsScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
    </View>
  );
}




export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen}
          options={{ title: 'Welcome' }}
        />
        <Stack.Screen name="Profile" component={DetailsScreen} /> 
      </Stack.Navigator>  
    </NavigationContainer>  
    )
    // return <Main />
  // return (
  //   <View style={styles.container}>
  //     <Text>Finn is stinky!</Text>
  //     <Text>he is ugly</Text>
  //     <Text>no</Text>
  //     <Text>The quick brown fox jumps over the lazy dog over the banks of the river.</Text>
  //   </View>
  // );
}

