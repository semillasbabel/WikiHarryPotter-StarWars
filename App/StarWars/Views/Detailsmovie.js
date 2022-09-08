import React from "react";
import {Text, Image, View, Button, TouchableOpacity, ScrollView} from 'react-native';
import { styles } from "../Styles/StylesheetSW";
import { Card, Icon, Button } from "@rneui/themed";
import { color } from "@rneui/base";


function DetailsPlanets({ route, navigation }) {
  const {item} = route.params;
  return (

    <View style={styles.Detailscontainer}>

        <TouchableOpacity style={styles.btnBack2} onPress={() => navigation.goBack()}>
            <Text style={styles.textback2}>Volver</Text>
            
        </TouchableOpacity>
        
        <ScrollView> 
          <TouchableOpacity>
      <View style={{backgroundColor: "white", borderRadius: 15,opacity: 0.6, height: 150, marginHorizontal: 20, marginVertical: 20 }}>
      <Text style={styles.textview}>Pelicula: {data.item.title}</Text>
      <Text style={styles.textview}>Director De Pelicula{data.item.director}</Text>
      <Text style={styles.textview}>Pelicula #: {data.item.episode_id}</Text>
      <Text style={styles.textview}>Fecha de Salida:{data.item.release_date}</Text>
     
      </View>
    
      </TouchableOpacity>
     
    </ScrollView>
        
    </View>
  );
}

export default DetailsPlanets;