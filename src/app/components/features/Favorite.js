import { useDispatch } from "react-redux";
import { toggleFavoriteList } from "./readunreadEmailSlice";

const Favorite = () => {
  const dispatch = useDispatch();

  const updateDom = () => {
    dispatch(toggleFavoriteList());
  };

  return (
    <button className="options" onClick={updateDom}>
      Favorites
    </button>
  );
};
export default Favorite;
