import Fetch from 'isomorphic-unfetch';
import Layout from '../components/Layout';
import Prices from '../components/Prices';

const Index = (props) => (
  <Layout>
    <div>
      <h1>Welcome to Fleurimond Crypto Watch</h1>
      <p>Check current Bitcoin rate</p>
      <Prices bpi={props.bpi}/>
    </div>
  </Layout>
);


Index.getInitialProps = async function() {
  const res = await Fetch('https://api.coindesk.com/v1/bpi/currentprice.json');
  const data = await res.json();

  return {
    bpi: data.bpi
  };
}

export default Index;
