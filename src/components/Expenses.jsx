
import "./Expenses.css";
import ExpensesList from "./ExpensesList";

function Expenses(props){

return(
  <ExpensesList items={props.items} />      
)
}
export default Expenses;