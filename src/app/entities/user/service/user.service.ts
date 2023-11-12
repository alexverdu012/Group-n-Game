import { Injectable } from '@angular/core';
import { globalVariables } from '../../../config/common/globalVariables';
import axios from 'axios';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor() {}

  public async logUser(email: string, password: string) {
    let urlEndpoint: string = globalVariables.apiUrl + '/auth/login';
    return await axios.post(
      urlEndpoint,
      { email, password },
      { withCredentials: true }
    );
  }

  public async getProfile(id: string) {
    let urlEndpoint: string = globalVariables.apiUrl + `/user/${id}`;
    return await axios.get(urlEndpoint);
  }

  public async isLoggedIn() {
    let urlEndpoint: string = globalVariables.apiUrl + '/auth/user';
    return await axios.get(urlEndpoint, { withCredentials: true });
  }

  public async logOut() {
    let urlEndpoint: string = globalVariables.apiUrl + '/auth/logout';
    return await axios.get(urlEndpoint, { withCredentials: true });
  }
}
