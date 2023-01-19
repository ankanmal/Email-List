import { useDispatch, useSelector } from "react-redux";
import { toggleUnreadList } from "./readunreadEmailSlice";
import { unreadEmailStatus } from "./readunreadEmailSlice";

const Unread = () => {
  const dispatch = useDispatch();
  const active = useSelector(unreadEmailStatus);
  const updatedomList = () => {
    dispatch(toggleUnreadList());
  };
  return (
    <button
      className={active === true ? "options activeFeat" : "options"}
      onClick={updatedomList}
    >
      Unread
    </button>
  );
};
export default Unread;
