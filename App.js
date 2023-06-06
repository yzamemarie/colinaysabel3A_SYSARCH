import React, { useState } from 'react';
import { View, Text, Button, TextInput, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

//create navigator
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Main" component={Main} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

//function to navigate to main page
function Main({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Spartans!</Text> 
      <Text style={styles.sub}>What is your profession?!</Text>
      <Text> </Text>
      <Button title="RESPONSE" onPress={() => alert('AWO AWO')}/>
      <Text> </Text>
      <Button title="LOGIN" onPress={() => navigation.navigate('Login')}/>
      <Text> </Text>
      <Button title="REGISTER" onPress={() => navigation.navigate('Register')}/>
    </View>
  );
}

//function to navigate to main page
function Login({ navigation }) {
  const [password, setPass] = useState('');

  const handlePassChange = (text) => {
    setPass(text);
  };

  const handleLogSubmit = () => {
    // Handle login form submission
    alert('Login successful!');
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput style={styles.input} placeholder="Username"/>
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={handlePassChange}
        secureTextEntry
      />
      <Button style={styles.submit} title="Submit Login Form" onPress={handleLogSubmit}/>
    </View>
  );
}

//function to navigate to main page
function Register({ navigation }) {
  const [password, setPass] = useState('');

  const handlePassChange = (text) => {
    setPass(text);
  };

  const handleRegSubmit = () => {
    // Handle registration form submission
    alert('Registration successful!');
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Register</Text>
      <TextInput style={styles.input} placeholder="Username"/>
      <TextInput style={styles.input} placeholder="Email"/>
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={handlePassChange}
        secureTextEntry
      />
      <Button style={styles.submit} title="Submit" onPress={handleRegSubmit}/>
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

  title: {
    fontSize: 25,
  },

  sub: {
    fontSize: 18,
  },

  input: {
    height: 40,
    width: '80%',
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  submit: {
    marginTop: 10,
  },

});

