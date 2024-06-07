import css from "./TransactionHistory.module.css";
import TransactionHistoryRow from "../TransactionHistoryRow/TransactionHistoryRow";

const TransactionHistory = ({ items }) => {
  return (
    <table className={css.transactionTable}>
      <thead>
        <tr className={css.transactionTableMainRow}>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody className={css.transactionTableBody}>
        {items.map((item) => {
          return (
            <TransactionHistoryRow
              key={item.id}
              type={item.type}
              amount={item.amount}
              currency={item.currency}
            />
          );
        })}
      </tbody>
    </table>
  );
};

export default TransactionHistory;
