import notesActions from '../../actions/notes'

exports.getAllNotes = (ctx) => {
    ctx.body = notesActions.getAllNotes()
    return ctx
}

exports.getNote = (ctx) => {
    ctx.body = notesActions.getNote(ctx.params.id)
    console.log(ctx.body)
    
    if(ctx.body == null){
        console.log(ctx.body)
        ctx.body = { message: 'Esta Id no se encuentra en el sistema' }
    }
    console.log(ctx.body)
    return ctx
}

exports.removeNote = (ctx) => {
    let numero = notesActions.removeNote(ctx.params.id)
    console.log(ctx.params.id)
    console.log(numero)
    if(numero !== -1){
        ctx.body = {
            message: 'Note was removed successfully.'
        }
    }
    else{
        ctx.body = {
            message: 'Note doesnt exit so it cant be removed.'
        }
    }
    return ctx
}
//notes/notes.js

exports.postNotes = (ctx) => {
    let verif = notesActions.postNotes(ctx.request.body)
    if (verif == true) {
        ctx.body = { message: 'Note created successfully' }
    }
    else{
        ctx.body = { message: 'Estas agregando una nota vacia!'}
    }
    return ctx   
}

exports.updateNote = (ctx) => {
    notesActions.updateNote(ctx.params.id, ctx.request.body)
    ctx.body = { message: 'Note updated successfully' }
    return ctx
}