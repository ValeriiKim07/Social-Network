import React from 'react';
import s from './users.module.css';
import userPhoto from '../../assets/images/naruto.png';
import axios from 'axios';

class Users extends React.Component {
   constructor(props) {
      super(props);
      axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
         this.props.setUsers(response.data.items);
      });
   }

   render() {
      return (
         <div className={s.usersContainer}>
            {this.props.users.map(user => (
               <div className={s.userContainer} key={user.id}>
                  <div className={s.userInfo}>
                     <img
                        className={s.userPhoto}
                        src={user.photos.small != null ? user.photos.small : userPhoto}
                        alt='user_photo'
                     />

                     <div className={s.followToggle}>
                        {user.followed ? (
                           <button
                              onClick={() => {
                                 this.props.unfollow(user.id);
                              }}>
                              Unfollow
                           </button>
                        ) : (
                           <button
                              onClick={() => {
                                 this.props.follow(user.id);
                              }}>
                              Follow
                           </button>
                        )}
                     </div>
                  </div>
                  <div className={s.usersData}>
                     <div className={s.usersDetails}>
                        <h3 className={s.userName}>{user.name}</h3>
                        <span className={s.userStatus}>{user.status}</span>
                     </div>
                     <div className={s.usersLocationDetails}>
                        <h4 className={s.userCity}>{'user.location.city'}</h4>
                        <span className={s.userCountry}>{'user.location.country'}</span>
                     </div>
                  </div>
               </div>
            ))}
         </div>
      );
   }
}

export default Users;
