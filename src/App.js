import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";
import { Route } from "react-router-dom";

import Blog from "./containers/Blog/Blog";
import FullPost from "./containers/Blog/FullPost/FullPost";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Blog />
        </div>
        <Route
          path="/posts/:id"
          exact
          element={(props) => <FullPost {...props} isAuthed={true} />}
        />
      </BrowserRouter>
    );
  }
}

export default App;
