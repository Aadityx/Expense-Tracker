import { useContext } from "react";
import { ExpenseContext } from "../../context/ExpenseContext";
import { PieChart, Pie, Tooltip, Cell } from "recharts";

const COLORS = ["#38bdf8", "#22d3ee", "#818cf8", "#f472b6"];

const CategoryPieChart = () => {
  const { expenses } = useContext(ExpenseContext);

  const data = Object.values(
    expenses.reduce((acc, curr) => {
      acc[curr.category] = acc[curr.category] || {
        name: curr.category,
        value: 0,
      };
      acc[curr.category].value += curr.amount;
      return acc;
    }, {})
  );

  if (data.length === 0) return null;

  return (
    <div className="card">
      <h2>Category Breakdown</h2>

      <PieChart width={300} height={250}>
        <Pie
          data={data}
          dataKey="value"
          nameKey="name"
          outerRadius={90}
          label
        >
          {data.map((_, index) => (
            <Cell key={index} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>
    </div>
  );
};

export default CategoryPieChart;
