import React from "react";
import {
  BrowserRouter as Router,
  // Router,
  Route,
  Switch,
  Redirect,
  Link,
  withRouter
} from "react-router-dom";
import Routers from "./router";
import Login from "./pages/login";

function App({}) {
  return (
    <div className="App">
      <Router >
        {/* </header> */}
        <Switch>
          <Route path="/login" key="123" component={Login} />
          {/* {Routers.map((item, index) => {
                      return (
                        <Route
                          key={index}
                          path={item.path}
                          exact
                          render={(props) => <item.component />}
                        />
                      );
          })} */}
          <Route
            path="/"
            render={() => {
              return (
                <div>
                  <Link to="/home">Home</Link>
                  <Link to="/about">about</Link>
                  <Switch>
                    {Routers.map((item, index) => {
                      return (
                        <Route
                          key={index}
                          path={item.path}
                          exact
                          render={(props) => <item.component />}
                        />
                      );
                    })}
                  </Switch>
                </div>
              );
            }}
          />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
