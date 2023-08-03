import "./NavBar.scss"
import { DesktopMenu } from "../../molecules/DesktopMenu/DesktopMenu";
import { Link } from "react-router-dom";
import { MovilMenu } from "../../molecules/MovileMenu/MovileMenu";
import { BurguerButton } from "../../atoms/BurguerButton/BurguerButton";
import React, { useState } from "react";

export const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    const closeMenu = () => {
        setIsOpen(false);
    };
    return (
        <header>
            <div className="container-menu">
                <Link className="brand-menu" to={"/"}>
                    <img className="brand" alt="Shofi" src="https://firebasestorage.googleapis.com/v0/b/goshofi-c578e.appspot.com/o/brands%2Flogo%20SHOFI.png?alt=media&token=dec8c4cc-569a-42f6-a017-ae323644a495"></img>
                </Link>
                <section className="menu">
                    <DesktopMenu />
                    <BurguerButton 
                    toggleMenu = {toggleMenu} 
                    isOpen = {isOpen}
                    />
                </section>
            </div>
            <MovilMenu 
                closeMenu = {closeMenu}
                isOpen ={isOpen}
                setIsOpen={setIsOpen}
            />
        </header>
    );
}
