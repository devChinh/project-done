import { combineReducers } from "redux"

import filterReducer from "../components/Filters/reducerFilterSlice"
import todoReducer from "../components/TodoList/reducerTodoSlice"

// slice reducer : chia rootRuducer thành các reducer nhỏ

// const rootReducer = (state = {} , action) => {
//     return {
//         filters : filterReducer(state.filters, action),
//         todoList : todoReducer(state.todoList , action)
//     }
// }


// combineReducers : liên kết các reducer

// khi dùng redux-tookit thì không phải dùng đến commbineReducres nữa

const rootReducer = combineReducers({
    filters : filterReducer,
    todoList : todoReducer,
})

export default rootReducer


// const initialState = {
//     filters : {
//         search : '',
//         status : "All",
//         priority : []
//     },
//     todoList : [
//         {id : 1 , name : 'Learn Yoga' , completed : false , priority : "Medium"},
//         {id : 2 , name : 'Learn Redux' , completed : true , priority : "High"},
//         {id : 3 , name : 'Learn Javascript' , completed : false , priority : "Low"},
//     ]
// }


// const rootReducer = (state = initialState, action) => {
//     switch(action.type) {
//         case 'todoList/addTodo' :
//             return {
//                 ...state,
//                 todoList : [
//                     ...state.todoList,
//                     action.payload
//                 ]
//             }
//         case "filter/searchFilterChange" :
//             return {
//                 ...state,
//                 filters : {
//                     ...state.filters,
//                     search : action.payload
//                 }
//             }      
//             default : return state
//     }
// }

// export default rootReducer