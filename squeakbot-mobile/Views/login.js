import React from 'react';

import { Button, Header, Image, StyleSheet, Text, TextInput, View, KeyboardAvoidingView } from 'react-native';
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
      source={require('../assets/stripes.jpg')}
      style={styles.background}>
        
       <Image 
        style={styles.image}
        source={require('../assets/squeakboticon.png')}
        />

        <If condition={this.state.loggedIn}>
          <Text>Welcome!</Text>
          <Button title="Display Token" onPress={() => this.displayToken()} />
          <Button title="Go to the app" onPress={() => navigate('List')} />
        </If>

        <If condition={!this.state.loggedIn}>
          <View style={styles.textGroup}>
          <TextInput
            placeholder="username"
            onChangeText={(username) => this.setState({usernameInput: username})}
            value={this.state.username}
            style={{ 
              borderBottomColor: '#000000',
              // borderBottomWidth: 1, 
              padding: '5%'
            }}
          />
          <TextInput
            placeholder="password"
            onChangeText={(password) => this.setState({ passwordInput: password })}
            secureTextEntry={true}
            style={{ 
              borderBottomColor: '#000000',
              // borderBottomWidth: 1, 
              padding: '5%' 
            }}
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
          <View style={{ height: 100 }} />
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

