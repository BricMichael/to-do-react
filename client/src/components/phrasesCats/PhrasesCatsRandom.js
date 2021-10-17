import axios from 'axios';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import style from './phrasesCatsRandom.module.css';
import { useForm } from '../../helpers/useForm';
import { types } from '../../redux/types';




const PhrasesCatsRandom = ({ state, setState }) => {
    /*Este useForm permite tener muy limpio el componente de lógica y acelerar el trabajo al mismo tiempo,
    con un solo input no hace la diferencia, pero con un par más, es una excelente opcion.  */
    const dispatch = useDispatch();
    const [noResults, setNoResults] = useState('');
    const [values, handleInputChange, reset] = useForm({ numberPhrases: 1 });
    const { numberPhrases } = values;

    const handleSubtmit = async (e) => {
        e.preventDefault();
        setNoResults('');
        if (numberPhrases > 14 || numberPhrases <= 0) {
            setNoResults('El valor debe ser mayor a 1 y menor a 15')
        }
        else {
            const { data } = await axios.get(`https://catfact.ninja/facts?limit=${numberPhrases}&max_length=140`);
            const parseData = data.data.map(cat => ({ description: cat.fact, id: cat.length * 18, type: 'phrases' }));

            dispatch({ type: types.phrasesCatsRandoms, payload: parseData });
            state.length !== 0 && setState([...parseData, ...state]);
            reset();
        }
    }

    return (
        <div className={style.phrasesCatsRamdon}>
            <form className={style.formRandomPhrases} onSubmit={handleSubtmit} >
                <div className={style.form_group}>
                    <label htmlFor='random'>Frases al azar <i className="fas fa-cat"></i></label>
                    <input
                        type='number'
                        max='14'
                        min='1'
                        autoComplete='off'
                        name='numberPhrases'
                        value={values.numberPhrases}
                        onChange={handleInputChange}
                        className={style.formRandom_group_input}
                        id='random'
                    />
                </div>

                <button type='submit' className={style.formRandom_button}>Buscar</button>
            </form>
            {noResults.length !== 0 && <p>{noResults}</p>}
        </div>
    )
}

export default PhrasesCatsRandom;
