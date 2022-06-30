import "./ExpenseDate.css";
import React from 'react';


function ExpenseDate(props){


const month =props.expenseDate.toLocaleString("en-US", { month: "long" });;


const day=props.expenseDate.toLocaleString("en-US", { day: "2-digit" });;

const year=props.expenseDate.getFullYear();


    return(
<div className="DateContainer">
<h2 className="month">{month}</h2>  
 <h2 className="year">{year}</h2> 
 <h2 className="day">{day}</h2>  
  
  </div>
    )
}
export default ExpenseDate;


{/* 
     <div><h2>{month} </h2></div>
     <div><h2>{day}</h2> </div>
     <div><h2>{year}</h2> </div>


       */}


