```javascript
// pages/index.js

import {getServerSideProps} from 'next/server';

export default function Home({ data }) {
  return (
    <div>
      <h1>Hello, world!</h1>
      <p>Server-side data: {data}</p>
    </div>
  );
}

export async function getServerSideProps() {
  const res = await fetch('https://rickandmortyapi.com/api/character');
  const data = await res.json();

  return {
    props: {
      data: data.results[0].name // Example: using only the name
    },
  };
}
```