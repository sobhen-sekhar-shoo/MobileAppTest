import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.Textcolor}>Open up App.js to start working on your app!</Text>
      <Button onPress={() => {alert('You tapped the button!'); }} title="Press Me"/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Textcolor:{
    color:'#7fff00'
  }
});
