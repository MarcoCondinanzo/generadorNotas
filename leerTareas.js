let fs = require('fs');
const validFilename = require('valid-filename');
const [arg1, arg2, comando, nombreArchivo, ...rest] = process.argv;

const filename = validFilename(nombreArchivo) ? `${nombreArchivo}.json` : 'tareas.json';

let fileContent;

try {
    fileContent = fs.readFileSync(filename, 'utf8');
} catch(error) {
    console.error(`No existe el archivo ${filename}`);
    process.exit();
}

const listado = JSON.parse(fileContent);

switch(comando) {
    case 'listar': 
        console.log(listado.tareas.map(tarea => `Titulo: ${tarea.titulo} - Estado: ${tarea.estado}`).join('\n'));
    break;
    case undefined: 
        console.log("Debe indicar una opcion: Listar filename");
    break;
    default:
        console.log("Ingrese una opcion valida:: Listar filename");
    break;
}