import "./DesktopMenu.scss"
import { Link } from 'react-router-dom';
import { FiUser } from "react-icons/fi";
export const DesktopMenu = () => {
    return ( 
        <nav className='desktop-menu'>
            <Link className='button-navbar' to="/" >Inicio</Link>
            <Link className='button-navbar' to="/nosotros">Nosotros</Link>
            <Link className='button-navbar' to="/kits">Kits</Link>
            <Link className='button-navbar' to="/blog">Blog</Link>
            <Link className='button-color' to="/login">Login <FiUser/></Link>
        </nav>
    );
}