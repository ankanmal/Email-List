import { useSelector, useDispatch } from "react-redux";
import { fetchEmail, getAllEmail } from "./emailListSlice";
import { useState } from "react";
import ShimmerUi from "./ShimmerUi";
import "./emailBody.css";

const EmailBody = () => {
  const email = useSelector(getAllEmail);
  const dispatch = useDispatch();
  const emailStatus = useSelector((state) => state.emailList.status);
  //console.log(emailStatus);

  console.log("first render");

  useState(() => {
    if (emailStatus === "idle") {
      dispatch(fetchEmail());
    }
  }, [dispatch]);
  const display =
    email?.length === 0 ? (
      <ShimmerUi />
    ) : (
      email[0].list.map((e) => {
        return (
          <section>
            <table className="table">
              <tbody className="tbody">
                <td>From:{e.from.email}</td>
                <td>Subject:{e.subject}</td>
                <td>Text:{e.short_description}</td>
              </tbody>
            </table>
          </section>
        );
      })
    );

  return <>{display}</>;
};

export default EmailBody;
