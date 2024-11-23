import { Fragment, useContext } from "react";
import Notification from "../components/notification/notifcation";
import MainHeader from "./main-header";
import { NotificationContext } from "../../store/notification-context";

function Layout(props) {
  const notifContext = useContext(NotificationContext);
  const activeNotification = notifContext.notification;

  return (
    <Fragment>
      <MainHeader />
      <main>{props.children}</main>
      {activeNotification && (
        <Notification
          title={activeNotification.title}
          message={activeNotification.message}
          status={activeNotification.status}
        />
      )}
    </Fragment>
  );
}

export default Layout;
