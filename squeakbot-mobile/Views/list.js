import React from 'react';
import { Button, StyleSheet, Text, TextInput, View, ImageBackground } from 'react-native';

export default (props) => {
  const {navigate} = props.navigation;
  return (
  <View style={styles.container}>
    <ImageBackground 
      source={require('../assets/orange.jpg')}
      style={styles.background}>
    <Text style={styles.textStyle}>List of Questions</Text>
    <Button title="View Question" onPress={() => navigate('Question')}/>
    </ImageBackground>
  </View>
  );
}

const styles = StyleSheet.create({
  background: {
    height: '100%',
    width: '100%',
    marginBottom: '8%'
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textStyle: {
    margin: 30,
    fontSize: 30,
    color: 'teal',
  },
  image: {
    width: 200,
    height:200,
    resizeMode: 'stretch'
  },
});


  