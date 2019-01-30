import Link from 'next/link';

export default () =>
<div>
   <Link href="/about">
    <button>Go to About Page</button>
   </Link>
   <Link href="/headerPractice">
    <button>BoardsCommissionsForm</button>
   </Link>
  <p>Hello Next.js</p>
    <style jsx>{`
      p {
        color: blue;
      }
      div {
        background: red;
      }
      @media (max-width: 600px) {
        div {
          background: blue;
        }
      }
    `}</style>
    <style global jsx>{`
      body {
        background: black;
      }
    `}</style>
  </div>;
