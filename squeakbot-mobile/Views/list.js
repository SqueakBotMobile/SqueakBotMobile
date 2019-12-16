import React from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default class Login extends React.Component {
  static navigationOptions = {
    title: 'List of questions'
  };
  render() {
    const {navigate} = this.props.navigation;
    return (
    <View style={styles.container}>
      <Text>Our Questions</Text>
      <Button title="Home" onPress={() => navigate('Login')}/>
    </View>
  );
 }
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


  