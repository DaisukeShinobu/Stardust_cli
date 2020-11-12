import { transformSnakeToCamel } from '../utils/snakeCamelConverter'

export default class Account {
  constructor({
                id,
                email,
                birthday,
                avatar_url,
                username
              }) {
    this.id = id
    this.email = email
    this.username = username
    this.birthday = birthday
    this.avatar_url = avatar_url
  }

  static newFromApiResponse = data => {
    return new Account(transformSnakeToCamel(data))
  }
}