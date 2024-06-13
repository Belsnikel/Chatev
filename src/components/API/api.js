import axios from 'axios'

export default class Api {
  static getJson(url) {
    return axios.get(`${url}`).then((response) => {
      return response.data
    })
  }
  static buildGetUrl() {
    return [...arguments].join('')
  }
}
