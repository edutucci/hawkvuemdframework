<template lang="pug">
  h-page-content(padding)
    .text-h4
      | Parallax Demo

    div(:style="[parallax]")

</template>

<script>
export default {
  data () {
    return {
      parallax: {
        backgroundImage: 'url("img/landscape.jpeg"), url("img/landscape2.jpeg")',
        minHeight: '500px',
        backgroundColor: 'hsla(200,40%,30%,.4)',
        backgroundAttachment: 'fixed',
        backgroundPosition: '20%, 0 100%, 0 50%, 0 100%, 0 0, 0 0;',
        backgroundRepeat: 'no-repeat',
        backgroundSize: '1580px, 800px;'
      }
    }
  }
}
</script>
