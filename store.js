import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { VisibilityFilters } from "./actions";
import rootReducer from "./reducers";

const exampleInitialState = {
  todos: [],
  visibilityFilter: VisibilityFilters.SHOW_ALL
};

export function initializeStore(initialState = exampleInitialState) {
  return createStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware())
  );
}
