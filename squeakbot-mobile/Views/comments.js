import React from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default (props) => {
    const {navigate} = props.navigation;
    return (
    <View style={styles.container}>
      <Text>Comment Section</Text>
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


  