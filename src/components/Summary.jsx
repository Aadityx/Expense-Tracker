import { useContext } from "react";
import { ExpenseContext } from "../context/ExpenseContext";

const Summary = () => {
  const { expenses } = useContext(ExpenseContext);

  const totalExpense = expenses.reduce(
    (sum, e) => sum + e.amount,
    0
  );

  return (
    <div className="summary single">
      <div className="summary-card">
        <h3>Total Expense</h3>
        <p>₹{totalExpense}</p>
      </div>
    </div>
  );
};

export default Summary;
