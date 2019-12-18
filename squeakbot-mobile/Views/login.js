import React from 'react';
import { Button, Header, Image, StyleSheet, Text, TextInput, View, KeyboardAvoidingView, ImageBackground } from 'react-native';

export default class Login extends React.Component {
  static navigationOptions = {
    title: 'Welcome to SqueakBot'
  };
  render() {
    const {navigate} = this.props.navigation;
    return (
      
    <KeyboardAvoidingView
      style={styles.container}
      behavior="padding"
    >
      <ImageBackground 
      source={require('../assets/darkblue.jpg')}
      style={styles.background}>
        
      <Image 
        style={styles.image}
        source={require('../assets/mouse_only.png')}
        />
        <TextInput
          placeholder="username"
          style={styles.textInput}
        />
        <TextInput
          placeholder="password"
          secureTextEntry={true}
          style={styles.textInput}
        />
        <View style={styles.button}>
          <Button title="Login" onPress={() => navigate('List')}/>
          <Button title="Signup" onPress={() => navigate('Signup')}/>
        </View>
      
        <View style={{ height: 100 }} />
        
    </ImageBackground>
    </KeyboardAvoidingView>
  );
 }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d3d3d3',
    padding: 20
  },
  image: {
    width: 140,
    height: 140,
    // justifyContent: 'center',
    // alignItems: 'center',
    marginLeft: 100,
    marginTop: 100,
    marginRight: 100,
  },
  textInput: { 
    borderBottomColor: '#000000', 
    padding: '5%'
   },
  button: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20
  }, 
  background: {
    height: '100%',
    width: '100%',
    marginBottom: '8%'
  }
});

