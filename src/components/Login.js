// src/components/Login.js
import React, { useEffect } from 'react';
import jwt_decode from 'jwt-decode';

const Login = ({ onLogin }) => {
  useEffect(() => {
    /* global google */
    const handleCredentialResponse = (response) => {
      const userObject = jwt_decode(response.credential);
      onLogin(userObject);  // Pass user info to parent component
    };

    google.accounts.id.initialize({
      client_id: 'YOUR_GOOGLE_CLIENT_ID',  // Replace with your actual Client ID
      callback: handleCredentialResponse,
    });

    google.accounts.id.renderButton(
      document.getElementById('google-signin'),
      { theme: 'outline', size: 'large' } // Customize button appearance
    );
  }, [onLogin]);

  return <div id="google-signin"></div>;
};

export default Login;
