import React from 'react';
import { Button, StyleSheet, Text, TextInput, View, KeyboardAvoidingView} from 'react-native';
// import CountDown from 'react-native-countdown-component';


export default (props) => {
  const {navigate} = props.navigation;
  return (
    <KeyboardAvoidingView style={styles.container}>
      <Text>Question Page</Text>
      <Button title="Tap for Hint" onPress={() => console.log('hint showing')}/>
      <Button title="Tap for Input and Output" onPress={() => console.log('input and output')}/>
      <Button title="Tap to Start Timer" onPress={() => console.log('starting timer')}/>
      <Button title="Tap to see comments" onPress={() => navigate('Comments')}/>
      <Button title="Home" onPress={() => navigate('Login')}/>
      {/* <CountDown
        until={60 * 10 + 30}
        size={30}
        onFinish={() => alert('Finished')}
        digitStyle={{backgroundColor: '#FFF'}}
        digitTxtStyle={{color: '#1CC625'}}
        timeToShow={['M', 'S']}
        timeLabels={{m: 'MM', s: 'SS'}}
      /> */}
    </KeyboardAvoidingView>
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


  