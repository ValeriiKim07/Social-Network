import {applyMiddleware, combineReducers, createStore} from 'redux';
import profileReducer from './profileReducer';
import dialogsReducer from './dialogsReducer';
import sidebarReducer from './sidebarReducer';
import usersReducer from './usersReducer';
import authReducer from './authReducer';
import {thunk} from 'redux-thunk';
import {reducer as formReducer} from 'redux-form';
import appReducer from './appReducer';

let reducers = combineReducers({
   profilePage: profileReducer,
   dialogsPage: dialogsReducer,
   sidebar: sidebarReducer,
   usersPage: usersReducer,
   auth: authReducer,
   app: appReducer,
   form: formReducer
});

let store = createStore(reducers, applyMiddleware(thunk));

window.store = store;

export default store;
