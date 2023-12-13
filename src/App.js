import { useState } from "react";

const demoTask = [
  { id: 8939982739871028, task: "Wake up", time: "8:00", active: true },
  { id: 8925285465654578, task: "Eat Breakfast", time: "10:00", active: false },
  { id: 8123558465259647, task: "Go to Work", time: "11:00", active: true },
  { id: 8121235534245964, task: "Do work", time: "11:30", active: false },
];

function App() {
  return (
    <div className="WholeBody">
      <ToDoList />
    </div>
  );
}

function ToDoList() {
  const [addedTasks, setAddedTasks] = useState([]);
  const [addTask, onAddTask] = useState(true);
  const [filterOption, setFilterOption] = useState("all");
  const [searchResults, setSearchResults] = useState(addedTasks);

  function handleAddNewTask(tasks) {
    setAddedTasks([...addedTasks, tasks]);
    setSearchResults([...addedTasks, tasks]);
  }

  function handleToggleCheckBox(id) {
    function toggleCheck(arr, set) {
      set(
        arr.map((task) => {
          return task.id === id ? { ...task, active: !task.active } : task;
        })
      );
    }

    toggleCheck(addedTasks, setAddedTasks);
    toggleCheck(searchResults, setSearchResults);
  }

  function handleSortButton(buttonName) {
    setFilterOption(buttonName);
  }

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>To Do List</h1>
      <div>
        <SearchBox
          searchResults={searchResults}
          setSearchResults={setSearchResults}
          addedTasks={addedTasks}
        />
        <br />

        <TasksList
          searchResults={searchResults}
          onToggleCheckBox={handleToggleCheckBox}
          filterOption={filterOption}
          addedTasks={addedTasks}
        />

        <br />

        <OptionBar
          onAddTask={onAddTask}
          filterOption={filterOption}
          handleSortButton={handleSortButton}
        />

        <AddTaskModel
          onAddTask={onAddTask}
          addTask={addTask}
          handleAddNewTask={handleAddNewTask}
        />
      </div>
    </div>
  );
}

function SearchBox({ setSearchResults, addedTasks }) {
  const [onSearch, setOnSearch] = useState("");

  function handleSearch(e) {
    const searchTerm = e.target.value;
    setOnSearch(searchTerm);
    // setSearchResults(addedTasks);
    const newData = addedTasks;

    const searchedResults = newData.filter((item) =>
      item.task.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setSearchResults(searchedResults);
  }

  return (
    <div>
      <form>
        <input
          type="text"
          placeholder="Search Tasks"
          style={{ width: "29.5rem", height: "2.5rem" }}
          value={onSearch}
          onChange={handleSearch}
        ></input>
      </form>
    </div>
  );
}

function TasksList({
  addedTasks,
  onToggleCheckBox,
  filterOption,
  searchResults,
}) {
  let sortedItems;

  if (filterOption === "all") {
    sortedItems = searchResults;
  }

  if (filterOption === "active") {
    sortedItems = searchResults
      .slice()
      .sort((a, b) => Number(b.active) - Number(a.active));
  }

  if (filterOption === "completed") {
    sortedItems = searchResults.filter((e) => e.active === true);
  }

  return (
    <div className="Lists">
      {sortedItems.map((res) => (
        <Tasks data={res} key={res.id} onToggleCheckBox={onToggleCheckBox} />
      ))}
    </div>
  );
}

function Tasks({ data, onToggleCheckBox }) {
  return (
    <>
      <div className="Tasks">
        <input
          type="checkbox"
          style={{ display: "inline", marginLeft: "1rem" }}
          checked={data.active}
          value={data.active}
          onChange={() => onToggleCheckBox(data.id)}
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

function OptionBar({ onAddTask, filterOption, handleSortButton }) {
  return (
    <div className="optionBar">
      <button onClick={() => onAddTask(false)}>Add Task</button>
      <div style={{ display: "inline" }} className="rightNav">
        <button
          onClick={() => handleSortButton("all")}
          className={filterOption === "all" ? "activeBtn" : ""}
        >
          All
        </button>{" "}
        <button
          onClick={() => handleSortButton("active")}
          className={filterOption === "active" ? "activeBtn" : ""}
        >
          Active
        </button>
        {"  "}
        <button
          onClick={() => handleSortButton("completed")}
          className={filterOption === "completed" ? "activeBtn" : ""}
        >
          Completed
        </button>
      </div>
    </div>
  );
}

function AddTaskModel({ onAddTask, addTask, handleAddNewTask }) {
  const [taskName, setTaskName] = useState("");
  const [addTime, setAddTime] = useState("");

  function handleAddTask(e) {
    e.preventDefault();

    const newTask = {
      id: crypto.randomUUID(),
      task: `${taskName}`,
      time: `${addTime}`,
      active: false,
    };

    console.log(taskName, addTime, newTask);
    handleAddNewTask(newTask);
    onAddTask(true);
    setTaskName("");
    setAddTime("");
  }

  return (
    <div className={`wholeModelWindow ${addTask ? "nodisplay" : ""}`}>
      <div className="addModelWindow">
        <form className="addtaskform" onSubmit={handleAddTask}>
          <label>Task: </label>{" "}
          <input
            type="text"
            value={taskName}
            onChange={(e) => setTaskName(e.target.value)}
          ></input>
          <br />
          <br />
          <label>Time: </label>{" "}
          <input
            type="text"
            value={addTime}
            onChange={(e) => setAddTime(e.target.value)}
          ></input>
          <br />
          <br />
          <button>Add Task</button>
        </form>
      </div>
    </div>
  );
}

export default App;
