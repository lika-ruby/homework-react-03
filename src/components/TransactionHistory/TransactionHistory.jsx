import PropTypes from "prop-types";
import { TransactionHistoryItem } from "../TransactionHistoryItem/TransactionHistoryItem";
import styles from "./TransactionHistory.module.css";

export const TransactionHistory = ({ items }) => {
  return (
    <table className={styles.transaction_history}>
      <thead>
        <tr>
          <th className={styles.transaction_th}>Type</th>
          <th className={styles.transaction_th}>Amount</th>
          <th className={styles.transaction_th}>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map((item) => (
          <TransactionHistoryItem
            key={item.id}
            currency={item.currency}
            amount={item.amount}
            type={item.type}
          />
        ))}
      </tbody>
    </table>
  );
};

TransactionHistory.propTypes = {
  stats: PropTypes.array,
};
