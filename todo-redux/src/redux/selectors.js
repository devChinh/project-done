// thay vì trả về toàn bộ danh sách todoList thì sẽ phải filter theo từ khoá search
// export const todoListSelector = state => state.todoList

// import { createSelector } from "reselect";

import { createSelector } from "@reduxjs/toolkit";

// export const todoListSelector = (state) => {
//     const todosRemaining = state.todoList.filter((todo) => todo.name.includes(state.filters.search))
//     return todosRemaining
// }

// export const searchTextSelector = state => state.filters.search

export const searchTextSelector = (state) => state.filters.search;
export const filterStatusSelector = (state) => state.filters.status;
export const filterPrioritySelector = (state) => state.filters.priorities;
export const todoListSelector = (state) => state.todoList[0].todos;

// todoListSelector , searchTextSelector , ... là các selector quan hệ , phụ thuộc với nhau
// tham số thứ 3 làm một function , function này nhận dữ liệu selector trả về của todoListSelector , searchTextSelector
// todoList <=>  state.todoList , searchText <=> state.filters.search

export const todosRemainingSelector = createSelector(
  todoListSelector,
  filterStatusSelector,
  filterPrioritySelector,
  searchTextSelector,
  (todoList, status, priorities, searchText) => {
    console.log("============= priorities", priorities);
    console.log("============= todoList", todoList);
    return todoList.filter((todo) => {
      if (status === "All") {
        return priorities.length
          ? todo.name.includes(searchText) && priorities.includes(todo.priority)
          : todo.name.includes(searchText);
      }
      return (
        todo.name.includes(searchText) &&
        (status === "Completed" ? todo.completed : !todo.completed) &&
        (priorities.length ? priorities.includes(todo.priority) : true)
      );
    });
  }
);
