import * as api from '../api/api';
import { alertDeleteItems, alertQuestionItems, alertSuccess } from '../helpers/alerts';

export const createTaskAction = async (task) => {
    try {
        const { data } = await api.apiRegisterTask({ description: task });
        alertSuccess(data.response);
    } catch (err) {
        console.log(err);
    }
}

export const getTasksPendingAction = async () => {
    try {
        const { data } = await api.apiGetPendingTasks();
        return data;
    } catch (err) {
        console.log(err);
    }
}

export const getHistoryTasksAction = async () => {
    try {
        const { data } = await api.apiGetTasksDeleted();
        return data;
    } catch (err) {
        console.log(err);
    }
}

export const getTasksCompletedAction = async () => {
    try {
        const { data } = await api.apiGetCompletedTasks();
        return data;
    } catch (err) {
        console.log(err);
    }
}


export const taskCompletedAction = async (id, dataState, updateState) => {
    try {
        const respUser = await alertQuestionItems('¿Tarea completada?');
        if (respUser) {
            const { data } = await api.apiMarkTaskCompleted(id);
            const filterData = dataState.filter(task => task.id !== id);
            updateState(filterData);
            alertSuccess(data.response);
        }
    } catch (err) {
        console.log(err);
    }
}

export const deleteTaskAction = async (id, dataState, updateState) => {
    try { //response
        const respUser = await alertDeleteItems('¿Desea eliminar la tarea?');
        if (respUser) {
            const { data } = await api.apiDeleteTask(id);
            const filterData = dataState.filter(task => task.id !== id);
            updateState(filterData);
            alertSuccess(data.response)
        }

    } catch (err) {
        console.log(err);
    }
}

export const undoTaskAction = async (id, dataState, updateState) => {
    try {
        const { data } = await api.apiUndoTask(id);

        const filterData = dataState.filter(task => task.id !== id);
        updateState(filterData);
        alertSuccess(data.response);
    } catch (err) {
        console.log(err);
    }
}