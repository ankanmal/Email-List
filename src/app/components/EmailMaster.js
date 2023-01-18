import { readEmail } from "./emailListSlice";
import { useDispatch } from "react-redux";

const EmailMaster = ({ e }) => {
  const dispatch = useDispatch();

  const readEmailId = (data) => {
    dispatch(readEmail(data));
  };

  return (
    <section key={e?.id}>
      <table className="table">
        <tbody className="tbody" onClick={() => readEmailId(e?.id)} key={e?.id}>
          <td key={e?.from?.email}>From:{e?.from?.email}</td>
          <td key={e?.subject}>Subject:{e?.subject}</td>
          <td key={e?.short_description}>Text:{e?.short_description}</td>
        </tbody>
      </table>
    </section>
  );
};
export default EmailMaster;
