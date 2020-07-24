import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// Redux
import { Provider } from "react-redux";
import store from "./store";

// styles
import "./styles/bootstrap.min.css";
import "./styles/animate.css";
import "./styles/main.css";

// containters
import HomePage from "./containers/HomePage/HomePage";
import Components from "./containers/Components/Components";
import Sites from "./containers/Sites/Sites";
import Indicators from "./containers/Indicators/Indicators";
import Catchments from "./containers/Catchments/Catchments";
import ComponentDetails from "./containers/ComponentDetails/ComponentDetails";
import CreateComponent from "./containers/CreateComponent/CreateComponent";
import About from "./containers/About/About";
import Login from "./containers/Login/Login";
import Dashboard from "./containers/Dashboard/Dashboard";
import AddReport from "./containers/AddReport/AddReport";
import EditReport from "./containers/EditReport/EditReport";
import ViewReport from "./containers/ViewReport/ViewReport";
import Visualization from "./containers/Visualization/Visualization";

// Components
import Navigation from "./components/Navigation/Navigation";
import PrivateRoute from "./shared/PrivateRoute/PrivateRoute";
import AppContainer from "./shared/AppContainer/AppContainer";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Navigation />
          <AppContainer>
            <Switch>
              <PrivateRoute exact path="/indicators" component={Indicators} />
              <PrivateRoute exact path="/components" component={Components} />
              <PrivateRoute
                exact
                path="/component/create"
                component={CreateComponent}
              />
              <PrivateRoute
                exact
                path="/component/:componentId"
                component={ComponentDetails}
              />
              <PrivateRoute exact path="/sites" component={Sites} />
              <PrivateRoute exact path="/catchments" component={Catchments} />
              <PrivateRoute path="/dashboard" component={Dashboard} />
              <PrivateRoute path="/report/add" component={AddReport} />
              <PrivateRoute path="/report/:reportId" component={EditReport} />
              {/* <PrivateRoute
                path="/visualize/:componentId"
                component={Visualization}
              /> */}

              <PrivateRoute
                path="/visualize/:componentId"
                component={Visualization}
              />
              <PrivateRoute
                path="/viewReport/:reportId"
                component={ViewReport}
              />
              <Route exact path="/" component={HomePage} />
              <Route exact path="/about" component={About} />
              <Route exact path="/login" component={Login} />
            </Switch>
          </AppContainer>
        </Router>
      </Provider>
    );
  }
}

export default App;
