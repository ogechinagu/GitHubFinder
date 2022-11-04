import { useEffect, useState } from 'react';

export const UserResult = () => {
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetchUsers();
    setLoading(false);
  }, []);

  const fetchUsers = async () => {
    const response = await fetch(`${process.env.REACT_APP_GITHUB_URL}/users`, {
      headers: {
        Authorization: `token ${process.env.REACT_APP_GITHUB_TOKEN}`,
      },
    });

    const data = await response.json();

    setUsers(data);
  };

  return <div>{loading ? <div>Loading...</div> : <div>User Result</div>}</div>;
};
