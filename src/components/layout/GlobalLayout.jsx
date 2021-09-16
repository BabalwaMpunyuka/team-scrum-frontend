import { useContext, useEffect } from "react";
import AppContext from "../../store/appContext";

import Layout from "./Layout";
import LoggedInLayout from "./LoggedInLayout";
import PopupList from "../message/PopupList";
export default function GlobalLayout({ children }) {
  const { messages, isAuth, login } = useContext(AppContext);
  const isLoggedIn = localStorage.getItem("isAuth");
  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    if (!isAuth && isLoggedIn) {
      login(user);
    }
    // eslint-disable-next-line
  }, []);
  
  return (
    <div>
      <PopupList popups={messages} />
      {!isAuth ? (
        <Layout>{children}</Layout>
     ) : (
        <LoggedInLayout>{children}</LoggedInLayout>
      )}
    </div>
  );
}
