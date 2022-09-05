import React from "react";
import {Text, Image, View, Button, TouchableOpacity, ScrollView} from 'react-native';
import { styles } from "../Estilos/Estiloswars";
import { Card, Icon } from "@rneui/themed";
import { color } from "@rneui/base";


function DetailsScreen({ route, navigation }) {
  const {item} = route.params;
  return (
    <View style={{flex: 1, backgroundColor: "gray"}}>
    <TouchableOpacity style={styles.btnBack2} onPress={() => navigation.goBack()}>
      <Text style={styles.textback2}>Volver a Seleccion de personajes</Text>
    </TouchableOpacity>

        <Card>
        <Card.Title style={styles.cardtext2}>{item.name}</Card.Title>
        <Card.Divider style={styles.divider2}/>
        <Card.Image
            style={ styles.foto2}
            source={{
            uri: item.image,
            }}
        />
        <Text style={{ marginBottom: 10 }}></Text>
        
            <Text style={styles.card2}>Name: {item.Name}</Text>
            <Text style={styles.card2}>peso: {item.Height}</Text>
            <Text style={styles.card2}>House: {item.mass}</Text>
            <Text style={styles.card2}>Date of birth: {item.birth_year}</Text>
            <Text style={styles.card2}>Ancestry: {item.gender}</Text>
            <Text style={styles.card2}>Patronus: {item.patronus}</Text>
            <Text style={styles.card2}>Actor: {item.actor}</Text>
        </Card>
    
</View>
  );
}

export default DetailsScreen;