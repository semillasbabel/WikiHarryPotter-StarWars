import React, { useState, Component } from "react";
import { Text, View, Button, StyleSheet, Image, FlatList, SafeAreaView, Alert, ScrollView, TouchableOpacity, ActivityIndicator, VirtualizedList, ImageBackground} from 'react-native';
import axios from 'axios';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import Imagelist from '../Componentes/imagenlist.js';

import SearchPeople from '../Components/SearchPeople';
import SearchMovies from '../Components/SearchMovie';
import SearchPlanets from "../Components/SearchPlanets";
import SearchShips from "../Components/SearchShips";
import SearchSpecie from "../Components/SearchSpecies";
import SearchVehicles from "../Components/SearchVehicles"

import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import {swkeys} from '../Data/KeysSW';

import Icon from "react-native-vector-icons/Ionicons";


// import Lista1 from "./Personjeshp";
import DetailsPeople from "./DetailsPeople";
import DetailsPlanet from "./DetailsPlanets";
import DetailsSpecie from "./DetailsSpecies";
import DetailsVehicles from "./DetailsVehicles";
import DetailsShips from "./DetailShips";


import {styles} from "../Styles/StylesheetSW";
const image = { uri: "https://www.xtrafondos.com/thumbs/vertical/1_1629.jpg" };

const Tab = createBottomTabNavigator()

export default class App extends Component{
    render(){
      return (
        <View style={{ flex: 1 }}>
  
  
          <View style={{ height: 40, backgroundColor: "#00236d" }}>
  
          </View>
  
  
          <View style={{ backgroundColor: "#5468b1", height: 85, alignItems: "center", justifyContent: "center", }}>
          <Image
              source={{
                uri: "https://th.bing.com/th/id/R.c69efd88a70ae5080b5317f0168de053?rik=s8uEYW9htJz8UQ&riu=http%3a%2f%2fwww.gatto999.it%2fimages%2fstories%2fFilm+posters+2019%2fstar+wars+horizontal+logo+transparent.png&ehk=J8Zou%2fnLdaGIOiTthUQIr%2fmImMAnDAjpMqpL%2fnh01Dk%3d&risl=&pid=ImgRaw&r=0"
              }}
              style={{ height: 30, width: 290, marginTop:70 }}
            />
            <View style={{paddingBottom:45, marginLeft:355}}>
              <View style={{paddingVertical:-50}}>
                
             
              <TouchableOpacity onPress={() => { this.props.navigation.goBack() }}>
              <Icon
                  name="home"
                  color="#ccc"
                  size={25}/> 
              </TouchableOpacity>
              </View>
            </View>
            
          </View>
        <View style={{ flex: 1, backgroundColor: "#5468b1" }}>
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
                backgroundColor: "#5468b1",
              },
              headerShown: false,
              tabBarActiveTintColor: 'yellow',
              tabBarInactiveTintColor: 'black'
            })}>
                  <Tab.Screen name="Personas" component={PeopleScreen} />
                  <Tab.Screen name="Planetas" component={PlanetsScreen} />
                  <Tab.Screen name="Peliculas" component={MoviesScreen} />
                  <Tab.Screen name="Species" component={SpeciesScreen} />
                  <Tab.Screen name="Vehicles" component={VehiclesScreen} />
                  <Tab.Screen name="Naves" component={StarshipsScreen} />
            </Tab.Navigator>
          </View>
  
  
        </View>
      
  
     
      );
    }
  }

const people = createNativeStackNavigator();
function PeopleScreen() {
  return (
    <View style={{flex:1,}}>
      <people.Navigator screenOptions={{headerShown: false}}>
        <people.Screen name="Home" component={HomePerson}/>
        <people.Screen name="Details" component={DetailsPeople}/>
    </people.Navigator>
    </View>
  );
}



const Planets = createNativeStackNavigator();
function PlanetsScreen() {
  return (
    <Planets.Navigator screenOptions={{headerShown: false}}> 
      <Planets.Screen name="Home" component={HomePlanet}/>
      <Planets.Screen name="Details" component={DetailsPlanet}/>
    </Planets.Navigator>
  );
}

const Movies = createNativeStackNavigator();
function MoviesScreen() {
  return (
    <Movies.Navigator screenOptions={{headerShown: false}}>
      <Movies.Screen name="Home" component={HomeMovie}/>
      {/* <Movies.Screen name="Details" component={DetailsScreen}/> */}
    </Movies.Navigator>
  );
}

const Vehicles = createNativeStackNavigator();
function VehiclesScreen() {
  return (
    <Vehicles.Navigator screenOptions={{headerShown: false}}>
        <Vehicles.Screen name="Home" component={HomeVehicles}/>
        <Vehicles.Screen name="Details" component={DetailsVehicles}/>
    </Vehicles.Navigator>
  );
}

const Ships = createNativeStackNavigator();
function StarshipsScreen() {
  return (
    <Ships.Navigator screenOptions={{headerShown: false}}>
      <Ships.Screen name="Home" component={HomeShips}/>
      <Ships.Screen name="Details" component={DetailsShips}/>
    </Ships.Navigator>
  );
}


const Species = createNativeStackNavigator();
function SpeciesScreen() {
  return (
    <Species.Navigator screenOptions={{headerShown: false}}>
      <Species.Screen name="Home" component={HomeSpecie}/>
      <Species.Screen name="Details" component={DetailsSpecie}/>
    </Species.Navigator>
  );
}




function HomePerson({navigation}){
    const navi = useNavigation();
    return(
    <View style={{flex: 1, backgroundColor: "#8e8e8e"}}> 
     <SearchPeople {...navigation} SearchType={swkeys.PERSONSKEY} navigation={navi}/>
     </View>
    )
}
function HomePlanet({navigation}){
    const navi = useNavigation();
    return (
       <View style={{flex: 1, backgroundColor: "#8e8e8e"}}> 
    <SearchPlanets {...navigation} SearchType={swkeys.PLANETSKEY} navigation={navi}/>
    </View> 
    )
}
  
function HomeMovie({navigation}){
    const navi = useNavigation();
    return(
        <View style={{flex: 1, backgroundColor: "#8e8e8e"}}>
            <SearchMovies {...navigation} SearchType={swkeys.FILMSKEY} navigation={navi}/>
        </View>
     )
   
}
function HomeVehicles({navigation}){
    const navi = useNavigation();
    return (
        <View style={{flex: 1, backgroundColor: "#8e8e8e"}}>
            <SearchVehicles {...navigation} SearchType={swkeys.VehiclesKEY} navigation={navi}/>
        </View>
    )
}
function HomeShips({navigation}){
    const navi = useNavigation();
    return (
        <View style={{flex: 1, backgroundColor: "#8e8e8e"}}> 
         <SearchShips {...navigation} SearchType={swkeys.STARSHIPSKEY} navigation={navi}/>
        </View> 
    )
}
function HomeSpecie({navigation}){
    const navi = useNavigation();
    return (
        <View style={{flex: 1, backgroundColor: "#8e8e8e"}}> 
     <SearchSpecie {...navigation} SearchType={swkeys.SPECIESKEY} navigation={navi}/>
     </View> 
     )
}
  
  
  
  
  
  
  


















// function DetailsScreen({ navigation}) {
//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Text>Details!</Text>
//       <Button title="Go back" onPress={() => navigation.goBack()} />
//     </View>
//   );
// }


// const SettingsStack = createNativeStackNavigator();

// function SettingsStackScreen() {
//   return (
//     <SettingsStack.Navigator>
//       <SettingsStack.Screen name="Settings" component={SettingsScreen} />
//       <SettingsStack.Screen name="Details" component={DetailsScreen} />
//     </SettingsStack.Navigator>
//   );
// }
// const Tab = createBottomTabNavigator();



// function Busqueda1({navigation}){
//   return(
//     <View style={{ flex: 1, backgroundColor: "black"}}>
//       <SearchComponent saludo="All" Urlenv = "http://hp-api.herokuapp.com/api/characters"/>
//     </View>
//   )
// }



// function Busqueda2({navigation}){
//   const navi = useNavigation();
//   return (
//     <View style={{flex: 1,}}>
//      <ImageBackground source={image} resizeMode="cover" style={{height: "100%"}}>
//       <SearchComponent {...navigation} navigation={navi}/>
//      </ImageBackground>
    
//     </View>
//   );
// }

// function Movies({navigation}){
//   const navi = useNavigation();
//   return (
//     <View style={{flex: 1,}}>
//      <ImageBackground source={image} resizeMode="cover" style={{height: "100%"}}>
//       <Moviescomponent {...navigation} navigation={navi}/>
//      </ImageBackground>
    
//     </View>
//   );
// }

// function Planet(){
//   return(
//     <View style={{ flex: 1, backgroundColor: "black"}}>
      
//        <Moviescomponent {...useNavigation} navigation={Planets}/>
//     </View>
//   )
// }

// function Species(){
//   return(
//     <View style={{ flex: 1, backgroundColor: "black"}}>
//       <SearchComponent saludo="All" Urlenv = />
//     </View>
//   )
// }

// const people = createNativeStackNavigator();

// function PeopleScreen() {
//   return (
//     <View style={{flex:1,}}>
//       <people.Navigator screenOptions={{headerShown: false}}>
//         <people.Screen name="Home" component={Busqueda2}/>
//         <people.Screen name="Details" component={Detalles}/>
//     </people.Navigator>
//     </View>
//   );
// }

// const Planets = createNativeStackNavigator();

// function PlanetsScreen() {
//   return (
//     <Planets.Navigator screenOptions={{headerShown: false}}> 
//       <Planets.Screen name="Home" component={Planet}/>
//       <Planets.Screen name="Details" component={Detalles}/>
//     </Planets.Navigator>
//   );
// }

// const MoviesScreen = createNativeStackNavigator();

// function StaffScreen() {
//   return (
//     <Movies.Navigator screenOptions={{headerShown: false}}>
//       <Movies.Screen name="Home" component={SearchMovie}/>
//       <Movies.Screen name="Details" component={DetailsScreen}/>
//     </Movies.Navigator>
//   );
// }



// const starshipsScreen = createNativeStackNavigator();

// function ShipsScreen() {
//   return (
//     <Ships.Navigator screenOptions={{headerShown: false}}>
//       <Ships.Screen name="Home" component={SearchShips}/>
//       <Ships.Screen name="Details" component={DetailsScreen}/>
//     </Ships.Navigator>
//   );
// }


// const SpeciesScreen = createNativeStackNavigator();

// function SpecieScreen() {
//   return (
//     <Species.Navigator screenOptions={{headerShown: false}}>
//       <Species.Screen name="Home" component={SearchSpecies}/>
//       <Species.Screen name="Details" component={DetailsScreen}/>
//     </Species.Navigator>
//   );
// }












