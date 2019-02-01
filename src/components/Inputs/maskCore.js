import InputMask from 'inputmask-core'
let maskInput

function removeMask (inputValue) {
  let patt = new RegExp('[()-/:._]', 'g')
  return inputValue.replace(patt, '')
}

function createMask (mask, inputValue) {
  let localInputValue = ''

  if (inputValue === undefined) {
    localInputValue = ''
  } else {
    localInputValue = this.removeMask(inputValue)
  }

  if (maskInput === undefined) {
    maskInput = new InputMask(
      {
        pattern: mask,
        value: localInputValue
      }
    )
  }

  maskInput.setPattern(mask, { value: localInputValue })
  return {
    maskedValue: maskInput.getValue(),
    rawValue: localInputValue
  }
}

let maskCore = {
  createMask: createMask,
  removeMask: removeMask
}
export default maskCore
