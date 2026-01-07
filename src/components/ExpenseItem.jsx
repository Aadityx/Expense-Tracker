import { useContext } from "react";
import { ExpenseContext } from "../context/ExpenseContext";

const ExpenseItem = ({ expense }) => {
  const { deleteExpense } = useContext(ExpenseContext);

  return (
    <div className="expense-item">
      <span>{expense.category}</span>
      <span>₹{expense.amount}</span>
      <span>{expense.date}</span>
      <button onClick={() => deleteExpense(expense.id)}>❌</button>
    </div>
  );
};

export default ExpenseItem;
