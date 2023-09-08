import "./index.css"

function App() {
  return (
    <div className="App">
        <h1><span className="todo-text">To-Do</span> <span>List</span></h1>
        <section id="list">
          <div>
            <input className="checkbox" type="checkbox"></input>
            <span>Meet Amaia at 4pm for today’s pair programming session.</span>
            <button>Delete</button>
          </div>
          <div>
            <input className="checkbox" type="checkbox"></input>
            <span>Meet Amaia at 4pm for today’s pair programming session.</span>
            <button>Delete</button>
          </div>
        </section>
        <section id="input">
            <input className="checkbox" placeholder="   Add a Task"></input>
            <button>Add</button>
        </section>
    </div>
  );
}

export default App;
