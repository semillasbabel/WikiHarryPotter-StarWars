import {SwitchSearchHP, HPREQUESTAXIO} from "../App/HarryPotter/Data/RequestHP";
import {SwitchSearchSW, SWREQUEST, SWFILMS} from "../App/StarWars/Data/RequestSW";
import React from "react";
import { View} from 'react-native';

async function Pruebas(){

console.log("--------------------------------");

console.log("Prueba Petición Con parametros default");
console.log(await HPREQUESTAXIO());
console.log(await SWREQUEST());
console.log(await SWFILMS());

console.log("--------------------------------");

console.log("Prueba Petición Con URL Vacía");
console.log(await HPREQUESTAXIO(""));
console.log( await SWREQUEST("",0));
console.log(await SWFILMS(""));

console.log("--------------------------------");

console.log("Prueba Petición Con URL invalida");
console.log(await HPREQUESTAXIO("invalida"));
console.log(await SWREQUEST("invalida",0));
console.log(await SWFILMS("invalida"));

console.log("--------------------------------");

console.log("Prueba al switch con parametros incorrectos")
console.log(await SwitchSearchHP(1));
console.log(await SwitchSearchSW("invalido"));

console.log("--------------------------------");

console.log("Prueba al switch con parametro vacío")
console.log(await SwitchSearchHP(""));
console.log(await SwitchSearchSW(""));




}


Pruebas();










// console.log(HPREQUESTAXIO("http://hp-api.herokuapp.com/api/characters",))





export default function App() {
  return (
    <View style={{flex: 1}}>
    </View>
  );
}

