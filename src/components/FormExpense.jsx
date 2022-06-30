import React ,{useState} from "react";
import "./FormExpense.css";

const FormExpense=(props)=>{


const [enteredValue,setEnteredValue]=useState({id:Math.random(),title:"",amount:"",date:""});

  //handle the changes on inputs
  
    const changeHandler=(event)=>{
        const value=event.target.value;
        const name=event.target.name;
        setEnteredValue((prevValues)=>{
           return({...prevValues,[name]:value})      
        })    
    }

    //send the new expense(state) uplift 
    const addNewExpense=(event)=>{
        event.preventDefault();
       props.onAddExpense(enteredValue);
        setEnteredValue({id:Math.random() ,title:"",amount:"",date:""});
    }

 
    

    return(
        <form onSubmit={addNewExpense}>
        <div className="FormContainer" >
       
            <div className="new-expense__control">
                <label>Title</label>
                <input onChange={changeHandler} type="text" name="title" value={enteredValue.title}/>
            </div>
            <div className="new-expense__control">
            <label>Price</label>
            <input onChange={changeHandler} type='number' min="0.01" step="0.01" name="amount" value={enteredValue.amount} />
            </div>
            <div className="new-expense__control">
            <label>Date</label>
                <input onChange={changeHandler}  type="date" min="2019-01-01" max="2022-12-31" name="date" value={enteredValue.date} />
            </div>
           
            <div className="new-expense__action">
            <button  type="submit">Add Expense</button>
            <button  onClick={props.Cancel}>Cancel</button>
            </div>
           
       

        </div>
        </form>
    )
}
export default FormExpense;