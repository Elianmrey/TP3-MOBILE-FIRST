import CardStyle from './Card.module.css';
import PropTypes from 'prop-types'


export default function Products({elements})
{
  
  return (
  <>
    { elements.map( (item, index) =>(
      <div key={index} className={ProductStyle.card}>
      <div className={ProductStyle.cardImage}>
          <img src={ item.image } className={ProductStyle.image} alt="product image"/>
        </div className={ S}>
        <div className={ProductStyle.title}>{item.title}</div>
        <div className={ProductStyle.description}> {item.description}
          <div className={ProductStyle.footer}> {item.footer}</div>
    </div>
      </div>))
      }
    </>
    );
}

Products.propTypes ={
  elements: PropTypes.arrayOf(PropTypes.shape({}))
}