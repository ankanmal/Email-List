import { readEmail, localStorage } from "./emailListSlice";
import { useSelector, useDispatch } from "react-redux";
import "./emailBody.css";
import { formatDate } from "../config";

import { fetchBody, updateBodyId } from "./emailListSlice";
import { useEffect } from "react";

const EmailMaster = ({ e }) => {
  const dispatch = useDispatch();
  const dateUnix = e?.date;
  const currentBodyId = useSelector((state) => state.emailList.bodyId);
  const formatteddate = formatDate(dateUnix);

  const readEmailId = (data) => {
    if (currentBodyId !== data) {
      dispatch(readEmail(data));
      dispatch(fetchBody(data));
      dispatch(updateBodyId(data));
    } else {
      dispatch(updateBodyId(null));
    }
  };

  return (
    <>
      <section key={e?.id} className="section">
        <table className="table">
          <tbody
            className="tbody"
            onClick={() => readEmailId(e?.id)}
            key={e?.id}
          >
            <div>
              <h2 className="initialSymbol bodySymbol">
                {e?.from.email[0].toUpperCase()}
              </h2>
            </div>
            <div className="emailmasterBody">
              <td key={e?.from?.email} className="from">
                From:<span>{e?.from?.email}</span>
              </td>
              <td key={e?.subject} className="subjectemail">
                Subject:<span>{e?.subject}</span>
              </td>
              <td key={e?.short_description} className="text">
                {e?.short_description}
              </td>
              <td key={dateUnix} className="dateAndFav">
                <span>{formatteddate}</span>
                <span style={{ color: "#e54065" }}>
                  {e?.favorite === true ? "Favorite" : ""}
                </span>
              </td>
            </div>
          </tbody>
        </table>
      </section>
    </>
  );
};
export default EmailMaster;
