import style from './tasksDeleted.module.css';

const TasksDeleted = () => {
    return (
        <div className={style.contentTasksDeleted} >
            <p className={style.contentTasksDeleted_title}>Lista de Tareas retiradas</p>

            <div className={style.contentDescription_button}>
                <div className={style.contentDescription}>
                    <p className={style.contentDescription_task}><strong>Tarea:</strong>&nbsp;Comprar ropa en diciembre</p>

                    <p className={style.contentDescription_created}><strong>Creada:</strong> 29/05/2021</p>
                    <p className={style.contentDescription_deleted}><strong>Terminada:</strong> 04/06/2021</p>
                </div>
                <div className={style.content_button}>
                    <button className={style.content_button_undoTask} type='button'>
                        <i className="fas fa-trash-restore-alt"></i>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default TasksDeleted;
