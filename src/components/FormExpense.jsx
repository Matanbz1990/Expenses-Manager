import React, { useEffect, useState } from "react";
import classes from "./FormExpense.module.css";

const FormExpense = (props) => {
  const [enteredValue, setEnteredValue] = useState({
    id: Math.random(),
    title: "",
    amount: "",
    date: "",
  });

  const [isPosted, setIsPosted] = useState(false);
  const [stateIsValid, setStateIsValid] = useState(false);

  //handle the changes on inputs

  useEffect(() => {
    if (
      enteredValue.title !== "" &&
      enteredValue.date !== "" &&
      enteredValue.amount !== ""
    )
      setStateIsValid(true);
    else setStateIsValid(false);
  }, [enteredValue]);

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

    postExpanse(enteredValue);
    setEnteredValue({ id: Math.random(), title: "", amount: "", date: "" });
  };

  const postExpanse = (enteredValue) => {
    setIsPosted(true);
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
              setStateIsValid(false);
            }
          })
          .catch((error) => console.log(error.message));
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  // useEffect(() => {

  // }, [stateIsValid]);

  const successAdded = () => {
    setTimeout(() => {
      setIsPosted(false);
    }, 2000);

    if (isPosted)
      return <h1 className={classes.messages}>Expense added succssesfuly</h1>;
  };

  return (
    <form onSubmit={addNewExpense}>
      <div className={classes.FormContainer}>
        <div className={classes.newexpense__control}>
          <label>Product</label>
          <input
            onChange={changeHandler}
            type="text"
            name="title"
            value={enteredValue.title}
          />
        </div>
        <div className={classes.newexpense__control}>
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
        <div className={classes.newexpense__control}>
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

        <div className={classes.newexpense__action}>
          <button type="submit" disabled={!stateIsValid}>
            Add Expense
          </button>
          <button onClick={props.Cancel}>Cancel</button>
        </div>

        {isPosted && successAdded()}
      </div>
    </form>
  );
};
export default FormExpense;
