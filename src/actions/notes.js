//primero se importa las notas
import Notes from '../data/notes'

// Se crean los usuarios
const notes = Notes.getNotes()

//acciones de un CRUD

//Mostrar todas las Notas
exports.getAllNotes = () =>{
    const note = []
    notes.forEach((element)=> {
        var obj = new Object();
        obj.id = element.id
        obj.noteTitle = element.title
        obj.noteDescription = element.description
        note.push(obj)
    })
    return note
}

//Crear una Nota no estoy seguro si esta bien
exports.postNotes = (ctx) =>{
    const note = []
    let id = null
    notes.forEach((element)=> {
        id = element.id
        var obj = new Object();
        obj.id = element.id
        obj.noteTitle = element.title
        obj.noteDescription = element.description
        note.push(obj)
    })
    if (id!=null){
        const id = ctx.request.id
        const title = ctx.request.title
        const description = ctx.request.description
    }
    return note
}

