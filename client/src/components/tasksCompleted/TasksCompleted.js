import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteTaskAction, getTasksCompletedAction } from '../../redux/actions/tasksActions';
import style from './tasksCompleted.module.css';

const TasksCompleted = () => {
    const dispatch = useDispatch();
    const [completedTasks, setCompletedTasks] = useState([]);

    const getTasksCompleted = async () => {
        const data = await getTasksCompletedAction();
        setCompletedTasks(data);
    }

    useEffect(() => {
        getTasksCompleted()
    }, [])

    const deleteTask = (id) => dispatch(deleteTaskAction(id, completedTasks, setCompletedTasks, 'TasksCompleted'));


    return (
        <div className={style.contentTasksCompleted} >
            <p className={style.contentTasksCompleted_title}>Lista de Tareas realizadas</p>
            {
                completedTasks.map(task => (
                    <div className={style.contentDescription_button} key={task.id}>
                        <div className={style.contentDescription}>
                            <p className={style.contentDescription_task}>{task.description}</p>
                        </div>
                        <div className={style.content_button}>
                            <button
                                onClick={() => deleteTask(task.id)}
                                className={style.content_button_deleteTask}
                                type='button'
                            >
                                <i className="fas fa-trash"></i>
                            </button>
                        </div>
                    </div>

                ))
            }
        </div>
    )
}

export default TasksCompleted;
