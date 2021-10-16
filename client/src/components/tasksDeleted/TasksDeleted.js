import { useEffect, useState } from 'react';
import { getHistoryTasksAction, undoTaskAction } from '../../actions/tasksActions';
import style from './tasksDeleted.module.css';

const TasksDeleted = () => {

    const [historyTask, setHistoryTask] = useState([]);

    const getTasksDeleted = async () => {
        const data = await getHistoryTasksAction();
        setHistoryTask(data);
    }

    useEffect(() => {
        getTasksDeleted()
    }, [])


    const undoTask = (id) => undoTaskAction(id, historyTask, setHistoryTask);

    return (
        <div className={style.contentTasksDeleted} >
            <p className={style.contentTasksDeleted_title}>Lista de Tareas retiradas</p>

            {
                historyTask.map(task => (
                    <div className={style.contentDescription_button} key={task.id} >
                        <div className={style.contentDescription}>
                            <p className={style.contentDescription_task}><strong>Tarea:</strong>&nbsp;{task.description}</p>

                            <p className={style.contentDescription_created}><strong>Creada:</strong> {task.registration_date}</p>
                            <p className={style.contentDescription_deleted}><strong>Terminada:</strong> {task.inactive_task_date}</p>
                        </div>
                        <div className={style.content_button}>
                            <button className={style.content_button_undoTask} type='button' onClick={() => undoTask(task.id)}>
                                <i className="fas fa-trash-restore-alt"></i>
                            </button>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default TasksDeleted;
