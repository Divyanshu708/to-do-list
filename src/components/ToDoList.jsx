import AddTaskModel from "./AddTaskModel";
import OptionBar from "./OptionBar";
import TasksList from "./TasksList";
import SearchBox from "./SearchBox";
import { useDispatch, useSelector } from "react-redux";
import { setSearchResults } from "./todoSlice";
import { useEffect } from "react";

export default function ToDoList() {
  const dispatch = useDispatch();

  const addedTasks = useSelector((state) => state.todo.addedTasks);
  console.log(addedTasks);

  useEffect(
    function () {
      dispatch(setSearchResults(addedTasks));
    },
    [addedTasks, dispatch]
  );

  return (
    <div className="h-screen bg-gradient-to-r from-cyan-500 to-blue-500 flex justify-center items-center drop-shadow-xl">
      <div className="flex items-center flex-col bg-white w-full sm:w-[90%] md:w-[80%] lg:w-[70%] xl:w-[60%] 2xl:w-2/5 h-screen  sm:h-[60%] rounded-lg">
        <h1 className="text-black/60 font-bold text-4xl my-6">To Do List</h1>

        <SearchBox />

        <div className="w-[82%] sm:w-[92%] rounded-lg h-screen mt-3 overflow-auto border-2">
          <TasksList />
        </div>

        <OptionBar />
      </div>
      <AddTaskModel />
    </div>
  );
}
