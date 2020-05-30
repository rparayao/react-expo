// app/Main.js
import React from 'react';
import { StyleSheet, Text, View, StatusBar,  FlatList, ScrollView } from 'react-native';
import { LinearGradient } from 'expo';
import { gradientStart, gradientEnd } from './utils/Colors';
import { primaryGradientArray } from './utils/Colors';
import Header from './components/Header';
import Input from './components/Input';



export default function Main() {
    const headerTitle = 'To Do';
    //   state = {
//     inputValue: ''
//   };
//   newInputValue = value => {
//     this.setState({
//       inputValue: value
//     });
//   };
//   render() {
//     const { inputValue } = this.state;


    return (
        <ScrollView>
        <View style={styles.centered}>
            <Header title={headerTitle} />
            <StatusBar barStyle="light-content" />
            {/* <Text>Open up App.js to start working on your appx!</Text> */}
        </View>
        <Text style={{ fontSize: 96 }}>qqqq</Text>
        <Text style={{ fontSize: 96 }}>ddddd me plz</Text>
        <Text style={{ fontSize: 96 }}>Scroll me plz</Text>
        </ScrollView>

    // <View style={styles.container}>
    //     <FlatList
    // data={[
    //     {key: 'Devin'},
    //     {key: 'Dan'},
    //     {key: 'Dominic'},
    //     {key: 'Jackson'},
    //     {key: 'James'},
    //     {key: 'Joel'},
    //     {key: 'John'},
    //     {key: 'Jillian'},
    //     {key: 'Jimmy'},
    //     {key: 'Julie'},
    // ]}
    // renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
    // />
    // </View>
    );
  }
// }
const stylesxx = StyleSheet.create({
  container: {
    flex: 1
  },
  centered: {
    alignItems: 'center'
  },
  inputContainer: {
    marginTop: 40,
    paddingLeft: 15
  }
});

const styles = StyleSheet.create({
    centered: {
        alignItems: 'center'
      },    
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }); 


  const stylesxxxxx = StyleSheet.create({
    container: {
     flex: 1,
     paddingTop: 22
    },
    item: {
      padding: 10,
      fontSize: 18,
      height: 44,
    },
  })
  