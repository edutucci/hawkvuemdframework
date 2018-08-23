<template lang="pug">
  .full-width
    h1 Cards

    //- div.flex.flex-wrap
    //-   .col-xs-12.col-sm-6.col-lg-4(style="background-color: blue")
    //-     | aaaaaaaaaaaaaa
    //-   .col-xs-12.col-sm-6.col-lg-4(style="background-color: green")
    //-     | bbbbbbbbbbbbbb
    //-   .col-xs-12.col-sm-6.col-lg-4(style="background-color: red")
    //-     | cccccccccccccc

    <div>
      <h-card>
        <h-card-media img="/img/Nallah_Sindh.jpg"/>
        <h-card-header avatar="/avatar/Kostenlose.jpg"  text="River"  desc="Beautifull place" />
        <h-card-text desc="A river in the Ganderbal district of Jammu and Kashmir state of India." />
      </h-card>

    </div>

    .boxshadow
      <pre v-highlightjs="card1">
        <code class="html">
        </code>
      </pre>

    <div>
      <h-card>
        <h-card-media img="/img/Nallah_Sindh.jpg"/>
        <h-card-header avatar="/avatar/Kostenlose.jpg"  text="River"  desc="Beautifull place" />
        <h-card-text desc="A river in the Ganderbal district of Jammu and Kashmir state of India." />
        <h-card-actions>
          <h-card-buttons>
            <h-btn textbutton label="explore"/>
            <h-btn textbutton label="share"/>
          </h-card-buttons>
          <h-card-icons>
            <h-btn textbutton> <h-fa-icon :icon="['fas','heart']" /> </h-btn>
            <h-btn textbutton> <h-fa-icon :icon="['fas','share-alt']" /> </h-btn>
          </h-card-icons>
        </h-card-actions>
      </h-card>
    </div>

    .boxshadow
      <pre v-highlightjs="card2">
        <code class="html">
        </code>
      </pre>

    h1  Card Scannable

    .flex.flex-wrap
      <h-card style="width:256px">
       <h-card-media img="/img/90minute.png"/>
       <h-card-header  text="90th minute" desc="4.31 MB"/>
      </h-card>

      <h-card style="width:256px">
       <h-card-media img="/img/breakpoint.png"/>
       <h-card-header text="Break point"  desc="5.12 MB"/>
      </h-card>

    .flex.flex-wrap
      <h-card style="width:256px">
       <h-card-media img="/img/matchday.png"/>
       <h-card-header text="Matchday"  desc="2.18 MB"/>
      </h-card>

      <h-card style="width:256px">
       <h-card-media img="/img/bluerun.png"/>
       <h-card-header text="Blue run"  desc="3.33 MB"/>
      </h-card>

    <pre v-highlightjs="cardScannable">
      <code class="html">
      </code>
    </pre>

    h1  Card Distinction

    div.flex.flex-justify-center.boxshadow.h-ma-md(style="width:380px;")
      .flex.flex-column.flex-wrap
        div.h-ma-md(style="width:360px; height: 200px;")
          <h-card>
            <h-card-media style="width:360px; height: 200px;"  img="/img/90minute.png">
              <h-card-media-text class="flex-items-end" text="90th minute" desc="4.31 MB"/>
            </h-card-media>
          </h-card>

        div.h-ma-md.flex.flex-items-center(style="width:360px; height: 200px;")
          <h-card>
            <h-card-media style="width:170px; height: 128px;" img="/img/bluerun.png">
              <h-card-media-text class="flex-items-end" text="Blue run" desc="3.33 MB"/>
            </h-card-media>
          </h-card>

          <h-card>
            <h-card-media style="width:160px; height: 192px;"  img="/img/breakpoint.png">
              <h-card-media-text class="flex-items-center" text="Break point"  desc="5.12 MB"/>
            </h-card-media>
          </h-card>

        div.h-ma-md(style="width:360px; height: 200px;")
          <h-card>
            <h-card-media style="width:360px; height: 200px;" img="/img/matchday.png">
              <h-card-media-text class="flex-items-center flex-justify-center" text="Match day" desc="2.18 MB"/>
            </h-card-media>
          </h-card>

    <pre v-highlightjs="cardDistinction">
      <code class="html">
      </code>
    </pre>

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

</template>

<script>

export default {
  components: {
  },
  data () {
    return {
      card1: `
<h-card>
  <h-card-media img="/img/Nallah_Sindh.jpg"/>
  <h-card-header avatar="/avatar/Kostenlose.jpg"  text="River"  desc="Beautifull place" />
  <h-card-text desc="A river in the Ganderbal district of Jammu and Kashmir state of India." />
</h-card>
      `,
      card2: `
<h-card>
  <h-card-media img="/img/Nallah_Sindh.jpg"/>
  <h-card-header avatar="/avatar/Kostenlose.jpg"  text="River"  desc="Beautifull place" />
  <h-card-text desc="A river in the Ganderbal district of Jammu and Kashmir state of India." />
  <h-card-actions>
    <h-card-buttons>
      <h-btn textbutton label="explore"/>
      <h-btn textbutton label="share"/>       
    </h-card-buttons>
    <h-card-icons>
      <h-btn textbutton> <h-fa-icon :icon="['fas','heart']" /> </h-btn>
      <h-btn textbutton> <h-fa-icon :icon="['fas','share-alt']" /> </h-btn>           
    </h-card-icons>
  </h-card-actions>
</h-card>
      `,
      cardScannable: `
  .flex.flex-wrap
    <h-card style="width:256px">
      <h-card-media img="/img/90minute.png"/>
      <h-card-header  text="90th minute" desc="4.31 MB"/>
    </h-card>

    <h-card style="width:256px">
      <h-card-media img="/img/breakpoint.png"/>
      <h-card-header text="Break point"  desc="5.12 MB"/>
    </h-card>      
    

  .flex.flex-wrap
    <h-card style="width:256px">
      <h-card-media img="/img/matchday.png"/>
      <h-card-header text="Matchday"  desc="2.18 MB"/>
    </h-card>

    <h-card style="width:256px">
      <h-card-media img="/img/bluerun.png"/>
      <h-card-header text="Blue run"  desc="3.33 MB"/>
    </h-card>
      `,
      cardDistinction: `
    div.flex.flex-justify-center.boxshadow.h-ma-md(style="width:380px;")
      .flex.flex-column.flex-wrap
        div.h-ma-md(style="width:360px; height: 200px;")
          <h-card>
            <h-card-media style="width:360px; height: 200px;"  img="/img/90minute.png">
              <h-card-media-text class="flex-items-end" text="90th minute" desc="4.31 MB"/>
            </h-card-media>
          </h-card>

        div.h-ma-md.flex.flex-items-center(style="width:360px; height: 200px;")
          <h-card>
            <h-card-media style="width:170px; height: 128px;" img="/img/bluerun.png">
              <h-card-media-text class="flex-items-end" text="Blue run" desc="3.33 MB"/>
            </h-card-media>
          </h-card>          

          <h-card>
            <h-card-media style="width:160px; height: 192px;"  img="/img/breakpoint.png">
              <h-card-media-text class="flex-items-center" text="Break point"  desc="5.12 MB"/>
            </h-card-media>
          </h-card>

        div.h-ma-md(style="width:360px; height: 200px;")
          <h-card>
            <h-card-media style="width:360px; height: 200px;" img="/img/matchday.png">
              <h-card-media-text class="flex-items-center flex-justify-center" text="Match day" desc="2.18 MB"/>
            </h-card-media>
          </h-card>          
      `
    }
  }
}
</script>
