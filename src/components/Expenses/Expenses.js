import React, { useState } from "react";

import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";

import "./Expenses.css";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");
  const filterSelectHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear
  })

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selectedYear={filteredYear}
          onFilterSelect={filterSelectHandler}
        />
        <ExpensesList items={filteredExpenses}/>
      </Card>
    </div>
  );
};

export default Expenses;
