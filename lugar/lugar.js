const axios = require('axios');
const clima = require('../clima/clima');
///////////////////Obtiene coordenadas//////////////////////////
const getCoords = async(dir) => {
    const encodeUrl = encodeURI(dir);
    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php/latlon.php?location=${encodeUrl}`,
        headers: {
            'x-rapidapi-key': '79d3bf6633mshf7724440c0da77ap1d36b2jsn88e9b5a1cd7f',
            'x-rapidapi-host': 'devru-latitude-longitude-find-v1.p.rapidapi.com'
        },
        timeout: 5000
    });
    const res = await instance.get();
    let data = res.data.Results;

    if (data.length === 0) {
        throw new Error(`No Hay Datos Disponibles Para ${dir}`);
    }
    data = data[0];
    const direccion = data.name;
    const lat = data.lat;
    const lng = data.lon;
    return {
        direccion,
        lat,
        lng
    }
};
////////////////////////Obtiene La Informacion Del Clima Por Coordenadas////////////////////
const getInfo = async(dir) => {
    try {
        const coords = await getCoords(dir);
        const temp = await clima.getClima(coords.lat, coords.lng);
        return `El Clima De ${dir} Es: ${temp}°C.`;
    } catch (error) {
        console.log('Error!!!!!!!', error.message);
        return `No Se Puede Determinar El Clima De ${dir}`;
    }
};

module.exports = {
    getInfo
}