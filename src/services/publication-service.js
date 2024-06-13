import Api from '@/components/API/api'

export default class publicationService {
  static getPublications(id) {
    if (window.location.pathname.match(/publication/g)) {
      return Api.getJson(
        Api.buildGetUrl(
          `${process.env.VUE_APP_BACKEND_DOMAIN}event-service-api/publications/`,
          `${id}`
        )
      )
    } else {
      return Api.getJson(
        Api.buildGetUrl(
          `${process.env.VUE_APP_BACKEND_DOMAIN}event-service-api/publications/`,
          `search?query=eventTemplate.id%20%3D%3D%20${id};isActive%20%3D%3D%20true`,
          `&sort='$'createdAt`
        )
      )
    }
  }
}
