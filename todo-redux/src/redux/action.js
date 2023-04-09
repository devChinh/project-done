export const addTodo = (data) => {
  return {
    type: "todoList/addTodo",
    payload: data,
  }
}

export const searchFilterChange = (text) => {
  return {
    type: "filter/searchFilterChange",
    payload: text,
  }
}

export const statusFilterChange = (status) => {
  return {
    type: "filter/statusFilterChange",
    payload: status,
  }
}

export const toggleTodoStatus = (todoId) => {
  return {
    type: "todoList/toggleTodoStatus",
    payload : todoId,
  }
}

export const priorityFilterChange = (priorities) => {
  return {
    type: "filter/priorityFilterChange",
    payload: priorities,
  }
}

