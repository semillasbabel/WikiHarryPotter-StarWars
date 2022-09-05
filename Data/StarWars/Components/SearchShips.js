import React,{Component} from 'react';
import { Text, View, SafeAreaView, FlatList, Alert, ScrollView, TouchableOpacity, ActivityIndicator, ImageBackground} from 'react-native';
import axios, { AxiosError } from 'axios';
import Imagelist from './imagenlist.js';
// import {SwitchSearchSW} from "../Data/RequestSW";

import {styles} from "../Estilos/Estiloswars";
import { Card } from '@rneui/themed';
import { BlurView, VibrancyView } from "@react-native-community/blur";

export default class CharactersComponent extends Component{

  constructor(props) {
    super(props);
  }

  state = {
    Busqueda: [],
    loading: true,
  }

  async componentDidMount() {
    const {SearchType} = this.props;

    await axios({
        method: "get",
        url: `https://swapi.dev/api/starships/`,
    })
    .then(res => this.setState({Busqueda: res.data.results, loading: false}));
  }

  renderItem(data){
    return( 
    <ScrollView> 
      <View style={{backgroundColor: "white", borderRadius: 15,opacity: 0.6, height: 150, marginHorizontal: 20, marginVertical: 20 }}>
      <Text style={styles.textview}>nombre: {data.item.name}</Text>
      <Text style={styles.textview}>Modelo:{data.item.model}</Text>
      <Text style={styles.textview}>Valor: {data.item.cost_in_credits}</Text>
      <Text style={styles.textview}>Velocidad:{data.item.max_atmosphering_speed}</Text>
      <Text style={styles.textview}>Pasajeros:{data.item.passengers}</Text>
      <Text style={styles.textview}>Consumibles:{data.item.consumables}</Text>
      </View>
      
    </ScrollView>
    )
  }

  render(){
    const {Busqueda, loading} = this.state;
    const {navigation} = this.props;
    if(!loading){
      return (
        <SafeAreaView>
          <FlatList
            data={Busqueda}
            renderItem={this.renderItem}
          />
        </SafeAreaView>
      )
    }
    else{
      return <ActivityIndicator size="large" color="#white"/>
    }
  }

}