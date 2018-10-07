import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
//import LoanCalc from 'loan-calc';
//import amortize  from '/amortize';
import AmortizationChart from './AmortizationChart';



const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  input: {
    display: 'none',
  },
});
/*
  Todo (HW):
  Print out amortization table. :-)

  */ 

class Mortgage extends React.Component {
  constructor(props) {
    super(props);
    const loan = {
      amount: 200000,
      termMonths: 360,
      rate: 5,

    };
    this.handleChange = this.handleChange.bind(this);
    this.state = this.calculate(loan);
  }

  calculate({ amount, termMonths, rate }) {
    const loan = Object.assign(
      {},
      {
        amount,
        termMonths,
        rate,
        totalTerm: termMonths,
        amortizeTerm: termMonths,
      },
    );

    loan.payment = 1073.64;
    //LoanCalc.calculate(loan);

 
    //loan.amortization = amortize(loan);

    return loan;
  }

  handleChange(name) {
    return (event) => {
      const loan = Object.assign({}, this.state, {
        [name]: event.target.value,
      });

      this.setState(this.calculate(loan));
    };
  }

  render() {
    const { classes = {} } = this.props;
    const data = [
      {balance: 1000, interestY: 10, principalY: 100},
      {balance: 2000, interestY: 20, principalY: 200}
    ];

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
            id="rate"
            label="rate"
            onChange={this.handleChange('rate')}
            value={this.state.rate}
            defaultValue="5"
            className={classes.textField}
            margin="normal"
          />
          <br />
          <TextField
            required
            id="termMonths"
            label="termMonths"
            onChange={this.handleChange('termMonths')}
            value={this.state.termMonths}
            defaultValue="30"
            className={classes.textField}
            margin="normal"
          />
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

        <AmortizationChart data={data}/>
      </div>
    );


    
  }
}

export default Mortgage;
