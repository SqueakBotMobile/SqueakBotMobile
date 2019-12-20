import React from 'react';
import { Button, StyleSheet, Text, TextInput, View, KeyboardAvoidingView, ImageBackground} from 'react-native';

import StopWatch from '../components/timer2';


export default (props) => {
  const {navigate} = props.navigation;

  //get the ID from the question chosen
  //fetch one quetsions, using the ID

  return (
    <>
    <View>

    <ImageBackground 
      source={require('../assets/orange.jpg')}
      style={styles.background}>

      {/* <Text>Question Page</Text> */}

        {/* <Button title="Tap for Hint" onPress={() => console.log('hint showing')}/> */}
        {/* <Button title="Tap for Input and Output" onPress={() => console.log('input and output')}/> */}
        {/* <Button title="Tap to see comments" onPress={() => navigate('Comments')}/> */}

      <View style={styles.returnHome}>
        <Button title="Home" onPress={() => navigate('Login')}/>
       </View>
        {/* <ModalExample /> */}


      <View style={styles.stopWatch}>
          <StopWatch />
      </View>

      </ImageBackground>

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
  background: {
    height: '100%',
    width: '100%',
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
  },
  returnHome: {
    flex: 1,
    justifyContent: 'flex-end'
  }
});
