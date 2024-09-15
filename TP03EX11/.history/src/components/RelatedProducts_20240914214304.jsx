import './RelatedProducts.css';

const products = [
    { name: 'Cesta de Pão', price: 'R$ 199,90', image: 'https://images.pexels.com/photos/1118332/pexels-photo-1118332.jpeg?auto=compress&cs=tinysrgb&w=600' },
    { name: 'Cone de sorvette', price: 'R$ 299,90', image: 'https://images.pexels.com/photos/1739347/pexels-photo-1739347.jpeg?auto=compress&cs=tinysrgb&w=600' },
    { name: 'Laranja Siciliana Fatiada', price: 'R$ 399,90', image: 'https://images.pexels.com/photos/1630588/pexels-photo-1630588.jpeg?auto=compress&cs=tinysrgb&w=600' },
];

export default function RelatedProducts() {
    return (
        <section className="related-products">
            <h2>Produtos Relacionados</h2>
            <div className="products-grid">
                {products.map((product, index) => (
                    <div key={index} className="product-item">
                        <img src={product.image} alt={product.name} />
                        <h3>{product.name}</h3>
                        <p>{product.price}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}

