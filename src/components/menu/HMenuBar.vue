<template lang="pug">
  .navbar.flex
    slot

</template>

<script>

import FontAwesomeIcon from '@fortawesome/vue-fontawesome'

export default {
  components: {
    FontAwesomeIcon
  }
}
</script>

<style scoped>
.navbar {
    border-radius: 6px;
    background-color: dodgerblue;
    padding: 6px;
}
.menu_item {
    color: white;
    padding: 5px;
}

.menu_item:hover {
    background-color: white;
    color: dodgerblue;
    border-radius: 6px;
    padding: 5px;
    cursor: pointer;
}
</style>
