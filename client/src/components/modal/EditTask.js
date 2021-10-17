import Modal from './Modal';
import style from './editTask.module.css'
import { useForm } from '../../helpers/useForm';
import { useDispatch, useSelector } from 'react-redux';
import { updateTaskAction } from '../../redux/actions/tasksActions';

const EditTask = ({ closeModal }) => {
    const dispatch = useDispatch();
    const taskData = useSelector(state => state.task.taskEditData);

    const [values, handleInputChange] = useForm(taskData);
    const { description, id } = values;

    const updateTask = () => {
        dispatch(updateTaskAction(id, description));
        closeModal(false);
    }

    return (
        <Modal closeModal={closeModal} >
            <div className={style.contentModal_edit} >
                <p className={style.contentModal_title} >Editando Tarea</p>
                <form className={style.contentModal_form}>

                    <input
                        type='text'
                        value={values.description}
                        autoComplete='off'
                        name='description'
                        onChange={handleInputChange}
                        className={style.contentModal_input}
                    />

                    <button type='submit' className={style.contentModal_buttonSave} onClick={updateTask}>
                        Guardar cambios</button>
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
