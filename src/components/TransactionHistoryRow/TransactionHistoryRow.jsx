import clsx from "clsx";
import css from "./TransactionHistoryRow.module.css";

const TransactionHistoryRow = ({ type, amount, currency }) => {
  const tableRowClasses = clsx(
    css.transactionTableBodySecondRow,
    css.transactionTableBodyRow
  );

  return (
    <tr className={tableRowClasses}>
      <td className={css.transactionTableBodyColumn}>{type}</td>
      <td className={css.transactionTableBodyColumn}>{amount}</td>
      <td className={css.transactionTableBodyColumn}>{currency}</td>
    </tr>
  );
};

export default TransactionHistoryRow;
