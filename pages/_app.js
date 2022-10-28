import "../styles/globals.css";
import "../styles/theme_anime.css";
import Layout from "../components/Layout";
import TopHeader from "../components/TopHeader";
import { useRouter } from "next/router";
import store from '../store'
import { Provider } from 'react-redux'
import Head from "next/head";


function MyApp({ Component, pageProps }) {

 

  const router = useRouter();
  if (router.pathname === "/") {
    return (
      <>
      
      <Provider store={store}>
        <TopHeader />
        <Layout>
        <Head>
       <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        </Head>
          <Component {...pageProps} />
        </Layout>
        </Provider>
      </>
    );
  }

  return (
    <Provider store={store}>
    <Layout>
    <Head>
       <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    </Head>
      <Component {...pageProps} />
    </Layout>
    </Provider>
  );
}

export default MyApp;
