import { useDispatch, useSelector } from "react-redux";
import { setFilterOption, onAddTask, setAddedTasks } from "./todoSlice";
import dustinBin from "../assets/dustbin.svg";

export default function OptionBar() {
  const dispatch = useDispatch();
  const filterOption = useSelector((state) => state.todo.filterOption);
  const addedTasks = useSelector((state) => state.todo.addedTasks);

  function handleSortButton(buttonName) {
    dispatch(setFilterOption(buttonName));
  }

  function handleDeleteTask(e) {
    e.preventDefault();
    const newTask = addedTasks.filter((x) => x.active === false);
    dispatch(setAddedTasks(newTask));
  }

  return (
    <div className="py-5 w-full">
      <div className="optionBar flex flex-row justify-between w-full">
        <div className="w-40 ml-10 flex justify-start sm:justify-between">
          <button className="btn " onClick={() => dispatch(onAddTask(false))}>
            Add Task
          </button>

          <img
            src={dustinBin}
            alt="Delete"
            onClick={handleDeleteTask}
            className="scale-[90%] hover:scale-[100%] sm:scale-75  cursor-pointer sm:hover:scale-[80%] drop-shadow-lg"
          />
        </div>

        <div className="w-1/2 sm:w-1/3 mr-5  sm:mr-10 gap-3 sm:gap-7 flex justify-between text-sm font-bold sm:font-semibold sm:text-lg ">
          <button
            onClick={() => handleSortButton("all")}
            className={
              filterOption === "all"
                ? "text-base sm:text-xl text-gray-700"
                : "text-gray-500"
            }
          >
            All
          </button>
          <button
            onClick={() => handleSortButton("active")}
            className={`
              ${
                filterOption === "active"
                  ? "text-base sm:text-xl text-gray-700"
                  : "text-gray-500"
              }
            `}
          >
            Active
          </button>

          <button
            onClick={() => handleSortButton("completed")}
            className={
              filterOption === "completed"
                ? "text-base sm:text-lg text-gray-800"
                : "text-gray-500"
            }
          >
            Completed
          </button>
        </div>
      </div>
    </div>
  );
}
