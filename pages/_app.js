import "../styles/globals.css";
import "../styles/theme_anime.css";
import Layout from "../components/Layout";
import TopHeader from "../components/TopHeader";
import { useRouter } from "next/router";
import store from '../store'
import { Provider } from 'react-redux'


function MyApp({ Component, pageProps }) {

 

  const router = useRouter();
  if (router.pathname === "/") {
    return (
      <>
      <Provider store={store}>
        <TopHeader />
        <Layout>
          <Component {...pageProps} />
        </Layout>
        </Provider>
      </>
    );
  }

  return (
    <Provider store={store}>
    <Layout>
      <Component {...pageProps} />
    </Layout>
    </Provider>
  );
}

export default MyApp;
