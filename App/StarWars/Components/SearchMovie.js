import React,{Component} from 'react';
import { Text, View, SafeAreaView, FlatList, Alert, ScrollView, TouchableOpacity, ActivityIndicator, ImageBackground} from 'react-native';
import axios, { AxiosError } from 'axios';
import Imagelist from './imagenlist.js';
import {SwitchSearchSW} from "../Data/RequestSW";
import { Tile } from "@rneui/themed";

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
    this.setState({Busqueda: await SwitchSearchSW(SearchType), loading: false});
  }

  renderItem(data){
    return( 
 
       <View style={{ alignItems: 'center' }}>
      <ScrollView style={{ paddingVertical: 10 }}>
    
      <Tile
     imageSrc={{
       uri:
         'https://images.wallpapersden.com/image/download/star-wars-2019_a21nbWqUmZqaraWkpJRobWllrWdma2U.jpg',
     }}
     title=  {data.item.title}  
     titleStyle={{ fontSize: 22 }}
     featured
     caption={data.item.director}
     
    
     activeOpacity={1}
     width={350}
   />
    </ScrollView>
   </View>
    )
  }

  render(){
    const {Busqueda, loading} = this.state;
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