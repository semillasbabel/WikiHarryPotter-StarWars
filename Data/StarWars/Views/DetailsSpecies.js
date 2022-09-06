import React from "react";
import {Text, Image, View, Button, TouchableOpacity, ScrollView} from 'react-native';
import { styles } from "../Styles/StylesheetSW";
import { Card, Icon } from "@rneui/themed";
import { color } from "@rneui/base";
import {swkeys} from "../Data/KeysSW"


function DetailsSpecie({ route, navigation }) {
  const {item} = route.params;
  return (
    <View style={{flex: 1, backgroundColor: "gray"}}>
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
            <Text style={styles.card2}>Altura: {item.average_height}</Text>
            <Text style={styles.card2}>Vida promedio: {item.average_lifespan}</Text>
            <Text style={styles.card2}>Classificacion  : {item.classification}</Text>
            <Text style={styles.card2}>Lenguaje: {item.languaje}</Text>
           

        </Card>
    
</View>
  );
}

export default DetailsSpecie;