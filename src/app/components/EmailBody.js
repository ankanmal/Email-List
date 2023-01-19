import { useSelector } from "react-redux";
import { getAllEmail, currentBodyId } from "./emailListSlice";
import { allReadFavList } from "./emailListSlice";

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
  const readFaveMail = useSelector(allReadFavList);
  const readEmailstate = useSelector(readEmailStatus);
  const unreadEmailState = useSelector(unreadEmailStatus);
  const favoriteEmailState = useSelector(favoriteEmailStatus);
  const bodyId = useSelector(currentBodyId);
  console.log(readFaveMail);

  const display =
    email?.length === 0 ? (
      <ShimmerUi />
    ) : readEmailstate === true ? (
      email.map((e) => {
        if (e?.read === true) {
          console.log("render");
          return <EmailMaster e={e} />;
        }
      })
    ) : unreadEmailState === true ? (
      email.map((e) => {
        if (e?.read !== true) {
          return <EmailMaster e={e} />;
        }
      })
    ) : favoriteEmailState === true ? (
      email.map((e) => {
        if (e?.favorite === true) {
          return <EmailMaster e={e} />;
        }
      })
    ) : (
      email.map((e) => {
        return <EmailMaster e={e} />;
      })
    );

  return (
    <>
      <div className="mainBody">
        <div className={bodyId !== null ? " changeMasterEmail" : "masterEmail"}>
          {display}
        </div>
        {bodyId !== null ? <SlaveEmail /> : null}
      </div>
    </>
  );
};

export default EmailBody;
