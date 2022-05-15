//primero se importa las notas
import Notes from '../data/notes'

// Se crean los usuarios
let notes = Notes.getNotes()

exports.getAllNotes = () => {
    return notes
}

exports.getNote = (noteId) => {
    let note = notes.filter((not) => {
        return not.id == noteId
    })
    return note[0]
}

exports.postNotes = (noteData) => {
    const note = {
        id: notes.length + 1,
        data: noteData.data
    }
    notes.push(note)
}

exports.removeNote = (noteId) => {
    let b = 0
    for (let i = 0; i < notes.length; i++) {
        if (notes[i].id == noteId){
            b = i;
            notes.splice(i, 1)
        }
    }
    for (let k = b; k < notes.length; k++) {
        notes[k].id = notes[k].id - 1;        
    }
}

exports.updateNote = (noteId, noteData) => {
    console.log(noteId, ", ", noteData)
    for (let i = 0; i < notes.length; i++) {
        if (notes[i].id == noteId){
            notes[i].data = noteData
            //console.log(notes[i])
        }
    }
}