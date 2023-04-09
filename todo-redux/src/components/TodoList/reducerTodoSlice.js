// const initialState = [
//   { id: 1, name: "Learn Yoga", completed: false, priority: "Medium" },
//   { id: 2, name: "Learn Redux", completed: true, priority: "High" },
//   { id: 3, name: "Learn Javascript", completed: false, priority: "Low" },
// ];

// const todoReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case "todoList/addTodo":
//       return [...state, action.payload];
//     case "todoList/toggleTodoStatus" :
//       return state.map(todo => todo.id === action.payload ? {...todo , completed : !todo.completed} : todo)
//     default:
//       return state;
//   }
// };

// export default todoReducer;

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// createSlice tự động tạo action cho mình

const todoSlice = createSlice({
  name: "todoList",
  initialState: [{ status: "idle", todos: [] }],
  reducers: {
    addTodo: (state, action) => {
      state.push(action.payload); // mutation là thao tác trực tiếp lên 1 object hay array nào đó
    }, // field này sẽ gộp cả action và reducer và  đó là 1 action creator với {type : "todoList/addTodo"}
    toggleTodoStatus: (state, action) => {
      const currentTodo = state.find((todo) => todo.id === action.payload);
      if (currentTodo) {
        currentTodo.completed = !currentTodo.completed;
      }
    },
  },
  //extra Reducers dùng để xử lý các trạng thái của async action
  extraReducers: (builder) => {
    // Bắt đầu thực hiện
    builder.addCase(fetchTodos.pending, (state, action) => {
      state.status = "loading";
    });

    // thực hiện thành công
    builder.addCase(fetchTodos.fulfilled, (state, action) => {
      state.todos = action.payload;
      state.status = "idle";
    });

    // thực hiện thất bại
    builder.addCase(fetchTodos.rejected, (state, action) => {});
  },
});

//action là một object và action creators là một funtion  () => {return action}
// thunk action là một funtion và thunk action creators là một funtion () => {return thunk action}

// tạo một middleware

// export function addTodos(todo) {
//   // thunk action creators
//   return function addTodosThunk(dispatch, getState) {
//     // thunk action
//     // trong này cũng sẽ nhận được các tham số ở thunk action creators
//     console.log("============= berfore()", getState());
//     console.log({ todo });
//     todo.name = "chinh dep trai";
//     console.log({ todo });
//     // dispath một action thực thụ lên store
//     dispatch(todoSlice.actions.addTodo(todo));
//     console.log("============= after()", getState());
//   };
// }

//Hàm này nhận 2 params:

//type: là string. Nó chính là action type.
//payloadCreator: là callback.

// Khi createAsyncThunk được dispatch, thunk sẽ thực hiện như sau:

// dispatch action pending
// gọi callback payloadCreator và chờ giá trị promise trả về.
// Nếu promise trả về thành công, sẽ dispatch action fulfilled với giá trị là action.payload
// Nếu promise trả về fail, sẽ dispatch action rejected với giá trị action.error.message

export const fetchTodos = createAsyncThunk("todo/fetchTodos", async () => {
  const res = await fetch("api/todos");
  const data = await res.json();
  console.log("============= data", data);
  return data.todos;
});

export const addNewTodo = createAsyncThunk(
  "todo/addNewTodo",
  async (newTodo) => {
    const res = await fetch("api/todos", {
      method: "POST",
      body: JSON.stringify(newTodo),
    });
    console.log({ res });
  }
);

// createAsyncThunk tạo cho chúng ta 3 action
// => todo/fetchTodos/pending
// => todo/fetchTodos/fullfilled
// => todo/fetchTodos/rejected

export default todoSlice;
