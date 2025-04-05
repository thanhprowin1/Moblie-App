import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const [count, setCount] = useState<number>(0);
  const [name, setName] = useState<string>("");
  const [age, setAge] = useState<number>(0);
  //jsx
  return (
    <View style={styles.container}>
      <View>
      <Text style={{fontSize:40,fontWeight:"600"}}>Name:{name}</Text>
      <TextInput 
        autoCapitalize={"characters"} 
        multiline
        onChangeText={(value) => setName(value)}
        style={{
        borderColor: 'black',
        borderWidth: 1,
        padding: 10,
        width: 200,        
      }}/>
      </View>
      <View>
      <Text style={{fontSize:40,fontWeight:"600"}}>Tuoi:{age}</Text>
      <TextInput 
        
        onChangeText={(value) => setAge(+value)}
        style={{
        borderColor: 'black',
        borderWidth: 1,
        padding: 10,
        width: 200,        
      }}
        keyboardType='numeric'/>
      </View>
      <Text style={styles.heardder}>
        count = {count}
      </Text>
      <View>
        <Button color="black" title='Tang' onPress={() => setCount(count + 1)}/>
      </View>
    </View>
  );
}

//khong co css
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
heardder: {
  fontSize: 20,
  color: 'blue',
}
});
