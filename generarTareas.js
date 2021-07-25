let fs = require('fs');
const validFilename = require('valid-filename');
const [arg1, arg2, cantidad, nombreArchivo, ...rest] = process.argv;

if (!cantidad || !Number(cantidad)) {
    console.log("Indique cantidad de tareas a generar aleatoreamente");
    process.exit();
}

const filename = validFilename(nombreArchivo) ? nombreArchivo : 'tareas-random';


const titulos = ['Comprar puchos', 'Pagar alquiler', 'Lavar los platos', 'Pedir turno', 'Cocinar', 'Ducha'];
const estados = ['Pendiente', 'En Proceso', 'Terminado', 'Cancelado'];


let listado = [];

for (var i = 0; i < Number(cantidad); i++) {
    listado.push({
        titulo: titulos[Math.floor(Math.random() * titulos.length)],
        estado: estados[Math.floor(Math.random() * estados.length)],
    });
};


fs.writeFileSync(`${filename}.json`, JSON.stringify({tareas: listado}, null, 4));