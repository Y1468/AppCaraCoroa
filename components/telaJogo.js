
import React,{useState} from 'react';
import Globais from './globais';
import {
 StyleSheet,
  Text,
  View, 
  Button ,
  SafeAreaView,
  Image
} from 'react-native';

export default function App() {

  const moedas=[
      require('./Imagem/img1.jpg'),
      require('./Imagem/img5.jpg'),
      require('./Imagem/img1.jpg'),
      require('./Imagem/img2.jpg'),
      require('./Imagem/img3.jpg'),
      require('./Imagem/img4.jpg'),
      require('./Imagem/img5.jpg'),
      require('./Imagem/img6.jpg'),
      require('./Imagem/img7.jpg'),
      require('./Imagem/img8.jpg')
    ]

  let iMoeda=0
   
  const[moedaAtual,setMoedaAtual]=useState(moedas[iMoeda])
  let maxGiros=Globais.qtGiros
  let tempoGiro=Globais.tempEspera
  
  async function espera(tmp){

    function tempo(ms){
       return new Promise(resolve=>setTimeout(resolve,ms))
    }
    await tempo(tmp)
  }
  
   async function girarMoeda(){
     let maxGiros=Globais.qtGiros
     let tempoGiro=Globais.tempEspera

      iMoeda=2
    for(let i=0;i<(maxGiros*8);i++){

      iMoeda++

    if (iMoeda>9) {
      iMoeda=2
    }
    setMoedaAtual(moedas[iMoeda])

    await espera(tempoGiro)

    }
    let res=Math.floor(Math.random()*10)+1

     if(res<=5){
      res=0
    }else{
      res=1
    }
     setMoedaAtual(moedas[res])

   }
  return (
    <SafeAreaView style={styles.topo}>  

    <Text style={styles.txt}>Cara ou coroa</Text>
    <Image source={moedaAtual}
     style={styles.img}
    />

    <Button
      style={styles.btn}
      title='Girar'
      onPress={()=>girarMoeda()}
    />

    </SafeAreaView>
      
  );
}

const styles = StyleSheet.create({
  topo:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
  },
  btn:{
    marginTop:15,
    width:200,
  },

  img:{
    width:200,
    height:200,
    borderRadius:150,
    marginTop:20,
  },

  txt:{
    fontSize:24,

  }
});
