import { Injectable } from '@angular/core';
import { globalVariables } from '../../../config/common/globalVariables';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  public logUser(email: string, password: string) {
    let urlEndpoint: string = globalVariables.apiUrl + "/auth/login";
    return axios.post(urlEndpoint, {email, password});
  }
}
