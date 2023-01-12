import Expenses from "./components/Expenses";
import NewExpense from "./components/NewExpense";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { useState, useEffect } from "react";

function App() {
  const [expensesState, setExpensesState] = useState([]);

  useEffect(() => {
    const array = [];
    fetch(
      "https://expanse-manager-8f511-default-rtdb.firebaseio.com/expanses.json"
    )
      .then((res) => res.json())
      .then((data) => {
        for (let key in data) {
          const newDate = new Date(data[key].e.date);
          data[key].e.date = newDate;
          array.push(data[key]);
        }
        setExpensesState(array);
      })
      .catch((error) => console.log(error.message));
    //eslint - disable - next - line;
  }, []);

  const updatedState = (updatedExpenses) => {
    setExpensesState(updatedExpenses);
  };

  // const fetchData = () => {};

  // console.log(expenses);
  return (
    <div>
      <Header />
      {/* 
     UI for Adding new Expense */}
      <NewExpense updatedState={updatedState} />
      {/* fetchData={fetchData} */}
      {/* Displaying the List of expenses */}
      <Expenses items={expensesState} />
      <Footer />
    </div>
  );
}
export default App;
