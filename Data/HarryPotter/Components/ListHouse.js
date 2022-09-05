import React,{Component} from 'react';
import { Text, View, SafeAreaView, FlatList, Alert, ScrollView, TouchableOpacity, ActivityIndicator} from 'react-native';
import axios, { AxiosError } from 'axios';
import {SwitchSearchHP} from "../Data/RequestHP";
import {hpkeys} from "../Data/KeysHP";
import { useNavigation } from '@react-navigation/native';
import HousesComponent from "./HousesComponent";

function ListHouse({route, navigation}){
    const {house} = route.params;
    const navi = useNavigation();
    return <HousesComponent {...navigation} SearchType={house} navigation={navi}/>;
}

export default ListHouse;