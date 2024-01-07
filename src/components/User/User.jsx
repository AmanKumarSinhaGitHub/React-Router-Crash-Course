import React from "react";
import { useParams } from "react-router-dom";

// User component displays information based on the dynamic username parameter from the URL.

function User() {
  // Extract the username parameter from the URL using useParams hook
  const { userName } = useParams();

  return (
    <>
      <div className="w-full px-10 py-20 mx-auto text-white bg-gray-600 max-w-7xl">
        <h1 className="py-10 text-2xl font-medium text-center sm:text-5xl">
          User Name : {userName}
        </h1>
      </div>
    </>
  );
}

export default User;
