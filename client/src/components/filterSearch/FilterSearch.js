import { useForm } from "../../helpers/useForm";
import style from './filterSearch.module.css';

const FilterSearch = () => {
    /*Este useForm permite tener muy limpio el componente de lógica y acelerar el trabajo al mismo tiempo,
    con un solo input no hace la diferencia, pero con un par más, es una excelente opcion.  */
    const [values, handleInputChange, reset] = useForm({ filtro: '' });

    return (
        <div className={style.filterSearch}>
            <form className={style.formFilter}>
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
                        <option value='bañar el perro' />
                        <option value='bañar el bebé' />
                        <option value='cargar' />
                        <option value='cabalgar' />
                    </datalist>
                </div>

                <button type='submit' className={style.formFilter_button} >Seleccionar</button>
            </form>
            {/* <p>No se han encontrado resultados</p> */}
        </div>
    )
}

export default FilterSearch;
