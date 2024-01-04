import React, { useState, useEffect } from 'react';
import './App.css';

const API_URL = 'https://api.github.com/users/dkoncius';
const BACKGROUND_IMAGE_URL = 'https://images.unsplash.com/photo-1532275948649-7d97f309ef16?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80';

const App = () => {
  const [userData, setUserData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(API_URL);
        const data = await response.json();
        setUserData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div
      className="app-container"
      style={{
        backgroundImage: `url(${BACKGROUND_IMAGE_URL})`,
        backgroundSize: 'cover',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      {isLoading ? (
        <div className="loading">Loading...</div>
      ) : (
        <div className="info-container">
          <img src={userData.avatar_url} alt="User Avatar" />
          <h2>{userData.name}</h2>
          <p>{userData.bio}</p>

          <div className="icons">
      <i class="fa-brands fa-square-facebook"></i>
      <i class="fa-brands fa-square-twitter"></i>
      <i class="fa-brands fa-google-plus-g"></i>
    </div>
        </div>
        
      )}
    </div>
  );
};

export default App;


