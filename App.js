import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Navigation from "./src/components/Navbar/Navbar";
import {Button} from "react-native-elements";

const Drawer = createDrawerNavigator();

export default function App({navigation}) {
  return (
    <Navigation/>

  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
