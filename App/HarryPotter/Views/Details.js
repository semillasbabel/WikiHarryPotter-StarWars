import React from "react";
import {Text, Image, View, Button, TouchableOpacity, ScrollView, ImageBackground} from 'react-native';
import { styles } from "../Styles/StylesheetHP";
import { Card, Icon } from "@rneui/themed";
import { color } from "@rneui/base";

function DetailsScreen({ route, navigation }) {
  const {item} = route.params;
  const image = { uri: "https://cdn.pixabay.com/photo/2014/08/29/11/07/frame-430979_640.png" };

  let urlimg = item.image;

  if (urlimg == "") {
      urlimg = "https://www.plantillasdememes.com/img/plantillas/imagen-no-disponible01601774755.jpg"
  }

  return (
    <View style={{flex: 1, backgroundColor: "white", alignItems: "center"}}>
      
      <Text style={{fontSize: 25, marginTop: 20, alignSelf: "center", fontWeight:'bold', color:'#890000'}}>{item.actor}</Text>
      
      <View style={{height: 170, width: 181, alignSelf: "center"}}>
        <ImageBackground source={image} resizeMode="cover" style={{height: "100%", alignItems: "center"}}>
          <Image 
            source={{uri: urlimg}} 
            style={{height: 140, width: 140, alignSelf: "center", marginTop: 15}}
          />
        </ImageBackground>
      </View>

      <ScrollView style={{alignSelf: "center", width: "100%"}}>
        <View style={{flex: 1, flexDirection: "row",width:"100%" , marginTop: 10}}>

          <View style={{width:"60%"}}>
            <Text style={styles.DetailsTextDefinition}>Gender:</Text>
            <Text style={styles.DetailsTextDefinition}>Species:</Text>
            <Text style={styles.DetailsTextDefinition}>House:</Text>
            <Text style={styles.DetailsTextDefinition}>Date of birth:</Text>
            <Text style={styles.DetailsTextDefinition}>Ancestry:</Text>
            <Text style={styles.DetailsTextDefinition}>Patronus:</Text>
            <Text style={styles.DetailsTextDefinition}>Actor:</Text>
          </View>

          <View style={{width:"40%"}}>
            <Text style={styles.DetailsTextResult}>{item.gender}</Text>
            <Text style={styles.DetailsTextResult}>{item.species}</Text>
            <Text style={styles.DetailsTextResult}>{item.house}</Text>
            <Text style={styles.DetailsTextResult}>{item.dateOfBirth}</Text>
            <Text style={styles.DetailsTextResult}>{item.ancestry}</Text>
            <Text style={styles.DetailsTextResult}>{item.patronus}</Text>
            <Text style={styles.DetailsTextResult}>{item.actor}</Text>
          </View>

        </View>

      </ScrollView>

      <View>
          <TouchableOpacity style={styles.btnBack} onPress={() => navigation.goBack()}>
            <Text style={styles.textback}>Volver a la Seleccion de Personaje</Text>
          </TouchableOpacity>
      </View>
    </View>
  );
}

export default DetailsScreen;
