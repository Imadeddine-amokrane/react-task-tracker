import PropTypes from 'prop-types';
const Button = ({ text, color, onClick }) => {
  // const onClick = (e) => console.log(e.target, 'clicked......');
  return (
    <button
      onClick={onClick}
      className="btn"
      style={{ backgroundColor: color }}
    >
      {text}
    </button>
  );
};

Button.defaultProps = {
  color: 'pink',
};

Button.propTypes = {
  text: PropTypes.string,
  color: PropTypes.string,
  onClick: PropTypes.func,
};

export default Button;
