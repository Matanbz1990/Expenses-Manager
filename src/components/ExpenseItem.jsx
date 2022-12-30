import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";
import "./ExpenseDate.css";

function ExpenseItem(props) {
  return (
    <div>
      <div className="container1">
        <div>
          <ExpenseDate expenseDate={props.date} />
        </div>

        <div className="product">
          <h2>{props.title}</h2>
        </div>

        <div className="amount">
          <h2>${props.amount}</h2>
        </div>
      </div>
    </div>
  );
}
export default ExpenseItem;
