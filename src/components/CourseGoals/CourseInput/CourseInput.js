import React, { useState } from 'react';
// import styled from 'styled-components';

import Button from '../../UI/Button/Button';
import styles from './CourseInput.module.css';

// const FormWrapper = styled.div`
//     margin: 0.5rem 0;

//   & label {
//     font-weight: bold;
//     display: block;
//     margin-bottom: 0.5rem;
//     color: ${props => props.invalid && 'red'}
//   }

//   & input {
//     display: block;
//     width: 100%;
//     border: 1px solid #ccc;
//     font: inherit;
//     line-height: 1.5rem;
//     padding: 0 0.25rem;
//     border-color: ${props => props.invalid? 'red' : 'black' };
//     backgroud: ${props => props.invalid && '#fad0ec'}
//   }

//   & input:focus {
//     outline: none;
//     background: #fad0ec;
//     border-color: #8b005d;
//   }


// `;

const CourseInput = props => {
  const [enteredValue, setEnteredValue] = useState('');
  const [isValid, setIsValid] = useState(true);

  const goalInputChangeHandler = event => {
    console.log(event.target.value.trim().length);
    if(event.target.value.trim().length === 0){
      setIsValid(false);
    }else{
      setIsValid(true);
    }
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = event => {
    event.preventDefault();
    if(enteredValue.trim().length === 0){
      setIsValid(false);
      return;
    }
    setIsValid(true);
    props.onAddGoal(enteredValue);
    event.target[0].value = "";
    // console.log(event.target[0].value);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={`${styles['form-control']} ${!isValid && styles['invalid']}`}>
        <label>Course Goal</label>
        <input type="text" onChange={goalInputChangeHandler}></input>
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
