import ProductImageGallery from './ProductImageGallery';
import './ProductDetails.css';

function ProductDetails() {
    return (
        <section className="product-details">
            <ProductImageGallery />
            <div className="info">
                <h1>Cesta une odeur croustillante dans l'air </h1>
                <p className="price">R$ 299,90</p>
                <p className="description">Descrição detalhada do produto aqui.</p>
                <ul className="specifications">
                    <li>Lorem ipsum dolor sit amet consectetur adipisicing
                        elit. Nobis odit porro odio placeat beatae et, quod illo
                        corporis possimus ipsam explicabo, officiis corrupti omnis
                        quaerat libero veniam ea eius ipsum.</li>
                    <li>Lorem ipsum dolor sit amet consectetur adipisicing
                        elit. Nobis odit porro odio placeat beatae et, quod illo
                        corporis possimus ipsam explicabo, officiis corrupti omnis
                        quaerat libero veniam ea eius ipsum.</li>
                    <li>Lorem ipsum dolor sit amet consectetur adipisicing
                        elit. Nobis odit porro odio placeat beatae et, quod illo
                        corporis possimus ipsam explicabo, officiis corrupti omnis
                        quaerat libero veniam ea eius ipsum.</li>
                </ul>
            </div>
        </section>
    );
}

export default ProductDetails;
