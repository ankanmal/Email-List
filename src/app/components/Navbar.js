import "./navbar.css";
import Read from "./features/Read";
import Unread from "./features/Unread";
import Favorite from "./features/Favorite";
const Navbar = () => {
  return (
    <nav className="nav">
      <h4 className="options">Filter By:</h4>
      <Unread />
      <Read />
      <Favorite />
    </nav>
  );
};
export default Navbar;
