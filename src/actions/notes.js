//primero se importa las notas
import Notes from '../data/notes'

// Se crean las notas
let notes = Notes.getNotes()

exports.getAllNotes = () => {
    return notes
}

exports.getNote = (noteId) => {
    if (0 < noteId && noteId <= notes.length) {
        let note = notes.filter((not) => {
            return not.id == noteId
        })
        return note[0]
    }
    else{
        return {
            message: 'Esta Id no se encuentra en el sistema'
        }
    }
}

exports.postNotes = (noteData) => {
    if (noteData.data != "") {
        const note = {
            id: notes.length + 1,
            data: noteData.data
        }
        notes.push(note)
        return true
    }
    else{
        return false
    }
}

exports.removeNote = (noteId) => {
    let num_ver = 0
    if (0 < noteId && noteId <= notes.length) {
        for (let i = 0; i < notes.length; i++) {
            if (notes[i].id == noteId){
                num_ver = i;
                notes.splice(i, 1)
            }
        }
        for (let k = num_ver; k < notes.length; k++) {
            notes[k].id = notes[k].id - 1;        
        }
    }
    else{
        num_ver = -1
    }
    
    return num_ver
}

exports.updateNote = (noteId, noteData) => {
    console.log(noteId, ", ", noteData)
    for (let i = 0; i < notes.length; i++) {
        if (notes[i].id == noteId){
            notes[i].data = noteData
        }
    }
}