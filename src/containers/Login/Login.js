import React, { useState, useEffect } from "react";
import axios from "axios";
import { API_URL, CONFIG } from "../../utils/api";
import { connect } from "react-redux";
import { LoginSuccess } from "../../actions/auth";
import { TOKEN_NAME } from "../../utils/api";

const Login = (props) => {
  const [loading, setLoading] = useState(false);
  const [error, seteError] = useState({ element: "", msg: "" });
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // didmount
  useEffect(() => {
    if (props.isAuthenticated === true) {
      props.history.push("/components");
    }
  });

  const LoginUser = async (e) => {
    e.preventDefault();
    try {
      // validation
      if (username.length <= 4) {
        return seteError({
          element: "username",
          msg: "The username must not be less than 5 character",
        });
      }

      // password
      if (password.length <= 4) {
        return seteError({
          element: "password",
          msg: "The password must not be less than 5 character",
        });
      }

      setLoading(true);
      const res = await axios.post(
        `${API_URL}/user/login`,
        {
          username,
          password,
        },
        CONFIG
      );

      localStorage.setItem(TOKEN_NAME, res.data.data.token);
      props.LoginSuccess(res.data.data, props.history);
      setLoading(true);

      // window.location.reload(false);

      return false;

      // errors
    } catch (error) {
      setLoading(false);

      if (error.response === undefined) {
        return seteError({
          element: "main",
          msg: "Network error!",
        });
      }

      if (error.response.status === 401) {
        return seteError({
          element: "main",
          msg: error.response.data.msg,
        });
      } else {
        return seteError({
          element: "main",
          msg: error.response.data.msg,
        });
      }
    }
  };

  return (
    <div className="container mt-5">
      <div className="row mt-5">
        <div className="col-md-3" />
        <div className="col-md-6">
          <form onSubmit={LoginUser}>
            <div className="card">
              <div className="card-title border-bottom border-secondary text-center shadow-sm p-3">
                <h1 className="">Login</h1>
              </div>
              <div className="card-body py-2 px-3 pb-3">
                {loading === true && (
                  <div className="alert alert-success fadeIn animated infinite text-center">
                    Loading...
                  </div>
                )}

                {error.element === "main" && (
                  <div className="alert alert-danger fadeIn animated  text-center">
                    {error.msg}
                  </div>
                )}
                <label htmlFor="email">
                  <h5>Username</h5>
                </label>
                <input
                  type="text"
                  className={`form-control ${
                    error.element === "username" ? "is-invalid" : ""
                  }`}
                  placeholder="Username"
                  onChange={(e) => {
                    setUsername(e.target.value);
                    seteError({ element: "", msg: "" });
                  }}
                  value={username}
                  disabled={loading}
                  name="username"
                />
                {error.element === "username" ? (
                  <div className="invalid-feedback">{error.msg}</div>
                ) : null}

                <div className="mb-3" />
                <label htmlFor="password">
                  <h5>Password</h5>
                </label>
                <input
                  type="password"
                  className={`form-control ${
                    error.element === "password" ? "is-invalid" : ""
                  }`}
                  placeholder="Password"
                  onChange={(e) => {
                    setPassword(e.target.value);
                    seteError({ element: "", msg: "" });
                  }}
                  value={password}
                  disabled={loading}
                  name="password"
                />
                {error.element === "password" ? (
                  <div className="invalid-feedback">{error.msg}</div>
                ) : null}
                <div className="mb-3" />
                <button
                  type="submit"
                  className="btn btn-primary pl-5 pr-5 mt-0"
                  disabled={loading}
                >
                  {loading === true ? "Loading..." : "Login"}
                </button>
              </div>
            </div>
          </form>
        </div>
        <div className="col-md-4" />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { LoginSuccess })(Login);
