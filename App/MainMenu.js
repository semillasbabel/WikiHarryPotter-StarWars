
import React from "react";
import { View, Image, TouchableOpacity, ImageBackground} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HarryPotter from "./HarryPotter/Views/MenuHP";
import StarWars from "./StarWars/Views/MenuSW";

import {menuKeys} from "./MainMenuKeys";
import {styles} from "./MainMenuStyles";

function HomeScreen({navigation}) {
    return (
        <View style={styles.container}>
            
            <View style={styles.imagecontainer}>
                <TouchableOpacity onPress={() => navigation.navigate(menuKeys.navegacionhp)}>
                    <Image source={{uri: menuKeys.hpimage}}
                    style={styles.image}/>
                    
                </TouchableOpacity>
            </View>

            <View style={styles.imagecontainer}>
                <TouchableOpacity  onPress={() => navigation.navigate(menuKeys.navegacionsw)}>
                    <Image source={{uri: menuKeys.swimage}}
                    style={styles.image}/>
                    
                </TouchableOpacity>
            </View>

        </View>
    );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      
      <Stack.Navigator
        screenOptions={{headerShown: false}}>

        <Stack.Screen
          name={menuKeys.navegacionmenu}
          component={HomeScreen}
          options={{}}
        />

         <Stack.Screen 
          name={menuKeys.navegacionhp} 
          component={HarryPotter}
        />

        <Stack.Screen 
          name={menuKeys.navegacionsw} 
          component={StarWars}
        /> 

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;