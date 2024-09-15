import './Menu.css';

function Menu() {
    return (
        <nav className="menu">
            <h1>Logo</h1>

         
            <input type="checkbox" id="menu-toggle" className="menu-toggle" />
            <label htmlFor="menu-toggle" className="menu-toggle-label">
                ☰
            </label>

            {/* Itens do Menu */}
            <ul>
                <li>Home</li>
                <li>Produtos</li>
                <li>Sobre</li>
                <li>Contato</li>
            </ul>
        </nav>
    );
}

export default Menu;
