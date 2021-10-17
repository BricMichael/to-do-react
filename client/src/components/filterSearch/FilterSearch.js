import { useEffect, useState } from "react";
import { useDispatch } from 'react-redux';
import { useForm } from "../../helpers/useForm";
import { getTasksPendingAction } from "../../redux/actions/tasksActions";
import style from './filterSearch.module.css';

const FilterSearch = ({ setState }) => {
    /*Este useForm permite tener muy limpio el componente de lógica y acelerar el trabajo al mismo tiempo,
    con un solo input no hace la diferencia, pero con un par más, es una excelente opcion.  */
    const dispatch = useDispatch();
    const [taskFilters, setTaskFilters] = useState([]);
    const [values, handleInputChange] = useForm({ filtro: '' });

    const getTasksPending = async () => {
        const data = await dispatch(getTasksPendingAction('FilterSearch'));
        setTaskFilters(data);
    }

    useEffect(() => {
        getTasksPending();
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault();
        const taskSelected = taskFilters.find(task => task.description === values.filtro.trim());
        setState([taskSelected]);
    }

    return (
        <div className={style.filterSearch}>
            <form className={style.formFilter} onSubmit={handleSubmit} >
                <div className={style.form_group}>
                    <label htmlFor='filter'>Filtrar tareas</label>
                    <input
                        type='text'
                        placeholder='Descripcion de la tarea..'
                        autoComplete='off'
                        name='filtro'
                        value={values.filtro}
                        onChange={handleInputChange}
                        className={style.form_group_input}
                        id='filter'
                        list='my-list'
                    />
                    <datalist id='my-list'>
                        {
                            taskFilters.map(task => (
                                <option
                                    key={task.id}
                                    value={task.description} />
                            ))
                        }
                    </datalist>
                </div>

                <button type='submit' className={style.formFilter_button} >Seleccionar</button>
            </form>
            {/* <p>No se han encontrado resultados</p> */}
        </div>
    )
}

export default FilterSearch;
