import React, { useState, Component } from "react";
import { Text, View, Button, StyleSheet, Image, FlatList, SafeAreaView, Alert, ScrollView, TouchableOpacity, ActivityIndicator, VirtualizedList, ImageBackground} from 'react-native';
import axios from 'axios';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Imagelist from '../Componentes/imagenlist.js';
import SearchComponent from '../Componentes/Pruebaaxio';
import Moviescomponent from '../Componentes/axiopeli';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';


import Lista1 from "./Personjeshp";
import Detalles from "./DetailsWars"


import {styles} from "../Estilos/Estiloswars.js";
const image = { uri: "https://www.xtrafondos.com/thumbs/vertical/1_1629.jpg" };

function DetailsScreen({ navigation}) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Details!</Text>
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
}


const SettingsStack = createNativeStackNavigator();

function SettingsStackScreen() {
  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen name="Settings" component={SettingsScreen} />
      <SettingsStack.Screen name="Details" component={DetailsScreen} />
    </SettingsStack.Navigator>
  );
}
const Tab = createBottomTabNavigator();



function Busqueda1({navigation}){
  return(
    <View style={{ flex: 1, backgroundColor: "black"}}>
      <SearchComponent saludo="All" Urlenv = "http://hp-api.herokuapp.com/api/characters"/>
    </View>
  )
}



function Busqueda2({navigation}){
  const navi = useNavigation();
  return (
    <View style={{flex: 1,}}>
     <ImageBackground source={image} resizeMode="cover" style={{height: "100%"}}>
      <SearchComponent {...navigation} navigation={navi}/>
     </ImageBackground>
    
    </View>
  );
}

function Movies({navigation}){
  const navi = useNavigation();
  return (
    <View style={{flex: 1,}}>
     <ImageBackground source={image} resizeMode="cover" style={{height: "100%"}}>
      <Moviescomponent {...navigation} navigation={navi}/>
     </ImageBackground>
    
    </View>
  );
}

function Planets(){
  return(
    <View style={{ flex: 1, backgroundColor: "black"}}>
      
       <Moviescomponent {...useNavigation} navigation={Planets}/>
    </View>
  )
}

function Busqueda4(){
  return(
    <View style={{ flex: 1, backgroundColor: "black"}}>
      <SearchComponent saludo="All" Urlenv = "http://hp-api.herokuapp.com/api/characters/house/gryffindor"/>
    </View>
  )
}

const Personajes = createNativeStackNavigator();

function PersonjesScreen() {
  return (
    <View style={{flex:1,}}>
      <Personajes.Navigator screenOptions={{headerShown: false}}>
        <Personajes.Screen name="Home" component={Busqueda2}/>
        <Personajes.Screen name="Details" component={Detalles}/>
    </Personajes.Navigator>
    </View>
  );
}

const Estudiantes = createNativeStackNavigator();

function EstudiantesScreen() {
  return (
    <Estudiantes.Navigator screenOptions={{headerShown: false}}>
      
      <Estudiantes.Screen name="Home" component={Busqueda2}/>
      <Estudiantes.Screen name="Details" component={Detalles}/>
    </Estudiantes.Navigator>
  );
}

const Staff = createNativeStackNavigator();

function StaffScreen() {
  return (
    <Staff.Navigator screenOptions={{headerShown: false}}>
      <Staff.Screen name="Home" component={Busqueda3}/>
      <Staff.Screen name="Details" component={DetailsScreen}/>
    </Staff.Navigator>
  );
}



const Casas = createNativeStackNavigator();

function CasasScreen() {
  return (
    <Casas.Navigator screenOptions={{headerShown: false}}>
      <Casas.Screen name="Home" component={Busqueda4}/>
      <Casas.Screen name="Details" component={DetailsScreen}/>
    </Casas.Navigator>
  );
}









export default class App extends Component{
  render(){
    return (
      <View style={{ flex: 1 }}>


        <View style={{ height: 40, backgroundColor: "#8d8d8d" }}>

        </View>


        <View style={{ backgroundColor: "#CD201F", height: 65, alignItems: "center", justifyContent: "center", }}>
        <Image
            source={{
              uri: "https://th.bing.com/th/id/R.c69efd88a70ae5080b5317f0168de053?rik=s8uEYW9htJz8UQ&riu=http%3a%2f%2fwww.gatto999.it%2fimages%2fstories%2fFilm+posters+2019%2fstar+wars+horizontal+logo+transparent.png&ehk=J8Zou%2fnLdaGIOiTthUQIr%2fmImMAnDAjpMqpL%2fnh01Dk%3d&risl=&pid=ImgRaw&r=0"
            }}
            style={{ height: 50, width: 300, marginTop:35 }}
          />
          <View>
            <TouchableOpacity style={{ marginEnd: 320, paddingBottom: 25 }} onPress={() => { this.props.navigation.goBack() }}>
              <Text style={{ paddingRight:35,fontSize: 17, marginVertical:-30 }}>🌎</Text>
            </TouchableOpacity>
          </View>

        </View>
      <View style={{ flex: 1, backgroundColor: "#CD201F" }}>
          <Tab.Navigator screenOptions={({ route }) => ({
            tabBarIcon: ({ color, size }) => {
              let iconName;

              if (route.name === 'Personas') {
                iconName = 'person-outline',
                  size = 30
              }

              if (route.name === 'Planetas') {
                iconName = 'ios-planet-outline';
                size = 30
              }
              if (route.name === 'Peliculas') {
                iconName = 'ios-film-outline';
                size = 30
              }

              if (route.name === 'Species') {
                iconName = 'people-outline';
                size = 30
              }
              if (route.name === 'Vehicles') {
                iconName = 'ios-car-sport-outline';
                size = 30
              }
              if (route.name === 'Naves') {
                iconName = 'rocket-outline';
                size = 30
              }
             

              //     // You can return any component that you like here!
              return <Ionicons name={iconName} size={size} color={color} />;
            },
            tabBarStyle: {
              backgroundColor: "#CD201F",
            },
            headerShown: false,
            tabBarActiveTintColor: 'yellow',
            tabBarInactiveTintColor: 'black'
          })}>
           <Tab.Screen name="Personas" component={PersonjesScreen} />
                <Tab.Screen name="Planetas" component={Planets} />
                <Tab.Screen name="Peliculas" component={Movies} />
                <Tab.Screen name="Species" component={StaffScreen} />
                <Tab.Screen name="Vehicles" component={StaffScreen} />
                <Tab.Screen name="Naves" component={CasasScreen} />
          </Tab.Navigator>
        </View>


      </View>
    

   
    );
  }
}
