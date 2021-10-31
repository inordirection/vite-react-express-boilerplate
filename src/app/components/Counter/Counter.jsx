import React from 'react';
import classes from './Counter.module.css';

function Counter({ onClick, count }) {
  return (
    <button className={classes.counter} onClick={onClick}>
      count is: {count}
    </button>
  );
}

export default Counter;
