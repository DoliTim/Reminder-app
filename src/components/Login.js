import React from 'react';
import { GoogleLogin } from '@react-oauth/google';

const Login = ({ onSignIn }) => {
  return (
    <div className="flex justify-center items-center h-screen">
      <GoogleLogin
        onSuccess={onSignIn}
        onError={() => console.log('Login Failed')}
      />
    </div>
  );
};

export default Login;