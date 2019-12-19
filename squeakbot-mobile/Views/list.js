import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, TextInput, View, Image, Button, FlatList, ImageBackground } from 'react-native';

import { LOCAL_API_URL } from 'react-native-dotenv';

const useFetch = (url, options) => {
  const [response, setResponse] = useState(null)
  const [error, setError] = useState(null)
  useEffect(() => {
    const fetchData = async () => {
      try {
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

  const res = useFetch(`${LOCAL_API_URL}/questions/challenges`)
  if(!res.response) return <Text>loading...</Text>

  return (
  <View style={styles.container}>
    <Text style={styles.textStyle}>List of Questions</Text>
    <FlatList 
        keyExtractor={item => item.name}
        data={res.response.results}
        renderItem={({ item }) => {
          return (
            <Text style={styles.textStyle}>
              {item.name}
            </Text>
          )
        }
        }
      />

    <Button title="View Question" onPress={() => navigate('Question')}/>
    {/* </ImageBackground> */}
  </View>
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
  textStyle: {
    marginRight: 30,
    marginLeft: 30,
    fontSize: 30,
    color: 'teal',
  }
});
