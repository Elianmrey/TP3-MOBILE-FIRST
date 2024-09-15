import './Menu.css';

function Menu() {
    return (
        <nav className="menu">
            div</container-logo>
            <img src="https://previews.123rf.com/images/ednal/ednal1905/ednal190500018/123595316-bakery-logo-template-vector-illustration-bakery-shop-emblem-vintage-retro-style.jpg" alt="logo" />
            <h1>Padani Padaria</h1>
            </div>
         
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
