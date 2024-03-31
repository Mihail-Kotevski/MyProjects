import Accesibility from "@/components/Accesibility";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { AccesibilityProvider } from "@/context/accesibilityContext";
import "@/styles/globals.scss";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {

  return (
    <AccesibilityProvider>
      <Header />
      <Component {...pageProps} />
      <Footer />
      <Accesibility />
    </AccesibilityProvider>
  );
}
