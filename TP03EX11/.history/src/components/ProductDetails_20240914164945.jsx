import ProductImageGallery from './ProductImageGallery';
import './ProductDetails.css';

function ProductDetails() {
    return (
        <section className="product-details">
            <ProductImageGallery />
            <div className="info">
                <h1>Cesta 'Love intheair'</h1>
                <p className="price">R$ 299,90</p>
                <p className="description">Descrição detalhada do produto aqui.</p>
                <ul className="specifications">
                    <li>Especificação 1</li>
                    <li>Especificação 2</li>
                    <li>Especificação 3</li>
                </ul>
            </div>
        </section>
    );
}

export default ProductDetails;
