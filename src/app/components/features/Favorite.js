import { useDispatch, useSelector } from "react-redux";
import { toggleFavoriteList } from "./readunreadEmailSlice";
import { favoriteEmailStatus } from "./readunreadEmailSlice";

const Favorite = () => {
  const dispatch = useDispatch();
  const active = useSelector(favoriteEmailStatus);

  const updateDom = () => {
    dispatch(toggleFavoriteList());
  };

  return (
    <button
      className={active === true ? "options activeFeat" : "options"}
      onClick={updateDom}
    >
      Favorites
    </button>
  );
};
export default Favorite;
