<template>
  <div class="boxshadow" style="display:inline-block;">
    <div class=" flex flex-row">
      <div>
        <header class="header">
          <slot name="header"></slot>
        </header>

        <div class="media">
            <div class="media-title flex flex-column">
              <slot name="media-title"></slot>        
            </div>        
          <div class="media-img full-width full-height"> 
            <slot name="media-img"></slot>           
          </div>         
        </div>
        <main slot="body" class="body">
          <slot name="body-title" ></slot>
          <slot name="body-subtitle" ></slot>
        </main>
        <div class="action">
          <slot name="actions"></slot>
        </div>
        <div class="actions flex flex-items-center" style="background-color:blue">
          <div class="flex flex-justify-start flex-1">
            <slot name="expand-actions"></slot>
          </div>
          <div class="flex flex-justify-end">
            <h-fa-icon :icon="['fas', 'angle-up']"/>
          </div>
        </div>           
        <div>
          <slot name="expand-area"></slot>
        </div>
      </div>
      <div>
          <slot name="album"> </slot>
      </div>
    </div>

  </div>
</template>

<script>
import HBtnFloat from '../buttons/HBtnFloat.vue'
import HFaIcon from '../icons/FaIcon'

export default {
  components: {
    HBtnFloat,
    HFaIcon
  }
}
</script>

<style scoped>
.media {
  position: relative;
  /* background-color: cadetblue; */
  min-height: 80px;
}

img {
  padding: 0px;
  margin: 0px;
}

.media-title {
  position: absolute;
  top:-1px;
  left:-1px;
  z-index: 1;
  /* color:white; */
  /* background-color: aquamarine; */
  /* opacity: 0.5; */
  margin: 5px;
  height:98%;
  width:98%;
}

.media-title H1,H2,H3,H4,H5,H6,P {
  padding: 0px;
  margin: 0px;
}

.header {
  padding: 16px;
  background-color: cornflowerblue;
}

.header H1,H2,H3,H4,H5,H6,P {
  padding: 0px;
  margin: 0px;
}

.body {
  padding: 16px;
}

.body H1,H2,H3,H4,H5,H6,P {
  padding: 0px;
  margin: 0px;
}

.actions {
  padding: 8px;
}

</style>
