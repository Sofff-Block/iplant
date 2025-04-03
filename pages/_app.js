import Navigation from "@/components/Navigation";
import GlobalStyle from "../styles";

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
      <Navigation />
    </>
  );
}
