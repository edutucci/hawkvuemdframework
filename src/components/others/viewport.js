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

let viewport = {
  elementBelowOfPage: elementBelowOfPage,
  goToElement: goToElement
}
export default viewport
