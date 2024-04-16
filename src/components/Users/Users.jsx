import s from './users.module.css';
import userPhoto from './../../assets/images/naruto.png';
import React from 'react';
import {NavLink} from 'react-router-dom';
import axios from 'axios';

const Users = props => {
   let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
   let pages = [];
   for (let i = 1; i <= pagesCount; i++) {
      pages.push(i);
   }
   let currentPage = props.currentPage;
   let currentPageF = currentPage - 5 < 0 ? 0 : currentPage - 5;
   let currentPageL = currentPage + 5;
   let slicedPages = pages.slice(currentPageF, currentPageL);
   return (
      <div className={s.usersContainer}>
         <div>
            {slicedPages.map(page => {
               return (
                  <span
                     key={page}
                     className={
                        props.currentPage === page ? s.selectedPage : ''
                     }
                     onClick={() => props.onPageChanged(page)}>
                     {page}
                  </span>
               );
            })}
         </div>
         {props.users.map(user => (
            <div className={s.userContainer} key={user.id}>
               <div className={s.userInfo}>
                  <NavLink to={'/profile/' + user.id}>
                     <img
                        className={s.userPhoto}
                        src={
                           user.photos.small != null
                              ? user.photos.small
                              : userPhoto
                        }
                        alt='user_photo'
                     />
                  </NavLink>

                  <div className={s.followToggle}>
                     {user.followed ? (
                        <button
                           onClick={() => {
                              axios
                                 .delete(
                                    `https://social-network.samuraijs.com/api/1.0/follow/${user.id}`,
                                    {
                                       withCredentials: true,
                                       headers: {
                                          'API-KEY':
                                             'ad2a0f8b-a670-4ab0-8306-e95e2db49679'
                                       }
                                    }
                                 )
                                 .then(response => {
                                    if (response.data.resultCode === 0) {
                                       props.unfollow(user.id);
                                    }
                                 });
                           }}>
                           Unfollow
                        </button>
                     ) : (
                        <button
                           onClick={() => {
                              axios
                                 .post(
                                    `https://social-network.samuraijs.com/api/1.0/follow/${user.id}`,
                                    {},
                                    {
                                       withCredentials: true,
                                       headers: {
                                          'API-KEY':
                                             'ad2a0f8b-a670-4ab0-8306-e95e2db49679'
                                       }
                                    }
                                 )
                                 .then(response => {
                                    if (response.data.resultCode === 0) {
                                       props.follow(user.id);
                                    }
                                 });
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
                     <span className={s.userCountry}>
                        {'user.location.country'}
                     </span>
                  </div>
               </div>
            </div>
         ))}
      </div>
   );
};

export default Users;
