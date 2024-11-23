import Head from "next/head";
import Notification from "../components/notification/notifcation";
import Layout from "../components/layout/layout";
import "../styles/globals.css";
import { NotificationContextProvider } from "../store/notification-context";

function MyApp({ Component, pageProps }) {
  return (
    <NotificationContextProvider>
      <Layout>
        <Head>
          <title>Next Events</title>
          <meta name="description" content="NextJS Events" />
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <Component {...pageProps} />
        <Notification
          title="Test"
          message="this is test notification"
          status="success"
        />
      </Layout>
    </NotificationContextProvider>
  );
}

export default MyApp;
