import React from "react";
import {Text, View, StyleSheet } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import { styles } from "./styles";


export default function Footer(){
    return(
        <LinearGradient style={styles.viewFooter} colors={['#D9AFD9', '#97D9E1']}>
            <Text style={styles.textFooter}>Chris - SoulCode</Text>
        </LinearGradient>
    )
}