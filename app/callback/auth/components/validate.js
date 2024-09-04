import React, { useEffect, useState } from 'react';
import { useAuth } from '@/hooks/auth';

export default function Home() {
  const { validateApp, getUser } = useAuth(); 
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    
    validateApp();

    // Fetch user details
    getUser({ setLoading, layout: 'authenticated' });
  }, []);

  return (
    <div>
      {loading ? <p>Loading...</p> : <p>Welcome back!</p>}
      
    </div>
  );
}
