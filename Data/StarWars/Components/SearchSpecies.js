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
        url: `https://swapi.dev/api/species/`,
    })
    .then(res => this.setState({Busqueda: res.data.results, loading: false}));
  }

  renderItem(data){
    return( 
    <ScrollView> 
      <View style={{backgroundColor: "white", borderRadius: 15,opacity: 0.6, height: 150, marginHorizontal: 20, marginVertical: 20 }}>
      <Text style={styles.textview}>Nombre: {data.item.name}</Text>
      <Text style={styles.textview}>Clasificación:{data.item.classification}</Text>
      <Text style={styles.textview}>Designación: {data.item.designation}</Text>
      <Text style={styles.textview}>Peso promedio:{data.item.avergare_height}</Text>
      <Text style={styles.textview}>Vida promedio:{data.item.average_lifespan}</Text>
      <Text style={styles.textview}>lengua:{data.item.languaje}</Text>
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