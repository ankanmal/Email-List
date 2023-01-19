import { useDispatch, useSelector } from "react-redux";
import { toggleReadList } from "./readunreadEmailSlice";
import { readEmailStatus } from "./readunreadEmailSlice";

const Read = () => {
  const dispatch = useDispatch();
  const active = useSelector(readEmailStatus);
  const updateDom = () => {
    dispatch(toggleReadList());
  };

  return (
    <button
      className={active === true ? "options activeFeat" : "options"}
      onClick={updateDom}
    >
      Read
    </button>
  );
};
export default Read;
