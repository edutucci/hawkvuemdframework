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
  // console.log('maskInput raw value: ' + maskInput.getRawValue())
  // console.log('maskInput masked value: ' + maskInput.getValue())

  let rawValue = this.removeMask(maskInput.getRawValue())

  return {
    maskedValue: maskInput.getValue(),
    rawValue: rawValue
  }
}

let maskCore = {
  createMask: createMask,
  removeMask: removeMask
}
export default maskCore
