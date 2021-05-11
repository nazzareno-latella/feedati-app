import React, { useEffect, useState } from 'react';
import { StyleSheet, ScrollView, Linking, useWindowDimensions, ActivityIndicator, Alert } from 'react-native';
import { Card, Button } from 'react-native-elements'
import  HTML from "react-native-render-html";

import AppLoading from 'expo-app-loading';
import { useFonts, Charmonman_700Bold } from '@expo-google-fonts/charmonman';

export default function NotizieScreen({route}: {route: any}) {
  const { rss } = route.params;
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const contentWidth = useWindowDimensions().width;

  var FEED_API_URL = 'https://api.rss2json.com/v1/api.json?rss_url=';
  var url : string = FEED_API_URL + encodeURIComponent(rss);
  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  let [fontsLoaded] = useFonts({
    Charmonman_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (    
    <ScrollView 
            style={styles.scrollView} 
            contentContainerStyle={styles.contentContainer}
          >
            {
              isLoading ? <ActivityIndicator size="large" color="#00B0FF" /> :
              data.status != 'ok' ? showError(data.message) :
              data.items.map((news, index) => {
                return (
                  <Card key={index}>
                    <Card.Title style={styles.cardTitle}>{news.title}</Card.Title>
                    <Card.Divider/>
                    <Card.Image source={{uri: news.thumbnail !== "" ? news.thumbnail : (news.enclosure.link !== "" ? news.enclosure.link : 'https://i.imgur.com/NO25iZV.png')}} style={styles.cardImage}>
                      <HTML containerStyle={styles.cardHtml} source={{ html: news.description !== "" ? news.description : "<a>"}} contentWidth={contentWidth} ignoredTags={['a', 'img']} />
                      <Button                        
                        buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0, backgroundColor: '#00B0FF'}}
                        title='LEGGI'
                        onPress={ ()=>{ Linking.openURL(news.link)}}
                      />
                    </Card.Image>
                  </Card>
                );
              })
            }
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollView: {    
    backgroundColor: 'white'
  },
  contentContainer: {    
    justifyContent: 'center'    
  }, 
  cardTitle: {
    textAlign: 'justify'
  },
  cardImage: {
    resizeMode: 'cover'    
  },
  cardHtml: {
    marginTop: 150,
    marginBottom: 10
  }
});

function showError (error: string) {
    Alert.alert(
      "Errore",
      error,
      [
        { text: "OK" }
      ]
    );
}    