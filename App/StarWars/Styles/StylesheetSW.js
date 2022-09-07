import { color } from '@rneui/base';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet} from 'react-native';

export const styles = StyleSheet.create({

item2:{
   
    
    borderColor: "black",
    borderBottomWidth: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingLeft: 10,
    paddingRight: 10,
    height: 100,
    backgroundColor:"#e5e5ec"
    
  },
  text2:{
    fontSize: 22,
    color:"Black",
    fontWeight: "bold",
    
  },

  image2:{
   height:75,
   width:75,
    borderRadius:50,
  paddingLeft: 50,
    alignContent:'flex-end'
    

    
  },
  info2:{
    fontSize:30,
    color: 'black',
    alignContent:'center',
    justifyContent:'center',

    textAlign:'center',
    paddingStart:5,
    marginVertical: 5



  },
  cardtext2:{
    fontSize: 25,
    fontWeight:'bold',
    color:'#00236d'
  },
  card2:{
    fontSize:20,
    fontWeight:"bold",
    color: "black",
    alignContent:'center',
    justifyContent:'center',
    textAlign:'center',
    paddingStart:5,
    marginVertical: 5,
    borderColor:"red",
    

  },
  foto2:{
    marginHorizontal:100, 
    height:150, 
    width:150, 
    borderRadius: 75,
    borderColor:"blue",
   
  },
  btnBack2:{
    marginTop:10,
    paddingVertical:10,
    height:45,
    width:350,
    borderRadius:15,
    paddingHorizontal:10,
    
    marginHorizontal:20,
    backgroundColor:"black",
    alignContent:"center",
    justifyContent:"center",
    alignItems:"center"
  },
  textback2:{
    fontSize:19,
    fontStyle:"italic",
    color:"#00236d"

  },
  divider2:{
    color: "red",
  
  },
  textview:{
    fontSize: 20,
    color: "##212121",
    alignContent:"center",
    alignItems:"center",
    marginHorizontal:15,
    fontWeight:"bold"
  }

})


