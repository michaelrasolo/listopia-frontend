import "../styles/globals.css";
import Head from "next/head";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import item from "../reducers/item";
const store = configureStore({
  reducer: { item },
});

function App({ Component, pageProps }) {

  return (
    
    <Provider store={store}>
      <Head>
        <title>Listopia - la wishlist pour les futurs darons</title>
        <link rel="apple-touch-icon" sizes="180x180" href="../public/apple-touch-icon.png"/>
<link rel="icon" type="image/png" sizes="32x32" href="../public/favicon-32x32.png"/>
<link rel="icon" type="image/png" sizes="16x16" href="../public/favicon-16x16.png"/>
      </Head>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </Provider>
  );
}

export default App;