import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Layout from "./Layout";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import User from "./components/User/User";
import GitHubUserData, { githubInfoLoader } from "./components/GitHubUserData/GitHubUserData";

// Create a router using createBrowserRouter function
// and define routes using createRoutesFromElements for a clear and concise structure.

// First way to set up routes using an array
// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Layout/>,
//     children: [
//       { path: "", element: <Home/> },
//       { path: "about", element: <About/> },
//       { path: "contact", element: <Contact/> }
//     ]
//   },
// ]);

// Second way using createRoutesFromElements for a more readable structure
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/React-Router-Crash-Course/" element={<Layout />}>
      <Route path="/React-Router-Crash-Course/" element={<Home />} />
      <Route path="/React-Router-Crash-Course/about" element={<About />} />
      <Route path="/React-Router-Crash-Course/contact" element={<Contact />} />
      <Route
        // GitHubUserData component is loaded asynchronously using the loader function
        loader={githubInfoLoader}
        path="/React-Router-Crash-Course/githubuserdata"
        element={<GitHubUserData />}
      />
      <Route path="/React-Router-Crash-Course/user/:userName" element={<User />} />
    </Route>
  )
);

// Render the app using ReactDOM.createRoot
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* Provide the router to the app using RouterProvider */}
    <RouterProvider router={router} />
  </React.StrictMode>
);