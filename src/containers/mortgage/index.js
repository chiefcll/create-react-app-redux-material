import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import calculatePayment from './calculatePayment';

const styles = theme => ({
  input: {
    display: 'none'
  }
});
/*
  Todo (HW):
  1. Eslint setup
  2. Use Mortgage Calculator NPM package
  3. Set Proptypes
  4. Research props vs state
  5. ES6 destructuring + Arrow Functions (spread operator)
  6. What is our next calculator???

  Understand how React sets default state

  Next Week

  Add Calculate Button to update payment

  Lay the foundations for Redux...
  */

class Mortgage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      amount: this.props.amount,
      term: this.props.term,
      apr: this.props.apr
    };
    this.handleChange = this.handleChange.bind(this);
    this.setState.payment = calculatePayment(this.state);
  }

  handleChange = name => event => {
    let state = Object.assign({}, this.state, {
      [name]: event.target.value
    });

    state.payment = calculatePayment(state);

    this.setState(state);
  };

  render() {
    const { classes = {} } = this.props;
    return (
      <div>
        <p>Mortgage Calculator</p>

        <form className={classes.container} noValidate autoComplete="off">
          <TextField
            required
            id="amount"
            label="amount"
            className={classes.textField}
            value={this.state.amount}
            defaultValue="200000"
            onChange={this.handleChange('amount')}
            margin="normal"
          />
          <br />
          <TextField
            required
            id="apr"
            label="apr"
            onChange={this.handleChange('apr')}
            value={this.state.apr}
            defaultValue="5"
            className={classes.textField}
            margin="normal"
          />
          <br />
          <TextField
            required
            id="term"
            label="term"
            onChange={this.handleChange('term')}
            value={this.state.term}
            defaultValue="30"
            className={classes.textField}
            margin="normal"
          />
          <br />
          <TextField
            id="payment"
            label="payment"
            value={this.state.payment}
            className={classes.textField}
            margin="normal"
            InputProps={{ readOnly: true }}
            InputLabelProps={{ shrink: true }}
          />
        </form>
      </div>
    );
  }
}

export default Mortgage;
