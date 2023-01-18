import { useDispatch } from "react-redux";
import { toggleUnreadList } from "./readunreadEmailSlice";

const Unread = () => {
  const dispatch = useDispatch();

  const updatedomList = () => {
    dispatch(toggleUnreadList());
  };
  return (
    <button className="options" onClick={updatedomList}>
      Unread
    </button>
  );
};
export default Unread;
