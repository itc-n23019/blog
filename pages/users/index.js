import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

const UsersPage = () => {
  const router = useRouter();
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchData();
  }, []);

  const handleUserClick = (userId, userName) => {
    router.push(`/users/[id]?name=${userName}`, `/users/${userId}?name=${userName}`);
  };

  return (
    <div>
      <h1>User List</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <div style={{ cursor: 'pointer' }} onClick={() => handleUserClick(user.id, user.name)}>
              {user.name}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UsersPage;

