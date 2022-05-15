import Router from 'koa-router'
import getHealth from './health/health'
import notes from './../routes/notes/notes'

const router = new Router()

router.get('/health', getHealth)

//Muestra Todas las Notas
router.get('/get-all-notes', notes.getAllNotes)

//Muestra las Notas segun un ID
router.get('/get-note/:id', notes.getNote)

//Creacion de una nueva Nota
router.post('/create-note', notes.postNotes)

//Eliminar una nota ya creada
router.delete('/delete/:id', notes.removeNote)

//Editar una nota ya creada
router.post('/edit-note/:id', notes.updateNote)

export default router