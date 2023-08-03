import "./BurguerButton.scss"
import { FiAlignJustify, FiX } from "react-icons/fi";

export const BurguerButton = ({toggleMenu,isOpen}) => {
    return (
        <button className='burguer-movil' onClick={toggleMenu}>
            {isOpen ? <FiX /> : <FiAlignJustify />}
        </button>
    );
}
