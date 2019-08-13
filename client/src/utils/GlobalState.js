import React, { createContext, useReducer, useContext } from "react";
import {
  SET_CURRENT_GOAL,
  REMOVE_GOAL,
  UPDATE_GOALS,
  ADD_GOAL,
  ADD_FAVORITE,
  UPDATE_FAVORITES,
  REMOVE_FAVORITE,
  LOADING
} from "./actions";

const StoreContext = createContext();
const { Provider } = StoreContext;

const reducer = (state, action) => {
  switch (action.type) {
  case SET_CURRENT_GOAL:
    return {
      ...state,
      currentGoal: action.goal,
      loading: false
    };

  case UPDATE_GOALS:
    return {
      ...state,
      goals: [...action.goals],
      loading: false
    };

  case ADD_GOAL:
    return {
      ...state,
      goals: [action.goal, ...state.goals],
      loading: false
    };

  case REMOVE_GOAL:
    return {
      ...state,
      goals: state.goals.filter((goal) => {
        return goal._id !== action._id; 
      })
    };

  case ADD_FAVORITE:
    return {
      ...state,
      favorites: [action.goal, ...state.favorites],
      loading: false
    };

  case UPDATE_FAVORITES:
    return {
      ...state,
      favorites: [...action.favorites],
      loading: false
    };

  case REMOVE_FAVORITE:
    return {
      ...state,
      favorites: state.favorites.filter((goal) => {
        return goal._id !== action._id; 
      })
    };

  case LOADING:
    return {
      ...state,
      loading: true
    };

  default:
    return state;
  }
};

const StoreProvider = ({ value = [], ...props }) => {
  const [state, dispatch] = useReducer(reducer, {
    goals: [],
    currentGoal: {
      _id: 0,
      title: "",
      body: "",
      author: ""
    },
    favorites: [],
    loading: false
  });

  return <Provider value={[state, dispatch]} {...props} />;
};

const useStoreContext = () => {
  return useContext(StoreContext);
};

export { StoreProvider, useStoreContext };
