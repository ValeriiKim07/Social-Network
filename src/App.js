import "./App.css";
import "./nullstyle.css";
import Navbar from "./components/Navbar/Navbar";
import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
  useParams,
} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import FriendsContainer from "./components/Friends/FriendsContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./Login/Login";
import React, { Component, lazy, Suspense } from "react";
import { connect, Provider } from "react-redux";
import { initializeApp } from "./redux/appReducer";
import Preloader from "./components/common/Preloader/Preloader";
import { compose } from "redux";
import store from "./redux/reduxStore";

const DialogsContainer = lazy(
  () => import("./components/Dialogs/DialogsContainer"),
);

const ProfileContainer = lazy(
  () => import("./components/Profile/ProfileContainer"),
);

const UsersContainer = lazy(() => import("./components/Users/UsersContainer"));

const withRouter = (WrappedComponent) => (props) => {
  const params = useParams();

  return <WrappedComponent {...props} params={params} />;
};

class App extends Component {
  catchAllUnhandledErrors = (promiseRejectionEvent) => {
    alert("Some error uccured");
  };

  componentDidMount() {
    this.props.initializeApp();

    window.addEventListener("unhandledrejection", this.catchAllUnhandledErrors);
  }

  componentWillUnmount() {
    window.removeEventListener(
      "unhandledrejection",
      this.catchAllUnhandledErrors,
    );
  }

  render() {
    if (!this.props.initialized) {
      return <Preloader />;
    }
    return (
      <div className="app-wrapper">
        <HeaderContainer />
        <Navbar />
        <div className="app-wrapper-content">
          <Suspense fallback={<Preloader />}>
            <Routes>
              <Route path="/profile/:userId?" element={<ProfileContainer />} />
              {/*TODO: remove '*' in path="/dialogs/*" */}
              <Route path="/dialogs/*" element={<DialogsContainer />} />
              <Route
                path="/users/"
                element={<UsersContainer pageTitle={"Kim"} />}
              />
              <Route path="/news" element={<News />} />
              <Route path="/music" element={<Music />} />
              <Route path="/settings" element={<Settings />} />
              {/*TODO: remove '*' in path="/friends/*" */}
              <Route path="/friends/*" element={<FriendsContainer />} />
              <Route path="/login/*" element={<Login />} />
              <Route path="*" element={<div>404 NOT FOUND</div>} />
              <Route path="/" element={<Navigate to={"/profile"} />} />
            </Routes>
          </Suspense>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized,
});

let AppContainer = compose(
  withRouter,
  connect(mapStateToProps, { initializeApp }),
)(App);

let MainApp = (props) => {
  return (
    <BrowserRouter basename={"Social-Network"}>
      <Provider store={store}>
        <AppContainer />
      </Provider>
    </BrowserRouter>
  );
};

export default MainApp;
