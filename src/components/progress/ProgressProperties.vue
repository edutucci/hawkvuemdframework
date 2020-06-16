<script>

import componentBase from '../componentBase'

export default {
  extends: componentBase,
  name: 'ProgressProperties',
  props: {
    value: {
      type: Number,
      default: 0
    },
    animated: {
      type: Boolean,
      default: false
    },
    progressBarColor: {
      type: String,
      default: 'primary'
    }
  },
  data () {
    return {
      compProgressBarColor: '',
      progressDisplayValue: 0
    }
  }
}
</script>