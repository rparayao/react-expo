import React,{ Component }  from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Button, StyleSheet, Text, View } from 'react-native';


const Stack = createStackNavigator();

class CounterUp extends Component {

  state = {count: 100}

  componentDidMount() {
    setInterval(() => {
      this.setState({count: this.state.count - 1})
    }, 1000)
  }

  render() {
    const {count} = this.state
    const {color, size} = this.props

    return (
      <Text style={{color, fontSize: size}}>
        {count}
      </Text>
    )
  }
}


function HomeScreen({ navigation }) {
  return (
    <>
    <Button
      title="Go to the count up page.."
      onPress={() =>
        navigation.navigate('Counting up', { name: 'Counter' })
      }
    />
    <View style={counterStyles.container}>
    <CounterUp color={'lightblue'} size={16} />
    <CounterUp color={'skyblue'} size={32} />
    <CounterUp color={'steelblue'} size={80} />
    <CounterUp color={'darkblue'} size={140} />
  </View>
  </>
  );
}


class Counter extends Component {
  state = {count: 0}
  componentDidMount() {
    setInterval(() => {
      this.setState({count: this.state.count + 1})
    }, 1000)
  }

  render() {
    const {count} = this.state
    const {color, size} = this.props

    return (
      <Text style={{color, fontSize: size}}>
        {count}
      </Text>
    )
  }
}

function DetailsScreen() {
  return (
    <View style={counterStyles.container}>
    <Counter color={'lightblue'} size={16} />
    <Counter color={'skyblue'} size={32} />
    <Counter color={'steelblue'} size={80} />
    <Counter color={'darkblue'} size={140} />
  </View>
  );
}
const counterStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen}
          options={{ title: 'Welcome the counter App.' }}
        />
        <Stack.Screen name="Counting up" component={DetailsScreen} /> 
      </Stack.Navigator>  
    </NavigationContainer>  
    )
}

