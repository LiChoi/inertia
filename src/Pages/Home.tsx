import React from 'react';

function Home({ message = 'empty', message2 = 'empty' }: any) {
  return (
    <div>
      <h1 style={{ color: 'cyan' }}>Home</h1>
      <h2 style={{ color: 'cyan' }}>
        {message}
      </h2>
      <h2>{message2}</h2>
    </div>
  );
}

export default Home;
