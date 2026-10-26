'use client';

import { useEffect, useState } from 'react';

export default function Home() {
  const [message, setMessage] = useState('Connecting to backend...');
  const [error, setError] = useState('');

  useEffect(() => {
    fetch('http://localhost:3001')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Backend request failed');
        }

        return response.text();
      })
      .then((data) => setMessage(data))
      .catch(() => {
        setError('Could not connect to the NestJS backend.');
      });
  }, []);

  return (
    <main style={{ padding: '40px', fontFamily: 'sans-serif' }}>
      <h1>Hospital Appointment Scheduling</h1>
      <p>Frontend: Next.js</p>
      <p>Backend response: {error || message}</p>
    </main>
  );
}
