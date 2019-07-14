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

let viewport = {
  elementBelowOfPage: elementBelowOfPage
}
export default viewport
