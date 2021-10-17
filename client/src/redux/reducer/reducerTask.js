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
        case types.phrasesCatsRandoms:
            return {
                ...state,
                taskPendingAndPhrases: [...action.payload, ...state.taskPendingAndPhrases]
            }
        case types.deleteTask:
            return {
                ...state,
                taskPendingAndPhrases: state.taskPendingAndPhrases.filter(
                    item => item.id !== action.payload.id
                )
            }


        default:
            return state;
    }
}






export default taskReducer;