import React, { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { LOCAL_API_URL } from 'react-native-dotenv';

export default (props) => {
  const [username, setUsername] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const {navigate} = props.navigation;

  handleSubmit = (event) => {
    event.preventDefault();
    fetch(`${LOCAL_API_URL}/signup`, {
      
    })
    // define request.body with username, email and password
    // then response is token
    // save that token in AsyncStorage
  }

  return (
    <View style={styles.container}>
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
