<template lang="pug">
  div
    h1 Text Alignment

    .flex.boxshadow
      .flex.flex-column.h-pr-md
        div
          strong  text-left
        div
          strong text-right
        div
          strong text-center
        div
          strong text-justify
      .flex.flex-column
        div
          strong  The text is left aligned
        div
          strong  The text is right aligned
        div
          strong  The text is center aligned
        div
          strong  The text is justify aligned

</template>

<script>
export default {
  name: 'textalignment'
}
</script>
