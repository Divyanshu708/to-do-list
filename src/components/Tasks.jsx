import { useDispatch, useSelector } from "react-redux";
import { setAddedTasks, setSearchResults } from "./todoSlice";

export default function Tasks({ data }) {
  const dispatch = useDispatch();
  const addedTasks = useSelector((state) => state.todo.addedTasks);
  const searchResults = useSelector((state) => state.todo.searchResults);

  function handleToggleCheckBox(id) {
    function toggleCheck(arr, set) {
      dispatch(
        set(
          arr.map((task) => {
            return task.id === id ? { ...task, active: !task.active } : task;
          })
        )
      );
    }
    toggleCheck(addedTasks, setAddedTasks);
    toggleCheck(searchResults, setSearchResults);
  }

  return (
    <>
      <div className="Tasks bg-white border-2 border-black/10 rounded-md my-2 p-3 text-gray-600 text-base font-semibold sm:text-xl">
        <input
          type="checkbox"
          className="ml-1 sm:ml-3 inline"
          checked={data.active}
          value={data.active}
          onChange={() => handleToggleCheckBox(data.id)}
        ></input>
        <p className="inline">
          <span className="ml-4">{data.task}</span>
          <span className="mr:0 sm:mr-1 float-right">{data.time}</span>
        </p>
      </div>
    </>
  );
}
