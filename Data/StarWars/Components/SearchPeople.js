import React,{Component} from 'react';
import { Text, View, SafeAreaView, FlatList, Alert, ScrollView, TouchableOpacity, ActivityIndicator, ImageBackground} from 'react-native';
import axios, { AxiosError } from 'axios';
import Imagelist from './imagenlist.js';
// import {SwitchSearchSW} from "../Data/RequestSW";

import {styles} from "../Estilos/Estiloswars";

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
        url: `https://swapi.dev/api/people/?page=1`,
    })
    .then(res => this.setState({Busqueda: res.data.results, loading: false}));
  }

  render(){
    const {Busqueda, loading} = this.state;
    const {navigation} = this.props;
    if(!loading){
      return (
        <SafeAreaView>
          <FlatList
            data={Busqueda}
            renderItem={(data) => (
            <TouchableOpacity onPress={() => navigation.push('Details', {item: data.item })}>
              <View style={styles.item2}>
               
                <Text style={styles.text2}>{data.item.name}</Text>
                
                <Imagelist urlimg = {`${data.item.image}`} />
                
              </View>
            </TouchableOpacity>
            )}
          />
        </SafeAreaView>
      )
    }
    else{
      return <ActivityIndicator size="large" color="#white"/>
    }
  }

}