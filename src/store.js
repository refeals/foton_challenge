import { applyMiddleware, compose, createStore } from "redux"
import thunk from "redux-thunk"
import reducers from "./reducers"

const store = createStore(
  reducers,
  compose(
    applyMiddleware(thunk),
    process.env.NODE_ENV === "development" &&
      window.__REDUX_DEVTOOLS_EXTENSION__
      ? window.__REDUX_DEVTOOLS_EXTENSION__()
      : (f) => f,
  ),
)

export default store
