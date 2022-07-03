
import "./Expenses.css";
import ExpensesList from "./ExpensesList";
import {useLayoutEffect, useState} from "react";
import ExpensesFilter from "./ExpensesFilter";
import ExpenseChart from "./ChartComponents/ExpenseChart";

function Expenses(props){

  const [expensesYear,setExpensesYear]=useState("");

  //recieved chosen year from ExpensesFilter component
  const selectedExpensesYear=(year)=>{
      setExpensesYear(year);
     
  }
 
  //for getting array of expenses with the chosen year

  const filteredYear=props.items.filter(expense=>{
  return (expense.date.getFullYear().toString()===expensesYear)
      })

      console.log(expensesYear);
return(

<div className="Expenses">

<ExpensesFilter selectedYearData={selectedExpensesYear} />

{/* filteredYear=> array  expensesYear=>variable */}

{expensesYear!="" && <div> 
<ExpenseChart expenses={filteredYear}/>
<ExpensesList  FilteredYear={filteredYear} ExpensesYear={expensesYear} />  
</div>}

</div>
    
)}
export default Expenses;