import { getAllBody, currentBodyId } from "./emailListSlice";
import { useSelector, useDispatch } from "react-redux";
import { favoriteEmail } from "./emailListSlice";

const SlaveEmail = () => {
  const dispatch = useDispatch();
  const body = useSelector(getAllBody);
  const currentId = useSelector(currentBodyId);

  const addTofav = (data) => {
    dispatch(favoriteEmail(data));
  };

  return (
    <>
      <h2>id:{currentId}</h2>
      <button onClick={() => addTofav(currentId)}>Add to Favorites</button>
      <article>{body?.body}</article>
    </>
  );
};

export default SlaveEmail;
