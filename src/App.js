import React, { useState } from "react";

import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses/Expenses";

const DUMMY_EXPENSES = [
  { id: "1", title: "Car Insurance", amount: 232.21, date: new Date(2021, 2, 28)},
  { id: "2", title: "Hot Dogs", amount: 24.66, date: new Date(2020, 6, 3) },
  { id: "3", title: "Comic", amount: 44.37, date: new Date(2020, 6, 3) },
  { id: "4", title: "Flamingo", amount: 294.67, date: new Date(2021, 8, 18) },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    console.log(expense);
    console.log(expense.title);
    setExpenses((prevExpenses) => {
      const newExpenses = [expense, ...prevExpenses];
      console.log(newExpenses);
      return newExpenses;
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />;
    </div>
  );
};

export default App;
