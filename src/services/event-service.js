import Api from '@/components/API/api'

export default class eventService {
  static getEvents(id) {
    return Api.getJson(
      Api.buildGetUrl(
        `${process.env.VUE_APP_BACKEND_DOMAIN}event-service-api/events/`,
        id
      )
    )
  }
}
