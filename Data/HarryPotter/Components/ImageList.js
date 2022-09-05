import React,{Component} from 'react';
import {Image, Text} from 'react-native';

import {styles} from "../Styles/StylesheetHP";

export default function Button(props){
    let {urlimg} = props;

    if (urlimg == "") {
        urlimg = "https://www.plantillasdememes.com/img/plantillas/imagen-no-disponible01601774755.jpg"
    }
    
    return (
        <Image source={{uri: urlimg}} style={styles.image}/>
    );
  }