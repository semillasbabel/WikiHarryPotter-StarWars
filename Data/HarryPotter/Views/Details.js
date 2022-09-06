import React from "react";
import {Text, Image, View, Button, TouchableOpacity, ScrollView} from 'react-native';
import { styles } from "../Styles/StylesheetHP";
import { Card, Icon } from "@rneui/themed";
import { color } from "@rneui/base";

function DetailsScreen({ route, navigation }) {
  const {item} = route.params;

  let urlimg = item.image;

  if (urlimg == "") {
      urlimg = "https://www.plantillasdememes.com/img/plantillas/imagen-no-disponible01601774755.jpg"
  }

  return (
    <View style={{flex: 1, backgroundColor: "#7f0000", alignItems: "center"}}>
    <TouchableOpacity style={styles.btnBack} onPress={() => navigation.goBack()}>
      <Text style={styles.textback}>Volver a la Seleccion de Personaje</Text>
    </TouchableOpacity>

    <View style={{flex: 1, alignContent:"center"}}>
      <ScrollView>
      <Card>
      
        <Card.Title style={styles.cardtext}>{item.name}</Card.Title>
        <Card.Divider style={styles.divider}/>
        <Card.Image
            style={ styles.foto}
            source={{
            uri: urlimg,
            }}
        />
        <Text style={{ marginBottom: 10 }}></Text>
        
            <Text style={styles.card}>Gender: {item.gender}</Text>
            <Text style={styles.card}>Species: {item.species}</Text>
            <Text style={styles.card}>House: {item.house}</Text>
            <Text style={styles.card}>Date of birth: {item.dateOfBirth}</Text>
            <Text style={styles.card}>Ancestry: {item.ancestry}</Text>
            <Text style={styles.card}>Patronus: {item.patronus}</Text>
            <Text style={styles.card}>Actor: {item.actor}</Text>
 
      </Card>
    </ScrollView>
  </View>
    
</View>
  );
}

export default DetailsScreen;
  
