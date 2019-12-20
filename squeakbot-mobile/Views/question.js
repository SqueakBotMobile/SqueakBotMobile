import React, { useState, useEffect } from 'react';
import { Button, StyleSheet, Text, TextInput, View, KeyboardAvoidingView, ImageBackground} from 'react-native';
import { AsyncStorage } from 'react-native'

import { LOCAL_API_URL } from 'react-native-dotenv';

import StopWatch from '../components/timer2';

const useFetch = (url, options) => {
  const [response, setResponse] = useState(null)
  const [error, setError] = useState(null)
  useEffect(() => {
    const fetchData = async () => {
      try {
        options.headers = {'Authorization': `Bearer ${await AsyncStorage.getItem('@token')}`}
        const res = await fetch(url, options)
        const json = await res.json()
        setResponse(json)
      } catch (e) {
        setError(e)
      }
    }
    fetchData()
  }, [])
  return { response, error }
}

export default (props) => {
  const { navigate } = props.navigation;
  const { questionId } = props.navigation.state.params

  //=========== GET ONE QUESTION by ID =============
  const res = useFetch(`${LOCAL_API_URL}/questions/challenges/${questionId}`, {})
  if(!res.response) return <Text>loading...</Text>

  return (
    <>
    <View>

    <ImageBackground 
      source={require('../assets/orange.jpg')}
      style={styles.background}>

    <View style={styles.questionContainer}>
      <Text style={styles.listItem}>{res.response[0]}</Text>
    </View>

        {/* <Button title="Tap for Hint" onPress={() => console.log('hint showing')}/> */}
        {/* <Button title="Tap for Input and Output" onPress={() => console.log('input and output')}/> */}
        {/* <Button title="Tap to see comments" onPress={() => navigate('Comments')}/> */}

      {/* <View style={styles.returnHome}>
        <Button title="Home" onPress={() => navigate('Login')}/>
       </View> */}



      <View style={styles.stopWatch}>
          <StopWatch />
      </View>

      </ImageBackground>

    </View>
    </>
  );
}

const styles = StyleSheet.create({
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
  }, 
  listItem: {
    padding: 50, 
    fontSize: 30
  },
  questionContainer: {
    flex: 1, 
    letterSpacing: 2,
    alignItems: 'center',
    justifyContent: 'center',
  }
});
