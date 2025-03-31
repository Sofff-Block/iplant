import Image from "next/image";
import GlobalStyle from "../styles";


export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
     
    </>
  );
}
