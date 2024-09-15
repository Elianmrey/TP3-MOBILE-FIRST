import { useState } from "react";

export default function Navbar()
{
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="navbar">
            <div className="navbar-brand"></div>
            <button className="menu-toggle" onClick={toggleMenu}>
                ☰
            </button>
            <ul className={`menu ${isOpen ? "open" : ""}`}>
                <li className="menu-item">Home</li>
                <li className="menu-item">Trending</li>
                <li className="menu-item">Subscriptions</li>
                <li className="menu-item">Library</li>
            </ul>
        </nav>
    );
};

 Navbar;
