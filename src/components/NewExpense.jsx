import FormExpense from "./FormExpense";
import classes from "./NewExpense.module.css";
import { useState } from "react";

const NewExpense = (props) => {
  //for open and close the editing form with the buttons "Add"& "Cancal"
  const [EditingForm, setEditingForm] = useState(false);

  // const MoveTheState=(updatedExpenses)=>{

  // };

  const EditForm = () => {
    setEditingForm(true);
  };
  const CancelEdit = () => {
    setEditingForm(false);
  };

  // const AddExpense = (newExpense) => {
  //   const expenseData = { ...newExpense };
  //   props.AddingToApp(expenseData);
  // };

  return (
    <div className={classes.newexpense}>
      {!EditingForm && <button onClick={EditForm}>Add New Expense</button>}
      {EditingForm && (
        <FormExpense Cancel={CancelEdit} updatedState={props.updatedState} />
        /* onAddExpense={AddExpense} */
      )}
    </div>
  );
};
export default NewExpense;
