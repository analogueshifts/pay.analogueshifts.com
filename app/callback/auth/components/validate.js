import React, { useEffect, useState } from 'react';
import { useAuth } from '@/hooks/auth'; // Import useAuth hook

export default function Dashboard() {
  const { validateApp, getUser } = useAuth(); // Destructure methods from useAuth
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    validateApp(); // Validate app on mount
    getUser({ setLoading, layout: 'authenticated' }); // Fetch user data
  }, []);

  return (
    <div>
      {loading ? <p>Loading...</p> : <p>Welcome back!</p>}
    </div>
  );
}
