/* eslint-disable react/jsx-no-target-blank */
import "./Footer.scss"
import { BiNavigation } from "react-icons/bi";
import { ImFacebook, ImLinkedin2 } from "react-icons/im";
import { FaInstagram, FaTwitter } from "react-icons/fa";

export const Footer = () => {
    return (
        <footer className="footer">
            <section className="container-footer">
                <article className="footer-rrss">
                    <h3>Encuéntranos en:</h3>
                    <a>
                        <BiNavigation />
                        <p>comunidad@goshofi.com</p>
                    </a>
                    <nav className='redes-menu'>
                        <a href='https://www.linkedin.com/company/shofi/' className='redes' target="_blank"><ImLinkedin2 /></a>
                        <a href='https://www.facebook.com/shoficolombia' className='redes' target="_blank"><ImFacebook /></a>
                        <a href='https://www.instagram.com/shofi_colombia/' className='redes' target="_blank"><FaInstagram /></a>
                        <a href='https://twitter.com/SHOFI_Colombia' className='redes' target="_blank"><FaTwitter /></a>
                    </nav>
                </article>
                <article className="form-footer">
                    <form className="form-autetication"> 
                    </form>
                </article>
                <article className="footer-brand">
                    <img className="brand" alt="Shofi Footer" src="https://firebasestorage.googleapis.com/v0/b/goshofi-c578e.appspot.com/o/brands%2Fsl_mask2.png?alt=media&token=dfb9f0b7-ef68-44d7-a0f1-3d4079100572"/>
                    <h2 className="title-brand-footer">Trabaja bien donde estés</h2>
                </article>
            </section>
            <section className="copy-footer">
                <p>Copyright ©2023 Shofi.</p>
            </section>
        </footer>
    );
}