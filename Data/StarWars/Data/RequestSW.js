import axios from 'axios';
import {swkeys} from './KeysSW';

export async function SwitchSearchSW(SearchType){ 
    let Path = "";
    let Paginas;

    

    switch (SearchType) {

        case swkeys.PERSONSKEY:
            Path = swkeys.PERSONSPATH;
            Paginas = 9;
            return await SWREQUEST(Path, Paginas); 
        break;

        case swkeys.PLANETSKEY:
            Path = swkeys.PLANETSPATH;
            Paginas = 6;
            return await SWREQUEST(Path, Paginas); 
        break;

        case swkeys.VehiclesKEY: 
            Path = swkeys.VehiclesPATH;
            Paginas = 4;
            return await SWREQUEST(Path, Paginas); 
        break;

        case swkeys.STARSHIPSKEY:
            Path = swkeys.STARSHIPSPATH;
            Paginas = 4;
            return await SWREQUEST(Path, Paginas);
        break;

        case swkeys.FILMSKEY:
            Path = swkeys.FILMSPATH;
            return await SWFILMS(Path);
        break;

        case swkeys.SPECIESKEY:
            Path = swkeys.SPECIESPATH;
            Paginas = 4;
            return await SWREQUEST(Path, Paginas);
        break;

    }

}

let TEMP = [];
let RETURN = [];
let TEMPFOR = [];

export async function SWREQUEST(Path = "", Paginas){

    TEMP = [];

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

    console.log(TEMP);

    return TEMP;
}




async function SWFILMS(Path = ""){

    TEMP = [];

    await axios({
        method: "get",
        url: Path,
    })
    .then(res => {TEMP.push(res.data.results), vali = valiset()})
    .catch((error) => {TEMP.push([{name:`${error.name}: ${error.message}`}])})
    
    console.log(TEMP);

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