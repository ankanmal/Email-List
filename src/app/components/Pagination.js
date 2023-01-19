import { changePage } from "./emailListSlice";
import { useDispatch, useSelector } from "react-redux";
import { fetchEmail } from "./emailListSlice";
import { Link } from "react-router-dom";
import "./pageBtn.css";
import { useState } from "react";
import { updateBodyId } from "./emailListSlice";

const Pagination = () => {
  const [ccPage, setccPage] = useState(1);
  const dispatch = useDispatch();
  const changecurrentPage = (pageid) => {
    dispatch(changePage(pageid));
    dispatch(fetchEmail(pageid));
    dispatch(updateBodyId(null));
    setccPage(pageid);
  };

  return (
    <>
      <div className="pagination">
        <Link to={"/"}>
          <button
            onClick={() => changecurrentPage(1)}
            className={`pagination-button ${ccPage === 1 ? "active" : ""}`}
          >
            1
          </button>
        </Link>
        <Link to={"/page=2"}>
          <button
            onClick={() => changecurrentPage(2)}
            className={`pagination-button ${ccPage === 2 ? "active" : ""}`}
          >
            2
          </button>
        </Link>
      </div>
    </>
  );
};
export default Pagination;
