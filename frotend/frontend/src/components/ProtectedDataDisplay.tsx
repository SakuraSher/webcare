import { useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const ProtectedDataDisplay = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const { getAccessTokenSilently } = useAuth0();

  const fetchData = async () => {
    try {
      setLoading(true);
      setError('');
      
      const token = await getAccessTokenSilently();
      const response = await fetch('http://localhost:3001/api/user-data', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      setData(await response.json());
    } catch (err) {
      // Type-safe error handling
      if (err instanceof Error) {
        setError(err.message);
        console.error('API error:', err);
      } else {
        setError('An unexpected error occurred');
        console.error('Unexpected error:', err);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="data-container">
      <button 
        onClick={fetchData} 
        disabled={loading}
      >
        {loading ? 'Loading...' : 'Get My Protected Data'}
      </button>
      
      {error && <p className="error">{error}</p>}
      
      {data && (
        <div className="data-results">
          <h3>Your Protected Data:</h3>
          <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default ProtectedDataDisplay;