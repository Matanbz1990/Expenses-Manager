import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";

const ExpensesList = (props) => {
  const filteredYear = props.FilteredYear;
  const filteredArray = props.FilteredArrayOfExpensesForYear;

  // const DisplayingNoExpenses = () => {};

  return (
    <div>
      {filteredArray != null &&
        filteredArray.length === 0 &&
        filteredYear != "Choose a year" && (
          <h3>No expenses found this year!</h3>
        )}
      ;
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
    </div>
  );
};
export default ExpensesList;
