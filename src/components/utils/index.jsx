/* eslint-disable jsx-a11y/anchor-is-valid */
import { Link, NavLink } from "react-router-dom";
import Logo from "../../assets/images/logo192.png";

import { useLocation } from "react-router-dom";

export function Navbar({ user }) {
  const location = useLocation();
  console.log(location.pathname);

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <NavLink to="/" className="navbar-brand">
            Navbar
          </NavLink>
          <div className="nav__icons d-md-none mr-1">
            <div className="icon__item">
              <p>test</p>
            </div>
            <div className="icon__item">
              <img src={Logo} alt="" />
              <span id="cart__total">0</span>
            </div>
          </div>

          <div className="collapse navbar-collapse " id="navbarSupportedContent">
            {(() => {
              if (user) {
                return (
                  <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                      <NavLink to="/" className="nav-link" activeClassName="selected">
                        AllProducts
                      </NavLink>
                    </li>

                    <li className="nav-item">
                      <NavLink to="/Home" className="nav-link">
                        logout2
                      </NavLink>
                    </li>

                    <li class="nav-item dropdown">
                      <a class="nav-link dropdown-toggle" href="#" id="navbarScrollingDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Catagories
                      </a>
                      <ul class="dropdown-menu" aria-labelledby="navbarScrollingDropdown">
                        <li>
                          <a class="dropdown-item" href="#">
                            Mobile Phone's
                          </a>
                        </li>

                        <li>
                          <a class="dropdown-item" href="#">
                            LapTop's
                          </a>
                        </li>
                        <li>
                          <a class="dropdown-item" href="#">
                            Computers's
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                );
              } else {
                return (
                  <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                      <NavLink to="/Login" className="nav-link" activeClassName="selected">
                        Login
                      </NavLink>
                    </li>

                    <li className="nav-item">
                      <NavLink to="/Register" className="nav-link">
                        Register
                      </NavLink>
                    </li>
                  </ul>
                );
              }
            })()}
            <div className="row"></div>
          </div>
        </div>
      </nav>

      <div class="collapse" id="navbarToggleExternalContent">
        <div class="bg-dark p-4">
          <div className="row w-95 mx-auto">
            <div className="col-6">col 6 here</div>
            <div className="col-6">
              <form class="container-fluid">
                <div class="input-group">
                  <input type="text" class="form-control" placeholder="Search" aria-label="Search" aria-describedby="basic-addon1" />
                  <button className="input-group-text btn btn-outline-success" id="basic-addon1" type="submit">
                    Search
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <nav class="navbar navbar-dark bg-dark">
        <div class="container-fluid">
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
        </div>
      </nav>
    </div>
  );
}
