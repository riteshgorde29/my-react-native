import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View ,Button} from 'react-native';

export default function App() {
  const [cnt , setCnt]=useState(0)
  const fnIncrement=()=>{
     setCnt(cnt+1)
  }
  return (
    <View>
      <Text style={styles.result}>{cnt}</Text>
      <Button
      onPress={fnIncrement}
      title="Increment"
      color="#841584"
    />
    </View>
  );
}

const styles=StyleSheet.create({
    result:{
      color:'red',
      fontSize:'30px'
    }
})