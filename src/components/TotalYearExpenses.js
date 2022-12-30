import classes from "./TotalYearExpenses.module.css";

const TotalYearExpenses = (props) => {
  let totalExpenses = 0;
  let amount;

  props.currentYearExpenses.map((expense) => {
    amount = +expense.e.amount;
    totalExpenses += amount;
  });
  console.log(totalExpenses);

  return (
    <div>
      <h2 className={classes.totalExpenses}>
        your total expenses for {props.year} is: {totalExpenses}$
      </h2>
    </div>
  );
};
export default TotalYearExpenses;
