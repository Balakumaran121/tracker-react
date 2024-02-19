import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="nav">
      <h1 className="welcomeflex ">Todo Tracker</h1>
      <ul className="navleft">
        <li className="inline">
          <Link to="/login"> Login</Link> |{" "}
        </li>
        <li className="inline">
          <Link to="/Register"> Register</Link> |{" "}
        </li>
        <li className="inline">
          <Link to="/todolist"> TodoList</Link>{" "}
        </li>
      </ul>
    </nav>
  );
};

export default Header;
