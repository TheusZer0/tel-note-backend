import Router from 'koa-router'
import getHealth from './health/health'
const notes = require('./Notes/index')


const router = new Router()

router.get('/health', getHealth)

//Muestra Todas las Notas
router.get('/get-all-notes', notes.getAllNotes)

//Muestra las Notas segun un ID
//router.get('/get-note', allNotas)

//Creacion de una nueva Nota
router.post('/create-note', notes.postNotes)

//Editar una nota ya creada
//router.post('/edit-note', userToken.getToken)

//Eliminar una nota ya creada
//router.get('/delete-note', allNotas)

export default router