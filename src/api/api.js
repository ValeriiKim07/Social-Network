import axios from 'axios';

const instance = axios.create({
   withCredentials: true,
   baseURL: `https://social-network.samuraijs.com/api/1.0/`,
   headers: {
      'API-KEY': '4bf1239d-a96f-4eae-b889-1c5ea979952c'
   }
});

export const usersAPI = {
   getUsers(currentPage = 1, pageSize = 10) {
      return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => {
         return response.data;
      });
   },

   getUser(userId) {
      console.warn('Obsolete method. Please use profileAPI obj.');
      return profileAPI.getProfile(userId);
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

export const profileAPI = {
   getProfile(userId) {
      return instance.get(`profile/${userId}`).then(response => {
         return response.data;
      });
   },
   getStatus(userId) {
      return instance.get(`profile/status/${userId}`).then(response => {
         return response.data;
      });
   },
   updateStatus(status) {
      return instance.put(`profile/status`, {status: status});
   }
};

export const authAPI = {
   setAuth() {
      return instance.get(`auth/me`).then(response => {
         return response.data;
      });
   }
};
