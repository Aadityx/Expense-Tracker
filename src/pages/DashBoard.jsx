import Navbar from "../components/Navbar";
import Summary from "../components/Summary";
import ExpenseForm from "../components/ExpenseForm";
import ExpenseList from "../components/ExpenseList";
import CategoryPieChart from "../components/Charts/CategoryPieChart";

const Dashboard = () => {
  return (
    <>
      <Navbar />
      <main className="dashboard">
        <Summary />

        <div className="top-section">
          <ExpenseForm />
          <CategoryPieChart />
        </div>

        <ExpenseList />
      </main>
    </>
  );
};

export default Dashboard;
