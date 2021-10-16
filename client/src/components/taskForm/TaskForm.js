import { useForm } from '../../helpers/useForm';
import style from './taskForm.module.css';

const TaskForm = () => {
    /*Este useForm permite tener muy limpio el componente de lógica y acelerar el trabajo al mismo tiempo,
    con un solo input no hace la diferencia, pero con un par más, es una excelente opcion.  */
    const [values, handleInputChange, reset] = useForm({ description: '' });

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <div className={style.contentFormTask} >
            <h2 className={style.formTask_Title} >Crea una nueva tarea</h2>
            <form className={style.formTask} onSubmit={handleSubmit} >
                <input
                    type='text'
                    placeholder='¿Qué tienes pensado hacer hoy?'
                    className={style.formTask_input}
                    autoComplete='off'
                    name='description'
                    value={values.description}
                    onChange={handleInputChange}
                />
                <button type='submit' className={style.formTask_button}>Agregar</button>
            </form>
        </div>
    )
}

export default TaskForm;
