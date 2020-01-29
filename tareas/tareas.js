
const fs = require('fs');

let listadoTareas = [];

const loadDB = () =>{
    try{
        listadoTareas = require('../db/data.json');
    }
    catch{
        listadoTareas = [];
    }
}

const saveDB = () => {
    let data = JSON.stringify(listadoTareas);
    fs.writeFile('db/data.json', data, (err) => {
        if (err) throw new Error('No se pudo grabar');
        console.log('La tarea ha sido cargada con exito');
      });
}

const listar = () => {
    loadDB();
    return listadoTareas;
}

const crear = (descripcion) => {
    loadDB();
    let tarea = {
        descripcion: descripcion,
        estado: false
    }
    listadoTareas.push(tarea);
    saveDB();
    return tarea;
}

const update = (descripcion, estado) => {
    loadDB();
    let postnElemm = listadoTareas.findIndex( tarea => {
        return tarea.descripcion === descripcion;
    });
    if(postnElemm >= 0 ){
        listadoTareas[postnElemm].estado = JSON.parse(estado);
        saveDB();
        return true;
    }else{
        return false;
    }
}
const deleteDB = (descripcion) => {
    loadDB();
    let nuevaLista = listadoTareas.filter( tarea =>{
        return tarea.descripcion !== descripcion;
    });
    if(listadoTareas.length === nuevaLista.length){
        return false;
    }else{
        listadoTareas=nuevaLista;
        saveDB();
        return true;
    }
    // let postnToDelete = listadoTareas.findIndex(tarea => {
    //     return tarea.descripcion === descripcion;
    // });
    // if(postnToDelete >=0 ){
    //     console.log(postnToDelete);
    //     listadoTareas.splice(postnToDelete,1);
    //     saveDB();
    //     return true;
    // }else{
    //     return false;
    // }
}
module.exports = {
    deleteDB,
    update,
    crear,
    listar
}