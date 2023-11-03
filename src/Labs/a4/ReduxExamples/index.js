import React from "react";
import HelloReducer from "./HelloRedux/helloReducer";
import HelloRedux from "./HelloRedux";
import CounterRedux from "./CounterRedux";
import AddRedux from "./AddRedux";
import addReducer
 from "./AddRedux/addReducer";
 import todosSlice from "./todos/todosReducer";
 import TodoList from "./todos/ToDoList";
 import TodoItem from "./todos/TodoItem";
 import TodoForm from "./todos/TodoForm";

const ReduxExamples = () => {
  return(
    <div>
      <h2>Redux Examples</h2>
      <HelloRedux/>
<CounterRedux/>
<TodoList/>
<AddRedux/>
    </div>
  );
};

export default ReduxExamples;