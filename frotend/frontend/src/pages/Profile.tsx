import { useAuth0 } from '@auth0/auth0-react';
import ProtectedDataDisplay from '../components/ProtectedDataDisplay';

export default function Profile() {
  const { user,  } = useAuth0(); //removed logout function as it was not used

  return (
    <div>
      <h1>Welcome, {user?.name}</h1>
      <p>Email: {user?.email}</p>
      <h2>Your Private Content</h2>
      <ProtectedDataDisplay />
    </div>
  );
}