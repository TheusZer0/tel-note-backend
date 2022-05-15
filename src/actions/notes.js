//primero se importa las notas
import Notes from '../data/notes'

// Se crean los usuarios
const notes = Notes.getNotes()

//let notes = []

exports.getAllNotes = () => {
    return notes
}

exports.getNote = (noteId) => {
    let note = notes.filter((note) => {
        return note.id === noteId
    })
    return note[0]
}

exports.postNotes = (noteData) => {
    const note = {
        id: notes.length + 1,
        data: noteData.data
    }
    console.log(note.data)
    notes.push(note)
}

exports.removeNote = (noteId) => {
    notes = notes.filter((note) => {
        return note.id !== noteId
    })
}

exports.updateNote = (noteId, noteData) => {
    for (let i = 0; i < notes.length; i++) {
        if (notes[i].id == noteId){
            notes[i].data == noteData
        }
    }
}