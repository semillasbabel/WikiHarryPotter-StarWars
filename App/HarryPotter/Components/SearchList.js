import React,{Component} from 'react';
import { Text, View, SafeAreaView,ImageBackground, FlatList, Alert, ScrollView, TouchableOpacity, ActivityIndicator} from 'react-native';
import axios, { AxiosError } from 'axios';
import { useNavigation } from '@react-navigation/native';
import ImageList from './ImageList';
import {SwitchSearchHP} from "../Data/RequestHP";

import {styles} from "../Styles/StylesheetHP";

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
    this.setState({Busqueda: await SwitchSearchHP(SearchType), loading: false});
  }

  render(){
    const {Busqueda, loading} = this.state;
    const {navigation} = this.props;
    const image = { uri: "https://cdn.pixabay.com/photo/2014/08/29/11/07/frame-430979_640.png" };

    // this.actualizar();
    if(!loading){
      return (
        <SafeAreaView style={{backgroundColor: "#7f0000"}}>
          <FlatList
            data={Busqueda}
            // renderItem={this.renderItem}
            renderItem={(data) => (
            <TouchableOpacity onPress={() => navigation.push('Details', {item: data.item })}>
              <View style={styles.item}>
                
                <Text style={styles.text}>{data.item.name}</Text>
                {/* <Text>{saludo}</Text> */}
                
                {/* <ImageList urlimg = {`${data.item.image}`} /> */}

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
      )
    }
    else{
      return <ActivityIndicator size="large" color="#000"/>
    }
  }

}
































// export default class CharactersComponent extends Component{

//   constructor(props) {
//     super(props);
//   }

//   state = {
//     Busqueda: [],
//     loading: true,
//   }

//   async componentDidMount() {
//     const {SearchType} = this.props;
//     this.setState({Busqueda: await SwitchSearchHP(SearchType), loading: false});
//   }

//   render(){
//     const {Busqueda, loading} = this.state;
//     if(!loading){
//       return (
//         <SafeAreaView>
//           <FlatList
//             data={Busqueda}
//             renderItem={(data) => (
//             <TouchableOpacity onPress={() => Alert.alert(data.item.name)}>
//               <View style={styles.item}>
                
//                 <Text style={styles.text}>{data.item.name}</Text>
                
//                 {/* <Imagelist urlimg = {`${data.item.image}`} /> */}
                
//               </View>
//             </TouchableOpacity>
//             )}
//           />
//         </SafeAreaView>
//       )
//     }
//     else{
//       return <ActivityIndicator size="large" color="#000"/>
//     }
//   }

// }
