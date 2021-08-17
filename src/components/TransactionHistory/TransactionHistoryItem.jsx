import PropTypes from "prop-types";
import styles from "./TransactionHistory.module.scss";

function TransactionHistoryItem({ id, type, amount, currency }) {
  return (
    <tr id={id}>
      <td className={styles.type}>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </tr>
  );
}

TransactionHistoryItem.propTypes = {
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};

export default TransactionHistoryItem;
