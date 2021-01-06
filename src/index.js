import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
import './index.css';
import App from './app/App';
import store from './app/store';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';
import Echo from './features/echo/Echo';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
        <Router>
          <Switch>
            <Route path="/home">
              <App />
            </Route>
            <Route path="/fetching/:fid">
              <Echo />
            </Route>
            </Switch>
          </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
