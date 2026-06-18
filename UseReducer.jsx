import React, { useReducer } from "react";

const UseReducer = () => {
  
  const initialState = {
    count: 0,
  };

  const reducerFn = (state, action) => {
    if (action.type === "increment") {
      return { count: state.count + 1 };
    }

    if (action.type === "decrement") {
      return { count: state.count - 1 };
    }

    if (action.type === "reset") {
      return { count: 0 };
    }

    return state;
  };

  const [state, dispatch] = useReducer(reducerFn, initialState);

  return (
    <div>
      <button onClick={() => dispatch({ type: "increment" })}>
        Increment
      </button>

      <button onClick={() => dispatch({ type: "decrement" })}>
        Decrement
      </button>

      <button onClick={() => dispatch({ type: "reset" })}>
        Reset
      </button>

      <br />

      {state.count}
    </div>
  );
};

export default UseReducer;










// import React, { useReducer } from "react";

// const UseReducer = () => {

//   const initialState = {
//     userName: "",
//     email: "",
//     password: "",
//   };

//   const reducerFn = (state, action) => {
//     switch (action.type) {
//       case "HANDLE_CHANGE":
//         return {
//           ...state,
//           [action.field]: action.value,
//         };

//       case "RESET":
//         return initialState;

//       default:
//         return state;
//     }
//   };

//   const [state, dispatch] = useReducer(reducerFn, initialState);

//   const handleChange = (e) => {
//     dispatch({
//       type: "HANDLE_CHANGE",
//       field: e.target.name,
//       value: e.target.value,
//     });
//   };

//   const handleReset = () => {
//     dispatch({ type: "RESET" });
//   };

//   const handleSubmit = () => {
//     console.log(state)
//   }

//   return (
//     <div>
//       <input
//         type="text"
//         name="userName"
//         placeholder="Enter username"
//         value={state.userName}
//         onChange={handleChange}
//       />

//       <br />

//       <input
//         type="text"
//         name="email"
//         placeholder="Enter email"
//         value={state.email}
//         onChange={handleChange}
//       />

//       <br />

//       <input
//         type="password"
//         name="password"
//         placeholder="Enter password"
//         value={state.password}
//         onChange={handleChange}
//       />

//       <br />

//       <button onClick={handleSubmit}>Submit</button>
//       <button onClick={handleReset}>Reset</button>

//     </div>
//   );
// };

// export default UseReducer;
