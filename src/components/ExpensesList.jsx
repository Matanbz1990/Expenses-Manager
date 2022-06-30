import ExpenseItem  from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import {useState} from "react";

 const ExpensesList=(props)=>{

    const [expensesYear,setExpensesYear]=useState("");

    //recieved chosen year from ExpensesFilter component
    const selectedExpensesYear=(year)=>{
        setExpensesYear(year);
    }

    //for getting array of expenses with the chosen year

    const filteredYear=props.items.filter(expense=>{
    return (expense.date.getFullYear().toString()===expensesYear)
        })

    return(

        <div className="Expenses">
        <ExpensesFilter selectedYearData={selectedExpensesYear}/>
       
        {filteredYear.length===0 && <p>No expense found!</p>}
     
        {filteredYear.map((expense)=>{
         return(
           <ExpenseItem key ={expense.id}
          title={expense.title} 
          amount={expense.amount}
          date={expense.date} />)}
     
         ) }
     
        
     
          </div>

    )
 }
 export default ExpensesList;
