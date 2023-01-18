import "./navbar.css";
import Read from "./features/Read";
import Unread from "./features/Unread";
const Navbar = () => {
  return (
    <nav className="nav">
      <h4 className="options">Filters:</h4>
      <Unread />
      <Read />

      <button className="options">Favorite</button>
    </nav>
  );
};
export default Navbar;
