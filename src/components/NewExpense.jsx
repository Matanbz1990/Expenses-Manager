import FormExpense from './FormExpense';
import "./NewExpense.css";
import {useState} from "react";

const NewExpense=(props)=>{


    //for open and close the editing form with the buttons "Add"& "Cancal"
    const[EditingForm,setEditingForm]=useState(false);

    const EditForm=()=>{
        setEditingForm(true);
    }
    const CancelEdit=()=>{
        setEditingForm(false);
    }



const AddExpense=(newExpense)=>{
const expenseData={...newExpense}
props.AddingToApp(expenseData);}

       

    return(
        <div  className="new-expense">
        {EditingForm===false && <button onClick={EditForm}>Add New Expense</button>}
        {EditingForm===true && <FormExpense Cancel={CancelEdit} onAddExpense={AddExpense} />}
       
                    
        </div>
    )
}
export default NewExpense;