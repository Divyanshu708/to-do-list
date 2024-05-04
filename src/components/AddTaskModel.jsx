import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setAddedTasks, setSearchResults, onAddTask } from "./todoSlice";

export default function AddTaskModel() {
  const addedTasks = useSelector((state) => state.todo.addedTasks);
  const addTask = useSelector((state) => state.todo.addTask);
  const dispatch = useDispatch();

  const [taskName, setTaskName] = useState("");
  const [addTime, setAddTime] = useState("");

  function handleAddNewTask(tasks) {
    dispatch(setAddedTasks([...addedTasks, tasks]));
    dispatch(setSearchResults([...addedTasks, tasks]));
  }

  function handleCancel() {
    dispatch(onAddTask(true));
  }

  function handleAddTask(e) {
    console.log(e);
    e.preventDefault();

    const newTask = {
      id: crypto.randomUUID(),
      task: `${taskName}`,
      time: `${addTime}`,
      active: false,
    };

    console.log(taskName, addTime);

    handleAddNewTask(newTask);
    dispatch(onAddTask(true));
    setTaskName("");
    setAddTime("");
  }

  return !addTask ? (
    <div className="absolute bg-black/20 w-full h-screen">
      <div className="flex items-center justify-center h-screen">
        <form
          className="bg-white w-[90%] sm:w-[60%] md:w-[50%] lg:w-[40%] xl:w-1/4 h-1/4 flex flex-col justify-around items-center text-lg font-semibold text-gray-500 rounded-lg border-2"
          onSubmit={handleAddTask}
        >
          <div className="flex text-xl sm:text-2xl  gap-4 mt-4">
            <label className="mt-1">Task: </label>
            <input
              className="border-2 p-2 rounded-xl text-lg font-medium"
              placeholder="Task name"
              type="text"
              value={taskName}
              onChange={(e) => setTaskName(e.target.value)}
            ></input>
          </div>
          <div className="flex text-xl sm:text-2xl gap-4">
            <label className="mt-2">Time: </label>
            <input
              className="border-2 p-2 rounded-xl text-lg font-medium"
              placeholder="Enter Time"
              type="text"
              value={addTime}
              onChange={(e) => setAddTime(e.target.value)}
            ></input>
          </div>

          <div className="flex w-[80%] justify-end gap-0  sm:w-full sm:justify-end sm:gap-10 mb-4">
            <button className="btn">Add Task</button>
            <button
              onClick={handleCancel}
              className="btn bg-slate-500 hover:bg-slate-400 mr-10"
            >
              cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  ) : (
    ""
  );
}
