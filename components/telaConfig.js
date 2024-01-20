import React,{useState} from'react';
import{SafeAreaView,Text,TextInput,StyleSheet,View} from 'react-native';
import Globais from './globais';

export default function telaConfig(){

   const[giros,setGiros]=useState(Globais.qtGiros)
   const[tempo,setTempo]=useState(Globais.tempEspera)

    const setarGiros=()=>{
      Globais.qtGiros=parseInt(v)
      setGiros(v)
    }

    const setarTempo=()=>{
      Globais.tempEspera=parseInt(v)
      setTempo(v)
    }
	return(
      <SafeAreaView>
         <View>
           <Text>Quantidade de giros</Text>

           <TextInput
             value={String(giros)}
             onChangeText={(valor)=>{setarGiros(valor)}}
           />
         </View>

         <View>
           <Text>Velocidade de giros</Text>

           <TextInput
             value={String(tempo)}
             onChangeText={(valor)=>{setarTempo(valor)}}
           />
         </View>
      </SafeAreaView>
	);
}

const styles=StyleSheet.create({
  
});

