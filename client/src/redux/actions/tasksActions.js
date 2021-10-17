import * as api from '../../api/api';
import { alertDeleteItems, alertQuestionItems, alertSuccess } from '../../helpers/alerts';
import { types } from '../types';


export const getTasksPendingAction = () => async (dispatch) => {
    try {
        const { data } = await api.apiGetPendingTasks();

        data.length >= 1 && dispatch({
            type: types.newTesk,
            payload: data
        })
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
            alertSuccess(data.response);
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