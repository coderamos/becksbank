import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';

import IAPIHandler from 'interfaces/IAPIHandler';
import { getToken } from 'services/auth';

// import IUsers from '../Interfaces/IUsers';

export default class AxiosAdapter implements IAPIHandler {
  private api: AxiosInstance;

  private setInterceptor(): void {
    this.api.interceptors.request.use((config: AxiosRequestConfig) => {
      const token = getToken();
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    });
  }

  constructor() {
    this.api = axios.create({
      baseURL: 'https://jsonplaceholder.typicode.com'
    });

    this.setInterceptor();
  }

  login(name: string, password: string): Promise<string> {
    return this.api
      .post<null, { teste: string }>('/users', {
        name,
        password
      })
      .then(() => 'jsdhasdaksdalsdlkjl');
  }
}
