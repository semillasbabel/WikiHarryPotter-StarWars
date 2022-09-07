import React,{Component} from 'react';
import { Text, View, SafeAreaView, FlatList, Alert, ScrollView, TouchableOpacity, ActivityIndicator} from 'react-native';
import axios, { AxiosError } from 'axios';
import { useNavigation } from '@react-navigation/native';
import Imagenlist from './imagenlist';
import {SwitchSearchSW} from "../Data/RequestSW";

import {styles} from "../Styles/StylesheetSW";

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
    this.setState({Busqueda: await SwitchSearchSW(SearchType), loading: false});
  }

  render(){
    const {Busqueda, loading} = this.state;
    const {navigation} = this.props;
    // this.actualizar();
    if(!loading){
      return (
        <SafeAreaView>
          <FlatList
            data={Busqueda}
            // renderItem={this.renderItem}
            renderItem={(data) => (
            <TouchableOpacity onPress={() => navigation.push('Details', {item: data.item })}>
              <View style={styles.item2}>
                
                <Text style={styles.text2}>{data.item.name}</Text>
                {/* <Text>{saludo}</Text> */}
                
                <Imagenlist urlimg = ""/>
                
              </View>
            </TouchableOpacity>
            )}

            // keyExtractor={item=>item.name}
          />
        </SafeAreaView>
      )
    }
    else{
      return <ActivityIndicator size="large" color="#000"/>
    }
  }

}