import ExpenseItem  from "./ExpenseItem";
import "./ExpensesList.css";


 const ExpensesList=(props)=>{

  const filteredYear=props.FilteredYear;


  const DisplayingNoExpenses=()=>{
 
}

    return(

        <div >
      {/* {console.log(props.ExpensesYear)}; */}


{/* why its not working with the function? */}

     {(props.ExpensesYear!=null)&&(filteredYear.length===0 && props.ExpensesYear!="Choose a year") && <h3>No expenses found this year!</h3>};

 

    
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
