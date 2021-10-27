import React from "react";
import { SafeAreaView, View, FlatList, Text, TextInput, Button, StyleSheet, Pressable, Keyboard, TouchableOpacity } from "react-native";
import { styles, cards, button, lists, error} from '../components/styles/style';
import { useState } from "react";


export default function Home(){

  const [state, setState] = useState('Calcule seu IMC');
  const [soma, setSoma] = useState('')
  const [altura, setAltura] = useState(null);
  const [peso, setPeso] = useState(null);
  const [botao, setBotao] = useState('calcular');
  const [imcList, setImcList] = useState([]);
  const [errorMSG, setErrorMSG] = useState('')


  function Soma(){
    let alturaFormat = altura.replace("," , ".");
    let pesoFormat = peso.replace("," , ".");
    let totalImc = (pesoFormat/(alturaFormat * alturaFormat)).toFixed(2);
    setImcList((array) => [...array, {id: new Date().getTime(), imc: totalImc}]); 
    setSoma(totalImc);
  };

  function validar(){
    if(altura != null && peso != null){
      Soma();
      setAltura(null);
      setPeso(null);
      setState('Seu imc é de:');
      setBotao('calcular novamente')
      setErrorMSG('')
      return;
    }else{
      setErrorMSG('Campo obrigatório*')
      setState('É necessário preencher os campos abaixo para calcular o IMC')
      setSoma('');
      setBotao('calcular')
    }
  };


  return(
    <Pressable onPress={Keyboard.dismiss} style={style.container}>
      <View style={styles.body}>
          <Text style={styles.headerTitle}>OneBitHealth</Text>
      <View style={cards.cardsBox}>
          <Text style={cards.cardTextTitle}>{state}</Text>
          <Text style={cards.result}>{soma}</Text>
            <Text style={error.errorText}>{errorMSG}</Text>
              <TextInput style={cards.cardInput} keyboardType="numeric" value={altura} placeholder="altura: ex-1.75"  onChangeText={setAltura}/>
            <Text style={error.errorText}>{errorMSG}</Text>
              <TextInput style={cards.cardInput} keyboardType="numeric" value={peso} placeholder="peso: ex-82.5kg"  onChangeText={setPeso}/>
      </View>

        <View style={button.buttonContainer}>
          <TouchableOpacity  style={button.button} onPress={() => validar()}>
            <Text style={button.text}>{botao}</Text>
          </TouchableOpacity>
        </View>


        {/* FlatList o problema que estava dando era em relação ao css, consertar depois e deixar organizado */}
        {/* <View>
            <FlatList
              style={lists.listStyle}
              data={imcList.reverse()}
              renderItem={({item}) => {
                return(
                  <Text>Resultado imc: {item.imc}</Text>
                  )
                }}
                keyExtractor={(item) => String(item.id)}
                
                >
            </FlatList>
          </View> */}


      </View>
        

    </Pressable>
  )
}


const style = StyleSheet.create({
  container: {
    flex: 1,
  },
});


