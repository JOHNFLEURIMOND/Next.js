export default () => (
  <div>
    <p>This is the about page</p>
    <style jsx>{`
      p {
        color: #005026;
      }
      div {
        background: #7dd2d0;
      }
      @media (max-width: 600px) {
        div {
          background: blue;
        }
      }
    `}</style>
    <style global jsx>{`
      body {
        background: #3266af;
      }
    `}</style>
  </div>
);
