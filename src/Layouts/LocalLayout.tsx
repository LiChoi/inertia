import React, { useState } from 'react';

export default function LocalLayout({ children }:any) {
  const [count, setCount] = useState(0);

  return (
    <main style={{ color: 'cyan' }}>
      <header style={{ marginTop: '10px' }}>
        <span>Local Layout</span>
        <span style={{ margin: '10px' }}>{`Counter: ${count}`}</span>
        <button type="button" onClick={() => setCount(count + 1)} style={{ margin: '10px', backgroundColor: 'gray' }}>Increment Count</button>
      </header>
      <div>{children}</div>
    </main>
  );
}
