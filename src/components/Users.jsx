import { useEffect, useState, useContext } from 'react';
import { fetchUsers } from '../../utils/api';
import { UserContext } from './UserContext';

const Users = () => {
    const [users, setUsers] = useState([]);
    const { selectedUser, signIn, signOut, isLoggedIn } = useContext(UserContext);

    useEffect(() => {
        fetchUsers()
        .then((userData) => {
            setUsers(userData)
        })
    }, []);

    const handleSignInOut = (username) => {
        if (isLoggedIn && selectedUser === username) {
            signOut();
        } else {
            signIn(username);
        }
    };

return (
        <>
          <h1 className="user-page-header">User Page</h1>
          <p className='sign-in-msg'> Signed in as: {isLoggedIn ? selectedUser : 'Select User'}</p>
          <div className="user-page">
            <div className="user-list">
              {users.map(user => (
                <div key={user.username} className="user-item">
                  <img src={user.avatar_url} alt={user.name} className="user-avatar" />
                  <p>username: {user.username}</p>
                  <p>{user.name}</p>
                  <button onClick={() => handleSignInOut(user.username)}>{isLoggedIn && selectedUser === user.username ? "Sign Out" : "Sign In"}</button>
                </div>
              ))}
            </div>
          </div>
        </>
      );
};
    
export default Users;