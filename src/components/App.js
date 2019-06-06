import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import "../App.css";
import Header from "./Header";
import ReposOptions from "./ReposOptions";
import ReposList from "./ReposList";
import RepoDetails from "./RepoDetails";

class App extends React.Component {
  render() {
    return (
      <div className="content">
        {/* COMMENT IN JSX */}
        <BrowserRouter>
          <Header />
          <Route path="/" exact component={ReposOptions} />
          <div className="reposList">
            <Route path="/:name" component={ReposList} />
          </div>
          <div className="repoDetails">
            <Route path="/:name" component={RepoDetails} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
