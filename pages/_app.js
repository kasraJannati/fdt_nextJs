import 'bootstrap/dist/css/bootstrap.css'
import '../styles/main.scss'
import Head from "next/head";

export default function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page) /* define multi layout */
  // return getLayout(<Component {...pageProps} />)
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      {getLayout(<Component {...pageProps} />)}
      <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.6.0/dist/umd/popper.min.js"></script>
      <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/js/bootstrap.min.js"></script>
      <script type="text/javascript" src="https://player.vimeo.com/api/player.js"></script>
    </>
  );

}