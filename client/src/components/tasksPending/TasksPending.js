import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTaskAction, editTaskAction, getTasksPendingAction, taskCompletedAction } from '../../redux/actions/tasksActions';
import style from './tasksPending.module.css';
import FilterSearch from '../filterSearch/FilterSearch';
import EditTask from '../modal/EditTask';
import PhrasesCatsRandom from '../phrasesCats/PhrasesCatsRandom';


const TasksPending = () => {
    const dispatch = useDispatch();
    const taskPendingAndPhrases = useSelector(state => state.task.taskPendingAndPhrases);
    const [openModal, setOpenModal] = useState(false);
    const [tasksPending, setTasksPending] = useState([]);

    const getTasks = () => dispatch(getTasksPendingAction());

    useEffect(() => {
        taskPendingAndPhrases.length === 0
            ? getTasks() // evitar otro llamada a la API al renderizar el componente.
            : setTasksPending(taskPendingAndPhrases) // usar la data del reducer.

    }, [taskPendingAndPhrases])


    const deleteTask = (id) => deleteTaskAction(id, tasksPending, setTasksPending);

    const taskCompleted = (id) => taskCompletedAction(id, tasksPending, setTasksPending);

    const editTask = (taskData) => {
        dispatch(editTaskAction({ description: taskData.description, id: taskData.id }));
        setOpenModal(true);
    }

    const optionSelected = ({ target }) => {
        if (target.value === 'all') {
            setTasksPending(taskPendingAndPhrases)
        }
        console.log(target.value)
    }

    return (
        <>
            {openModal && <EditTask closeModal={setOpenModal} />}

            <div className={style.contentApiCatsFilterTasks}>
                <FilterSearch setState={setTasksPending} />
                <PhrasesCatsRandom />
            </div>

            <div className={style.contentTasksPending} >
                <div className={style.contentTasksPending_Top}>
                    <p className={style.contentTasksPending_title}>Lista de Tareas pendientes</p>
                    <select className={style.contentTasksPending_options} onChange={optionSelected}>
                        <option value=''>Filtrar resultados</option>
                        <option value="all">Ver todo</option>
                        <option value="phrases">Frases gatos</option>
                        <option value="tasks">Tareas pendientes</option>
                    </select>
                </div>

                {
                    tasksPending.map(task => (
                        <div className={style.contentDescription_buttons} key={task.id} >
                            <div className={style.contentDescription}>
                                <p className={style.contentDescription_task}>{task.description}</p>
                            </div>
                            <div className={style.content_buttons}>
                                <button
                                    className={style.content_buttons_finishTask}
                                    type='button'
                                    onClick={() => taskCompleted(task.id)}
                                >
                                    <i className="far fa-check-circle"></i>
                                </button>

                                <button
                                    className={style.content_buttons_editTask}
                                    type='button'
                                    onClick={() => editTask(task)}
                                >
                                    <i className="far fa-edit"></i>
                                </button>

                                <button
                                    className={style.content_buttons_deleteTask}
                                    type='button'
                                    onClick={() => deleteTask(task.id)}>
                                    <i className="fas fa-trash"></i>
                                </button>
                            </div>
                        </div>
                    ))
                }
            </div>
        </>
    )
}

export default TasksPending
