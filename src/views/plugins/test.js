import SnackBar from '../../plugins'

function showSnack () {
  SnackBar.create({
    message: 'Download Completed',
    textcolor: 'text-white',
    bgcolor: 'bg-positive'
  })
}

let teste = {
  showSnack: showSnack
}

export default teste
