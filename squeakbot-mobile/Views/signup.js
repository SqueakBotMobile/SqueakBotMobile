import React from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { FormLabel, FormInput, FormValidationMessage } from 'react-native-elements';

export default (props) => {
  const [username, setUsername] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const {navigate} = props.navigation;
  return (
    <View style={styles.container}>
      <Text>Sign Up Page</Text>
      {/* <FormLabel>Username</FormLabel> */}
      {/* <FormInput onChangeText={setUsername} /> */}
      {/* <FormValidationMessage>This field is required</FormValidationMessage> */}

      <Button title="Home" onPress={() => navigate('Login')}/>
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


  