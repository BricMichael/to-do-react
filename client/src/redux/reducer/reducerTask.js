import { types } from "../types";

const initialState = {
    taskPendingAndPhrases: [],
    taskEditData: { description: '', id: '' },
}

const taskReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.newTesk:
            return {
                ...state,
                taskPendingAndPhrases: [...action.payload]
            }
        case types.dataTaskEdit:
            return {
                ...state,
                taskEditData: action.payload
            }
        case types.updateTask:
            return {
                ...state,
                taskPendingAndPhrases: state.taskPendingAndPhrases.map(
                    task => task.id === action.payload.id ? { ...task, description: action.payload.description } : task
                )
            }


        default:
            return state;
    }
}






export default taskReducer;