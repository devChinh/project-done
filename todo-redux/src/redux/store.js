// import {createStore} from 'redux'
// import rootReducer from './reducer'

// import {composeWithDevTools} from 'redux-devtools-extension'

// // lien ket voi chorme extension
// const composeEnhancers = composeWithDevTools()

// // rootReduces
// const store = createStore(rootReducer , composeEnhancers)

// export default store

// sử dụng redux toolkit thay cho redux core

import { configureStore } from "@reduxjs/toolkit";
import filtersReducer from "../components/Filters/reducerFilterSlice";
import todoListSlice from "../components/TodoList/reducerTodoSlice";

// reducer filter , todoList là tên dữ liệu sẽ nhận lại ở selector

const store = configureStore({
  reducer: {
    filters: filtersReducer.reducer,
    todoList: todoListSlice.reducer,
  },
});

export default store;
