import ProductStyle from './Product.module.css';
import PropTypes from 'prop-types'


export default function Products({elements})
{
  
  return (
    { elements.map( (item, index)
<div className={ProductStyle.card}>
      <div className={ProductStyle.cardImage}>
        <img src={ image } className={ProductStyle.image} alt="product image"/>
    </div>
      <div className={ProductStyle.category}>{title}</div>
      <div className={ProductStyle.heading}> {description}
        <div className={ProductStyle.other}> {footer}</div>
    </div>
      </div>)
    }      
    );
}

Products.propTypes ={
  elements: PropTypes.arrayOf(PropTypes.shape({}))
}