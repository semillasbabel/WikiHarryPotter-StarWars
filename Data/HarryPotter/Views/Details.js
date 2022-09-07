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

      <ScrollView style={{alignSelf: "center"}}>
        <Text style={{ marginBottom: 10 }}></Text>
        <Text style={styles.DetailsText}>Gender: {item.gender}</Text>
        <Text style={styles.DetailsText}>Species: {item.species}</Text>
        <Text style={styles.DetailsText}>House: {item.house}</Text>
        <Text style={styles.DetailsText}>Date of birth: {item.dateOfBirth}</Text>
        <Text style={styles.DetailsText}>Ancestry: {item.ancestry}</Text>
        <Text style={styles.DetailsText}>Patronus: {item.patronus}</Text>
        <Text style={styles.DetailsText}>Actor: {item.actor}</Text>

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
  
// return (
//   <View style={{flex: 1, backgroundColor: "#7f0000", alignItems: "center"}}>
//     <ScrollView>
      
//       <View style={{flex: 1}}>
//         <Card>
//           <Card.Title style={styles.cardtext}>{item.name}</Card.Title>
//           <Card.Divider style={styles.divider}/>
//           <Card.Image style={styles.foto} source={{uri: urlimg,}}/>
          
//           <Text style={{ marginBottom: 10 }}></Text>
//           <Text style={styles.card}>Gender: {item.gender}</Text>
//           <Text style={styles.card}>Species: {item.species}</Text>
//           <Text style={styles.card}>House: {item.house}</Text>
//           <Text style={styles.card}>Date of birth: {item.dateOfBirth}</Text>
//           <Text style={styles.card}>Ancestry: {item.ancestry}</Text>
//           <Text style={styles.card}>Patronus: {item.patronus}</Text>
//           <Text style={styles.card}>Actor: {item.actor}</Text>
//         </Card>
//       </View>
      
//       <View>
//         <TouchableOpacity style={styles.btnBack} onPress={() => navigation.goBack()}>
//           <Text style={styles.textback}>Volver a la Seleccion de Personaje</Text>
//         </TouchableOpacity>
//       </View>
      
//     </ScrollView>
//   </View>
// );