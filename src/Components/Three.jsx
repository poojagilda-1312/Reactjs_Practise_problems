//create a component that fetches data from api and displays it
import React, { useEffect, useState } from "react";
export const Three = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts"
        );
        const result = await response.json();

        setData(result);
      } catch (err) {
        console.log(err.message);
      }
    };
    fetchData();
  }, []); // Empty dependency array means this effect runs once after the initial render
  return (
    <div>
      {data ? (
        data.map((post) => {
          return (
            <div key={post.id}>
              <h1>{post.title}</h1>
              <p>{post.body}</p>
            </div>
          );
        })
      ) : (
        <p>Loading.....</p>
      )}
    </div>
  );
};
