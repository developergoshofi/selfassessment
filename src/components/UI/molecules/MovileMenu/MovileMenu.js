/* eslint-disable react/jsx-no-target-blank */
import { Link } from 'react-router-dom';
import { FiUser} from "react-icons/fi";
import { ImFacebook, ImLinkedin2 } from "react-icons/im";
import { FaInstagram, FaTwitter } from "react-icons/fa";
import "./MovileMenu.scss";

export const MovilMenu = ({closeMenu, isOpen}) => {
    return (
        <>
            {isOpen && (
                <div className='movil'>
                    <section className='container-movil'>
                        <nav className='movil-menu'>
                            <Link className='button-navbar' to="/" onClick={closeMenu}>Inicio</Link>
                            <Link className='button-navbar' to="/nosotros" onClick={closeMenu}>Nosotros</Link>
                            <Link className='button-navbar' to="/kits" onClick={closeMenu}>Kits</Link>
                            <Link className='button-navbar' to="/blog" onClick={closeMenu}>Blog</Link>
                            <Link className='button-color' to="/login" onClick={closeMenu}>Login <FiUser/></Link>
                        </nav>
                        <nav className='redes-menu'>
                            <a href='https://www.linkedin.com/company/shofi/' className='redes' target="_blank"><ImLinkedin2 /></a>
                            <a href='https://www.facebook.com/shoficolombia' className='redes' target="_blank"><ImFacebook /></a>
                            <a href='https://www.instagram.com/shofi_colombia/' className='redes' target="_blank"><FaInstagram /></a>
                            <a href='https://twitter.com/SHOFI_Colombia' className='redes' target="_blank"><FaTwitter /></a>
                        </nav>
                    </section>
                </div>
            )}
        </>
    );
}
