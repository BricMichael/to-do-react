const pool = require('../configDB/poolConfig');


const validateProcess = (res, rowCount, msgError, msgSuccess) => {
    rowCount === 0
        ? res.status(400).json({ response: msgError })
        : res.json({ response: msgSuccess })
}


const newTask = async (req, res) => {
    try {
        const { description } = req.body;
        const status = 'Pendiente';
        const inactive = false;
        const dateToday = new Date().toLocaleDateString();

        await pool.query(`INSERT INTO todo( description, status, inactive, registration_date ) VALUES ($1, $2, $3, $4)`,
            [description.trim(), status, inactive, dateToday]);

        res.status(200).json({ response: 'Tarea agregada' });
    } catch (err) {
        console.log('Error: newTask', err.message);
    }
}


const getPendingTasks = async (req, res) => {
    try {
        const status = 'Pendiente';
        const inactive = false;
        const respDB = await pool.query(`SELECT * FROM todo WHERE status = $1 AND inactive = $2`, [status, inactive]);

        res.json(respDB.rows)
    } catch (err) {
        console.log('Error: getPendinTasks', err.message);
    }
}


const todoCompleted = async (req, res) => {
    try {
        const idTask = req.params.id;
        const status = 'Realizada';

        const respDB = await pool.query(`UPDATE todo SET status = $1 WHERE id = $2`, [status, idTask]);
        validateProcess(res, respDB.rowCount, 'No se encontró ninguna tarea con ese ID', 'Haz completado una nueva tarea');
    } catch (err) {
        console.log('Error: todoCompleted', err.message);
    }
}

const updateTask = async (req, res) => {
    try {
        const idTask = req.params.id;
        const { description } = req.body;

        const respDB = await pool.query(`UPDATE todo SET description = $1 WHERE id = $2`, [description.trim(), idTask]);
        validateProcess(res, respDB.rowCount, 'No se encontró ninguna tarea con ese ID', 'Los cambios han sido guardados');
    } catch (err) {
        console.log('Error: updateTask', err.message);
    }
}

const markTaskInactive = async (req, res) => {
    try {
        const idTask = req.params.id;
        const inactive = true;
        const dateToday = new Date().toLocaleDateString();

        const respDB = await pool.query(`UPDATE todo SET inactive = $1, inactive_task_date = $2 WHERE id = $3`, [inactive, dateToday, idTask]);
        validateProcess(res, respDB.rowCount, 'No se ha podido eliminar el elemento seleccionado', 'El registro ha sido eliminado satisfactoriamente');

    } catch (err) {
        console.log('Error: markTaskInactive', err.message);
    }
}

const getCompletedTasks = async (req, res) => {
    try {
        const status = 'Realizada';
        const inactive = false;
        const respDB = await pool.query(`SELECT * FROM todo WHERE status = $1 AND inactive = $2`, [status, inactive]);

        res.json(respDB.rows);
    } catch (err) {
        console.log('Error: getCompletedTasks', err.message);
    }
}

const historyTasks = async (req, res) => {
    const inactive = true; // tareas eliminadas, mostrar historial.
    const respDB = await pool.query(`SELECT * FROM todo WHERE inactive = $1`, [inactive]);
    res.json(respDB.rows);
}

const undoDeletedTask = async (req, res) => { // Deshacer tarea eliminada.
    try {
        const idTask = req.params.id;
        const status = 'Pendiente';
        const inactive = false;
        const resetDateDeleted = '';

        await pool.query('UPDATE todo SET inactive = $1, status = $2, inactive_task_date = $3 WHERE id = $4',
            [inactive, status, resetDateDeleted, idTask]);
        res.json({ response: 'Se ha deshecho la acción.' });
    } catch (err) {
        console.log('Error, undoDeletedTask', err.message);
    }
}



module.exports = {
    newTask,
    getPendingTasks,
    getCompletedTasks,
    todoCompleted,
    updateTask,
    markTaskInactive,
    historyTasks,
    undoDeletedTask
}