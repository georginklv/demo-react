import React, { useState } from 'react';

import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
  const [isEdeting, setIsEdeting] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    };
    props.onAddExpense(expenseData);
    setIsEdeting(false);
  };

  const startEdetingHandler = () => {
    setIsEdeting(true);
  }

  const stopEdetingHandler = () => {
    setIsEdeting(false);
  }

  return (
    <div className='new-expense'>
      {!isEdeting && <button onClick={startEdetingHandler}>Add New Expense</button>}
      {isEdeting && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancle={stopEdetingHandler}/>}
    </div>
  );
};

export default NewExpense;