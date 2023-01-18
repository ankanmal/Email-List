import { changePage } from "./emailListSlice";
import { useDispatch } from "react-redux";
import { fetchEmail } from "./emailListSlice";
const Pagination = () => {
  const dispatch = useDispatch();
  const changecurrentPage = (pageid) => {
    dispatch(changePage(pageid));
    dispatch(fetchEmail(pageid));
  };

  return (
    <>
      <br />
      <h4>Page</h4>
      <button onClick={() => changecurrentPage(1)}>1</button>
      <button onClick={() => changecurrentPage(2)}>2</button>
    </>
  );
};
export default Pagination;
