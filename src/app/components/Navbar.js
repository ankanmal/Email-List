import "./navbar.css";
const Navbar = () => {
  return (
    <nav className="nav">
      <h4 className="options">Filters:</h4>
      <button className="options">Read</button>
      <button className="options">Unread</button>
      <button className="options">Favorite</button>
    </nav>
  );
};
export default Navbar;
