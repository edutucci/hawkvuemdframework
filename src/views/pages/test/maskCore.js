import InputMask from 'inputmask-core'
let maskInput

function setMaskValue (mask, inputValue) {
  let patt = new RegExp('[()-/:._]', 'g')
  let localInputValue = ''

  if (inputValue === undefined) {
    localInputValue = ''
  } else {
    localInputValue = inputValue.replace(patt, '')
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
  return maskInput.getValue()
}

let maskCore = {
  setMaskValue: setMaskValue
}
export default maskCore
