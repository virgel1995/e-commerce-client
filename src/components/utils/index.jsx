/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Logo from "../../assets/images/logo192.png";
import { useLocation, Link, NavLink } from "react-router-dom";

export function Navbar({ user }) {
  let cyrrentUser;
  if (user) {
    cyrrentUser = user ?? "no user";
    var name = cyrrentUser.name ?? "no User";
  }

  /** Path's
   * @LandingPage =>   /
   *  @HomePage  =>    /Home
   *  @allProducts =>  /Home/AllProducts
   *  @Giveaways =>    /Home/AllProducts/Giveaways
   *  @showProduct =>  /Home/AllProducts/ProductsName
   *  @CartPage =>     /Cart
   *  @Login =>        /Auth/Login
   *  @Register =>     /Auth/SignUp
   */

  const location = useLocation();
  const path = location.pathname;
  console.log(location);

  

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

                    <li className="nav-item dropdown">
                      <a className="nav-link dropdown-toggle" href="#" id="navbarScrollingDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Catagories
                      </a>
                      <ul className="dropdown-menu" aria-labelledby="navbarScrollingDropdown">
                        <li>
                          <a className="dropdown-item" href="#">
                            Mobile Phone's
                          </a>
                        </li>

                        <li>
                          <a className="dropdown-item" href="#">
                            LapTop's
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
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

      <div className="collapse" id="navbarToggleExternalContent">
        <div className="bg-dark p-4">
          <div className="row w-95 mx-auto">
            <div className="col-6 text-white">
              <ul className="navbar-nav  me-auto mb-2 mb-lg-0">
                <li className="nav-item d-inline">
                  <NavLink to="/Auth/Login" className="nav-link" activeClassName="selected">
                    Login
                  </NavLink>
                </li>
                <li className="nav-item d-inline">
                  <NavLink to="/Auth/SignUp" className="nav-link">
                    Register
                  </NavLink>
                </li>
              </ul>
            </div>
            <div className="col-6">
              <form className="container-fluid">
                <div className="input-group">
                  <input type="text" className="form-control" placeholder="Search" aria-label="Search" aria-describedby="basic-addon1" />
                  <button className="input-group-text btn btn-outline-success" id="basic-addon1" type="submit">
                    Search
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {(() => {
        if (path !== "/") {
          return (
            <nav className="navbar navbar-dark bg-dark py-3">
              <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="w-75 bg-light">
                  <div className="nav2-icons py-1">
                    <div className="nav__icons justify-content-center ">

                      <Link className="icon__item border text-light">
                        <Link to="/" >test</Link>
                      </Link>

                      <Link className="icon__item border text-light">
                        <Link to="/" >test1</Link>
                      </Link>

                      <Link to="/Cart" className="icon__item border">
                        <img src={Logo} alt="" />
                        <span id="cart__total">0</span>
                      </Link>
                    </div>          

                  </div>
                </div>
              </div>
            </nav>
          );
        }
      })()}
    </div>
  );
}
