import React from "react";
import {Text, Image, View, Button, TouchableOpacity, ScrollView} from 'react-native';
import { styles } from "../Styles/StylesheetSW";
import { Card, Icon } from "@rneui/themed";
import { color } from "@rneui/base";

import {swkeys} from "../Data/KeysSW"


function DetailsPlanets({ route, navigation }) {
  const {item} = route.params;
  return (
    <View style={styles.Detailscontainer}>
    <TouchableOpacity style={styles.btnBack2} onPress={() => navigation.goBack()}>
      <Text style={styles.textback2}>Volver</Text>
    </TouchableOpacity>

        <Card>
        <Card.Title style={styles.cardtext2}>{item.name}</Card.Title>
        <Card.Divider style={styles.divider2}/>
        <Card.Image
          
            source={{
                uri: swkeys.detailsimage,}}
                style={{borderRadius:15}}
        />
        <Text style={{ marginBottom: 10 }}></Text>
        
            <Text style={styles.card2}>Nombre: {item.name}</Text>
            <Text style={styles.card2}>Periodo de rotación: {item.rotation_period} horas</Text>
            <Text style={styles.card2}>diametro: {item.diameter}</Text>
            <Text style={styles.card2}>Clima : {item.climate}</Text>
            <Text style={styles.card2}>Terreno: {item.terrain}</Text>
            <Text style={styles.card2}>población: {item.population}</Text>
           

        </Card>
    
</View>
  );
}

export default DetailsPlanets;