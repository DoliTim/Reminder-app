import { jwtDecode } from 'jwt-decode';

export const handleGoogleSignIn = (response) => {
  const userObject = jwtDecode(response.credential);
  return {
    name: userObject.name,
    email: userObject.email,
    picture: userObject.picture
  };
};
