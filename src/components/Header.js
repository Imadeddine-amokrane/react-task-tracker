// import React from 'react' It used to be required but We don't need any more
import PropTypes from 'prop-types';
import Button from './Button';

const Header = ({ title, onClick, showForm }) => {
  return (
    <header className="header">
      <h1>{title}</h1>
      <Button
        text={`${showForm ? 'Close' : 'Add'}`}
        color={`${showForm ? 'red' : 'green'}`}
        onClick={onClick}
      />
    </header>
  );
};

Header.defaultProps = {
  title: 'Task Tracker',
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};
export default Header;

// const Header = ({ title, second }) => {
//   return (
//     <header>
//       <h1 style={{color:'red'}}>{title}</h1>
//       <h1 style={headingStyle}>{title}</h1>
//       <h2>{second}</h2>
//     </header>
//   );
// };

// CSS in JS;
// const headingStyle = {
//   color: 'red',
// };
