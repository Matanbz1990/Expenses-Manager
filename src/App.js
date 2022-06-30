
import React ,{useState} from 'react';
import Expenses from "./components/Expenses";
import NewExpense from './components/NewExpense';



const Dummyitems=[
   {id: "e1",title:"Car insurane",amount: 200  ,date:new Date(2022,5,22)},
   {id: "e2" ,title:"PC",amount: 300  ,date:new Date(2020,2,24)}
];

function App(){

   const[expenses,setExpenses]=useState(Dummyitems);
   


   const addNewExpense=(newExpense)=>{
      const {id,title,amount,date}=newExpense;
      const newExpenses= [...expenses];
      newExpenses.push({id,title,amount:+amount,date: new Date(date)});

      setExpenses(newExpenses);

   
   }
  
  
return(
<div>
<h1>Lets get Started!</h1>

<NewExpense AddingToApp={addNewExpense}/>

<Expenses items={expenses} />
 
</div>
 
)

}
export default App;