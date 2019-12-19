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
        <View style={styles.textGroup}>
        <TextInput
          placeholder="username"
          style={styles.textInput}
        />
        <TextInput
          placeholder="password"
          secureTextEntry={true}
          style={styles.textInput}
        />
        </View>
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
    flex: 2,
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
    flex: 1,
    fontSize: 20,
    // fontWeight: 'bold',
    borderBottomColor: '#000000', 
    paddingTop: '27%',
    paddingLeft: '8%',

   },
   textGroup: {
     flex: 1,
     flexDirection: 'row', 
     justifyContent: 'space-between'
   },
  button: {
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: '30%',
    marginLeft: '10%',
    marginRight: '10%'
  }, 
  background: {
    height: '100%',
    width: '100%',
  },
  footer: {
    color: 'grey',
    fontSize: 16,
    marginLeft: 10,
    marginRight: 120, 
    marginBottom: 5,
   
  }
});

