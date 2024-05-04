import { createSlice } from "@reduxjs/toolkit";
// const [addedTasks, setAddedTasks] = useState([]);
// const [addTask, onAddTask] = useState(true);
// const [filterOption, setFilterOption] = useState("all");
// const [searchResults, setSearchResults] = useState(addedTasks);

const initialState = {
  addedTasks: [],
  addTask: true,
  filterOption: "all",
  searchResults: [],
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    setAddedTasks(state, action) {
      state.addedTasks = action.payload;
    },
    onAddTask(state, action) {
      state.addTask = action.payload;
    },
    setFilterOption(state, action) {
      state.filterOption = action.payload;
    },
    setSearchResults(state, action) {
      state.searchResults = action.payload;
    },
  },
});

export const { setAddedTasks, onAddTask, setFilterOption, setSearchResults } =
  todoSlice.actions;

export default todoSlice.reducer;
