import { Injectable } from '@angular/core';
import { globalVariables } from '../../../config/common/globalVariables';
import axios from 'axios';

@Injectable({
  providedIn: 'root',
})
export class VideogamesService {
  constructor() {}

  public async getGames() {
    let urlEndpoint: string = globalVariables.apiUrl + `/videogames`;
    let page = 2;
    let page_size = 10;
    return await axios.post(urlEndpoint, { page, page_size });
  }
}
