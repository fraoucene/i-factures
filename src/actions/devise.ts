import {ThunkActionCreator} from '../index';
import {AxiosProvider} from '../http/axios-provider';
import {AxiosResponse} from 'axios';
import {Devise} from "../beans/devise";

const DEVISE_URL = '/api/devises';

export interface DevisesAction { readonly type: string; readonly devises: ReadonlyArray<Devise>;
}

export const setDevises = (devises: ReadonlyArray<Devise>): DevisesAction => {
    return {type: 'SET_DEVISES', devises};
};


const fetchDevises: () => Promise<ReadonlyArray<Devise>> =
    () => AxiosProvider.axios()
        .get(DEVISE_URL)
        .then((resp: AxiosResponse) => {
        return resp.data})
        .then((devises: any[]) => {
            const allDevises: Devise[] = [];
            devises.map(devise => {
                allDevises.push(new Devise(devise.id, devise.label));
                }
            );
            return allDevises;
        });

export const getDevises: ThunkActionCreator<Promise<ReadonlyArray<Devise>>> = () =>
    dispatch =>
        Promise.resolve()
            .then(() => fetchDevises())
            .then(devises => {
                dispatch(setDevises(devises));
                return Promise.resolve(devises);
            });