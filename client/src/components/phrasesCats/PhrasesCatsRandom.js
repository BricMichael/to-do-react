import style from './phrasesCatsRandom.module.css'


import { useForm } from '../../helpers/useForm';


const PhrasesCatsRandom = () => {

    const [values, handleInputChange, reset] = useForm({ numberPhrases: 0 });

    return (
        <div className={style.phrasesCatsRamdon}>
            <form className={style.formRandomPhrases}>
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
            {/* <p>No se han encontrado resultados</p> */}
        </div>
    )
}

export default PhrasesCatsRandom;
