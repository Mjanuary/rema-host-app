import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import setAuthToken from "../../utils/setAuthToken";
import { TOKEN } from "../../utils/api";
import { LoadUserDetails } from "../../actions/auth";
//
class AppContainer extends Component {
  state = {
    loading: true,
  };

  componentDidMount = () => {
    setAuthToken();
    console.log("this is the main container");
    console.log({ TOKEN });

    if (TOKEN) {
      this.props.LoadUserDetails((status) => {
        this.setState({ loading: status });
      });
    }
  };

  render() {
    // return <div className="AppContainner">{this.props.children}</div>;

    // const {
    //   auth: { isAuthenticated, user, loading },
    // } = this.props;

    if (this.state.loading === true && TOKEN !== undefined) {
      return (
        <div className="container p-5 text-center">
          <div className="spinner-border text-primary" role="status">
            <span className="sr-only">Loading...</span>
          </div>
          <h4 className="m-0 text-center text-primary mt-2">Loading user...</h4>
        </div>
      );
    } else {
      return <div className="AppContainner">{this.props.children}</div>;
    }
  }
}

AppContainer.propTypes = {
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});
export default connect(mapStateToProps, { LoadUserDetails })(AppContainer);
