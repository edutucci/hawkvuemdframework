<template>
  <h-main-body>
    <router-view/>
  </h-main-body>
</template>

<script>

export default {
  data() {
    return {
      showDrawer: false,
    };
  },
};
</script>

<style scoped>
table {
  width: 100%;
  table-layout: auto;
}

th, td {
  text-align: left;
  padding: 8px;
  width: auto;
  border: solid 1px;
  overflow: hidden;
}

table,
td,
th {
  border-collapse: collapse;
}

/* tr:nth-child(even) {background-color: #f2f2f2;} */
</style>
