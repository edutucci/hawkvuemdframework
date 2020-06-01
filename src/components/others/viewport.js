function elementBelowOfPage (element) {
  let bool = false
  if (element) {
    let rectElem = element.getClientRects()
    // console.log('rectElem bottom: ', rectElem[0].bottom)
    // console.log('window height: ', window.innerHeight)
    if (rectElem[0].bottom > window.innerHeight) {
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
    let pageContent = document.getElementById('page-content-slot')
    if (pageContent) {
      pageContent.scrollTop = top
    }
  }
}

function mainBodyWidth () {
  let value = 0
  let elemmainbody = document.getElementById('mainbody')
  if (elemmainbody) {
    value = elemmainbody.clientWidth
  }
  return value
}

// function getPageHeaderHeight () {
//   let pageHeader = document.getElementById('page-header')
//   let pageHeaderHeight = 0
//   if (pageHeader) {
//     let rectPageHeader = pageHeader.getClientRects()
//     pageHeaderHeight = rectPageHeader['0'].height
//   }
//   return pageHeaderHeight
// }

// function getPageHeaderBottom () {
//   let pageHeader = document.getElementById('page-header')
//   let pageHeaderBottom = 0
//   if (pageHeader) {
//     let rectPageHeader = pageHeader.getClientRects()
//     pageHeaderBottom = rectPageHeader['0'].bottom
//   }
//   return pageHeaderBottom
// }

// function getPageContentHeight () {
//   let pageContent = document.getElementById('page-content')
//   let pageContentHeight = 0
//   if (pageContent) {
//     let rectPageContent = pageContent.getClientRects()
//     pageContentHeight = rectPageContent['0'].height
//   }
//   return pageContentHeight
// }

// function getPageFooterHeight () {
//   let pageFooter = document.getElementById('page-footer')
//   let pageFooterHeight = 0
//   if (pageFooter) {
//     let rectPageHeader = pageFooter.getClientRects()
//     pageFooterHeight = rectPageHeader['0'].height
//   }
//   return pageFooterHeight
// }

// function getSidebarMenuWidth () {
//   let sidebarMenu = document.getElementById('sidebar-menu')
//   let sidebarMenuWidth = 0
//   if (sidebarMenu) {
//     sidebarMenuWidth = sidebarMenu.clientWidth
//   }
//   return sidebarMenuWidth
// }

// let viewport = {
//   elementBelowOfPage: elementBelowOfPage,
//   goToElement: goToElement,
//   getPageHeaderHeight: getPageHeaderHeight,
//   getPageHeaderBottom: getPageHeaderBottom,
//   getPageContentHeight: getPageContentHeight,
//   getPageFooterHeight: getPageFooterHeight,
//   getSidebarMenuWidth: getSidebarMenuWidth
// }

let viewport = {
  elementBelowOfPage: elementBelowOfPage,
  goToElement: goToElement,
  mainBodyWidth: mainBodyWidth
}

export default viewport
