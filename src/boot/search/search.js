import appBarSearch from '../../views/pages/appbar/search'
import bannerSearch from '../../views/pages/banner/search'

export default class WebSiteSearch {
  constructor () {
    this.searchTopics = []
    this.createHelpTopics()
  }

  createHelpTopics() {
    this.searchTopics = []

    bannerSearch.searchTopics.forEach(topic => {
      this.searchTopics.push(topic)
    })

    appBarSearch.searchTopics.forEach(topic => {
      this.searchTopics.push(topic)
    })    
  }
}