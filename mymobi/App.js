import React,{useState} from 'react';
import { StyleSheet, Text, View, Button, Switch } from 'react-native';

function App() {
  const [outputtext,setText] = useState("test native app");
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  
  return (
    <View style={styles.container}>
      <Text>React Native</Text>
      <Text>{outputtext}</Text>
      <Button title="Click Me" onPress={() => setText('Text Changed')}/>
      <Button title="Click Me" onPress={() => setText('test Native App')}/>
      <Switch
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
    </View>
  );
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
