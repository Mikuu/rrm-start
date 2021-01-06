import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  decrement,
  increment,
  incrementByAmount,
  incrementAsync,
  selectCount,
} from './counterSlice';
import styles from './Counter.module.css';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import InputBase from '@material-ui/core/InputBase';
import { purple } from '@material-ui/core/colors';

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
    fontSize: 32,
    color: "#704cb6"
  },
  baseInput: {
    margin: theme.spacing(1)
  },
  innerInput: {
    textAlign: "center"
  },
  margin: {
    margin: theme.spacing(1),
  },
  input: {
    display: 'none',
  },
}));

const ColorButton = withStyles(theme => ({
  root: {
    color: theme.palette.getContrastText(purple[500]),
    backgroundColor: purple[500],
    '&:hover': {
      backgroundColor: purple[700],
    },
  },
}))(Button);

export function Counter() {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();
  const [incrementAmount, setIncrementAmount] = useState('2');

  const classes = useStyles();

  return (
    <div>
      <div className={styles.row}>
      <Button 
        className={classes.button}
        aria-label="Increment value" 
        onClick={() => dispatch(increment())}
      >
        +
      </Button>
        <span className={styles.value}>{count}</span>
        <Button
          className={classes.button}
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          -
        </Button>
      </div>
      <div className={styles.row}>
        <InputBase
        className={classes.baseInput}
        classes={{ input: classes.innerInput }}
        defaultValue={incrementAmount}
        onChange={e => setIncrementAmount(e.target.value)}
        />
        <ColorButton
          variant="contained"
          color="primary"
          className={classes.margin}
          onClick={() =>
            dispatch(incrementByAmount(Number(incrementAmount) || 0))
          }
        >
          Add Amount
        </ColorButton>
        <ColorButton
          variant="contained"
          color="primary"
          className={classes.margin}
          onClick={() => dispatch(incrementAsync(Number(incrementAmount) || 0))}
        >
          Add Async
        </ColorButton>
      </div>
    </div>
  );
}
