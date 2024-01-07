# React Router Crash Course

Welcome to the [React Router](https://reactrouter.com/en/main) Crash Course! This beginner-friendly guide will walk you through the process of setting up and using React Router in your Vite.js application. React Router is a powerful library designed to handle navigation in React applications.

#### [Live - Click Here to Open](https://amankumarsinhagithub.github.io/React-Router-Crash-Course/) 

## Table of Contents

1. [Installation](#installation)
2. [Basic Usage](#basic-usage)
   - [Link Component](#link-component)
   - [NavLink Component](#navlink-component)
3. [Setting Up Routes](#setting-up-routes)
   - [Main.jsx Configuration](#mainjsx-configuration)
   - [Alternative Route Setup](#alternative-route-setup)
4. [Components and Layout](#components-and-layout)
   - [Layout.jsx](#layoutjsx)
   - [Header.jsx](#headerjsx)
   - [Footer.jsx](#footerjsx)
5. [Custom URLs with Parameters](#custom-urls-with-parameters)
   - [User.jsx](#userjsx)
6. [Fetching Data with React Router](#fetching-data-with-react-router)
   - [GitHubUserData.jsx](#githubuserdatajsx)
7. [Conclusion](#conclusion)

## Installation

To begin, install the `react-router-dom` package using the following npm command:

```bash
npm install react-router-dom
```

## Basic Usage

### Link Component

The `Link` component serves as a navigation tool, replacing the traditional `<a>` tag. Usage example:

```jsx
import { Link } from "react-router-dom";

<Link to="/">Home</Link>;
```

### NavLink Component

The `NavLink` component extends the `Link` functionality, offering additional features such as handling the active state. Example usage:

```jsx
import { NavLink } from "react-router-dom";

<NavLink
  to="/"
  className={({ isActive }) =>
    `${isActive ? "text-orange-700" : "text-gray-700"}`
  }
>
  Home
</NavLink>;
```

## Setting Up Routes

### Main.jsx Configuration

Routes are configured in the `main.jsx` file. Below is an example using `createBrowserRouter`:

```jsx
import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import User from "./components/User/User";
import GitHubUserData, {
  githubInfoLoader,
} from "./components/GitHubUserData/GitHubUserData";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route
        path="/githubuserdata"
        element={<GitHubUserData />}
        loader={githubInfoLoader}
      />
      <Route path="/user/:userName" element={<User />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
```

### Alternative Route Setup

An alternative approach for setting up routes is using `createRoutesFromElements`. Example:

```jsx
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
    </Route>
  )
);
```

## Components and Layout

Organize your app with separate components for different sections. Utilize a consistent layout structure for the header and footer, promoting a cohesive user experience.

### Layout.jsx

Example layout structure:

```jsx
import React from "react";
import Header from "./components/Header/Header";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer/Footer";

function Layout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default Layout;
```

### Header.jsx

Navigation bar component for easy navigation:

```jsx
import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header className="sticky top-0 shadow">
      <nav className="bg-white border-gray-200 px-4 py-2.5">
        <ul className="flex m-4 font-medium">
          <li className="p-1 px-8">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `block py-2 pr-4 pl-3 duration-200 ${
                  isActive ? "text-orange-700" : "text-gray-700"
                } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
              }
            >
              Home
            </NavLink>
          </li>
          {/* Add more NavLink components for other sections */}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
```

### Footer.jsx

Footer component with navigation links:

```jsx
import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-white border-y w-full max-w-screen-xl p-4 py-6 mx-auto lg:py-

8">
      <div className="py-4">
        <ul className="font-medium text-gray-500 text-center">
          <li className="inline px-1">
            <Link to="/" className="hover:underline">
              Home Page
            </Link>
          </li>
          <span>•</span>
          <li className="inline px-1">
            <a
              href="https://amankumarsinhagithub.github.io/Portfolio/"
              className="hover:underline"
              target="_blank"
              rel="noreferrer"
            >
              Portfolio
            </a>
          </li>
          {/* Add more footer links as needed */}
        </ul>
      </div>

      <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
      <div className="flex justify-center text-center">
        <p className="mx-2">Copyright © 2024 •</p>
        <a
          href="https://amankumarsinhagithub.github.io/Portfolio/"
          className="hover:underline"
        >
          Aman Kumar Sinha
        </a>
        <p className="mx-2">• All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
```

## Custom URLs with Parameters

Creating dynamic URLs with parameters is a powerful feature of React Router. Here's an example using the `User.jsx` component:

### User.jsx

```jsx
import React from "react";
import { useParams } from "react-router-dom";

function User() {
  const { userName } = useParams();

  return (
    <>
      <div className="flex justify-center px-10 py-20">
        <h1 className="text-4xl font-medium">User Name: {userName}</h1>
      </div>
    </>
  );
}

export default User;
```

## Fetching Data with React Router

Fetching data asynchronously is a common requirement in modern web applications. React Router provides tools to achieve this. Here's an example using `GitHubUserData.jsx`:

### GitHubUserData.jsx

```jsx
import React from "react";
import { useLoaderData } from "react-router-dom";

function GitHubUserData() {
  const data = useLoaderData();

  return (
    <>
      <div className="w-full px-10 py-20 mx-auto text-white bg-gray-600 max-w-7xl">
        <p className="py-2 text-3xl font-medium text-center ">
          Name : {data.name}
        </p>

        <p className="py-2 text-3xl font-medium text-center">
          Github Followers : {data.followers}
        </p>
        <p className="py-2 text-2xl font-medium text-center">
          Data is fetched from GitHub API
        </p>
      </div>
    </>
  );
}

export default GitHubUserData;

export const githubInfoLoader = async () => {
  try {
    const response = await fetch(
      "https://api.github.com/users/amankumarsinhagithub"
    );
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json();
  } catch (error) {
    console.error("Error fetching GitHub data:", error);
    throw error; // Rethrow the error to indicate that the data couldn't be loaded
  }
};
```

## Conclusion

Congratulations! You've completed the React Router Crash Course. Feel free to explore and modify this example project to create your own dynamic and navigable React applications. Happy coding!
