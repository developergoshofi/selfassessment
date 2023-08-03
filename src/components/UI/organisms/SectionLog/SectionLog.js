import "./SectionLog.scss"
import { Link } from "react-router-dom";
import React, { useState } from 'react';
import { useLoginContext } from '../../../../context/LoginContext';
import { BiErrorCircle, BiShow, BiHide } from "react-icons/bi";

export  const SectionLog = () => {
    const {login, user}= useLoginContext()
    const [values, setValues] = useState({
        email: '',
        password: ''
    })
    const [showPassword, setShowPassword] = useState(false);

    const handleInputChange =(e)=>{
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const handleSubmit = (e) => {
        e.preventDefault()
        login (values)
    }

    return (
        <div className="section-log">
            <section className="content-public-log">
            </section>
            <section className="content-log">
                <article className="autetication-log">
                    <h1>Bienvenidos a Shofi</h1>
                    <p>Ingresa a tu cuenta para continuar</p>
                    <form className="form-autetication" onSubmit={handleSubmit}> 
                        <div className="form-input">
                            <label>Ingresa tu email</label>
                            <input
                                className='input'
                                type="email"
                                placeholder="Email"
                                value={values.email}
                                onChange={handleInputChange}
                                name="email"
                            />
                        </div>
                        <div className="form-input">
                            <label>Ingresa tu clave</label>
                            <input
                                className='input'
                                type={showPassword ? "text" : "password"}
                                value={values.password}
                                onChange={handleInputChange}
                                name="password"
                            />
                            <button type="button" onClick={toggleShowPassword}>
                                {showPassword ? <BiHide /> : <BiShow />}
                            </button>
                        </div>
                        <button className='ButtonForm' type="submit">Iniciar sesión</button>
                        {user.error && <p className='Alert Error'>
                            <BiErrorCircle/>
                            Email o clave incorrecta, intentalo de nuevo.
                        </p>}
                        <Link to={"/register"} className="register">Regístrarme</Link>
                        <Link to={"/change_password"} className="password">Olvide mi clave</Link>
                    </form>
                </article>
            </section>
        </div>
    );
}
