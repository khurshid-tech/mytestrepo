import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logoutUser } from "../slices/authSlice";

const NavBar = () => {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);

  return (
    <nav className="nav-bar">
      <Link to="/">
        <h2>MyShopify</h2>
      </Link>
      {auth._id ? (
        <div className="auth">
          <Link
          onClick={() => {
            dispatch(logoutUser(null));
          }} >
          Logout
        </Link>
        </div>
      ) : (
        <div className="auth">
          <Link to="/login" style={{marginRight: '10px'}}>Login</Link>
          <Link to="register">Register</Link>
        </div>
      )}
    </nav>
  );
};

export default NavBar;


