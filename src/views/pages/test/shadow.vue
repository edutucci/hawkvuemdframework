<template>
  <h-page-content>
    <div class="row wrap cols-shadow">
      <div class="col-auto flex justify-center align-items-center text-body1"
        style="width: 120px; height: 120px; margin: 15px;"
        v-for="(sh, index) in shadowList"
        :key="`sh-${index}`"
        :class="cpShadow(shadowList[index])"
      >
        shadow-{{shadowList[index]}}
      </div>
    </div>
  </h-page-content>
</template>

<script>

export default {
  data () {
    return {
      shadowList: [1, 2, 3, 4, 5, 6, 7, 8]
    }
  },
  mounted () {
  },
  computed: {

  },
  methods: {
    cpShadow (n) {
      return 'shadow-' + n
    }
  }
}
</script>
