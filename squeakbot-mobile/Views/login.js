import React from 'react';

import { Button, Header, Image, StyleSheet, Text, TextInput, View, KeyboardAvoidingView, ImageBackground } from 'react-native';
import { AsyncStorage } from 'react-native'

import base64 from 'react-native-base64';

import { REACT_APP_SECRET, LOCAL_API_URL } from 'react-native-dotenv'
import jwt from 'expo-jwt';

import If from '../components/if'

export default class Login extends React.Component {
  static navigationOptions = {
    title: 'Welcome to SqueakBot'
  };

  constructor(props) {
    super(props);
    this.state = {
      usernameInput: '',
      passwordInput: '',
      loggedIn: false,
      login: this.login,
      logout: this.logout,
      user: {},
    };
  }

  login = (username, password) => {
    console.log(username, password)
    // This is foul and unsafe ... but when working offline / testmode ess oh kay
    // if (testLogins[username]) {
    //   this.validateToken(testLogins[username]);
    // }
    // else {
      fetch(`${LOCAL_API_URL}/signin`, {
        method: 'POST',
        headers: new Headers({
          "Authorization": `Basic ${base64.encode(`${this.state.usernameInput}:${this.state.passwordInput}`)}`
        }),
      })
        .then(response => response.text())
        .then(token => this.validateToken(token))
        .catch(console.error);
    // }
  }

  validateToken = async (token) => {
    try {
      let user = jwt.decode(token, REACT_APP_SECRET);
      this.setLoginState(true, token, user);
    }
    catch (e) {
      this.setLoginState(false, null, {});
      console.log("Token Validation Error", e);
    }
  };

  logout = () => {
    this.setLoginState(false, null, {});
  };

  ///////////
  setLoginState = async (loggedIn, token, user) => {
    await AsyncStorage.setItem('@token', token)
    this.setState({ token, loggedIn, user });
  };

  displayToken = async () => {
    const result = await AsyncStorage.getItem('@token')
    if (result !== null) {
      console.log(result)
      return 'hello'
    } else {
      return 'no token retrieved'
    }
  }

  // componentDidMount() {
  //   this.validateToken()
  // }
  ///////////

  render() {
    const {navigate} = this.props.navigation;
    return (
      <KeyboardAvoidingView
        style={styles.container}
        behavior="padding"
      >
      <ImageBackground 
      source={require('../assets/orange.jpg')}
      style={styles.background}>
        
        <Image 
          style={styles.image}
          source={require('../assets/squeakboticon.png')}
        />

        <If condition={this.state.loggedIn}>
          <Text style={styles.welcomeLogin}>Welcome, you are logged in!</Text>
          {/* <Button title="Display Token" onPress={() => this.displayToken()} /> */}
          <Button title="Choose a Question" onPress={() => navigate('List')} />
        </If>


        <If condition={!this.state.loggedIn}>

          <View style={styles.textGroup}>
            <TextInput
              placeholder="username"
              onChangeText={(username) => this.setState({usernameInput: username})}
              value={this.state.username}
              style={styles.textInput}
            />
            <TextInput
              placeholder="password"
              onChangeText={(password) => this.setState({ passwordInput: password })}
              secureTextEntry={true}
              style={styles.textInput}
            />
            </View>
           

            <View style={styles.button}>
            {/* <Button title="Login" onPress={() => navigate('List')}/> */}
            <Button
              title="Login"
              onPress={() => this.login(this.state.usernameInput, this.state.passwordInput)}
            />
            <Button
              title="Signup"
              onPress={() => navigate('Signup')}
            />
            </View>
          
          {/* <View style={{ height: 100 }} /> */}
        </If>


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
    padding: 0, 
  },
  image: {
    width: 140,
    height: 140,
    // justifyContent: 'center',
    // alignItems: 'center',
    marginLeft: 200,
    marginTop: 28,
    // marginRight: 200,
  },
  textInput: { 
    flex: 2,
    fontSize: 20,
    borderBottomColor: '#000000', 
    paddingTop: '2%',
    paddingLeft: '8%',
   },
   welcomeLogin: {
    fontSize: 25,
    padding: 20, 
    justifyContent: 'center',
    alignItems: 'center',
   },
   textGroup: {
     flex: 1,
     flexDirection: 'column', 
     justifyContent: 'space-between',
     borderBottomColor: '#000000',
     padding: '5%'
   },
  button: {
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: '5%',
    marginLeft: '25%',
    marginRight: '25%'
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

