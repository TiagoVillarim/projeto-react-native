import React from "react";
import { View, Text, TextInput, Button, SafeAreaView, StyleSheet } from "react-native";
import { styles, cards, button } from '../components/styles/style';
import { useState } from "react";


export default function Home(){

  const [state, setState] = useState('Calcule seu IMC');
  const [soma, setSoma] = useState('')
  const [altura, setAltura] = useState(null);
  const [peso, setPeso] = useState(null);
  const [botao, setBotao] = useState('calcular');


  function Soma(){
    return(
      setState('Seu imc é de:'),
      setSoma( (peso/(altura * altura)).toFixed(2) )
    );
  };

  function validar(){
    if(altura != null && peso != null){
      Soma();
      setAltura(null);
      setPeso(null);
      setBotao('calcular novamente')
      return;
    }else{
      setState('Preencha os campos abaixo!')
      setSoma('');
      setBotao('calcular')
    }
  };


  return(
    <SafeAreaView style={style.container}>
     <View style={styles.body}>
        <Text style={styles.headerTitle}>OneBitHealth</Text>
      <View style={cards.cardsBox}>
        <Text style={cards.cardTextTitle}>{state}</Text>
        <Text style={cards.result}>{soma}</Text>
        <TextInput style={cards.cardInput} keyboardType="numeric" value={altura} placeholder="altura: ex-1.75"  onChangeText={setAltura}/>
        <TextInput style={cards.cardInput} keyboardType="numeric" value={peso} placeholder="peso: ex-82.5kg"  onChangeText={setPeso}/>
      </View>
      <View style={button.buttonContainer}>
        <Button 
         style={button.button}
         title={botao}
         color="#5EC8B5"
         onPress={() => validar()}
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


