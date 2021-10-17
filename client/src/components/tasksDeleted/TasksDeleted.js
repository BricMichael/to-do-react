import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { getHistoryTasksAction, undoTaskAction } from '../../redux/actions/tasksActions';
import style from './tasksDeleted.module.css';

const TasksDeleted = () => {
    const dispatch = useDispatch();
    const [historyTask, setHistoryTask] = useState([]);

    const getTasksDeleted = async () => {
        const data = await getHistoryTasksAction();
        data && setHistoryTask(data); // Evitar errores, si no se obtiene respuestas 400 o 500 del servidor  
    }

    useEffect(() => {
        getTasksDeleted()
    }, [])


    const undoTask = (id) => dispatch(undoTaskAction(id, historyTask, setHistoryTask));

    return (
        <div className={style.contentTasksDeleted} >
            <p className={style.contentTasksDeleted_title}>Lista de Tareas retiradas</p>

            {
                historyTask.map(task => (
                    <div className={style.contentDescription_button} key={task.id} >
                        <div className={style.contentDescription}>
                            <p className={style.contentDescription_task}><strong>Tarea:</strong>&nbsp;{task.description}</p>

                            <p className={style.contentDescription_created}><strong>Creada:</strong> {task.registration_date}</p>
                            <p className={style.contentDescription_deleted}><strong>Eliminada:</strong> {task.inactive_task_date}</p>
                        </div>
                        <div className={style.content_button}>
                            <button className={style.content_button_undoTask} type='button' onClick={() => undoTask(task.id)}>
                                <i className="fas fa-trash-restore-alt"></i>
                            </button>
                        </div>
                    </div>
                ))
            }
            {historyTask.length === 0 && <p className={style.noResult} >Tareas eliminadas (0)</p>}
        </div>
    )
}

export default TasksDeleted;
