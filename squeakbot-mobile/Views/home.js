import React from 'react';
import { Button, Image, StyleSheet, Text, TextInput, View } from 'react-native';

// this is a page that is filled with lists of questions 

export default function Home() {
  return (
    <View style={styles.container}>
    <Text>Here are a list of questions!</Text>
    <Image 
      style={{width: 270, height: 270}}
      source={require('./assets/bot-pic.png')}
    />
    <Button title="View Question" onPress={() => console.log('login')}/>
  </View>
);
}

const styles = StyleSheet.create({
container: {
  flex: 1,
  backgroundColor: '#fff',
  alignItems: 'center',
  justifyContent: 'center',
},
});

  