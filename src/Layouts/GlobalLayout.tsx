import React, { useState } from 'react';
import { Link } from '@inertiajs/inertia-react';

export default function GlobalLayout({ children, title }:any) {
  const [count, setCount] = useState(0);

  return (
    <main style={{ color: 'cyan' }}>
      <header style={{ marginTop: '50px' }}>
        <span>{`Welcome to ${title}`}</span>
        <Link style={{ margin: '10px' }} href="/home">Home</Link>
        <Link style={{ margin: '10px' }} href="/inertia">Inertia</Link>
        <Link style={{ margin: '10px' }} href="/test">Test</Link>
        <span style={{ margin: '10px' }}>{`Counter: ${count}`}</span>
        <button type="button" onClick={() => setCount(count + 1)} style={{ margin: '10px', backgroundColor: 'gray' }}>Increment Count</button>
      </header>
      <div>{children}</div>
    </main>
  );
}
