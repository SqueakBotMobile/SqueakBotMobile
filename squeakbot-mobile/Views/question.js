import React from 'react';
import { Button, StyleSheet, Text, TextInput, View, KeyboardAvoidingView} from 'react-native';
import ModalExample from '../components/modal';
import StopWatch from '../components/timer2';

export default (props) => {
  const {navigate} = props.navigation;
  return (
    <>
    <View style={styles.container}>
      <Text>Question Page</Text>
      <Button title="Tap for Hint" onPress={() => console.log('hint showing')}/>
      <Button title="Tap for Input and Output" onPress={() => console.log('input and output')}/>
      {/* <Button title="Tap to Start Timer" onPress={() => console.log('starting timer')}/> */}
      {/* <Button title="Tap to see comments" onPress={() => navigate('Comments')}/> */}
      <Button title="Home" onPress={() => navigate('Login')}/>
      {/* <ModalExample /> */}
      <View style={styles.stopWatch}>
        <StopWatch />
      </View>
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
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
  stopWatch: {
    flex: 1,
    justifyContent: 'flex-end'
  }
});


  