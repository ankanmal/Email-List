import EmailBody from "./app/components/EmailBody";
import Navbar from "./app/components/Navbar";
import Pagination from "./app/components/Pagination";
import { createBrowserRouter, Outlet } from "react-router-dom";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { changePage, fetchEmail } from "./app/components/emailListSlice";
import "./index.css";

const App = () => {
  const dispatch = useDispatch();
  const emailStatus = useSelector((state) => state.emailList.status);
  const currentPage = useSelector((state) => state.emailList.page);
  useEffect(() => {
    if (emailStatus === "idle") {
      dispatch(fetchEmail(currentPage));
    }
  }, [dispatch]);

  return (
    <>
      <Navbar />
      <Outlet />
      <Pagination />
    </>
  );
};
export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <EmailBody />,
      },
      {
        path: "/page=2",
        element: <EmailBody />,
      },
    ],
  },
]);

export default App;
