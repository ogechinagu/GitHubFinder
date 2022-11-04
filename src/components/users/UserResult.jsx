import { useEffect, useContext } from 'react';
import { Spinner } from '../layouts/Spinner';
import { UserItem } from './UserItem';
import GithubContext from '../../context/github/GithubContext';

export const UserResult = () => {
  const { users, loading, fetchUsers } = useContext(GithubContext);

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div>
      {loading ? (
        <div>
          <Spinner />
        </div>
      ) : (
        <div className='grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2'>
          {users.map((user) => (
            <UserItem key={user.id} user={user} />
          ))}
        </div>
      )}
    </div>
  );
};
