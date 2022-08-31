import React, { Component } from "react";

const Form = ({ setInputText, todos, setTodos, inputText, setStatus }) => {
  // Here i can write js and functions
  const inputTextHandler = (e) => { 
    // e: JSON.stringify(e.values)
    if (
      e.length >= 0 && 
      inputText.length >= 0);
    console.log(e.target.value);
    setInputText(e.target.value); 
    console.log("testing",inputText.length);
    // if (inputText.status >= 0) {
    //   throw new Error(`Request failed: ${inputText.status}`); 
    // }
  };

    // e.trim();
    // inputText(inputText.length > "0") 
      // e.preventDefault();
      // if (!e.target.value) {
      //   error = `${inputText} field cannot be empty`
      // }
    // else {
    //   e.preventDefault("");
    // }
  
  // const handleKeyDown = e => {
    // inputText.trim();
   
    // };              

    // var error = ""
    // if (e.value) {
    //   error = `${inputText} field cannot be empty`
    // }
    // let error = '';
    // let formIsValid = true;
    //   if (!inputText){formIsValid = false};
    //   error = "input plz"
    //   this.setInputText({error: error});
    //   return formIsValid;

  const submitTodoHandler = (e) => {
    e.preventDefault();
    setTodos([
      ...todos,
    { text: inputText, completed: false, id: Math.random() * 1000 },
    ]);
    setInputText("");
 
  };
 
  const statusHandler = (e) => {
    setStatus(e.target.value);    
  };

  return (
    <form>
      <input
        value={inputText}
        onChange={(inputTextHandler)}
        type="text"
        className="todo-input" 
        // onKeyDown={handleKeyDown}
        required
        pattern="[a-zA-Z0-9\s]+"
        placeholder="Type here..."  
      />
      <button  
        onClick={submitTodoHandler} 
        disabled={!inputText} 
        value={inputText} 
        required 
        className="todo-button" 
        type="submit">
        <i className="fas fa-plus-square"></i>   
      </button>
      <div className="select">
        <select onChange={statusHandler} name="todos" className="filter-todo">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
  );
  };

export default Form;
