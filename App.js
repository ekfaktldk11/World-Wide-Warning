import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SysNavigator from './navigation/SysNavigator'

export default function App() {
  return (
    <View style={styles.screen}>
      <SysNavigator/>
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1
  }
});