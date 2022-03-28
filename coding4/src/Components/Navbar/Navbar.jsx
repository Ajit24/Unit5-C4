import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div className="navbar">
      <Link className="navbarHome" to={"/"}>
        <h2>Home</h2>
      </Link>
      <Link className="navbarLoginSignUp" to={"/loginsignup"}>
            <h3>Login/Sign Up</h3>     
             </Link>
    </div>
  );
};