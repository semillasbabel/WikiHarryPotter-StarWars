import React,{Component} from 'react';
import { Text, View, SafeAreaView, FlatList, Alert, ScrollView, TouchableOpacity, ActivityIndicator} from 'react-native';
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
    // this.actualizar();
    if(!loading){
      return (
        <SafeAreaView>
          <FlatList
            data={Busqueda}
            // renderItem={this.renderItem}
            renderItem={(data) => (
            <TouchableOpacity onPress={() => navigation.push('Details', {item: data.item })}>
              <View style={styles.item}>
                
                <Text style={styles.text}>{data.item.name}</Text>
                {/* <Text>{saludo}</Text> */}
                
                <ImageList urlimg = {`${data.item.image}`} />
                
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
