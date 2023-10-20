const {Router} = require('express')

const tareaController = require('../controller/tareaController')


const router = Router()

router.post('/agregar-tarea', tareaController.save)
  
router.get('/lista-de-tareas', tareaController.get)
  
router.put('/marcar-completada/:id',tareaController.put)


module.exports = router;