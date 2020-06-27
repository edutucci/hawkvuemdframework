import appBarSearch from '../../views/search/appbar'
import bannerSearch from '../../views/search/banner'
import borderSearch from '../../views/search/border'

export default class WebSiteSearch {
  constructor () {
    this.searchTopics = []
    this.createHelpTopics()
  }

  createHelpTopics() {
    this.searchTopics = []

    this.addTopics(borderSearch.searchTopics)

    this.addTopics(bannerSearch.searchTopics)
    this.addTopics(appBarSearch.searchTopics)
  }

  addTopics (topics) {
    topics.forEach(topic => {
      this.searchTopics.push(topic)
    })  
  }
}