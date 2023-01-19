import { getAllBody, currentBodyId, getAllEmail } from "./emailListSlice";
import { useSelector, useDispatch } from "react-redux";
import { favoriteEmail, removeFavoriteEmail } from "./emailListSlice";
import "./emailBody.css";
import "./slaveEmail.css";
import ShimmerUi from "./ShimmerUi";
import { formatDate } from "../config";

const SlaveEmail = () => {
  const dispatch = useDispatch();
  const body = useSelector(getAllBody);
  const currentId = useSelector(currentBodyId);
  const mail = useSelector(getAllEmail);
  const isLoading = useSelector((state) => state.emailList.bodystatus);
  //const { content } = body;
  const mainBody = mail.find((e) => {
    if (e.id === currentId) {
      return e;
    }
  });
  const { subject, date, from, favorite } = mainBody;

  const addTofav = (data) => {
    dispatch(favoriteEmail(data));
  };
  const removeFromfav = (data) => {
    dispatch(removeFavoriteEmail(data));
  };

  return (
    <>
      {body === null ? (
        <ShimmerUi />
      ) : isLoading === "loading" ? (
        <ShimmerUi />
      ) : (
        <section className="slaveEmail">
          <header className="bodyHeader">
            <h2 className="initialSymbol">{from.name[0].toUpperCase()}</h2>
            <h2 className="subject">{subject}</h2>

            {favorite !== true ? (
              <button onClick={() => addTofav(currentId)} className="favBtn">
                Add to Favorites
              </button>
            ) : (
              <button
                onClick={() => removeFromfav(currentId)}
                className="favBtn rmv"
              >
                Remove From Favorites
              </button>
            )}
          </header>

          <h4 className="bodyStyle">{formatDate(date)}</h4>

          <article
            dangerouslySetInnerHTML={{ __html: body.body }}
            className="bodyStyle"
          ></article>
        </section>
      )}
    </>
  );
};

export default SlaveEmail;
