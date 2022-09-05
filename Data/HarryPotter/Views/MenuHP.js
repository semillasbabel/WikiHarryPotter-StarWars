import React, { useState, Component } from "react";
import { Text, View, StyleSheet, Image, FlatList, SafeAreaView, Alert, ScrollView, TouchableOpacity, ActivityIndicator, VirtualizedList } from 'react-native';
// import axios from 'axios';
// import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import Imagelist from '../Componentes/imagenlist.js';
// import SearchComponent from '../Componentes/Searchlist';
// import Houses from '../Componentes/HousesHP'
import Ionicons from 'react-native-vector-icons/Ionicons';



// import { useNavigation } from '@react-navigation/native';
// import { Button } from "@rneui/themed";

// import Listacasas from "./listacasas"

// import Lista1 from "./Personjeshp";
// import Detalles from "./Details"
import {hpkeys} from "../Data/KeysHP"
import { styles } from "../Styles/StylesheetHP";

// import { IconButton } from "react-native-paper";


const Tab = createBottomTabNavigator();
export default class App extends Component {
  render() {
    return (
      <View style={styles.MenuHPcontainer}>

        <View style={styles.MenuHPstatusbar}/>

        <View style={styles.MenuHPnavigationbar}>

          <Image source={{uri: hpkeys.logomenu}} style={styles.MenuHPimagelogo}/>

          <TouchableOpacity style={styles.MenuHPbntgoback} onPress={() => { this.props.navigation.goBack() }}>
              <Text style={styles.MenuHPiconogoback}>🏠</Text>
          </TouchableOpacity>

        </View>


        <View style={styles.MenuHPtabbarcontainer}>

          <Tab.Navigator 
            
            screenOptions={({ route }) => ({
              tabBarIcon: ({ color, size }) => {
                let iconName;
                
                if (route.name === hpkeys.TabCharacteres) {
                  iconName = hpkeys.Characteresicon,
                  size = 30
                }
                
                if (route.name === hpkeys.TabEstudents) {
                iconName = hpkeys.Estudentsicon;
                size = 30
                }
                
                if (route.name === hpkeys.TabStaff) {
                iconName = hpkeys.Stafficon;
                size = 30
                }
                
                if (route.name === hpkeys.TabHouses) {
                iconName = hpkeys.Housesicon;
                size = 30
                }
                
                return <Ionicons name={iconName} size={size} color={color} />;
              },
              
              tabBarStyle: {
                backgroundColor: "white",
              },
              
              headerShown: false,
              tabBarActiveTintColor: '#e8b800',
              tabBarInactiveTintColor: '#7f0000'
          })}>
            <Tab.Screen name={hpkeys.TabCharacteres} component={PersonjesScreen} />
            <Tab.Screen name={hpkeys.TabEstudents} component={EstudiantesScreen} />
            <Tab.Screen name={hpkeys.TabStaff} component={StaffScreen} />
            <Tab.Screen name={hpkeys.TabHouses} component={CasasScreen} />
          </Tab.Navigator>
        </View>


      </View>
    );
  }
}






















// function DetailsScreen({ navigation }) {
//   const navi = useNavigation();
//   return <Listacasas {...navigation} navigation={navi} />;
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




// function Busqueda1({ navigation }) {
//   return (
//     <View style={{ flex: 1, backgroundColor: "black" }}>
//       <SearchComponent saludo="All" Urlenv="http://hp-api.herokuapp.com/api/characters" />
//     </View>
//   )
// }

// // function Busqueda2(){
// //   return(
// //     <View style={{ flex: 1, backgroundColor: "black"}}>
// //       <SearchComponent saludo="All" Urlenv = "http://hp-api.herokuapp.com/api/characters/students"/>
// //     </View>
// //   )
// // }

// function Busqueda2({ navigation }) {
//   const navi = useNavigation();
//   return <SearchComponent {...navigation} navigation={navi} />;
// }

// function Busqueda3({ navigation }) {
//   return (
//     <View style={{ flex: 1, backgroundColor: "black" }}>
//       <SearchComponent saludo="All" Urlenv="http://hp-api.herokuapp.com/api/characters/staff" />
//     </View>
//   )
// }

// function Busqueda4({ navigation }) {
//   return (
//     <View style={{ flex: 1, backgroundColor: "black" }}>
//       <SearchComponent saludo="All" Urlenv="http://hp-api.herokuapp.com/api/characters/house/gryffindor" />
//     </View>
//   )
// }
// function Casa({ navigation }) {
//   return (
//     <View style={{ flex: 1 }}>

//       <View style={{ flex: 1, backgroundColor: "red" }}>
//         <TouchableOpacity onPress={() => navigation.navigate('List')}>
//           <Image
//             source={{
//               uri: "https://p4.wallpaperbetter.com/wallpaper/672/923/822/harry-potter-gryffindor-wallpaper-preview.jpg"
//             }}
//             style={{ height: '100%', width: '100%' }}
//           />
//         </TouchableOpacity>

//       </View>

//       <View style={{ flex: 1, backgroundColor: "green" }}>
//         <TouchableOpacity onPress={() => navigation.navigate('List')}>
//           <Image
//             source={{
//               uri: "https://wallpapers.com/images/hd/harry-potter-slytherin-snake-crest-w0yy2ufprp0rcn24.webp"
//             }}
//             style={{ height: '100%', width: '100%' }}
//           />
//         </TouchableOpacity>
//       </View>

//       <View style={{ flex: 1, backgroundColor: "blue" }}>
//       <TouchableOpacity onPress={() => navigation.navigate('List')}>
//           <Image
//             source={{
//               uri: "https://wallpapers.com/images/featured/ravenclaw-0biazn74ja08p3un.jpg"
//             }}
//             style={{ height: '100%', width: '100%' }}
//           />
//         </TouchableOpacity>
//       </View>

//       <View style={{ flex: 1, backgroundColor: "yellow" }}>
//       <TouchableOpacity onPress={() => navigation.navigate('List')}>
//           <Image
//             source={{
//               uri: "https://wallpaper.dog/large/510701.jpg"
//             }}
//             style={{ height: '100%', width: '100%' }}
//           />
//         </TouchableOpacity>
//       </View>

//     </View>
//   )

// }

function vacio(){
    return(
        <View>
            <Text>
                Holaa
            </Text>
        </View>
    )
}

const Personajes = createNativeStackNavigator();

function PersonjesScreen({ navigation }) {
  return (
    <Personajes.Navigator screenOptions={{ headerShown: false }}>

      <Personajes.Screen name="Home" component={vacio} />
      <Personajes.Screen name="Details" component={vacio} />
    </Personajes.Navigator>
  );
}

const Estudiantes = createNativeStackNavigator();

function EstudiantesScreen({ navigation }) {
  return (
    <Estudiantes.Navigator screenOptions={{ headerShown: false }}>

      <Estudiantes.Screen name="Home" component={vacio} />
      <Estudiantes.Screen name="Details" component={vacio} />
    </Estudiantes.Navigator>
  );
}

const Staff = createNativeStackNavigator();

function StaffScreen({ navigation }) {
  return (
    <Staff.Navigator screenOptions={{ headerShown: false }}>
      <Staff.Screen name="Home" component={vacio} />
      <Staff.Screen name="Details" component={vacio} />
    </Staff.Navigator>
  );
}

const Casas = createNativeStackNavigator();

function CasasScreen({ navigation }) {
  return (
    <Casas.Navigator screenOptions={{ headerShown: false }}>
      <Casas.Screen name="Home" component={vacio} />
      <Casas.Screen name="List" component={vacio} />
      <Casas.Screen name="Details" component={vacio} />
    </Casas.Navigator>
  );
}































