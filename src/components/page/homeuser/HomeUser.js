/* eslint-disable jsx-a11y/anchor-is-valid */
import { useLoginContext } from '../../../context/LoginContext';
import { useState } from 'react';

export const HomeUser = () => {
    const { logout } = useLoginContext()
    const [showSubMenu, setShowSubMenu] = useState(null);
    const handleClick = (subMenu) => {
        if (showSubMenu === subMenu) {
        setShowSubMenu(null);
        } else {
        setShowSubMenu(subMenu);
        }
    };
    return (
        <div>
            <section>
                <h1>
                    Home User
                </h1>
                <a onClick={() => handleClick("subUser")}>
                    <button onClick={logout}>Logout</button>
                </a>
            </section>
        </div>
    );
}