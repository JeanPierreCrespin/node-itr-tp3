const Tarea = require('../models/tareaModel');

module.exports.save = async (req,res) =>{
    const {titulo,descripcion,completada} = req.body;

    try{

        const tareaNueva = new Tarea({titulo,descripcion,completada});
        const saveTarea = await tareaNueva.save();
        res.status(201).json({saveTarea});
    }
    catch (error) {
        res.status(400).json({ error: 'No se pudo agregar la tarea.' });
    }
}

module.exports.get = async (req,res) =>{
    try {
        const tarea = await Tarea.find({}); // Busca todas las tareas en la base de datos
        res.status(200).json(tarea);
      } catch (error) {
      
        res.status(400).json({ error: 'No se pudo obtener la lista de tareas.' });
      }
}

module.exports.put = async (req,res) =>{
    const tareaId = req.params.id;

    try {
      const tarea = await Tarea.findById(tareaId);
  
      if (!tarea) {
        return res.status(404).json({ error: 'Tarea no encontrada.' });
      }
  
      tarea.completed = true;
      const updatedTarea = await tarea.save();
  
      res.status(200).json(updatedTarea);
    } catch (error) {
      
      res.status(500).json({ error: 'No se pudo marcar la tarea como completada.' });
    }
}