import { Link } from 'react-router-dom';
import Modal from './Modal';
import style from './menuHamburger.module.css';

const MenuHamburger = ({ closeModal }) => {

    const eventLinksCloseModal = () => closeModal(false);

    return (
        <Modal closeModal={closeModal}>
            <div className={style.contentMenuHamburger}>
                <p className={style.contentMenuHamburger_iconClose} onClick={eventLinksCloseModal} >Cerrar</p>
                <div className={style.contentMenuHamburger_links}>
                    <Link to='/' className={style.menuHamburger_links} onClick={eventLinksCloseModal}>
                        Pendientes
                    </Link>
                    <Link to='/tareas-realizadas' className={style.menuHamburger_links} onClick={eventLinksCloseModal}>
                        Realizadas
                    </Link>
                    <Link to='/tareas-retiradas' className={style.menuHamburger_links} onClick={eventLinksCloseModal}>
                        Retiradas
                    </Link>
                </div>
            </div>
        </Modal>

    )
}

export default MenuHamburger;
