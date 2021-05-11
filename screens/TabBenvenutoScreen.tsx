import * as React from 'react';
import { StyleSheet, ScrollView, TouchableHighlight } from 'react-native';

import { Text, View } from '../components/Themed';

import ImageBenvenuto from "../assets/images/undraw_newspaper_k72w.svg";

import AppLoading from 'expo-app-loading';
import { useFonts, Charmonman_700Bold } from '@expo-google-fonts/charmonman';

export default function TabBenvenutoScreen() {
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
        <Text style={styles.title}>#feedati</Text>
        <ImageBenvenuto
          style={{marginLeft: 10}}
          height={350}
          width={350}          
        />
        <View style={styles.buttonContainer}>
          <TouchableHighlight onPress={() => onPressButton('REGISTRATI')} underlayColor="white">
            <View style={styles.buttonSx}>
              <Text style={styles.buttonSxText}>REGISTRATI</Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight onPress={() => onPressButton('ACCEDI')} underlayColor="white">
            <View style={styles.buttonDx}>
              <Text style={styles.buttonDxText}>ACCEDI</Text>
            </View>
          </TouchableHighlight>
        </View>
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
  title: {
    fontSize: 40,    
    fontFamily: 'Charmonman_700Bold',
    textAlign: 'center'
  },
  buttonContainer: {
    margin: 10,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  buttonSx: {
    margin: 10,
    width: 200,
    alignItems: 'center',
    backgroundColor: '#00B0FF',
    borderRadius: 12
  },
  buttonSxText: {
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 20,
    color: 'white'    
  },
  buttonDx: {
    margin: 10,
    width: 100,
    alignItems: 'center'
  },
  buttonDxText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'gray',    
    textAlign: 'center',
    padding: 20,
    borderStyle: 'solid',
    borderWidth: 2,
    borderColor: 'gray',    
    borderRadius: 12
  }
});

function onPressButton(name: string) {
  alert('You tapped the button ' + name + '!');
}