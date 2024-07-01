import './App.css';
import './nullstyle.css';
import Navbar from './components/Navbar/Navbar';
import {Route, Routes, useParams} from 'react-router-dom';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import FriendsContainer from './components/Friends/FriendsContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './Login/Login';
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {initializeApp} from './redux/appReducer';
import Preloader from './components/common/Preloader/Preloader';
import {compose} from 'redux';

const withRouter = WrappedComponent => props => {
   const params = useParams();

   return <WrappedComponent {...props} params={params} />;
};

class App extends Component {
   componentDidMount() {
      this.props.initializeApp();
   }

   render() {
      if (!this.props.initialized) {
         return <Preloader />;
      }
      return (
         <div className='app-wrapper'>
            <HeaderContainer />
            <Navbar />
            <div className='app-wrapper-content'>
               <Routes>
                  <Route path='/profile/:userId?' element={<ProfileContainer />} />
                  {/*TODO: remove '*' in path="/dialogs/*" */}
                  <Route path='/dialogs/*' element={<DialogsContainer />} />
                  <Route path='/users/' element={<UsersContainer />} />
                  <Route path='/news' element={<News />} />
                  <Route path='/music' element={<Music />} />
                  <Route path='/settings' element={<Settings />} />
                  {/*TODO: remove '*' in path="/friends/*" */}
                  <Route path='/friends/*' element={<FriendsContainer />} />
                  <Route path='/login/*' element={<Login />} />
               </Routes>
            </div>
         </div>
      );
   }
}

const mapStateToProps = state => ({
   initialized: state.app.initialized
});

export default compose(withRouter, connect(mapStateToProps, {initializeApp}))(App);
