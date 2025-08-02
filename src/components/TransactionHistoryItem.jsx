import PropTypes from "prop-types";
export const TransactionHistoryItem = ({ currency, amount, type }) => {
  return (
    <tr>
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </tr>
  );
};

TransactionHistoryItem.propTypes = {
  currency: PropTypes.string,
  amount: PropTypes.string,
  type: PropTypes.string,
};
