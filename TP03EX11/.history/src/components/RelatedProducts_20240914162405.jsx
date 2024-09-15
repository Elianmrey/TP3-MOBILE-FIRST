import './RelatedProducts.css';

const products = [
    { name: 'Produto 1', price: 'R$ 199,90', image: 'https://www.pexels.com/pt-br/foto/panqueca-com-morango-fatiado-376464/' },
    { name: 'Produto 2', price: 'R$ 299,90', image: 'related2.jpg' },
    { name: 'Produto 3', price: 'R$ 399,90', image: 'related3.jpg' },
];

function RelatedProducts() {
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

export default RelatedProducts;
