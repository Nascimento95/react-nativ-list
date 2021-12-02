
import React from 'react';
import { StyleSheet, Text, View } from 'react-native'
import List from './components/list';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>salut tlm </Text>
      <List />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
