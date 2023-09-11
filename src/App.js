import React, { useState } from "react";
import "./index.css";

function App() {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState("");

  function handleTextInput(e) {
    setText(e.target.value);
    console.log(text);
  }

  function addTodo() {
    setTodos([
      ...todos,
      {
        text: text,
        checked: false,
      },
    ]);
  }

  function deleteTodo(index) {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  }

  function changeCheck(index) {
    const updatedTodos = [...todos];
    updatedTodos[index].checked = !updatedTodos[index].checked;
    setTodos(updatedTodos);
  }

  return (
    <div className="App">
      <h1>
        <span className="todo-text">To-Do</span>
        <span>List</span>
      </h1>
      {todos.length !== 0 && (
        <ul
          id="list"
          style={{
            listStyleType: "none",
            overflowY: "auto",
            maxHeight: "50vh",
          }}
        >
          {todos.map((todo, index) => {
            return (
              <li key={index}>
                <input
                  className="checkbox"
                  type="checkbox"
                  onChange={() => changeCheck(index)}
                  style={
                    todo.checked
                      ? { accentColor: "grey" }
                      : { accentColor: "none" }
                  }
                ></input>
                <span
                  style={
                    todo.checked
                      ? { textDecoration: "line-through" }
                      : { textDecoration: "none" }
                  }
                >
                  {todo.text}
                </span>
                <button onClick={() => deleteTodo(index)}>Delete</button>
              </li>
            );
          })}
        </ul>
      )}
      <section id="input">
        <input
          className="input-field"
          type="text"
          value={text}
          onChange={handleTextInput}
          placeholder="Add a Task"
        ></input>
        <button onClick={() => addTodo()}>Add</button>
      </section>
    </div>
  );
}

export default App;
