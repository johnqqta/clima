const { argv } = require('yargs').options({
        direccion: {
            demand: true,
            alias: 'd',
            desc: 'Direccion O Ciudad De La Cual Se Quiere Obtener El Clima'
        }
    })
    .help()
    //////////////////////EXPORTACION DE ARQCHIVOS/////////////////////////    
module.exports = {
    argv
}