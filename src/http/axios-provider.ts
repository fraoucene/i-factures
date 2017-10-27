import {password, SERVER, username} from './server';
import {AuthenticationError} from '../beans/errors/authentication-error';
import {AuthorizationError} from '../beans/errors/authorization-error';
import {BackendError} from '../beans/errors/backend-error';
import Axios, {AxiosInstance} from 'axios';

export class AxiosProvider {

    private static _axios: AxiosInstance;

    private static createInstance() {
        Axios.defaults.baseURL = SERVER;
        Axios.defaults.headers.common['Authorization'] = +('Basic ' + btoa(username + ':' + password));
        //Axios.defaults.headers.common['Authorization'] = this.getStoredToken();
        Axios.defaults.auth = AxiosProvider.getAuth();
        this._axios = Axios.create({});
        this._axios.interceptors.response.use(
            response => response,
            error => {
                if (error.response) {
                    if (error.response.status === 401) {
                        return Promise.reject(new AuthenticationError());
                    }
                    if (error.response.status === 403) {
                        return Promise.reject(new AuthorizationError());
                    }
                    if (error.response.status === 500) {
                        return Promise.reject(new BackendError());
                    }
                }
                if (error.message === 'Network Error') {
                    return Promise.reject(new BackendError());
                }
                return Promise.reject(error);
            });
        return this._axios;
    }

    static axios(): AxiosInstance {
        return this._axios ? this._axios : AxiosProvider.createInstance();
    }

    public static getStoredToken() {
        if (typeof localStorage === 'undefined' || localStorage === null) {
            return 'notoken';
        }
        const tokenUrl = window.location.href.match(/token=([^&]+)/);
        if (tokenUrl && tokenUrl.length === 2) {
            localStorage.setItem('token', tokenUrl[1]);
        }
        return localStorage.getItem('token') || 'notoken';
    }

    public static getAuth() {
        return {username, password}
    }
}