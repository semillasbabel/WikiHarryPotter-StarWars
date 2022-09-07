import React,{Component} from 'react';
import { Text, View, SafeAreaView, ImageBackground, image, FlatList, TouchableOpacity, ActivityIndicator} from 'react-native';
import ImageList from './ImageList';
import {SwitchSearchHP} from "../Data/RequestHP";

import {styles} from "../Styles/StylesheetHP";

export default class CharactersComponent extends Component{

  constructor(props) {
    super(props);
  }

  state = {
    Search: [],
    loading: true,
  }

  async componentDidMount() {
    const {SearchType} = this.props;
    this.setState({Search: await SwitchSearchHP(SearchType), loading: false});
  }

  render(){
    const {Search, loading} = this.state;
    const {navigation} = this.props;
    const image = { uri: "https://cdn.pixabay.com/photo/2014/08/29/11/07/frame-430979_640.png" };

    // this.actualizar();
    if(!loading){
      return (
        <View style={{backgroundColor: "#7f0000"}}>
        
            <View style={{height: 60, alignItems: "center",}}>
                <TouchableOpacity style={styles.HousesbtnBack} onPress={() => navigation.goBack()}>
                    <Text style={styles.Housestextback}>VOLVER A SELECCIÓN DE ESCUELAS</Text>
                </TouchableOpacity>
            </View>

        <View>
        <SafeAreaView>
      <FlatList
        data={Search}
        // renderItem={this.renderItem}
        renderItem={(data) => (
        <TouchableOpacity onPress={() => navigation.push('Details', {item: data.item })}>
          <View style={styles.item}>
            
            <Text style={styles.text}>{data.item.name}</Text>
            {/* <Text>{saludo}</Text> */}
            
            <View style={{height: 85, width: 85, alignSelf: "center"}}>
              <ImageBackground source={image} resizeMode="cover" style={{height: "100%", alignItems: "center"}}>
                    {/* <Image 
                      source={{uri: urlimg}} 
                      style={{height: 140, width: 140, alignSelf: "center", marginTop: 15}}
                    /> */}
                <ImageList urlimg = {`${data.item.image}`} />
              </ImageBackground>
            </View>
            
          </View>
          <View style={{alignItems: "flex-end"}}>
            <View style={{width:"90%", height: 1.5, backgroundColor: "#6d0000"}}/>
          </View>
        </TouchableOpacity>
        )}

        // keyExtractor={item=>item.name}
      />
    </SafeAreaView>
        </View>
    </View>
      )
    }
    else{
      return <ActivityIndicator size="large" color="#000"/>
    }
  }

}
