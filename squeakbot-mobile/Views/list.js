import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, TextInput, View, Image, Button, FlatList } from 'react-native';

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

  const res = useFetch("https://squeakbot-mobile.herokuapp.com/questions/challenges")
  if(!res.response) return <Text>loading...</Text>

  return (
  <View style={styles.container}>
    <Text style={styles.title}>List of Questions</Text>

    <FlatList 
        keyExtractor={item => item.name}
        data={res.response.results}
        renderItem={({ item }) => {
          return (
            <Text style={styles.textStyle}>
              {item.name}
            </Text>
          )
        }}
      />

    <Button title="View Question" onPress={() => navigate('Question')}/>
  </View>
  );
}
 
const styles = StyleSheet.create({
  list: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 50
  },
  textStyle: {
    fontSize: 20,
    color: 'teal',
    marginVertical: 25
  },
  title: {
    fontSize: 50,
    color: 'orange',
  }
});
