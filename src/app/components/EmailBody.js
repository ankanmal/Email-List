import { useSelector, useDispatch } from "react-redux";
import { fetchEmail, getAllEmail } from "./emailListSlice";
import { useState } from "react";
import ShimmerUi from "./ShimmerUi";
import "./emailBody.css";
import { readEmail } from "./emailListSlice";
import { readEmailStatus } from "./features/readEmailSlice";

const EmailBody = () => {
  const email = useSelector(getAllEmail);
  const readEmailstate = useSelector(readEmailStatus);
  const dispatch = useDispatch();
  const emailStatus = useSelector((state) => state.emailList.status);
  console.log(readEmailstate);

  console.log("first render");

  useState(() => {
    if (emailStatus === "idle") {
      dispatch(fetchEmail());
    }
  }, []);
  //console.log(email);

  const readEmailId = (data) => {
    dispatch(readEmail(data));
  };

  const display =
    email?.length === 0 ? (
      <ShimmerUi />
    ) : readEmailstate === true ? (
      email.map((e) => {
        if (e.read === true) {
          return (
            <section key={e?.id}>
              <table className="table">
                <tbody
                  className="tbody"
                  onClick={() => readEmailId(e?.id)}
                  key={e?.id}
                >
                  <td key={e?.from?.email}>From:{e?.from?.email}</td>
                  <td key={e?.subject}>Subject:{e?.subject}</td>
                  <td key={e?.short_description}>
                    Text:{e?.short_description}
                  </td>
                </tbody>
              </table>
            </section>
          );
        }
      })
    ) : (
      email.map((e) => {
        return (
          <section key={e?.id}>
            <table className="table">
              <tbody
                className="tbody"
                onClick={() => readEmailId(e?.id)}
                key={e?.id}
              >
                <td key={e?.from?.email}>From:{e?.from?.email}</td>
                <td key={e?.subject}>Subject:{e?.subject}</td>
                <td key={e?.short_description}>Text:{e?.short_description}</td>
              </tbody>
            </table>
          </section>
        );
      })
    );

  return <>{display}</>;
};

export default EmailBody;
