import React, {useState} from "react";

import ExpensesList from "./ExpensesList";
import "./Expenses.css";
import Card from '../UI/Card'
import ExpensesFilter from '../NewExpense/ExpensesFilter'


function Expenses(props) {

  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear);
};

  const filteredExpenses = props.items.filter(expense => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  const [filteredYear,setFilteredYear] = useState('2020');
  
  

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter 
        selected={filteredYear} 
        onChangeFilter={filterChangeHandler}/>
        <ExpensesList items={filteredExpenses}/>
      </Card>
    </div>
  );
}

export default Expenses;
