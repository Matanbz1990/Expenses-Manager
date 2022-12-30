import "./Expenses.css";
import ExpensesList from "./ExpensesList";
import { useState } from "react";
import ExpensesFilter from "./ExpensesFilter";
import ExpenseChart from "./ChartComponents/ExpenseChart";

function Expenses(props) {
  const [expensesYear, setExpensesYear] = useState("");

  //recieved chosen year from ExpensesFilter component
  const selectedExpensesYear = (year) => {
    setExpensesYear(year);
  };

  //for getting array of expenses with the chosen year

  const filteredYearArrayExpanses = props.items.filter((expense) => {
    return expense.e.date.getFullYear().toString() === expensesYear;
    // .slice(0, 4)
    // .getFullYear().toString()
  });

  return (
    <div className="Expenses">
      <ExpensesFilter selectedYearData={selectedExpensesYear} />

      {/* filteredYear=> array  expensesYear=>variable */}

      {expensesYear != "" && (
        <div>
          <ExpenseChart filteredExpenses={filteredYearArrayExpanses} />
          <ExpensesList
            FilteredArrayOfExpensesForYear={filteredYearArrayExpanses}
            ExpensesYear={expensesYear}
          />
        </div>
      )}
    </div>
  );
}
export default Expenses;
