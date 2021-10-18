import * as api from '../../api/api';
import { alertDeleteItems, alertQuestionItems, alertSuccess } from '../../helpers/alerts';
import { types } from '../types';


export const getTasksPendingAction = (component = '') => async (dispatch) => {
    try {
        const { data } = await api.apiGetPendingTasks();

        (data.length >= 1 && component === '') && dispatch({
            type: types.newTask,
            payload: data
        })
        return data;
    } catch (err) {
        console.log(err);
    }
}

export const createTaskAction = (task, resetInput) => async (dispatch) => {
    try {
        const { data } = await api.apiRegisterTask({ description: task });
        await dispatch(getTasksPendingAction());

        resetInput();
        alertSuccess(data.response);
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

export const editTaskAction = (datasTask) => (dispatch) => {
    dispatch({
        type: types.dataTaskEdit,
        payload: datasTask
    })
}

export const updateTaskAction = (id, newData) => async (dispatch) => {
    try {
        const { data } = await api.apiUpdateTask(id, { description: newData });
        dispatch({
            type: types.updateTask,
            payload: { id, description: newData }
        })
        alertSuccess(data.response);
    } catch (err) {
        console.log(err);
    }
}

export const taskCompletedAction = (id, dataState, updateState) => async (dispatch) => {
    try {
        const respUser = await alertQuestionItems('¿Tarea completada?');
        if (respUser) {
            const { data } = await api.apiMarkTaskCompleted(id);
            const filterData = dataState.filter(task => task.id !== id);
            updateState(filterData);

            dispatch({
                type: types.taskCompleted,
                payload: { id }
            })
            alertSuccess(data.response);
        }
    } catch (err) {
        console.log(err);
    }
}

export const deleteTaskAction = (id, dataState = [], updateState, option) => async (dispatch) => {
    try { // option es una variable booleana, si es falsa se esta eliminando una tarea, sino una frase de gato.
        const respUser = await alertDeleteItems(!option ? '¿Desea eliminar la tarea?' : '¿Desea eliminar la frase?');

        if (respUser) {
            let resultMsg = {};
            if (!option) resultMsg = await api.apiDeleteTask(id); // si option es true no hacer un llamadal al backend.

            dispatch({ type: types.deleteTask, payload: { id } });

            if (dataState.length !== 0) {
                const filterData = dataState.filter(task => task.id !== id);
                updateState(filterData);
            }

            alertSuccess(resultMsg?.data ? resultMsg.data.response : 'Frase eliminada');
        }
    } catch (err) {
        console.log(err);
    }
}

export const undoTaskAction = (id, dataState, updateState) => async (dispatch) => {
    try {
        const { data } = await api.apiUndoTask(id);

        const filterData = dataState.filter(task => task.id !== id);
        updateState(filterData);
        alertSuccess(data.response);
        dispatch(getTasksPendingAction());
    } catch (err) {
        console.log(err);
    }
}