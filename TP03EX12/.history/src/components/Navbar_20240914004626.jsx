import { useState } from "react";

export default function Navbar()
{
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="navbar">
            <div className="navbar-brand">Video Stream 994</div>
            <button className="menu-toggle" onClick={toggleMenu}>
                ☰
            </button>
            <ul className={`menu ${isOpen ? "open" : ""}`}>
                <li className="menu-item">Home</li>
                <li className="menu-item">Tendencias</li>
                <li className="menu-item">Inscrições</li>
                <li className="menu-item">Biblioteca</li>
            </ul>
        </nav>
    );
};

 Navbar;
