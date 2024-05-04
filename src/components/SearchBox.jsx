import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSearchResults } from "./todoSlice";

export default function SearchBox() {
  const dispatch = useDispatch();

  const [onSearch, setOnSearch] = useState("");
  const addedTasks = useSelector((state) => state.todo.addedTasks);

  function handleSearch(e) {
    const searchTerm = e;
    setOnSearch(searchTerm);
    // setSearchResults(addedTasks);
    const newData = addedTasks;

    const searchedResults = newData.filter((item) =>
      item.task.toLowerCase().includes(searchTerm.toLowerCase())
    );

    dispatch(setSearchResults(searchedResults));
  }

  return (
    <form className="w-full px-10 sm:px-8">
      <input
        className="w-full p-3 pl-3 sm:pl-8 md:pl-5 border-2 rounded-lg"
        type="text"
        placeholder="Search Tasks"
        value={onSearch}
        onChange={(e) => handleSearch(e.target.value)}
      ></input>
    </form>
  );
}
