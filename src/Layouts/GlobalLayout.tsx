import React from 'react';
import { Link } from '@inertiajs/inertia-react';

export default function GlobalLayout({ children, title }:any) {
  return (
    <main>
      <header style={{ marginTop: '50px' }}>
        <span>{`Welcome to ${title}`}</span>
        <Link style={{ margin: '10px' }} href="/home">Home</Link>
        <Link style={{ margin: '10px' }} href="/inertia">Inertia</Link>
        <Link style={{ margin: '10px' }} href="/test">Test</Link>
      </header>
      <div>{children}</div>
    </main>
  );
}
