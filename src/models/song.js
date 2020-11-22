import { transformSnakeToCamel } from '../utils/snakeCamelConverter'

export default class Song {
  constructor({ id, name, artist }) {
    this.id = id
    this.name = name
    this.artist = artist
  }

  static newFromApiResponse = data => {
    return new Song(transformSnakeToCamel(data))
  }
}
