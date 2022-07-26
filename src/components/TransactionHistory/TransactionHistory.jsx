import React from "react";
import PropTypes from "prop-types";
import css from "./TransactionHistory.module.css";

const TransactionHistory = ({ items }) => {
  return (
      <table className={css.transaction_history}>
       <thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>   
    <tbody >
      {items.map(({ id, type, currency, amount }) => (
        
    <tr key={id} className={css.item}>
                  <td>{type}</td>
                  <td>{ amount}</td>
                  <td>{currency}</td>
    </tr>
       
      ))}
    </tbody>
    </table>
  );
}

export default TransactionHistory;

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            type: PropTypes.string.isRequired,
            currency: PropTypes.string.isRequired,
            amount: PropTypes.string.isRequired
        })
    )
}