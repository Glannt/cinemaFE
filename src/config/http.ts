// import { AuthResponse } from '@/types/auth.type';
import axios, { type AxiosInstance } from "axios";

import { HttpStatusCode } from "@/constants/httpStatusCode.enum";

// import {
//   clearLS,
//   getAccessTokenFromLS,
//   saveAccessTokenToLS,
//   setCustomerToLS,
//   setProfileToLS,
//   setRoleNameToLS,
// } from './auth';
// import { User } from '@/types/user.type';
// import { useCustomer } from '@/context/customer.context';

class Http {
  instance: AxiosInstance;
  // private accessToken;
  constructor() {
    // this.accessToken = getAccessTokenFromLS();
    this.instance = axios.create({
      baseURL: import.meta.env.REACT_BACKEND_URL || "http://localhost:8080/api",
      timeout: 10000,
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true,
    });
    this.instance.interceptors.request.use(
      (config) => {
        // this.accessToken = getAccessTokenFromLS();
        // if (this.accessToken) {
        //   config.headers.Authorization = `Bearer ${this.accessToken}`;

        //   return config;
        // }
        // if (this.accessToken && config.headers) {
        //   config.headers.Authorization = `Bearer ${this.accessToken}`;

        //   return config;
        // }
        return config;
      },
      (error) => {
        return Promise.reject(error);
      },
    );
    this.instance.interceptors.response.use(
      (response) => {
        // const { url } = response.config;

        // if (url === path.authLogin || url === path.authRegister) {
        //   // this.accessToken = (response.data as AuthResponse).data.access_token;
        //   this.accessToken = response.data.access_token;
        //   const user = omit(response.data.data, ['password']);
        //   saveAccessTokenToLS(this.accessToken);
        //   setProfileToLS(response.data.data);
        //   setRoleNameToLS(response.data.data.roleName);
        // } else if (url === path.logout) {
        //   this.accessToken = '';
        //   clearLS();
        // } else if (
        //   url === '/api/customer/manage-profile' ||
        //   url === '/api/customer/create-booking'
        // ) {
        //   setCustomerToLS(response.data.data);
        // }
        // toast.success(response.data.message, {
        //   autoClose: 1000,
        // });
        return response;
      },
      function (error) {
        if (error.response?.status !== HttpStatusCode.UnprocessableEntity) {
          const data: any | undefined = error.response?.data;
          const message = data.message || error.message;

          // toast.error(data.message);
        }

        return Promise.reject(error);
      },
    );
  }
}

const http = new Http().instance;

export default http;
