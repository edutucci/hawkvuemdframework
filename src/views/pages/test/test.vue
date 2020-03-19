<template>
  <div>

  </div>
</template>

<script>

export default {
  data () {
    return {
    }
  },
  mounted () {
    let a2 = ['1', 'Tucci C', 'Tucci B', 'Pablo']
    // descending
    a2.sort(function strDes (a, b) {
      if (a > b) return -1
      else if (a < b) return 1
      else return 0
    })
    console.log('a2 descending: ' + JSON.stringify(a2))

    a2 = ['1', 'Tucci C', 'Tucci B', 'Pablo']
    // ascending
    a2.sort(function strDes (a, b) {
      if (a > b) return 1
      else if (a < b) return -1
      else return 0
    })
    console.log('a2 ascending: ' + JSON.stringify(a2))
  },
  methods: {
  }
}
</script>
