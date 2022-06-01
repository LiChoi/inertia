import React from 'react';
import LocalLayout from '../Layouts/LocalLayout';

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

Home.layout = (page:any) => <LocalLayout title="Home">{page}</LocalLayout>;

export default Home;
