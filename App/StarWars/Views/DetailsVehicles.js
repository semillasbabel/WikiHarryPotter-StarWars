import React from "react";
import {Text, Image, View, TouchableOpacity, ScrollView} from 'react-native';
import { styles } from "../Styles/StylesheetSW";
import { Card, Icon } from "@rneui/themed";
import { Button } from "@rneui/base";
import {swkeys} from "../Data/KeysSW"


function DetailsVehicles({ route, navigation }) {
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
            <Text style={styles.card2}>Modelo: {item.model}</Text>
            <Text style={styles.card2}>Valor: {item.cost_in_credits}</Text>
            <Text style={styles.card2}>Velocidad Maxima: {item.max_atmosphering_speed}</Text>
            <Text style={styles.card2}>pasajeros: {item.passengers}</Text>
           

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

export default DetailsVehicles;