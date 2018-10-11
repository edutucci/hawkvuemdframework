<template lang="pug">
  .navbar.full-width.flex
    slot

</template>

<script>

export default {
}
</script>

<style scoped>
.navbar {
    border-radius: 6px;
    background-color: dodgerblue;
    /* padding: 6px;*/
    margin-left: 40px;
    margin-right: 40px;
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
