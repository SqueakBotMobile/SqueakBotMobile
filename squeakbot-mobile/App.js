import React from 'react';
import { Button, Image, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>SqueakBot Mobile Version!</Text>
      <Image 
        style={{width: 270, height: 270}}
        source={require('./assets/bot-pic.png')}
      />
      <TextInput
        placeholder="email"
      />
        <TextInput
        placeholder="password"
      />
      <Button title="Login" onPress={() => console.log('login')}/>
      <Button title="Signup" onPress={() => console.log('signup')}/>
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
