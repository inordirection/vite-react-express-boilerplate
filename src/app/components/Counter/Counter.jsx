import React from 'react';
import classes from './Counter.module.css';
import PropTypes from 'prop-types';

function Counter({ onClick, count }) {
  return (
    <button className={classes.counter} onClick={onClick}>
      count is: {count}
    </button>
  );
}

Counter.propTypes = {
  onClick: PropTypes.func.isRequired,
  count: PropTypes.number.isRequired,
};

export default Counter;
