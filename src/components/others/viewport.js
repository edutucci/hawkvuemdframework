function elementBelowOfPage (element) {
  let bool = false
  if (element) {
    let rectElem = element.getBoundingClientRect()

    if (rectElem.bottom > window.innerHeight) {
      bool = true
    } else {
      bool = false
    }
  }

  return bool
}

function goToElement (element) {
  // console.log(element)
  if (element) {
    let top = element.offsetTop
    // console.log('top value:', top)
    window.scrollTo(0, top)
  }
}

function getPageHeaderHeight () {
  // let pageContent = document.getElementById('page-content')
  let pageHeader = document.getElementById('page-header')
  let pageHeaderHeight = 0
  if (pageHeader) {
    let rectPageHeader = pageHeader.getClientRects()
    pageHeaderHeight = rectPageHeader['0'].height
  }
  return pageHeaderHeight
}

function getPageFooterHeight () {
  let pageFooter = document.getElementById('page-footer')
  let pageFooterHeight = 0
  if (pageFooter) {
    let rectPageHeader = pageFooter.getClientRects()
    pageFooterHeight = rectPageHeader['0'].height
  }
  return pageFooterHeight
}

let viewport = {
  elementBelowOfPage: elementBelowOfPage,
  goToElement: goToElement,
  getPageHeaderHeight: getPageHeaderHeight,
  getPageFooterHeight: getPageFooterHeight
}
export default viewport
