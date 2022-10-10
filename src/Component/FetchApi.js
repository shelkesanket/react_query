import React, { useEffect, useState } from "react";

const FetchApi = () => {
  const [users, setUsers] = useState([]);

  const fetchData = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        console.log("response-", response);
        return response.json();
      })
      .then((data) => {
        setUsers(data);
        console.log("data-", data);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      {users.length > 0 && (
        <ul>
          {users.map((user) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default FetchApi;
