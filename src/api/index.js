import axios from 'axios' 

const url = "https://covid19.mathdro.id/api";

export const fetchData = async (country) =>{
    try{
        let changeableUrl = url;
        if(country){
            changeableUrl = `${url}/countries/${country}`
        }

        const { data : {confirmed, deaths, recovered, lastUpdate} } = await axios.get(changeableUrl);

        const modifiedData ={
            confirmed,
            deaths,
            recovered,
            lastUpdate

        }
        return modifiedData;
    }
    catch(error){
        console.log(error);
    }
}

export const fetchDailyData =  async() => {
    try {
        // console.log(`${url}/daily`);
        const {data} = await axios.get(`${url}/daily`);
        //console.log(data);
        return data;
    } catch (error) {
        console.log(error);
    }
}


export const fetchCountries = async() =>{
    try{
        const {data : {countries}} = await axios.get(`${url}/countries`);
        const c = countries.map((x) => x.name);
        return c;
    }
    catch(error){
        console.log(error);
    }
}