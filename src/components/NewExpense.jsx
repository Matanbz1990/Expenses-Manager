import FormExpense from './FormExpense';
import "./NewExpense.css";

const NewExpense=(props)=>{

const AddExpense=(newExpense)=>{
const expenseData={...newExpense}

props.AddingToApp(expenseData);

}

    return(
        <div  className="new-expense">
            <FormExpense onAddExpense={AddExpense} />
        </div>
    )
}
export default NewExpense;