import React from "react";
import {Text, View, StyleSheet, Image } from "react-native";
import { styles } from "./styles";
import { LinearGradient } from 'expo-linear-gradient';

export default function Header(){
    return(
        <LinearGradient style={styles.viewHeader} colors={['#D9AFD9', '#97D9E1']}>
            <Text style={styles.textHeader}>Calculadora</Text>
        </LinearGradient>
    )
}