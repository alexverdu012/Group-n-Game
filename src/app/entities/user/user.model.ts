import { Videogame } from '../videogames/videogames.model';

export class User {
  id: string | undefined;
  email?: string;
  password?: string;
  username?: string;
  friends?: User[];
  games?: Videogame[];
  createdAt?: Date;

  constructor(
    id: string | undefined,
    email: string,
    password: string,
    username?: string,
    friends?: User[],
    games?: Videogame[],
    createdAt?: Date
  ) {
    this.id = id;
    this.email = email;
    this.password = password;
    this.username = username;
    this.friends = friends;
    this.games = games;
    this.createdAt = createdAt;
  }
}
