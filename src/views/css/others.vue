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
      .flex.flex-column
        div
          strong Description
        div
          strong text of an element becomes white

</template>

<script>
export default {
  name: 'Others'
}
</script>
