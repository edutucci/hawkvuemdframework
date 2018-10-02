<template>
  <div>
    <main>
      <slot></slot>
    </main>
  </div>
</template>

<script>
export default {
  name: 'PageContainer'
}
</script>

<style scoped>
.page-container {
  background-color: white;
}
</style>
