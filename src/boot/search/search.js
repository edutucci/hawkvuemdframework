import appBarSearch from '../../views/search/appbar'
import bannerSearch from '../../views/search/banner'
import borderSearch from '../../views/search/border'
import buttonSearch from '../../views/search/buttons'
import buttonGroupSearch from '../../views/search/buttonGroup'
import cardSearch from '../../views/search/cards'
import carouselSearch from '../../views/search/carousel'
import checkboxSearch from '../../views/search/checkbox'
import chipsSearch from '../../views/search/chips'
import collapsibleSearch from '../../views/search/collapsible'
import datetimeSearch from '../../views/search/datetime'
import dialogSearch from '../../views/search/dialog'
import drawerSearch from '../../views/search/drawer'
import fileUploadSearch from '../../views/search/fileUpload'
import htmltableSearch from '../../views/search/htmlTable'
import iconsSearch from '../../views/search/icons'
import imageSearch from '../../views/search/image'

export default class WebSiteSearch {
  constructor () {
    this.searchTopics = []
    this.createHelpTopics()
  }

  createHelpTopics() {
    this.searchTopics = []

    this.addTopics(borderSearch.searchObject)

    this.addTopics(bannerSearch.searchObject)
    this.addTopics(appBarSearch.searchObject)
    this.addTopics(buttonSearch.searchObject)
    this.addTopics(buttonGroupSearch.searchObject)
    this.addTopics(cardSearch.searchObject)
    this.addTopics(carouselSearch.searchObject)
    this.addTopics(checkboxSearch.searchObject)
    this.addTopics(chipsSearch.searchObject)
    this.addTopics(collapsibleSearch.searchObject)
    this.addTopics(datetimeSearch.searchObject)
    this.addTopics(dialogSearch.searchObject)
    this.addTopics(drawerSearch.searchObject)
    this.addTopics(fileUploadSearch.searchObject)
    this.addTopics(htmltableSearch.searchObject)
    this.addTopics(iconsSearch.searchObject)
    this.addTopics(imageSearch.searchObject)
  }

  addTopics (searchObject) {
    searchObject.topics.forEach(topic => {
      this.searchTopics.push({
        parent: searchObject.parent,
        url: searchObject.url,
        text: topic.text,
        topic: topic.topic
      })
    })  
  }
}