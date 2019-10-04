<template lang="pug">
  div
    h-scroll-navigator(
      style="width: 200px;"
    )
      .flex
        div(v-for="(n, index) in 9" :key="index")
          p Elemento{{index}}

</template>

<script>

export default {
  data () {
    return {
    }
  },
  mounted () {
  },
  computed: {
  },
  methods: {
  }
}
</script>
