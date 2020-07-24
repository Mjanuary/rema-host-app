import React, { Fragment, useState } from "react";
import PropTypes from "prop-types";
import LOGO_IMG from "../../assets/rema_icon.png";
import { NavLink, Link } from "react-router-dom";
import { connect } from "react-redux";
import { LogoutTheUser } from "../../actions/auth";
import "./Navigation.css";
import Backdrop from "../BackDrop/BackDrop";
import { MdAccountCircle } from "react-icons/md";

const Navigation = (props) => {
  const { isAuthenticated, user, loading } = props.auth;
  const [accountPop, setAccountPop] = useState(false);

  if (loading === true) {
  }
  return (
    <div className=" bg-white shadow-sm Navigation">
      <nav className="navbar container navbar-expand-lg navbar-light">
        <NavLink className="navbar-brand" to="#">
          <img src={LOGO_IMG} className="Navigation-Logo" alt="REMA LOGO" />
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        {loading === true ? null : (
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              {isAuthenticated === true ? (
                <Fragment>
                  <li className="nav-item active">
                    <NavLink className="nav-link " to="/components">
                      Components
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/indicators">
                      Indicators
                    </NavLink>
                  </li>

                  <li className="nav-item">
                    <NavLink className="nav-link" to="catchments">
                      Catchments
                    </NavLink>
                  </li>

                  <li className="nav-item">
                    <NavLink className="nav-link" to="/sites">
                      Sites
                    </NavLink>
                  </li>
                </Fragment>
              ) : (
                <Fragment>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/about">
                      About
                    </NavLink>
                  </li>
                </Fragment>
              )}
            </ul>
            <div className="form-inline my-2 my-lg-0">
              {isAuthenticated !== true ? (
                <Link to="/login" className="btn btn-primary">
                  Login
                </Link>
              ) : (
                <Fragment>
                  <button
                    className="btn btn-secondary"
                    onClick={() => setAccountPop(true)}
                  >
                    U
                  </button>
                  {accountPop === true && (
                    <Fragment>
                      <Backdrop
                        close={() => setAccountPop(false)}
                        bg="transparent"
                      />
                      <div className="pop-userDetails bg-white rounded p-3 text-center shadow-lg">
                        <div className="mt-1">
                          <MdAccountCircle
                            style={{ fontSize: "6rem" }}
                            className="text-primary"
                          />
                          <label
                            className="text-secondary"
                            style={{ fontSize: ".8rem" }}
                          >
                            Username
                          </label>
                          <h5 className="m-0">{user.user_name}</h5>
                        </div>

                        <div className="mt-1 border-top">
                          <label
                            className="text-secondary"
                            style={{ fontSize: ".8rem" }}
                          >
                            user type
                          </label>
                          <h5 className="m-0">{user.level_name}</h5>
                        </div>
                        <hr className="m-2" />
                        <button
                          className="btn btn-danger btn-sm btn-block"
                          onClick={() => props.LogoutTheUser(props.history)}
                        >
                          Logout
                        </button>
                      </div>
                    </Fragment>
                  )}
                </Fragment>
              )}
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};

Navigation.propTypes = {
  auth: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  auth: state.auth,
});
export default connect(mapStateToProps, { LogoutTheUser })(Navigation);
