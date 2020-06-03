<template lang="pug">
  h-page-content(
    background-image="img/capa1.jpg"
  )
    .column.full-height
      .col-auto
        .row.h-pa-sm
          .col-auto
            h-btn(bg-color="bg-transparent")
              h-link(
                icon="fas fa-question-circle"
                url="/docs"
                icon-size="24px"
                text="DOCS"
                text-color="text-pink400"
              )
          .col
            .row.justify-end
              .col-auto
                h-btn(bg-color="bg-transparent")
                  h-link(
                    icon="fab fa-github"
                    url="https://github.com/edutucci/hawkvuemdframework"
                    icon-size="24px"
                    text="GITHUB"
                    text-color="text-pink400"
                    new-window
                  )        
      .col
        .row.full-height.justify-center.align-items-center
          .col-auto.text-white.text-center
            .text-h6 HAWKVUEMD FRAMEWORK
            .text-h1 MADE FOR YOU

            .row.h-mt-md.justify-center
              .col-auto
                h-btn(rounded bg-color="bg-pink400" text-color="text-white" text="Enter" @click="$router.push('/docs')")

    template(v-slot:extra-body)

</template>

<script>

export default {
  name: 'Main',
  components: {
  }
}
</script>

<style scoped>

</style>
