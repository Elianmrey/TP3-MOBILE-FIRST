import PropTypes from 'prop-types'

export default function CategoryList({ categories, selectCategory }) {
  return (
    <ul className="category-list">
      {categories.map((category, index) => (
        <li key={index} onClick={() => selectCategory(category)}>
          {category}
        </li>
      ))}
    </ul>
  );
}


CategoryList.propTypes = {
  categories: PropTypes.array.isRequired,
  selectCategory: PropTypes.func.isRequired
}