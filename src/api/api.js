import axios from 'axios';

const instance = axios.create({
   withCredentials: true,
   baseURL: `https://social-network.samuraijs.com/api/1.0/`,
   headers: {
      'API-KEY': 'ddbd482e-9571-480d-9bf5-62438e351755'
   }
});

export const usersAPI = {
   getUsers(currentPage = 1, pageSize = 10) {
      return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => {
         return response.data;
      });
   },

   getUser(userId) {
      return instance.get(`profile/${userId}`).then(response => {
         return response.data;
      });
   },

   follow(userId) {
      return instance.post(`follow/${userId}`).then(response => {
         return response.data;
      });
   },

   unfollow(userId) {
      return instance.delete(`follow/${userId}`).then(response => {
         return response.data;
      });
   }
};

export const authAPI = {
   setAuth() {
      return instance.get(`auth/me`).then(response => {
         return response.data;
      });
   }
};
