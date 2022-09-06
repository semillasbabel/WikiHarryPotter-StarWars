import axios from 'axios';
import {hpkeys} from './KeysHP';

const RetDefault = [
    {Default: "No se expecifico el tipo de busqueda"}
]

export async function SwitchSearchHP(SearchType){ /*Cambiar las funciones y variables a minuscula*/ 
    let Path = "";

    switch (SearchType) {

        case hpkeys.ALLKEY:
            Path = hpkeys.ALLPATH;
            return await HPREQUESTAXIO(Path); 
        break;

        case hpkeys.STUDENTSKEY:
            Path = hpkeys.STUDENTSPATH;
            return await HPREQUESTAXIO(Path); 
        break;

        case hpkeys.STAFFKEY: 
            Path = hpkeys.STAFFPATH;
            return await HPREQUESTAXIO(Path); 
        break;

        case hpkeys.GryffindorKEY:
            Path = hpkeys.GryffindorPATH;
            return await HPREQUESTAXIO(Path); 
        break;

        case hpkeys.HufflepuffKEY:
            Path = hpkeys.HufflepuffPATH; 
            return await HPREQUESTAXIO(Path); 
        break;

        case hpkeys.RavenclawKEY:
            Path = hpkeys.RavenclawPATH;
            return await HPREQUESTAXIO(Path); 
        break;

        case hpkeys.SlytherinKEY:
            Path = hpkeys.SlytherinPATH;
            return await HPREQUESTAXIO(Path); 
        break;

        default:
            return RetDefault[0];
        break;

    }

}



let TEMP = [];
let RETURN = [];

export async function HPREQUESTAXIO(Path = ""){

    await axios({
        method: "get",
        url: Path,
    })
    .then(res => {TEMP.push(res.data), vali = valiset()})
    .catch((error) => {TEMP.push([{name:`${error.name}: ${error.message}`}])})

    if (RETURN.length > 0) {
        RETURN = [];

        TEMP.forEach(function(dato,index){
            RETURN.push(TEMP[index]);
        })
    
        TEMP = [];
        return RETURN[0];

    } else {
        TEMP.forEach(function(dato,index){
            RETURN.push(TEMP[index]);
        })
    
        TEMP = [];
        return RETURN[0];
    }
}