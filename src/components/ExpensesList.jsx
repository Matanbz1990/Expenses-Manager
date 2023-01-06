import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";
import TotalYearExpenses from "./TotalYearExpenses";

const ExpensesList = (props) => {
  const filteredYear = props.FilteredYear;
  const filteredArray = props.FilteredArrayOfExpensesForYear;

  // const DisplayingNoExpenses = () => {};
  let noExpensesFound = false;

  if (
    filteredArray !== null &&
    filteredArray.length === 0 &&
    filteredYear !== "Choose a year"
  ) {
    noExpensesFound = true;
  }

  return (
    <div>
      {noExpensesFound && <h3>No expenses found this year!</h3>};
      {filteredArray.map((expense) => {
        return (
          <ExpenseItem
            key={expense.e.id}
            title={expense.e.title}
            amount={expense.e.amount}
            date={expense.e.date}
          />
        );
      })}
      {!noExpensesFound && (
        <TotalYearExpenses
          year={filteredYear}
          currentYearExpenses={filteredArray}
        />
      )}
    </div>
  );
};
export default ExpensesList;
