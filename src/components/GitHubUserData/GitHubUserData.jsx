import { useLoaderData } from "react-router-dom";

// GitHubUserData component displays information fetched from the GitHub API.
// Data is loaded using useLoaderData hook, providing a seamless way to load data during server-side rendering.

function GitHubUserData() {
  // Uncomment the following lines to use state and effect for fetching data directly in the component
  // const [data, setData] = useState([]);
  // useEffect(() => {
  //   fetch("https://api.github.com/users/amankumarsinhagithub")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       console.log(data);
  //       setData(data);
  //     });
  // }, []);


  // Fetch GitHub data using useLoaderData hook
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
        <p className="py-2 text-2xl font-medium text-center">Data is fetched from GitHub API</p>
      </div>
    </>
  );
}

export default GitHubUserData;

// githubInfoLoader is an asynchronous function that fetches data from the GitHub API.
// It includes error handling to manage network errors or API failures.

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
