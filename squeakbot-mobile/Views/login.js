import React from 'react';
import { Button, Image, StyleSheet, Text, TextInput, View, KeyboardAvoidingView } from 'react-native';

export default class Login extends React.Component {
  static navigationOptions = {
    title: 'Welcome to SqueakBot'
  };
  render() {
    const {navigate} = this.props.navigation;
    return (
    <KeyboardAvoidingView 
      style={styles.container}
      behavior="padding" enabled>
      <Image 
        style={{width: 200, height: 200}}
        source={require('../assets/bot-pic.png')}
      />
      <TextInput
        placeholder="email"
      />
        <TextInput
        placeholder="password"
      />
      <Button title="Login" onPress={() => navigate('List')}/>
      <Button title="Signup" onPress={() => navigate('Signup')}/>
    </KeyboardAvoidingView>
  );
 }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    // padding: '40%'
  },
  textStyle: {
    fontSize: 30,
   color: 'teal',
  },
  image: {
    width: 200,
    height:200,
    resizeMode: 'stretch'
  },
});

