import React from "react";
import {Text, Image, View, TouchableOpacity, ScrollView} from 'react-native';
import { styles } from "../Styles/StylesheetSW";
import { Card, Icon } from "@rneui/themed";
import { color } from "@rneui/base";
import {swkeys} from "../Data/KeysSW";
import { Button, } from "@rneui/themed";


function DetailsSpecie({ route, navigation }) {
  const {item} = route.params;
  return (
    <View style={{flex: 1, backgroundColor: "gray"}}>
  

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
        <View style={{height: 80, alignItems:"center"}}>
        <Button
              title="Volver"
              titleStyle={{ color: `#00236d`, fontSize:23 }}
              buttonStyle={{
                borderColor: `black`,
              }}
              type="clear"
              containerStyle={{
                width: 250,
                paddingHorizontal:30,
                marginVertical: 10,
                marginHorizontal:50,
                alignItems:"center",
                justifyContent:"center"
              }}
              onPress={() => navigation.goBack()}/>
      </View>
    
</View>
  );
}

export default DetailsSpecie;