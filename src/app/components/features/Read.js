import { useDispatch } from "react-redux";
import { toggleReadList } from "./readEmailSlice";

const Read = () => {
  const dispatch = useDispatch();

  const updateDom = () => {
    dispatch(toggleReadList());
  };

  return (
    <button className="options" onClick={updateDom}>
      Read
    </button>
  );
};
export default Read;