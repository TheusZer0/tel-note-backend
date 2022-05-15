import notesActions from '../../actions/notes'

//const response = require('koa/lib/response')

exports.getAllNotes = (ctx) => {
    ctx.body = notesActions.getAllNotes()
    return ctx
}

exports.getNote = (ctx) => {
    ctx.body = notesActions.getNote(ctx.params.id)
    return ctx
}

exports.removeNote = (ctx) => {
    notesActions.removeNote(ctx.params.id)
    ctx.body = {
        message: 'Note was removed successfully'
    }
    return ctx
}

exports.postNotes = (ctx) => {
    notesActions.postNotes(ctx.request.body)
    ctx.body = { message: 'Note created successfully' }
    return ctx
}

exports.updateNote = (ctx) => {
    notesActions.updateNote(ctx.request.id, ctx.request.body)
    ctx.body = { message: 'Note updated successfully' }
    return ctx
}