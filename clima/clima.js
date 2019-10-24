const axios = require('axios');
const apiid = 'dbefd8497bd6acb205e9982df5e1fc07';

////////////////Obtiene El CLima A traves De Latitud Y Logintud/////////////////////
const getClima = async(lat, lgn) => {
    const res = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lgn}&appid=${apiid}&units=metric`);
    return res.data.main.temp;
};
module.exports = {
    getClima
}