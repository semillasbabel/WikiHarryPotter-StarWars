import React, { useState, Component } from "react";
import { Text, View, StyleSheet, Image, FlatList, SafeAreaView, Alert, ScrollView, TouchableOpacity, ActivityIndicator, VirtualizedList } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Ionicons from 'react-native-vector-icons/Ionicons';
import SearchComponent from "../Components/SearchList";
import Listhouses from "../Components/ListHouse";
import { useNavigation } from '@react-navigation/native';
import Details from "./Details"
import {hpkeys} from "../Data/KeysHP"
import { styles } from "../Styles/StylesheetHP";
import listHouse from "../Components/ListHouse";




const Tab = createBottomTabNavigator();
export default class App extends Component {
  render() {
    return (
      <View style={styles.MenuHPcontainer}>

        <View style={styles.MenuHPstatusbar}/>

        <View style={styles.MenuHPnavigationbar}>

          <Image source={{uri: hpkeys.logomenu}} style={styles.MenuHPimagelogo}/>


          <TouchableOpacity style={styles.MenuHPbntgoback} onPress={() => { this.props.navigation.goBack() }}>
            
              <Ionicons name="home" size={30} style={styles.MenuHPiconback} />
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
                

                if (route.name === hpkeys.TabStudents) {
                iconName = hpkeys.Studentsicon;
                size = 30
                }

                if (route.name === hpkeys.TabEstudents) {
                iconName = hpkeys.Studentsicon;
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
              tabBarInactiveTintColor: '#7f0000'})}>
            <Tab.Screen name={hpkeys.TabHouses} component={HousesScreen} />
            <Tab.Screen name={hpkeys.TabCharacteres} component={CharactersScreen} />
            <Tab.Screen name={hpkeys.TabStudents} component={StudiantsScreen} />
            <Tab.Screen name={hpkeys.TabStaff} component={StaffScreen} />
          </Tab.Navigator>
        </View>


      </View>
    );
  }
}




const Characters = createNativeStackNavigator();
function CharactersScreen() {
  return (
    <Characters.Navigator screenOptions={{ headerShown: false }}>
      <Characters.Screen name="Home" component={SearchAll} />
      <Characters.Screen name="Details" component={Details} />
    </Characters.Navigator>
  );
}

const Students = createNativeStackNavigator();
function StudiantsScreen() {
  return (
    <Students.Navigator screenOptions={{ headerShown: false }}>
      <Students.Screen name="Home" component={SearchStudents} />
      <Students.Screen name="Details" component={Details} />
    </Students.Navigator>
  );
}

const Staff = createNativeStackNavigator();
function StaffScreen() {
  return (
    <Staff.Navigator screenOptions={{ headerShown: false }}>
      <Staff.Screen name="Home" component={Searchstaff} />
      <Staff.Screen name="Details" component={Details} />
    </Staff.Navigator>
  );
}

const Houses = createNativeStackNavigator();
function HousesScreen({ navigation }) {
  return (
    <Houses.Navigator screenOptions={{ headerShown: false }}>
      <Houses.Screen name="Home" component={Searchhouses} />
      <Houses.Screen name="List" component={Listhouses} />
      <Houses.Screen name="Details" component={Details} />
    </Houses.Navigator>
  );
}

function SearchAll({navigation}){
  const navi = useNavigation();
  return <SearchComponent {...navigation} SearchType={hpkeys.ALLKEY} navigation={navi}/>;
}

function SearchStudents({navigation}){
  const navi = useNavigation();
  return <SearchComponent {...navigation} SearchType={hpkeys.STUDENTSKEY} navigation={navi}/>;
}

function Searchstaff({navigation}){
  const navi = useNavigation();
  return <SearchComponent {...navigation} SearchType={hpkeys.STAFFKEY} navigation={navi}/>;
}

function Searchhouses({ navigation }) {
  return (
    <View style={styles.MenuHPHousesContainer}>

      <View style={styles.MenuHPHouseContainer}>

        <TouchableOpacity onPress={() => navigation.navigate('List', {house: hpkeys.GryffindorKEY})}>
          <Image
            source={{uri: hpkeys.Gryffindorimage}}
            style={styles.MenuHPHousesImage}
          />
        </TouchableOpacity>

      </View>

      <View style={styles.MenuHPHouseContainer}>

        <TouchableOpacity onPress={() => navigation.navigate('List', {house: hpkeys.HufflepuffKEY})}>
          <Image
            source={{uri: hpkeys.Hufflepuffimage}}
            style={styles.MenuHPHousesImage}
          />
        </TouchableOpacity>

      </View>

      <View style={styles.MenuHPHouseContainer}>

        <TouchableOpacity onPress={() => navigation.navigate('List', {house: hpkeys.RavenclawKEY})}>
          <Image
            source={{uri: hpkeys.Ravenclawimage}}
            style={styles.MenuHPHousesImage}
          />
        </TouchableOpacity>

      </View>

      <View style={styles.MenuHPHouseContainer}>

        <TouchableOpacity onPress={() => navigation.navigate('List', {house: hpkeys.SlytherinKEY})}>
          <Image
            source={{uri: hpkeys.Slytherinimage}}
            style={styles.MenuHPHousesImage}
          />
        </TouchableOpacity>

      </View>

    </View>
  )

}