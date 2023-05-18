import React from "react"
import { StatusBar } from 'expo-status-bar';
import { Button} from "@react-native-material/core";
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
    
      <Text>owo</Text>
      <Text> </Text>
      <Button title = "CLICK ME!" onPress = {() => alert("Hello World!")}/>
      <StatusBar style="auto" />
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

