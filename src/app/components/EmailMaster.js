import { readEmail, localStorage } from "./emailListSlice";
import { useSelector, useDispatch } from "react-redux";

import { fetchBody } from "./emailListSlice";

const EmailMaster = ({ e }) => {
  const dispatch = useDispatch();
  const dateUnix = e?.date;

  const readEmailId = (data) => {
    dispatch(readEmail(data));
    dispatch(fetchBody(data));
    dispatch(localStorage(data));
  };
  const formatDate = (dateUnix) => {
    const timestamp = dateUnix;
    const date = new Date(timestamp);
    const formattedDate = date
      .toLocaleString("default", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      })
      .replace(",", "")
      .replace(/\//g, "/");
    return formattedDate;
  };

  return (
    <>
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
            <td key={dateUnix}>{formatDate(dateUnix)}</td>
            <td key={e?.id}>Favorite:{e?.favorite === true ? "Yes" : "No"} </td>
          </tbody>
        </table>
      </section>
    </>
  );
};
export default EmailMaster;
