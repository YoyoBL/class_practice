import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
   return (
      <nav className="navbar navbar-expand-sm navbar-light bg-light shadow-sm">
         <div className="container">
            <Link to="/" className="navbar-brand">
               Real<i className="bi bi-geo-fill"></i>App
            </Link>
            <button
               className="navbar-toggler"
               type="button"
               data-bs-toggle="collapse"
               data-bs-target="#main-navbar"
            >
               <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="main-navbar">
               <ul className="navbar-nav me-auto mb-2 mb-sm-0">
                  <li className="nav-item">
                     <NavLink to="/about" className="nav-link">
                        About
                     </NavLink>
                  </li>
                  <li className="nav-item">
                     <a className="nav-link" href="#">
                        My Cards
                     </a>
                  </li>
               </ul>

               <ul className="navbar-nav ms-auto mb-2 mb-sm-0">
                  <li className="nav-item">
                     <NavLink to={"/sign-in"} className="nav-link">
                        Sign in
                     </NavLink>
                  </li>
                  <li className="nav-item">
                     <NavLink to={"/sign-up"} className="nav-link">
                        Sign up
                     </NavLink>
                  </li>
               </ul>
            </div>
         </div>
      </nav>
   );
};

export default NavBar;
