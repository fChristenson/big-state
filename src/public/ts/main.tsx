import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";
import { Overview } from "./overview/Container";
import { Post } from "./post/Container";
import { reducer, IState } from "./overview/duck";
import { composeWithDevTools } from "redux-devtools-extension";

export interface IAppState {
  overview: IState;
}

const reducers = combineReducers({
  overview: reducer
});

const store = createStore(reducers, composeWithDevTools());

const App = () => (
  <BrowserRouter>
    <Provider store={store}>
      <Route exact path="/" render={() => <Overview />} />
      <Route exact path="/:id" render={() => <Post />} />
    </Provider>
  </BrowserRouter>
);

ReactDOM.render(<App />, document.getElementById("root"));
