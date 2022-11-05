import Layout from "../layout";
import "../styles/globals.css";
import { NotificationProvider } from "web3uikit";
import { MoralisProvider } from "react-moralis";

function MyApp({ Component, pageProps }) {
  return (
    <MoralisProvider initializeOnMount={false}>
      <NotificationProvider>
        <div className="bg-black">
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </div>
      </NotificationProvider>
    </MoralisProvider>
  );
}

export default MyApp;
