import { useEffect, useState } from 'react';
import { deleteTaskAction, getTasksPendingAction } from '../../actions/tasksActions';
import FilterSearch from '../filterSearch/FilterSearch';
import PhrasesCatsRandom from '../phrasesCats/PhrasesCatsRandom';
import style from './tasksPending.module.css';

const TasksPending = () => {

    const [tasksPending, setTasksPending] = useState([]);

    const getTasks = async () => {
        const data = await getTasksPendingAction();
        setTasksPending(data);
    }

    useEffect(() => {
        getTasks();
    }, [])

    const deleteTask = (id) => {
        deleteTaskAction(id)
    }

    return (
        <>
            <div className={style.contentApiCatsFilterTasks}>
                <FilterSearch />
                <PhrasesCatsRandom />
            </div>

            <div className={style.contentTasksPending} >
                <div className={style.contentTasksPending_Top}>
                    <p className={style.contentTasksPending_title}>Lista de Tareas pendientes</p>
                    <select className={style.contentTasksPending_options} >
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
                                <button className={style.content_buttons_finishTask} type='button'>
                                    <i className="far fa-check-circle"></i>
                                </button>

                                <button className={style.content_buttons_editTask} type='button'>
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
