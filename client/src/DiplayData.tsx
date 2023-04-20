import React from "react";
import { useQuery, gql } from "@apollo/client";

// Types
type User = {
  id: number;
  name: String;
  username: String;
  nationality: String;
  friends: Array<User>;
};

const QUERY_ALL_USER = gql`
  query user {
    users {
      id
      name
      username
      nationality
    }
  }
`;

function DiplayData() {
  const { data, loading, error } = useQuery(QUERY_ALL_USER);
  if (loading) {
    return <h2>Loading</h2>;
  } else if (error) {
    return <h2>error</h2>;
  }
  console.log(data);
  return (
    <div className="UsersListBox">
      <h2>List of User</h2>
      {data.users &&
        data.users.map((item: User) => {
          return (
            <h5>
              {item.id}. {item.name} ({item.username}) from {item.nationality}{" "}
            </h5>
          );
        })}
    </div>
  );
}

export default DiplayData;
