
import {useState} from "react";
import ExpenseItem  from "./ExpenseItem";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";

function Expenses(props){

    const [expensesYear,setExpensesYear]=useState("");
    const selectedExpensesYear=(year)=>{
        setExpensesYear(year);
    }


const filteredYear=props.items.filter(expense=>{
  return (expense.date.getFullYear().toString()===expensesYear)
})




return(
   
  <div className="Expenses">
   <ExpensesFilter selectedYearData={selectedExpensesYear}/>
  
   {filteredYear.map((expense)=>{
    return(
      <ExpenseItem key ={expense.id}
     title={expense.title} 
     amount={expense.amount}
     date={expense.date} />)}

    )}
     

    





     </div>
     
)

}
export default Expenses;