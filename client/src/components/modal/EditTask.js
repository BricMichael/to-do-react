import Modal from './Modal';
import style from './editTask.module.css'

const EditTask = ({ closeModal }) => {
    return (
        <Modal closeModal={closeModal} >
            <div className={style.contentModal_edit} >
                <p className={style.contentModal_title} >Editando Tarea</p>
                <form className={style.contentModal_form}>
                    <input type='text' value='Hacer una fiesta el martes' className={style.contentModal_input} />

                    <button type='submit' className={style.contentModal_buttonSave} >Guardar cambios</button>
                    <button
                        type='button'
                        className={style.contentModal_buttonClose}
                        onClick={() => closeModal(false)}
                    >
                        Cerrar
                    </button>
                </form>
            </div>

        </Modal>
    )
}

export default EditTask;
