import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTaskAction, editTaskAction, getTasksPendingAction, taskCompletedAction } from '../../redux/actions/tasksActions';
import style from './tasksPending.module.css';
import FilterSearch from '../filterSearch/FilterSearch';
import EditTask from '../modal/EditTask';
import PhrasesCatsRandom from '../phrasesCats/PhrasesCatsRandom';
import { optionSelectedFilter } from '../../helpers/optionSelectedFilter';


const TasksPending = () => {
    const dispatch = useDispatch();
    const tasksPending = useSelector(state => state.task.taskPendingAndPhrases);
    const [openModal, setOpenModal] = useState(false);
    const [filterTask, setFilterTask] = useState([]);


    const getTasks = () => dispatch(getTasksPendingAction());

    useEffect(() => {
        //evitar otra llamada a la API al renderizar el componente. usar la data del estado global.
        tasksPending.length === 0 && getTasks();

    }, [tasksPending])

    const dataTasksPending = filterTask.length >= 1 ? filterTask : tasksPending;


    const deleteTask = (task) => dispatch(deleteTaskAction(task.id, filterTask, setFilterTask, task.type));

    const taskCompleted = (id) => dispatch(taskCompletedAction(id, filterTask, setFilterTask));

    const editTask = (taskData) => {
        dispatch(editTaskAction({ description: taskData.description, id: taskData.id }));
        setOpenModal(true);
    }

    const optionSelected = ({ target }) => optionSelectedFilter(target.value, tasksPending, setFilterTask);

    return (
        <>
            {openModal && <EditTask closeModal={setOpenModal} />}

            <div className={style.contentApiCatsFilterTasks}>
                <FilterSearch setState={setFilterTask} />
                <PhrasesCatsRandom state={filterTask} setState={setFilterTask} />
            </div>

            <div className={style.contentTasksPending} >
                <div className={style.contentTasksPending_Top}>
                    <p className={style.contentTasksPending_title}>Lista de Tareas pendientes</p>
                    <select className={style.contentTasksPending_options} onChange={optionSelected}>
                        <option value='all'>Filtrar resultados</option>
                        <option value="all">Ver todo</option>
                        <option value="phrases">Frases gatos</option>
                        <option value="tasks">Tareas pendientes</option>
                    </select>
                </div>

                {
                    dataTasksPending.map(task => (
                        <div className={style.contentDescription_buttons} key={task.id} >
                            <div className={style.contentDescription}>
                                <p className={style.contentDescription_task}>
                                    {task.description}  {!task.type ? '' : <i className="fas fa-cat"></i>}
                                </p>
                            </div>
                            <div className={style.content_buttons}>
                                {
                                    !task.type
                                        ?
                                        <>
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
                                        </>
                                        : ''
                                }

                                <button
                                    className={style.content_buttons_deleteTask}
                                    type='button'
                                    onClick={() => deleteTask({ id: task.id, type: task.type === 'phrases' ? true : false })}>
                                    <i className="fas fa-trash"></i>
                                </button>
                            </div>
                        </div>
                    ))
                }
                {tasksPending.length === 0 && <p className={style.noResults}>Aún no has creado tu primera tarea..</p>}
            </div>
        </>
    )
}

export default TasksPending
