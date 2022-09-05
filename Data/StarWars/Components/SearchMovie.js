import React,{Component} from 'react';
import { Text, View, SafeAreaView, FlatList, Alert, ScrollView, TouchableOpacity, ActivityIndicator, ImageBackground} from 'react-native';
import axios, { AxiosError } from 'axios';
import Imagelist from './imagenlist.js';
// import {SwitchSearchSW} from "../Data/RequestSW";

import {styles} from "../Styles/StylesheetSW";
import { Card } from '@rneui/themed';
// import { BlurView, VibrancyView } from "@react-native-community/blur";

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
        url: `https://swapi.dev/api/films/`,
    })
    .then(res => this.setState({Busqueda: res.data.results, loading: false}));
  }

  renderItem(data){
    return( 
    <ScrollView> 
      <View style={{backgroundColor: "white", borderRadius: 15,opacity: 0.6, height: 150, marginHorizontal: 20, marginVertical: 20 }}>
      <Text style={styles.textview}>Pelicula: {data.item.title}</Text>
      <Text style={styles.textview}>Director De Pelicula{data.item.director}</Text>
      <Text style={styles.textview}>Pelicula #: {data.item.episode_id}</Text>
      <Text style={styles.textview}>Fecha de Salida:{data.item.release_date}</Text>
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