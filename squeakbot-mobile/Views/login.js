import React from 'react';
import { Button, Header, Image, StyleSheet, Text, TextInput, View, KeyboardAvoidingView, ImageBackground } from 'react-native';

export default class Login extends React.Component {
  static navigationOptions = {
    title: 'Welcome to SqueakBot', 
  }
  render() {
    const {navigate} = this.props.navigation;
    return (
  
    <KeyboardAvoidingView
      style={styles.container}
      behavior="padding"
    >
      <ImageBackground 
      source={require('../assets/stripes.jpg')}
      style={styles.background}>
        
      <Image 
        style={styles.image}
        source={require('../assets/squeakboticon.png')}
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
      
        {/* <View style={{ height: 100 }} /> */}
        <View>
          <Text style={styles.footer}>&copy; squeakbot</Text>
        </View>
        
    </ImageBackground>
    </KeyboardAvoidingView>
  );
 }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d3d3d3',
    padding: 0
  },
  image: {
    width: 140,
    height: 140,
    // justifyContent: 'center',
    // alignItems: 'center',
    marginLeft: 200,
    marginTop: 28,
    marginRight: 100,
  },
  textInput: { 
    fontSize: 20,
    borderBottomColor: '#000000', 
    paddingTop: '8%',
    paddingLeft: '8%'
   },
  button: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: '10%',
    marginLeft: '10%',
    marginRight: '10%'
  }, 
  background: {
    height: '100%',
    width: '100%',
    marginBottom: '20%'
  },
  footer: {
    color: 'grey',
    fontSize: 16,
    marginLeft: 135,
    marginRight: 120, 
    marginBottom: 5,
    // backgroundColor: 'white'
  }
});

