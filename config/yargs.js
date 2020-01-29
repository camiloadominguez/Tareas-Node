const descripcion = {
    alias:'d',
    demand: true,
    desc: 'Descripcion de una tarea por hacer'
}
const completado = {
    alias: 'c',
    default: true,
    desc: 'Marca como completado o pendiente una tarea'
}

const argv = require('yargs')
    .command('crear','Crea una nueva tarea por hacer', {descripcion})
    .command('actualizar', 'Actualiza el estado de una tarea',{
        descripcion:{
            alias: 'd',
            demand:true,
            desc: 'Actualiza el estado de una tarea'
        },
        completado:{
            alias: 'c',
            default:true,
            desc: 'Marca como completada o pendiente una tarea'
        }
    })
    .command('borrar','Borra una tarea',{
        descripcion:{
            alias:'d',
            demand:true,
            desc:'Marca como completada o pendiente una tarea'
        }
    })
    .help()
    .argv;

    module.exports = {
        argv
    }