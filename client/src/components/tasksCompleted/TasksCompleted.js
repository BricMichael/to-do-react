import style from './tasksCompleted.module.css';

const TasksCompleted = () => {
    return (
        <div className={style.contentTasksCompleted} >
            <p className={style.contentTasksCompleted_title}>Lista de Tareas realizadas</p>

            <div className={style.contentDescription_button}>
                <div className={style.contentDescription}>
                    <p className={style.contentDescription_task}>description tasks..</p>
                </div>
                <div className={style.content_button}>
                    <button className={style.content_button_deleteTask} type='button'>
                        <i className="fas fa-trash"></i>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default TasksCompleted;
