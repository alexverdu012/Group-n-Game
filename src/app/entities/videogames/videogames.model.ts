export class Videogame {
  id: number | undefined;
  name?: string;
  parent_platforms?: any[];
  genres?: any[];
  background_image?: string;
  released?: Date;

  constructor(
    id: number | undefined,
    name?: string,
    parent_platforms?: any[],
    genres?: any[],
    background_image?: string,
    released?: Date
  ) {
    this.id = id;
    this.name = name;
    this.parent_platforms = parent_platforms;
    this.genres = genres;
    this.background_image = background_image;
    this.released = released;
  }
}
