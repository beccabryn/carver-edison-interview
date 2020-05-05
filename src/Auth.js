import React from 'react';
import GoogleLogin from 'react-google-login';


// const responseGoogle = (response) => {
//   console.log(response);
// }

function Auth({handleLogIn}){
  return (
    <GoogleLogin
    clientId="717998608012-1pmja8c3bvi4dji4o84i3q2sg0fi7blv.apps.googleusercontent.com"
    buttonText="Login with Google"
    className="auth-btn"
    onSuccess={() => handleLogIn(true)}
    onFailure={() => handleLogIn(false)}
    cookiePolicy={'single_host_origin'}
  />
  )

};

export default Auth;
