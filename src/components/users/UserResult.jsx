import { useEffect, useState } from 'react';

export const UserResult = () => {
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    const response = await fetch(
      `${process.env.REACT_APP_GITHUB_URL}/users`
      // , {
      //   headers: {
      //     Authorization: `token ${process.env.REACT_APP_GITHUB_TOKEN}`,
      //   },
      // }
    );

    const data = await response.json();

    console.log('DATA', data);
    setUsers(data);
    setLoading(false);
  };

  return (
    <div>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div className='grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2'>
          {users.map((user) => (
            <h3 key={user.id}>Hello, {user.login}</h3>
          ))}
        </div>
      )}
    </div>
  );
};
