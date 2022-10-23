import React, { Component } from "react";
// import axios from "axios";
import { Routes, Route, NavLink } from "react-router-dom";

import "./Blog.css";
import Posts from "./Posts/Posts";
import NewPost from "./NewPost/NewPost";
import FullPost from "./FullPost/FullPost";

class Blog extends Component {
  render() {
    return (
      <div className="Blog">
        <header>
          <nav>
            <ul>
              <li>
                <NavLink
                  to="/"
                  end
                  // className={(navData) =>
                  //   navData.isActive ? "active-style" : "none"
                  // }
                  // activestyle={{
                  //   color: "#fa923f",
                  //   textDecoration: "underline",
                  // }}
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={{
                    pathname: "/new-post",
                    hash: "#submit",
                    search: "?quick-submit =true",
                  }}
                >
                  New Post
                </NavLink>
              </li>
            </ul>
          </nav>
        </header>
        <Routes>
          <Route path="/" exact element={<Posts />} />
          <Route path="/new-post" element={<NewPost />} />
          {/* <Route path="/posts/:id" exact element={<FullPost />} /> */}
          <Route
            path="/posts/:id"
            exact
            element={(props) => <FullPost {...props} />}
          />
        </Routes>
      </div>
    );
  }
}

export default Blog;
