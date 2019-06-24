<template>
  <div>
    <h3>Contained Buttons</h3>
    <div class="h-pa-sm border border-gray border-corner-rounded">
      <h-btn-group contained>
        <h-btn-group-item name="bold" bgcolor="bg-primary" textcolor="text-white" left-icon="fas fa-bold" text="Bold"/>
        <h-btn-group-item name="italic" bgcolor="bg-positive" textcolor="text-white" right-icon="fas fa-italic" text="Italic"/>
        <h-btn-group-item name="sub" bgcolor="bg-negative" textcolor="text-white"  left-icon="fas fa-underline" text="Underline"/>
      </h-btn-group>
    </div>

    <h3>Outlined Buttons</h3>
    <div class="h-pa-sm border border-gray border-corner-rounded">
      <h-btn-group outlined>
        <h-btn-group-item name="bold" left-icon="fas fa-bold"/>
        <h-btn-group-item name="italic" left-icon="fas fa-italic"/>
        <h-btn-group-item name="sub" left-icon="fas fa-underline"/>
      </h-btn-group>
    </div>

  </div>
</template>

<script>

export default {
  components: {
  },
  data () {
    return {
    }
  }
}
</script>

<style scoped>
</style>
