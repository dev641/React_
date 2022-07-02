import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";
import ExpenseList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

function Expenses(props) {
  const [filterYear, setFilterYear] = useState("2020");
  // const expenseArr = [];
  // for (var i = 0; i < props.item.length; i++) {
  //   expenseArr.push(
  //     <ExpenseItem
  //       key={props.item[i].id}
  //       title={props.item[i].title}
  //       amount={props.item[i].amount}
  //       date={props.item[i].date}
  //     />
  //   );
  // }
  const filterChangeHandler = (selectYear) => {
    setFilterYear(selectYear);
  };
  const filteredExpenses = props.item.filter((expense) => {
    return expense.date.getFullYear().toString() === filterYear;
  });

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filterYear}
        onChangeFilter={filterChangeHandler}
      />
      <ExpensesChart expenses={filteredExpenses} />
      <ExpenseList item={filteredExpenses} />
    </Card>
  );
}
export default Expenses;
