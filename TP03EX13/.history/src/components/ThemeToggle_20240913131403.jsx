import PropTypes from 'prop-types'

export default function ThemeToggle({ toggleTheme }) {
  return (
    <button onClick={toggleTheme}>Alternar Tema</button>
  );
}
ThemeToggle.propTypes = {
  toggleTheme: PropTypes.func.isRequired
};
