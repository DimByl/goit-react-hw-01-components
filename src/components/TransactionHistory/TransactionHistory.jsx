import PropTypes from "prop-types";
import TransactionHistoryItem from "./TransactionHistoryItem";
import styles from "./TransactionHistory.module.scss";
import TaskTitle from "../TaskTitle/TaskTitle";

const TransactionHistory = ({ items }) => {
  return (
    <div>
      <TaskTitle title="4 - My Transactions" />
      <table className={styles.transactionHistory}>
        <thead>
          <tr>
            <th className={styles.type}>Type</th>
            <th>Amount</th>
            <th>Currency</th>
          </tr>
        </thead>

        <tbody>
          {items.map((item) => (
            <TransactionHistoryItem
              key={item.id}
              id={item.id}
              type={item.type}
              amount={item.amount}
              currency={item.currency}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

TransactionHistory.defaultProps = {
  items: [],
};

TransactionHistory.propTypes = {
  items: PropTypes.array.isRequired,
};

export default TransactionHistory;
