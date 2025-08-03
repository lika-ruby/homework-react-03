import PropTypes from "prop-types";
import styles from "./TransactionHistoryItem.module.css";

export const TransactionHistoryItem = ({ currency, amount, type }) => {
  return (
    <tr>
      <td className={styles.transaction_td}>{type}</td>
      <td className={styles.transaction_td}>{amount}</td>
      <td className={styles.transaction_td}>{currency}</td>
    </tr>
  );
};

TransactionHistoryItem.propTypes = {
  currency: PropTypes.string,
  amount: PropTypes.string,
  type: PropTypes.string,
};
