import PropTypes from "prop-types";
import { TransactionHistoryItem } from "./TransactionHistoryItem";

export const TransactionHistory = ({ items }) => {
  return (
    <table className="transaction-history">
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
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
