import "../styles/bootstrap.min.css";
import "../styles/style.css";
import "../styles/icons/icons.css";
import type { AppProps } from "next/app";
import Header from "../components/elements/Header";
import Footer from "../components/elements/Footer";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      return <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
