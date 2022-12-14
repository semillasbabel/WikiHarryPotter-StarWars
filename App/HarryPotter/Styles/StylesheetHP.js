import { StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
    
    // Styles for the MenuHp Screen
    MenuHPcontainer:{
        flex: 1,
    },

    MenuHPstatusbar:{
        height: 40, 
        backgroundColor: "#f9f9f9"
    },

    MenuHPnavigationbar:{
        backgroundColor: "white", 
        height: 65, 
        alignItems: "center", 
        justifyContent: "center",
    },

    MenuHPimagelogo:{
        height: 50, 
        width: 175, 
        marginTop:35
    },

    MenuHPbntgoback:{
        marginEnd: 320, 
        paddingBottom: 25 
    },

    MenuHPiconogoback:{
        fontSize: 17, 
        marginVertical:-30
    },
    
    MenuHPiconback:{
        marginVertical: -40
    },

    //.........Separator..............

    MenuHPtabbarcontainer:{
        flex: 1, 
        backgroundColor: "#E74C3C" 
    },

    MenuHPTabbar:{
        backgroundColor: "white",
    },

    //.........Separator..............

    MenuHPHousesContainer:{
        flex: 1,
    },

    MenuHPHouseContainer:{
        flex: 1,
        marginVertical: 1,
    },

    MenuHPHousesImage:{
        height: '100%',  
        width: '100%',
    },

    // Styles for Items List

    item:{
        backgroundColor: "transparent",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingLeft: 10,
        paddingRight: 10,
        height: 90,
    },

    text:{
        fontSize: 22,
        color:"#e8b800",
        fontWeight: "bold",
        
    },
    
    image:{
        // height: "90%",
        // width: "20%",
        // borderRadius:100,
        // paddingLeft: 50,
        // alignContent:'flex-end'

        height: 67,
        width: 66,
        marginTop: 9,
        paddingLeft: 50,
        alignContent:'flex-end'
    },

    // Styles Houses List 

    HousesbtnBack:{
        marginTop:10,
        paddingVertical:10,
        height:45,
        width:350,
        borderRadius:15,
        paddingHorizontal:10,
        
        marginHorizontal:20,
        backgroundColor:"#400000",
        alignContent:"center",
        justifyContent:"center",
        alignItems:"center"
    },

    Housestextback:{
        fontSize:15,
        fontStyle:"italic",
        color:"white"

    },

    // Styles Details Screen

    btnBack:{
        marginTop:10,
        marginBottom:20,
        paddingVertical:10,
        height:45,
        width:"90%",
        borderRadius:15,
        paddingHorizontal:10,
        
        marginHorizontal:20,
        backgroundColor:"#400000",
        alignContent:"center",
        justifyContent:"center",
        alignItems:"center"
    },

    textback:{
        fontSize:15,
        fontStyle:"italic",
        color:"white"
    },

    cardtext:{
        fontSize: 25,
        fontWeight:'bold',
        color:'#890000'
    },

    divider:{
        color: "red",
    },

    foto:{ 
        height:160, 
        width:160, 
        borderRadius: 80,
        borderColor:"blue",
       
    },

    DetailsTextDefinition:{
        fontSize:17,
        fontWeight:"bold",
        color: "#740001",
        textAlign:'left',
        paddingStart:5,
        marginVertical: 5,
        borderColor:"red",
        marginLeft: 20,
    },

    DetailsTextResult:{
        fontSize:17,
        fontWeight:"bold",
        color: "#740001",
        textAlign:'left',
        paddingStart:5,
        marginVertical: 5,
        borderColor:"red",  
    },




});