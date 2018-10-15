<template lang="pug">
  div
    h1 Others css Helpers

    strong
      | Here you will have others css class to help you with your templates

    h1 Mouse
    .flex.boxshadow
      .flex.flex-column.h-pr-md
        div
          strong  Name
        div
          strong no-user-select
        div
          strong cursor-pointer
      .flex.flex-column
        div
          strong Description
        div
          strong The user can not select text of an element
        div
          strong The cursor is a pointer and indicates a link

    h1 Text
    .flex.boxshadow
      .flex.flex-column.h-pr-md
        div
          strong  Name
        div
          strong text-white
        div
          strong text-bold
        div
          strong scroll
        div
          strong no-margin
        div
          strong no-padding
        div
          strong no-border
        div
          strong overflow-hidden
      .flex.flex-column
        div
          strong Description
        div
          strong text of an element becomes white
        div
          strong text of an element becomes bold
        div
          strong auto scrollbars to element
        div
          strong removes margins
        div
          strong removes padding
        div
          strong removes border
        div
          strong sets overflow-hidden to element

</template>

<script>
export default {
  name: 'Others'
}
</script>
