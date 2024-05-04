import { useSelector } from "react-redux";
import Tasks from "./Tasks";

export default function TasksList() {
  const searchResults = useSelector((state) => state.todo.searchResults);
  const filterOption = useSelector((state) => state.todo.filterOption);
  let sortedItems;

  if (filterOption === "all") {
    sortedItems = searchResults;
  }

  if (filterOption === "active") {
    sortedItems = searchResults
      .slice()
      .sort((a, b) => Number(a.active) - Number(b.active));
  }

  if (filterOption === "completed") {
    sortedItems = searchResults.filter((e) => e.active === true);
  }

  return (
    <div className=" px-2 py-0 ">
      {sortedItems.map((res) => (
        <Tasks data={res} key={res.id} />
      ))}
    </div>
  );
}
