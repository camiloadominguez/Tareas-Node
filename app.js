const argv = require('./config/yargs').argv;
const tareas = require('./tareas/tareas')

let key = argv._[0];

switch(key)
{
    case 'crear':
        let tarea = tareas.crear(argv.descripcion);
        console.log(tarea);
        break;
    case 'listar':
        let listado = tareas.listar();
        for(let tarea of listado){
            console.log('=======Lista de tareas=========='.green);
            console.log(tarea.descripcion);
            console.log('Estado: ', tarea.estado);
        }
        break;
    case 'actualizar':
        let estado = tareas.update(argv.descripcion, argv.completado);
        console.log(estado)
        break;
    case 'borrar':
        let borrado = tareas.deleteDB(argv.descripcion);
        console.log(borrado);
        break;
    default:
        console.log('El comando no es reconocido');
}