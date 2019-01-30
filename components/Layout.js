import Head from 'next/head';
import Navbar from '../components/Navbar';


const Layout = (props) => (
  <div>
  <Head>
     <title> Welcome To Fleurimond Crypto Watch</title>
     <link rel="stylesheet" href="https://bootswatch.com/4/superhero/bootstrap.min.css"/>

  </Head>
    <Navbar/>
    <div className="container">
         {props.children}
       </div>
  </div>
);

export default Layout;
