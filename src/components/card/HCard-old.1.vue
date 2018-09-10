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

    //- <h1> Card </h1>

    //- <h-card>
    //-   <h1 slot="header"> Title </h1>

    //- <template slot="col-header">
    //-   <h1> Title 1 </H1>
    //- </template>

    //-   <div slot="media-title" class="full-width full-height flex flex-row flex-justify-center">
    //-     <div style="margin:5px; color:white;">
    //-       <h1>Title</h1>
    //-       <h5>Subtitle</h5>
    //-     </div>
    //-   </div>
    //-   <img slot="media-img" src="../assets/blonde.jpg"/>
    //-     <h1 slot="body-title" class="title">Boat</h1>
    //-     <strong slot="body-subtitle" class="subtitle"> Boat Irelands</strong>
    //-   <div slot="actions">
    //-     <h-btn flat> Share </h-btn> <h-btn flat> Explore </h-btn>
    //-   </div>
    //-   <div slot="expand-actions">
    //-     <h-btn flat> Share </h-btn> <h-btn flat> Explore </h-btn>
    //-   </div>
    //-   <img class="full-width-height" slot="album" src="../assets/vert-img1.jpg"/>
    //- </h-card>

    //- <h-card>
    //-   <h1 slot="header"> Title </h1>
    //-   <div slot="media-title" class="full-width full-height flex flex-row flex-justify-center flex-items-center">
    //-     <div style="margin:5px; color:white;">
    //-       <h1>Title</h1>
    //-       <h5>Subtitle</h5>
    //-     </div>
    //-   </div>
    //-   <img slot="media-img" src="../assets/blonde2.jpg"/>
    //-     <h1 slot="body-title">Boat</h1>
    //-     <strong slot="body-subtitle"> Boat Irelands</strong>
    //-   <div slot="actions">
    //-     <h-btn flat> Share </h-btn> <h-btn flat> Explore </h-btn>
    //-   </div>
    //-   <div slot="expand-actions">
    //-     <h-btn flat> Share </h-btn> <h-btn flat> Explore </h-btn>
    //-   </div>
    //-   <img class="full-width-height" slot="album" src="../assets/vert-img2.jpg"/>
    //- </h-card>

    //- <h-card>
    //-   <h1 slot="header"> Title </h1>
    //-   <div slot="media-title" class="full-width full-height flex flex-row flex-justify-end flex-items-end">
    //-     <div style="margin:5px; color:white;">
    //-       <h1>Title</h1>
    //-       <h1>Subtitle</h1>
    //-     </div>
    //-   </div>
    //-   <img slot="media-img" src="../assets/navio.jpg"/>
    //-     <h1 slot="body-title">Boat</h1>
    //-     <strong slot="body-subtitle"> Boat Irelands</strong>
    //-   <div slot="actions">
    //-     <h-btn flat> Share </h-btn> <h-btn flat> Explore </h-btn>
    //-   </div>
    //-   <div slot="expand-actions">
    //-     <h-btn flat> Share </h-btn> <h-btn flat> Explore </h-btn>
    //-   </div>
    //-   <img class="full-width-height" slot="album" src="../assets/vert-img3.jpg"/>
    //- </h-card>


    <h2 class="text-primary"> Vue Properties</h2>
    <hr>

    <div class="flex">
      <div>
        <h3>Name</h3>
        <div>floatLabel</div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div class="h-pl-md">
        <h3>Type</h3>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div class="h-pl-md">
        <h3 >Description</h3>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>

    <h2 class="text-primary"> Vue Events</h2>
    <hr>

    <div class="flex">
      <div>
        <h3>Name</h3>
        <div>@click</div>
      </div>
      <div class="h-pl-md">
        <h3>Description</h3>
        <div>Triggered on button click</div>
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
