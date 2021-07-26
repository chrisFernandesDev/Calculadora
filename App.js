import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView} from 'react-native';
import Header from './src/componentes/Header';
import Content from './src/componentes/Content';
import Footer from './src/componentes/Footer';

export default function App() {
  return (
    <>
      <SafeAreaView style={{flex:1}}>
        <StatusBar hidden={false} backgroundColor="00BCD4" />  
        <Header/>
        <Content/>
        <Footer/>
      </SafeAreaView>  
    </>
  );
}

