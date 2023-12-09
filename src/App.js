const demoTask = [
  { id: 8939982739871028, task: "Wake up", time: "8:00", active: false },
  { id: 8925285465654578, task: "Eat Breakfast", time: "10:00", active: false },
  { id: 8123558465259647, task: "Go to Work", time: "11:00", active: false },
  { id: 8121235534245964, task: "Do work", time: "11:00", active: false },
];

function App() {
  return (
    <div className="WholeBody">
      <ToDoList />
    </div>
  );
}

function ToDoList() {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>To Do List</h1>
      <div>
        <SearchBox />
        <br />
        <TasksList />
        <br />
        <OptionBar />
      </div>
    </div>
  );
}

function SearchBox() {
  return (
    <div>
      <form>
        <input
          type="text"
          placeholder="Search Tasks"
          style={{ width: "25rem", height: "2.5rem" }}
        ></input>
        {"   "}
        <input
          style={{ width: "3rem", height: "2.9rem" }}
          type="Submit"
          value="🔎"
        ></input>
      </form>
    </div>
  );
}

function TasksList() {
  return (
    <div className="Lists">
      {demoTask.map((res) => (
        <Tasks data={res} key={res.id} />
      ))}
    </div>
  );
}

function Tasks({ data }) {
  return (
    <>
      <div className="Tasks">
        <input
          type="checkbox"
          style={{ display: "inline", marginLeft: "1rem" }}
        ></input>
        <p style={{ display: "inline" }}>
          <span style={{ marginLeft: "1rem", fontSize: "20px" }}>
            {data.task}
          </span>{" "}
          <span
            style={{ float: "right", marginRight: "1rem", fontSize: "20px" }}
          >
            {data.time}
          </span>
        </p>
      </div>
    </>
  );
}

function OptionBar() {
  return (
    <div className="OptionBar">
      <button>Add Task</button>
      <div style={{ display: "inline" }} className="rightNav">
        <button>{" All "}</button> <button>Active</button>
        {"  "}
        <button className="activeBtn">Completed</button>
      </div>
    </div>
  );
}

// function AddTaskModel() {}

export default App;
