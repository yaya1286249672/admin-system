import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
  Link,
} from "react-router-dom";
import Routers from "./router";
import Login from "./pages/login";

function App({}) {
  return (
    <div className="App">
      <Router>
        {/* </header> */}
        <Switch>
          <Route path="/login" component={Login} />
          <Route
            path="/"
            render={() => {
              return (
                <div>
                  <Link to="/home">Home</Link>
                  <Link to="/about">about</Link>
                  {/* <Header /> */}
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
