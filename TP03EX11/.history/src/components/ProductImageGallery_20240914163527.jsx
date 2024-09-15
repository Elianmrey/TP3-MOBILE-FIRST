import { useState } from 'react';
import './ProductImageGallery.css';

function ProductImageGallery() {
    const [selectedImage, setSelectedImage] = useState('image1.jpg');
    const images = ['https://previews.123rf.com/images/gerain0812/gerain08121902/gerain0812190205007/117761269-grilled-salmon-served-with-grilled-vegetables-top-view.jpg',
                               'https://previews.123rf.com/images/kukota/kukota1909/kukota190900485/130389846-stylish-picnic-on-the-green-lawn-fresh-croissants-and-a-teapot-with-tea-on-a-bedspread-near-a-wicker.jpg',
                                'https://previews.123rf.com/images/kukota/kukota1908/kukota190800967/129566440-stylish-picnic-on-the-green-lawn-fresh-croissants-and-a-teapot-with-tea-on-a-bedspread-near-a-wicker.jpg'];

    return (
        <div className="image-gallery">
            <img  src={selectedImage} alt="Produto" className="main-image" />
            <div className="thumbnail-gallery">
                {images.map((image, index) => (
                    <img
                        key={index}
                        src={image}
                        alt={`Imagem ${index + 1}`}
                        onClick={() => setSelectedImage(image)}
                        className="thumbnail"
                    />
                ))}
            </div>
        </div>
    );
}

export default ProductImageGallery;
