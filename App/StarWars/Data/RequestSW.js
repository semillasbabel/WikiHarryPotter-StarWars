import axios from 'axios';
import {swkeys} from './KeysSW';

const RetDefault = [
    {Default: "No se expecifico el tipo de busqueda"}
]

export async function SwitchSearchSW(SearchType){ 
    let Path = "";
    let Paginas;

    

    switch (SearchType) {

        case swkeys.PERSONSKEY:
            Path = swkeys.PERSONSPATH;
            Paginas = 3;
            return await SWREQUEST(Path, Paginas); 
        break;

        case swkeys.PLANETSKEY:
            Path = swkeys.PLANETSPATH;
            Paginas = 3;
            return await SWREQUEST(Path, Paginas); 
        break;

        case swkeys.VehiclesKEY: 
            Path = swkeys.VehiclesPATH;
            Paginas = 3;
            return await SWREQUEST(Path, Paginas); 
        break;

        case swkeys.STARSHIPSKEY:
            Path = swkeys.STARSHIPSPATH;
            Paginas = 3;
            return await SWREQUEST(Path, Paginas);
        break;

        case swkeys.FILMSKEY:
            Path = swkeys.FILMSPATH;
            return await SWFILMS(Path);
        break;

        case swkeys.SPECIESKEY:
            Path = swkeys.SPECIESPATH;
            Paginas = 3;
            return await SWREQUEST(Path, Paginas);
        break;

        default:
            return RetDefault[0];
        break;

    }

}

let TEMP = [];
let RETURN = [];
let TEMPFOR = [];

export async function SWREQUEST(Path = "", Paginas = 0){

    TEMP = [];

    if (Paginas == 0) {

        await axios({
            method: "get",
            url: Path,
        })
        .then(res => {TEMPFOR.push(res.data.results), vali = valiset()})
        .catch((error) => {TEMPFOR.push([{name:`${error.name}: ${error.message}`}])})

        TEMPFOR[0].forEach(function(dato,index){
            TEMP.push(dato);
        })
    
        TEMPFOR = [];

    } else {

        for (let i = 1; i <= Paginas; i++) {

            await axios({
                method: "get",
                url: `${Path}${i}`,
            })
            .then(res => {TEMPFOR.push(res.data.results), vali = valiset()})
            .catch((error) => {TEMPFOR.push([{name:`${error.name}: ${error.message}`}])})
    
            TEMPFOR[0].forEach(function(dato,index){
                TEMP.push(dato);
            })
        
            TEMPFOR = [];
        }
    }

    return TEMP;
}




export async function SWFILMS(Path = ""){

    TEMP = [];

    await axios({
        method: "get",
        url: Path,
    })
    .then(res => {TEMP.push(res.data.results), vali = valiset()})
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