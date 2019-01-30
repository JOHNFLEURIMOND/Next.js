import Next from 'next'

const Page = ({ stars }) =>
  <div>
    Next stars: {stars}
  </div>;

Page.getInitialProps = async ({ req }) => {
  const res = await fetch('https://api.github.com/repos/JOHNFLEURIMOND/BoardsCommissionsForm');
  const json = await res.json();
  return { stars: json.stargazers_count };
};


export default Page;
