<template>
  <h-page-content padding>

    <div class="h-pa-sm border border-gray border-radius">
      <div class="text-body1 text-bold">Colors</div>
      <div class="row">
        <h-fa-icon class="bg-primary h-pa-md" icon="fas fa-camera-retro" textcolor="text-white"/>
        <h-fa-icon class="h-pa-md" icon="fas fa-camera-retro" textcolor="text-primary"/>
        <h-fa-icon class="h-pa-md" icon="fas fa-camera-retro" textcolor="text-secondary"/>
        <h-fa-icon class="h-pa-md" icon="fas fa-camera-retro" textcolor="text-positive"/>
        <h-fa-icon class="h-pa-md" icon="fas fa-camera-retro" textcolor="text-negative"/>
        <h-fa-icon class="h-pa-md" icon="fas fa-camera-retro" textcolor="text-info"/>
        <h-fa-icon class="h-pa-md" icon="fas fa-camera-retro" textcolor="text-warning"/>
      </div>
    </div>

    <div class="h-mt-md h-pa-sm border border-gray border-radius">
      <div class="text-body1 text-bold">Sizes</div>
      <div class="row">
        <h-fa-icon icon="fas fa-camera-retro" size="12px"/>
        <h-fa-icon class="h-pa-xs" icon="fas fa-camera-retro" size="18px"/>
        <h-fa-icon class="h-pa-xs" icon="fas fa-camera-retro" size="24px"/>
        <h-fa-icon class="h-pa-xs" icon="fas fa-camera-retro" size="36px"/>
        <h-fa-icon class="h-pa-xs" icon="fas fa-camera-retro" size="48px"/>
      </div>
    </div>

    <div class="h-mt-md h-pa-sm border border-gray border-radius">
      <div class="text-body1 text-bold">Animating</div>
      <div class="row">
        <h-fa-icon class="h-pa-xs" icon="fas fa-spinner" spin/>
        <h-fa-icon class="h-pa-xs" icon="fas fa-circle-notch" spin/>
        <h-fa-icon class="h-pa-xs" icon="fas fa-sync" spin/>
        <h-fa-icon class="h-pa-xs" icon="fas fa-cog" spin/>
        <h-fa-icon class="h-pa-xs" icon="fas fa-spinner" pulse/>
        <h-fa-icon class="h-pa-xs" icon="fas fa-stroopwafel" spin/>
      </div>
    </div>

    <div class="h-mt-md h-pa-sm border border-gray border-radius">
      <div class="text-body1 text-bold">Counters</div>
      <div class="row">
        <h-fa-icon class="h-pa-xs" icon="fas fa-stroopwafel" size="24px" textcolor="text-primary">
          <h-counter bgcolor="bg-negative" textcolor="text-white">1</h-counter>
        </h-fa-icon>
        <h-fa-icon class="h-pa-xs" icon="fas fa-stroopwafel" size="36px">
          <h-counter bgcolor="bg-negative" textcolor="text-white">12</h-counter>
        </h-fa-icon>
      </div>
    </div>

  </h-page-content>
</template>

<script>

export default {
  data () {
    return {
    }
  },
  methods: {
  }
}
</script>
