import '../styles/globals.css'
import '../static-html/styles.css';
import Layout from './_layout';

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp
