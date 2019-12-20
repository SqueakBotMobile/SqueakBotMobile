import React, { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { LOCAL_API_URL } from 'react-native-dotenv';

import If from '../components/if'


export default (props) => {
  const [username, setUsername] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [isLoggedIn, setLogin] = React.useState(false);
  const {navigate} = props.navigation;

  handleSubmit = () => {
    fetch(`${LOCAL_API_URL}/signup`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({username, email, password})
    }).then(token => {
      setLogin(true);
    });
  }

  return (
    <View style={styles.container}>
      <If condition={isLoggedIn}>
        <Text style={styles.welcomeLogin}>Welcome, you are logged in!</Text>
        {/* <Button title="Display Token" onPress={() => this.displayToken()} /> */}
        <Button style={{marginBottom: 50}}title="Choose a Question" onPress={() => navigate('List')} />
      </If>
      <Text>Sign Up</Text>
      <TextInput
        value={email}
        placeholder="enter email"
        style={{ 
          borderBottomColor: '#000000',
          borderBottomWidth: 1, 
          padding: '10%' }}
          onChangeText={setEmail}
          autoCapitalize="none"
          autoCorrect={false}
      />
      <TextInput
        value={username}
        placeholder="enter username"
        style={{ 
          borderBottomColor: '#000000',
          borderBottomWidth: 1,
          padding: '10%' }}
        onChangeText={setUsername}
        autoCapitalize="none"
        autoCorrect={false}
      />
      <TextInput
        value={password}
        placeholder="enter password"
        style={{  
          borderBottomColor: '#000000',
          borderBottomWidth: 1, 
          padding: '10%' }}
        onChangeText={setPassword}
        autoCapitalize="none"
        autoCorrect={false}
      />
      <Button 
        title="create user" 
        onPress={() => {handleSubmit()}}
        style={{
          paddingTop: 30
        }}
      />
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
