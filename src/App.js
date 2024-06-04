import './App.css';
import './nullstyle.css';
import Navbar from './components/Navbar/Navbar';
import {Navigate, Route, Routes} from 'react-router-dom';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import FriendsContainer from './components/Friends/FriendsContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './Login/Login';

const App = props => {
   return (
      <div className='app-wrapper'>
         <HeaderContainer />
         <Navbar />
         <div className='app-wrapper-content'>
            <Routes>
               <Route path='' element={<Navigate to='/profile/' />} />
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
};

export default App;
