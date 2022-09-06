import React,{Component} from 'react';
import { Text, View, SafeAreaView, FlatList, TouchableOpacity, ActivityIndicator} from 'react-native';
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
    // this.actualizar();
    if(!loading){
      return (
        <View style={{backgroundColor: "#7f0000"}}>
        
            <View style={{height: 60}}>
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
            
            <ImageList urlimg = {`${data.item.image}`} />
            
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
