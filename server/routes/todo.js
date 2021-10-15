const { Router } = require('express');
const router = Router();

// importaciones



//rutas
router.get('/todo-pending', getPendinTasks);
router.get('/todo-active', getActiveTasks);
router.get('/todo-inactive', historyTasks);
router.post('/todo', newTask);
router.put('/todo/:id', updateTask);
router.put('/todo-delete/:id', markTaskInactive);
/* En un proyecto real, es más conveniente no eliminar data de una base de datos,
ya que toda la información de los clientes estará segura, accesible y almacenada en un solo lugar.
Esto permite organizar, clasificar y acceder a todo tipo de información sobre el cliente.
*/