const mongose =  require('mongoose');

const tareaSchema = new mongose.Schema({
    titulo:{
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
      },
      completed: {
        type: Boolean,
        default: false,
      },
});

const Tarea = mongose.model('Tarea', tareaSchema);

module.exports = Tarea;