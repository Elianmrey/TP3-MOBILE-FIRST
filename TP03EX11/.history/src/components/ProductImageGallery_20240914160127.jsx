import React, { useState } from 'react';
import './ProductImageGallery.css';

function ProductImageGallery() {
    const [selectedImage, setSelectedImage] = useState('image1.jpg');
    const images = ['image1.jpg', 'image2.jpg', 'image3.jpg'];

    return (
        <div className="image-gallery">
            <img src={selectedImage} alt="Produto" className="main-image" />
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
