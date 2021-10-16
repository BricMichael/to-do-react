import FilterSearch from '../filterSearch/FilterSearch';
import PhrasesCatsRandom from '../phrasesCats/PhrasesCatsRandom';
import style from './tasksPending.module.css';

const TasksPending = () => {
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


                <div className={style.contentDescription_buttons}>
                    <div className={style.contentDescription}>
                        <p className={style.contentDescription_task}>description tasks..</p>
                    </div>
                    <div className={style.content_buttons}>
                        <button className={style.content_buttons_finishTask} type='button'>
                            <i className="far fa-check-circle"></i>
                        </button>

                        <button className={style.content_buttons_editTask} type='button'>
                            <i className="far fa-edit"></i>
                        </button>

                        <button className={style.content_buttons_deleteTask} type='button'>
                            <i className="fas fa-trash"></i>
                        </button>
                    </div>
                </div>

            </div>
        </>
    )
}

export default TasksPending
