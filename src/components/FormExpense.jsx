import React, { useEffect, useState } from "react";
import "./FormExpense.css";

const FormExpense = (props) => {
  const [enteredValue, setEnteredValue] = useState({
    id: Math.random(),
    title: "",
    amount: "",
    date: "",
  });
  const [isPosted, setIsPosted] = useState(false);
  const [postIsPressed, setPostIsPressed] = useState(false);
  const [stateIsValid, setStateIsValid] = useState(false);

  //handle the changes on inputs

  const changeHandler = (event) => {
    const value = event.target.value;
    const name = event.target.name;
    setEnteredValue((prevValues) => {
      return { ...prevValues, [name]: value };
    });
  };

  //send the new expense(state) uplift
  const addNewExpense = (event) => {
    event.preventDefault();
    setPostIsPressed(true);

    if (
      enteredValue.title === "" ||
      enteredValue.date === "" ||
      enteredValue.amount === ""
    ) {
      console.log("one is Empty");
    } else {
      setStateIsValid(true);
    }
    console.log(enteredValue, stateIsValid);
  };

  const postExpanse = (enteredValue) => {
    fetch(
      "https://expanse-manager-8f511-default-rtdb.firebaseio.com/expanses.json",
      {
        method: "POST",
        body: JSON.stringify({
          e: enteredValue,
        }),
        headers: { "Content-Type": "application/json" },
      }
    )
      .then(() => {
        const updatedExpenses = [];
        fetch(
          "https://expanse-manager-8f511-default-rtdb.firebaseio.com/expanses.json"
        )
          .then((res) => res.json())
          .then((data) => {
            for (let key in data) {
              const newDate = new Date(data[key].e.date);
              data[key].e.date = newDate;
              updatedExpenses.push(data[key]);
              props.updatedState(updatedExpenses);
              setPostIsPressed(false);
            }
          })
          .catch((error) => console.log(error.message));
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  useEffect(() => {
    if (stateIsValid) {
      postExpanse(enteredValue);
      setEnteredValue({ id: Math.random(), title: "", amount: "", date: "" });
      setIsPosted(true);
    }
  }, [stateIsValid]);

  const successAdded = () => {
    setTimeout(() => {
      setIsPosted(false);
    }, 2000);

    if (isPosted)
      return <h1 className="messages">Expense added succssesfuly</h1>;
  };

  return (
    <form onSubmit={addNewExpense}>
      <div className="FormContainer">
        <div className="new-expense__control">
          <label>Product</label>
          <input
            onChange={changeHandler}
            type="text"
            name="title"
            value={enteredValue.title}
          />
        </div>
        <div className="new-expense__control">
          <label>Price ($)</label>
          <input
            onChange={changeHandler}
            type="number"
            min="0.01"
            step="0.01"
            name="amount"
            value={enteredValue.amount}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            onChange={changeHandler}
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            name="date"
            value={enteredValue.date}
          />
        </div>

        <div className="new-expense__action">
          <button type="submit">Add Expense</button>
          <button onClick={props.Cancel}>Cancel</button>
        </div>
        {postIsPressed && !stateIsValid && (
          <h1 className="messages">Please fill all the fields</h1>
        )}
        {isPosted && successAdded()}
      </div>
    </form>
  );
};
export default FormExpense;
