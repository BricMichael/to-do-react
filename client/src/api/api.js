import axios from 'axios';

//-> Estos datos sensibles se  deben guardar en variables de entorno.
//-> al lado de las clave dejo el ejemplo de la propiedad.
const pathTasks = 'http://localhost:5000/api/todo';  // procces.env.PATH_API


export const apiGetPendingTasks = () => axios.get(`${pathTasks}-pending`);
export const apiGetTasksDeleted = () => axios.get(`${pathTasks}-inactive`);
export const apiGetCompletedTasks = () => axios.get(`${pathTasks}-completed`);
export const apiRegisterTask = (data) => axios.post(pathTasks, data);
export const apiMarkTaskCompleted = (id) => axios.put(`${pathTasks}-completed/${id}`);
export const apiUpdateTask = (id, newData) => axios.put(`${pathTasks}/${id}`, newData);
export const apiDeleteTask = (id) => axios.put(`${pathTasks}-delete/${id}`);
export const apiUndoTask = (id) => axios.put(`${pathTasks}-undoDeleted/${id}`);