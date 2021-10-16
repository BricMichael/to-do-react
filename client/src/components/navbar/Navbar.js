import { Link } from 'react-router-dom';
import style from './navbar.module.css';


const Navbar = () => {
    return (
        <div className={style.navbar}>
            <div className={style.navbar_content_logo}>
                <h2 className={style.navbar_logo}>Tareas App</h2>
            </div>
            <div className={style.navbar_content_items}>
                <ul className={style.navbar_content_ul}>
                    <li className={style.navbar_content_links}><Link to='/'>Pendientes</Link></li>
                    <li className={style.navbar_content_links}><Link to='/tareas-realizadas'>Realizadas</Link></li>
                    <li className={style.navbar_content_links}><Link to='/tareas-retiradas'>Retiradas</Link></li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar;
