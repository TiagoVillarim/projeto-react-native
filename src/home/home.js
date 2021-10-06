import React from "react";
import { View, Text, TextInput, Button, SafeAreaView, StyleSheet } from "react-native";
import { styles, cards, button } from '../components/styles/style';
import { useState } from "react";


export default function Home(){

  const [state, setState] = useState('calcular');
  const [altura, setAltura] = useState('');
  const [peso, setPeso] = useState('')

  function clicar(altura, peso){
    var soma = altura + peso
    setState(soma)
  }

  return(
    <SafeAreaView style={style.container}>
     <View style={styles.body}>
        <Text style={styles.headerTitle}>OneBitHealth</Text>
      <View style={cards.cardsBox}>
        <Text style={cards.cardTextTitle}>faça seu teste</Text>
        <TextInput style={cards.cardInput} keyboardType="numeric" placeholder="altura: ex-1.75" value={altura} onChange={event => setAltura(event.target.value)}/>
        <TextInput style={cards.cardInput} keyboardType="numeric" placeholder="peso: ex-82.5kg" value={peso} onChange={event => setPeso(event.target.value)}/>
      </View>
      <View style={button.buttonContainer}>
        <Button 
         style={button.button}
         title={state}
         color="#5EC8B5"
         onPress={() => clicar()}
         />
      </View>
     </View>
    </SafeAreaView>
  )
}


const style = StyleSheet.create({
  container: {
    flex: 1,
  },
});


