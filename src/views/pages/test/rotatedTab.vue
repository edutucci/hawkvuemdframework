<template>
  <h-page-content>
    <div class="row full-height justify-end align-items-center cursor-pointer">
      <div class="col-auto">
        <div class="row tab">
          <div class="col-auto tab2">
            <div class="row align-items-center">
              <img src="imgIcons/png/help-icon.png" style="width:32px;height:32px;"/>
              <div class="text-body1 h-ml-sm">Help</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </h-page-content>

</template>

<script>
export default {
  data () {
    return {}
  }
}
</script>

<style scoped>
  .tab {
    position: relative;
    display: inline-block;
    transform: translateX(25%) rotate(-90deg);
    border-radius: 10px 10px 0 0;
  }

  .tab2 {
    display: inline-block;
    padding: .5em .5em;
    border-radius: 10px 10px 0 0;
    background: skyblue;
  }
</style>
