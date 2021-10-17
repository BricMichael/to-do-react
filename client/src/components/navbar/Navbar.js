import { useState } from 'react';
import { Link } from 'react-router-dom';
import MenuHamburger from '../modal/MenuHamburger';
import style from './navbar.module.css';


const Navbar = () => {

    const [openModal, setOpenModal] = useState(false);

    const menuDisplay = () => setOpenModal(true);



    return (
        <div className={style.navbar}>
            {openModal && <MenuHamburger closeModal={setOpenModal} />}
            <div className={style.navbar_content_logo}>
                <h2 className={style.navbar_logo}>Tareas App</h2>
            </div>
            <div className={style.navbar_content_items}>
                <ul className={style.navbar_content_ul}>
                    <Link to='/' className={style.navbar_content_links}>
                        Pendientes
                    </Link>
                    <Link to='/tareas-realizadas' className={style.navbar_content_links}>
                        Realizadas
                    </Link>
                    <Link to='/tareas-retiradas' className={style.navbar_content_links}>
                        Retiradas
                    </Link>
                </ul>
            </div>
            <i className={style.hamburgerIcon} onClick={menuDisplay} ><i className="fas fa-bars"></i></i>
        </div>
    )
}

export default Navbar;
