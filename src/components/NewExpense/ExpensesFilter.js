import React from 'react';

import './ExpensesFilter.css';

const ExpensesFilter = (props) => {

    const dropDownChangeHandler = (event) => {
        //console.log(event.target.value);
        props.onChangeFilter(event.target.value);
    }
      
  return (
    //listen to changes on the drop down
    //and when the user selects a new year from the drowpdown,
    //listen to it and make sure that this picked year
    //is fowarded to the expense components

    // and then in the expenses.js store it in a component state.


    
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label>Filter by year</label>
        <select value={props.selected} onChange={dropDownChangeHandler}>
          <option value='2022'>2022</option>
          <option value='2021'>2021</option>
          <option value='2020'>2020</option>
          <option value='2019'>2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;