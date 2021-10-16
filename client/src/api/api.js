import axios from 'axios';

//-> Estos datos sensibles se  deben guardar en variables de entorno.
//-> al lado de las clave dejo el ejemplo de la propiedad.
const pathTasks = 'http://localhost:5000/api/todo';  // procces.env.PATH_API


export const apiGetPendingTasks = () => axios.get(`${pathTasks}-pending`);
export const apiGetTasksDeleted = () => axios.get(`${pathTasks}-inactive`);
export const apiRegisterTask = (data) => axios.post(pathTasks, data);
export const apiDeleteTask = (id) => axios.put(`${pathTasks}-delete/${id}`);
export const apiUndoTask = (id) => axios.put(`${pathTasks}-undoDeleted/${id}`);