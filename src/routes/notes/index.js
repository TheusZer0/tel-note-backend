const response = require('koa/lib/response')

const notesAction = require('../../actions/notes')

exports.getAllNotes = (ctx) => {
    ctx.body = notesAction.getAllNotes()
    return ctx
}

exports.postNotes = (ctx) => {
    ctx.body = notesAction.postNotes()
    return ctx
}
