import React, { useState } from 'react';
import { View, Text, Button, TextInput, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

// Sign Up Screen
function SignUpScreen({ navigation }) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = () => {
    // Perform sign-up logic
    const userData = {
      firstName,
      lastName,
      email,
      password
    };
    console.log('Sign-up data:', userData);
    // Add your sign-up logic or API calls here
    // For simplicity, we're just logging the form data
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign Up Screen</Text>
      <TextInput
        placeholder="First Name"
        value={firstName}
        onChangeText={setFirstName}
        style={[styles.input, { width: '45%' }]}
      />
      <TextInput
        placeholder="Last Name"
        value={lastName}
        onChangeText={setLastName}
        style={[styles.input, { width: '45%' }]}
      />
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        style={[styles.input, { width: '45%' }]}
      />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={[styles.input, { width: '45%' }]}
      />
      <Button title="Sign Up" onPress={handleSignUp} color="#841584" />
      <Button
        title="Go to Login"
        onPress={() => navigation.navigate('Login')}
        color="#841584"
      />
    </View>
  );
}

// Login Screen
function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Perform login logic
    const userData = {
      email,
      password
    };
    console.log('Login data:', userData);
    // Add your login logic or API calls here
    // For simplicity, we're just logging the form data
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login Screen</Text>
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        style={[styles.input, { width: '45%' }]}
      />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={[styles.input, { width: '45%' }]}
      />
      <Button title="Login" onPress={handleLogin} color="#841584" />
      <Button
        title="Go to Profile"
        onPress={() => navigation.navigate('Profile')}
        color="#841584"
      />
    </View>
  );
}

function ProfileScreen({ navigation }) {
  const [username, setUsername] = useState('');
  const [bio, setBio] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [location, setLocation] = useState('');
  const [occupation, setOccupation] = useState('');
  const [interests, setInterests] = useState('');

  const handleSave = () => {
    // Perform save logic
    console.log('Username:', username);
    console.log('Bio:', bio);
    console.log('Age:', age);
    console.log('Gender:', gender);
    console.log('Location:', location);
    console.log('Occupation:', occupation);
    console.log('Interests:', interests);
    // Add your save logic or API calls here
    // For simplicity, we're just logging the form data
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Profile Screen</Text>
      <TextInput
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
        style={[styles.input, { width: '45%' }]}
      />
      <TextInput
        placeholder="Bio"
        value={bio}
        onChangeText={setBio}
        multiline
        style={[styles.input, styles.textarea,{width:'45%'}]}
      />
      <TextInput
        placeholder="Age"
        value={age}
        onChangeText={setAge}
        keyboardType="numeric"
        style={[styles.input, { width: '45%' }]}
      />
      <TextInput
        placeholder="Gender"
        value={gender}
        onChangeText={setGender}
        style={[styles.input, { width: '45%' }]}
      />
      <TextInput
        placeholder="Location"
        value={location}
        onChangeText={setLocation}
        style={[styles.input, { width: '45%' }]}
      />
      <TextInput
        placeholder="Occupation"
        value={occupation}
        onChangeText={setOccupation}
        style={[styles.input, { width: '45%' }]}
      />
      <TextInput
        placeholder="Interests"
        value={interests}
        onChangeText={setInterests}
        style={[styles.input, { width: '45%' }]}
      />
      <Button title="Save" onPress={handleSave} color="#841584" />
      <Button title="Go Back" onPress={() => navigation.goBack()} color="#841584" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginVertical: 10,
    width: '80%',
    backgroundColor: '#fff',
  },
  textarea: {
    height: 100,
  },
});

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
