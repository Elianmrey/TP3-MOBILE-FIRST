import ProductStyle from './Product.module.css';
import PropTypes from 'prop-types'


export default function Products({elements})
{
  
  return (
  <div >
    { elements.map( (item, index) =>(
      <div key={index} className={ProductStyle.card}>
      <div className={ProductStyle.cardImage}>
          <img src={ item.image } className={ProductStyle.image} alt="product image"/>
    </div>
        <div className={ProductStyle.category}>{item.title}</div>
        <div className={ProductStyle.heading}> {item.description}
          <div className={ProductStyle.other}> {item.footer}</div>
    </div>
      </div>))
    }      </div>
    );
}

Products.propTypes ={
  elements: PropTypes.arrayOf(PropTypes.shape({}))
}