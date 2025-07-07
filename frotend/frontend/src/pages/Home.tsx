import {useAuth0} from '@auth0/auth0-react';
export default function Home (){
    const { loginWithRedirect } = useAuth0();

    const handleLogin = () => {
  loginWithRedirect({
    authorizationParams: {
      prompt: 'login' // Forces credential entry every time
    }
  });
};
    return(
        <div>
            <h1>Welcome</h1>
            <button onClick={handleLogin} >Log In</button>
        </div>


    );
}