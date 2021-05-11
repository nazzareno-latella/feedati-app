import React from 'react';
import { StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import { Card } from 'react-native-elements'

import { Text, View } from '../components/Themed';

import ImageLeggi from "../assets/images/undraw_Updates_re_o5af.svg";

import AppLoading from 'expo-app-loading';
import { useFonts, Charmonman_700Bold } from '@expo-google-fonts/charmonman';
import { PoiretOne_400Regular } from '@expo-google-fonts/poiret-one';

import feeds from '../feeds.json';

export default function TabLeggiScreen({navigation}: {navigation: any}) {
  let [fontsLoaded] = useFonts({
    Charmonman_700Bold,
    PoiretOne_400Regular
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <ScrollView 
        style={styles.scrollView} 
        contentContainerStyle={styles.contentContainer}
      >
        <Text style={styles.title}>#feed  </Text> 
        <ImageLeggi
          style={{marginLeft: 10}}
          height={350}
          width={350}          
        />

        {
          feeds.catalog.map((f, i) => {
            return (
              <TouchableOpacity key={i} onPress={() => navigation.navigate('NotizieScreen', {rss: f.rss})}>
                <Card key={i}>
                  <View key={i} style={styles.feed}>
                    <Image
                      style={styles.image}
                      source={require('../assets/images/rss-feed-symbol_blue.png')}
                    />
                    <Text style={styles.name}>{f.name}</Text>
                  </View>
                </Card>
              </TouchableOpacity>
            );
          })
        }
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollView: {    
    backgroundColor: 'white',    
  },
  contentContainer: {    
    justifyContent: 'center',
    paddingBottom: 20
  },
  title: {
    fontSize: 40,    
    fontFamily: 'Charmonman_700Bold',
    textAlign: 'center'
  },
  feed: {    
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  image: {
    width: 30,
    height: 30
  },
  name: {
    fontSize: 20,    
    fontFamily: 'PoiretOne_400Regular',
    textAlignVertical: 'bottom'
  }
});
