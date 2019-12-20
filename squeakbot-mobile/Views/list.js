import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, TextInput, View, Image, Button, FlatList, ImageBackground } from 'react-native';
import { AsyncStorage } from 'react-native'

import { LOCAL_API_URL } from 'react-native-dotenv';

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
  const {navigate} = props.navigation;

  const res = useFetch(`${LOCAL_API_URL}/questions/challenges`, {})
  if(!res.response) return <Text>loading...</Text>

  return (
  // <View style={styles.container}>
    <ImageBackground 
      source={require('../assets/orange.jpg')}
      style={styles.background}>

    <View>
      <Text style={styles.title}>List of Questions</Text>
      <FlatList 
          keyExtractor={item => item.challenges}
          data={res.response}
          renderItem={({ item }) => {
            return (
              <>
              <Text style={styles.listItem}>
                {item.challenges}
              </Text>

              <View style={styles.buttonView}>
                <Button title="view question" onPress={() => navigate('Question')}></Button>
              </View>
              </>
            )
          }
        }
      />
  </View>


    </ImageBackground>
//  </View>
  );
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 50
  },
  title: {
    marginTop: 30,
    marginRight: 30,
    marginLeft: 80,
    padding: 10,
    fontSize: 30,
    color: 'black'
  },
  textStyle: {
    marginRight: 30,
    marginLeft: 30,
    fontSize: 30,
    color: 'black',
  },
  listItem: {
    padding: 50
  },
  background: {
    height: '100%',
    width: '100%',
  }, 
  buttonView: {
    flexDirection: 'row-reverse',
    padding: 10
  }
});
