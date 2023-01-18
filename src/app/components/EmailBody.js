import { useSelector, useDispatch } from "react-redux";
import { fetchEmail, getAllEmail } from "./emailListSlice";
import { useState } from "react";
import ShimmerUi from "./ShimmerUi";
import "./emailBody.css";
import {
  readEmailStatus,
  unreadEmailStatus,
  favoriteEmailStatus,
} from "./features/readunreadEmailSlice";
import EmailMaster from "./EmailMaster";
import SlaveEmail from "./SlaveEmail";

const EmailBody = () => {
  const email = useSelector(getAllEmail);
  const readEmailstate = useSelector(readEmailStatus);
  const unreadEmailState = useSelector(unreadEmailStatus);
  const favoriteEmailState = useSelector(favoriteEmailStatus);
  const dispatch = useDispatch();
  const emailStatus = useSelector((state) => state.emailList.status);
  console.log(readEmailstate);
  console.log(unreadEmailState);

  console.log("first render");

  useState(() => {
    if (emailStatus === "idle") {
      dispatch(fetchEmail());
    }
  }, []);
  //console.log(email);

  const display =
    email?.length === 0 ? (
      <ShimmerUi />
    ) : readEmailstate === true ? (
      email.map((e) => {
        if (e.read === true) {
          return <EmailMaster e={e} />;
        }
      })
    ) : unreadEmailState === true ? (
      email.map((e) => {
        if (e.read !== true) {
          return <EmailMaster e={e} />;
        }
      })
    ) : favoriteEmailState === true ? (
      email.map((e) => {
        if (e.favorite === true) {
          return <EmailMaster e={e} />;
        }
      })
    ) : (
      email.map((e) => {
        return <EmailMaster e={e} />;
      })
    );
  console.log(display);
  return (
    <>
      {display}
      <SlaveEmail />
    </>
  );
};

export default EmailBody;
