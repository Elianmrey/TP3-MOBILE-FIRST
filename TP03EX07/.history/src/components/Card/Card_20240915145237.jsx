import CardStyle from './Card.module.css';
import PropTypes from 'prop-types'


export default function Products({elements})
{
  
  return (
  <>
    { elements.map( (item, index) =>(
      <div key={index} className={CardStyle.card}>
      <div className={CardStyle.cardImage}>
          <img src={ item.image } className={CardStyle.image} alt="product image"/>
        </div>
        <div className={CardStyle.title}>{item.title}</div>
        <div className={CardStyle.description}> {item.description}
          <div className={CardStyle.footer}> {item.footer}</div>
    </div>
      </div>))
      }
    </>
    );
}

Products.propTypes ={
  elements: PropTypes.arrayOf(PropTypes.shape({}))
}