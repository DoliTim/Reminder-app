import jwt_decode from 'jwt-decode';

export const handleGoogleSignIn = (response) => {
  const userObject = jwt_decode(response.credential);
  return {
    name: userObject.name,
    email: userObject.email,
    picture: userObject.picture
  };
};
