// const initialState = {
//   search: "",
//   status: "All",
//   priorities: [],
// };

// const filterReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case "filter/searchFilterChange":
//       return {
//         ...state,
//         search: action.payload,
//       };
//     case "filter/statusFilterChange":
//       return {
//         ...state,
//          status: action.payload
//     }
//     case "filter/priorityFilterChange":
//       return {
//         ...state,
//          priorities: action.payload
//     }
//     default:
//       return state;
//   }
// };

// export default filterReducer;

//  slice trong toolkit như một cái reducer nhỏ trong rootReducer

import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
  name: "filter",
  initialState: {
    search: "",
    status: "All",
    priorities: [],
  },
  reducers: {
    searchFilterChange: (state, action) => {
      state.search = action.payload;
    }, //field này sẽ gộp cả action và reducer và  đó là 1 action creator với {type : "filter/searchFilterChange"}
    statusFilterChange: (state, action) => {
      state.status = action.payload;
    },
    priorityFilterChange: (state, action) => {
      console.log("============= action.payload", action.payload);
      state.priorities = action.payload;
    },
  },
});

export default filterSlice;
