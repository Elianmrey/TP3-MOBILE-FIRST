import './Menu.css';

function Menu() {
    return (
        <nav className="menu">
            <h1>Padani Padaria</h1>

         
            <input type="checkbox" id="menu-toggle" className="menu-toggle" />
            <label htmlFor="menu-toggle" className="menu-toggle-label">
                ☰
            </label>

          
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
