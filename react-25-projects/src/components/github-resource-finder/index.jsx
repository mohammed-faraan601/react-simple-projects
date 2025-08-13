import React, { useEffect, useState } from 'react'
import User from './user';
import './user.css'

function GitHubProfileFinder() {
    const [username, setUsername] = useState('MohammedFaraan');
    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(true);

    async function fetchUserData() {
        setLoading(true);

        const response = await fetch(`https://api.github.com/users/${username}`);
        const data = await response.json();

        if (data) {
            setUserData(data);
            setLoading(false);
            setUsername('');
        }
        
    }

    console.log(userData);

    useEffect(() => {
        fetchUserData();
    }, [])

    function handleSubmit() {
        fetchUserData();
    }

    if (loading) {
        return (
            <div>Loading data! Please wait.</div>
        )
    }
  return (
    <div className='github-profile-container'>
      <input 
      name='search-by-name'
      type="text"
      value={username}
       placeholder='Enter username'
      onChange={(e) => setUsername(e.target.value)}
      />
      <button onClick={handleSubmit}>Search</button>
      {
        userData !== null ? 
        <User user={userData}/> : null
      }
    </div>
  )
}

export default GitHubProfileFinder
