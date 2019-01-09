<template lang="pug">
  .full-width
    h1 Cards

    <h-card style="width:340px;">
      <h-card-header>
        <h-card-header-text text="River" desc="Beautifull place A river in the Ganderbal district" />
        <h-card-header-menu>
          <h-menu-dropdown rtl icon="fas fa-ellipsis-v" textcolor="text-black">
            <h-menu-dropdown-item icon="fas fa-check-circle" text="You are correct." />
            <h-menu-dropdown-item icon="fas fa-handshake" text="You are in good hands"/>
          </h-menu-dropdown>
        </h-card-header-menu>
      </h-card-header>
      <h-card-media>
        <h-media-img img="img/Nallah_Sindh.jpg"/>
      </h-card-media>
      <h-card-text>
        span A river in the Ganderbal district of Jammu and Kashmir state of India.
      </h-card-text>
    </h-card>

    .boxshadow
      <pre v-highlightjs="card1">
        <code class="html">
        </code>
      </pre>

    <h-card>
      <h-card-header>
        <h-card-header-text text="Vue CLI 3" desc="Usage Plugins GUI" />
        <h-card-header-menu>
          <h-menu-dropdown rtl icon="fas fa-ellipsis-v" textcolor="text-black">
            <h-menu-dropdown-item icon="fas fa-check-circle" text="You are correct." />
            <h-menu-dropdown-item icon="fas fa-handshake" text="You are in good hands"/>
          </h-menu-dropdown>
        </h-card-header-menu>
      </h-card-header>
      <h-card-media>
        <h-youtube-video :width="340" :height="220" src="https://www.youtube.com/embed/nSmMkeNjjPg"/>
      </h-card-media>
    </h-card>

    .boxshadow
      <pre v-highlightjs="cardvideo1">
        <code class="html">
        </code>
      </pre>

    <h-card style="width:340px;">
      <h-card-media>
        <h-media-img img="img/Nallah_Sindh.jpg"/>
      </h-card-media>
      <h-card-header avatar="avatar/Kostenlose.jpg">
        <h-card-header-text text="River"  desc="Beautifull place" />
      </h-card-header>
      <h-card-text>
        span A river in the Ganderbal district of Jammu and Kashmir state of India.
      </h-card-text>
      <h-card-actions>
        <h-card-buttons>
          <h-btn textbutton text="explore"/>
          <h-btn textbutton text="share"/>
        </h-card-buttons>
        <h-card-icons>
          <h-btn textbutton> <h-fa-icon icon="fas fa-heart"/> </h-btn>
          <h-btn textbutton> <h-fa-icon icon="fas fa-share-alt"/> </h-btn>
        </h-card-icons>
      </h-card-actions>
    </h-card>

    .boxshadow
      <pre v-highlightjs="card2">
        <code class="html">
        </code>
      </pre>

    h1  Card Scannable

    <div class="flex flex-wrap">
      <h-card style="width:256px">
       <h-card-media>
        <h-media-img img="img/90minute.png"/>
       </h-card-media>
       <h-card-header>
        <h-card-header-text text="90th minute" desc="4.31 MB"/>
       </h-card-header>
      </h-card>

      <h-card style="width:256px">
       <h-card-media>
        <h-media-img img="img/breakpoint.png"/>
       </h-card-media>
       <h-card-header>
        <h-card-header-text text="Break point"  desc="5.12 MB"/>
       </h-card-header>
      </h-card>
    </div>
    <div class="flex flex-wrap">
      <h-card style="width:256px">
       <h-card-media>
        <h-media-img img="img/matchday.png"/>
       </h-card-media>
       <h-card-header>
        <h-card-header-text text="Matchday"  desc="2.18 MB"/>
       </h-card-header>
      </h-card>

      <h-card style="width:256px">
       <h-card-media>
        <h-media-img img="img/bluerun.png"/>
       </h-card-media>
       <h-card-header>
        <h-card-header-text text="Blue run"  desc="3.33 MB"/>
       </h-card-header>
      </h-card>
    </div>

    <pre v-highlightjs="cardScannable">
      <code class="html">
      </code>
    </pre>

    h1  Card Distinction

    <div class="flex flex-justify-center boxshadow h-ma-md" style="width:380px;">
      .flex.flex-column.flex-wrap
        div.h-ma-md(style="width:360px; height: 200px;")
          <h-card>
            <h-card-media>
              <h-media-img style="width:360px; height: 200px;"  img="img/90minute.png">
                <h-media-text class="flex-items-end" text="90th minute" desc="4.31 MB"/>
              </h-media-img>
            </h-card-media>
          </h-card>

        div.h-ma-md.flex.flex-items-center(style="width:360px; height: 200px;")
          <h-card>
            <h-card-media>
              <h-media-img style="width:170px; height: 128px;" img="img/bluerun.png">
                <h-media-text class="flex-items-end" text="Blue run" desc="3.33 MB"/>
              </h-media-img>
            </h-card-media>
          </h-card>

          <h-card>
            <h-card-media>
              <h-media-img style="width:170px; height: 192px;"  img="img/breakpoint.png">
                <h-media-text class="flex-items-center" text="Break point"  desc="5.12 MB"/>
              </h-media-img>
            </h-card-media>
          </h-card>

        div.h-ma-md(style="width:360px; height: 200px;")
          <h-card>
            <h-card-media>
              <h-media-img style="width:360px; height: 200px;" img="img/matchday.png">
                <h-media-text class="flex-items-center flex-justify-center" text="Match day" desc="2.18 MB"/>
              </h-media-img>
            </h-card-media>
          </h-card>
    </div>

    <pre v-highlightjs="cardDistinction">
      <code class="html">
      </code>
    </pre>

    <h1 class="text-primary"> Card Header Help</h1>
    <h2 class="text-primary"> Vue Properties</h2>
    <hr>

    <div class="flex">
      <div>
        <h3>Name</h3>
        <div>icon</div>
        <div>avatar</div>
      </div>
      <div class="h-pl-md">
        <h3>Type</h3>
        <div>String</div>
        <div>String</div>
      </div>
      <div class="h-pl-md">
        <h3 >Description</h3>
        <div>Sets the icon for header</div>
        <div>Sets the avatar for the header</div>
      </div>
    </div>

    <h1 class="text-primary"> Card Header Text Help</h1>
    <h2 class="text-primary"> Vue Properties</h2>
    <hr>

    <div class="flex">
      <div>
        <h3>Name</h3>
        <div>text</div>
        <div>desc</div>
      </div>
      <div class="h-pl-md">
        <h3>Type</h3>
        <div>String</div>
        <div>String</div>
      </div>
      <div class="h-pl-md">
        <h3 >Description</h3>
        <div>Sets the text for header</div>
        <div>Sets the description for the header</div>
      </div>
    </div>

    <h1 class="text-primary"> Card Media Img Help</h1>
    <h2 class="text-primary"> Vue Properties</h2>
    <hr>

    <div class="flex">
      <div>
        <h3>Name</h3>
        <div>img</div>
      </div>
      <div class="h-pl-md">
        <h3>Type</h3>
        <div>String</div>
      </div>
      <div class="h-pl-md">
        <h3 >Description</h3>
        <div>Sets the img for media</div>
      </div>
    </div>
    <h1 class="text-primary"> Card Media Text Help</h1>
    <h2 class="text-primary"> Vue Properties</h2>
    <hr>

    <div class="flex">
      <div>
        <h3>Name</h3>
        <div>text</div>
        <div>desc</div>
      </div>
      <div class="h-pl-md">
        <h3>Type</h3>
        <div>String</div>
        <div>String</div>
      </div>
      <div class="h-pl-md">
        <h3 >Description</h3>
        <div>Sets the text for the image in <b>h-media-img</b></div>
        <div>Sets the description for the image in <b>h-media-img</b></div>
      </div>
    </div>

</template>

<script>

export default {
  components: {
  },
  data () {
    return {
      card1: `
<h-card style="width:340px;">
  <h-card-header>
    <h-card-header-text text="River" desc="Beautifull place A river in the Ganderbal district" />
    <h-card-header-menu>
      <h-menu-dropdown rtl icon="fas fa-ellipsis-v" textcolor="text-black">
        <h-menu-dropdown-item icon="fas fa-check-circle" text="You are correct." />
        <h-menu-dropdown-item icon="fas fa-handshake" text="You are in good hands"/>
      </h-menu-dropdown>
    </h-card-header-menu>
  </h-card-header>
  <h-card-media>
    <h-media-img img="img/Nallah_Sindh.jpg"/>
  </h-card-media>
  <h-card-text>
    span A river in the Ganderbal district of Jammu and Kashmir state of India.
  </h-card-text>
</h-card>
      `,
      cardvideo1: `
<h-card>
  <h-card-header>
    <h-card-header-text text="Vue CLI 3" desc="Usage Plugins GUI" />
    <h-card-header-menu>
      <h-menu-dropdown rtl icon="fas fa-ellipsis-v" textcolor="text-black">
        <h-menu-dropdown-item icon="fas fa-check-circle" text="You are correct." />
        <h-menu-dropdown-item icon="fas fa-handshake" text="You are in good hands"/>
      </h-menu-dropdown>
    </h-card-header-menu>
  </h-card-header>
  <h-card-media>
    <h-youtube-video :width="340" :height="220" src="https://www.youtube.com/embed/nSmMkeNjjPg"/>
  </h-card-media>
</h-card>
      `,
      card2: `
<h-card style="width:340px;">
  <h-card-media>
    <h-media-img img="img/Nallah_Sindh.jpg"/>
  </h-card-media>
  <h-card-header avatar="avatar/Kostenlose.jpg">
    <h-card-header-text text="River"  desc="Beautifull place" />
  </h-card-header>
  <h-card-text>
    span A river in the Ganderbal district of Jammu and Kashmir state of India.
  </h-card-text>
  <h-card-actions>
    <h-card-buttons>
      <h-btn textbutton text="explore"/>
      <h-btn textbutton text="share"/>
    </h-card-buttons>
    <h-card-icons>
      <h-btn textbutton> <h-fa-icon icon="fas fa-heart"/> </h-btn>
      <h-btn textbutton> <h-fa-icon icon="fas fa-share-alt"/> </h-btn>
    </h-card-icons>
  </h-card-actions>
</h-card>
      `,
      cardScannable: `
<div class="flex flex-wrap">
  <h-card style="width:256px">
    <h-card-media>
      <h-media-img img="img/90minute.png"/>
    </h-card-media>
    <h-card-header>
      <h-card-header-text text="90th minute" desc="4.31 MB"/>
    </h-card-header>
  </h-card>

  <h-card style="width:256px">
    <h-card-media>
      <h-media-img img="img/breakpoint.png"/>
    </h-card-media>
    <h-card-header>
      <h-card-header-text text="Break point"  desc="5.12 MB"/>
    </h-card-header>
  </h-card>
</div>
<div class="flex flex-wrap">
  <h-card style="width:256px">
    <h-card-media>
      <h-media-img img="img/matchday.png"/>
    </h-card-media>
    <h-card-header>
      <h-card-header-text text="Matchday"  desc="2.18 MB"/>
    </h-card-header>
  </h-card>

  <h-card style="width:256px">
    <h-card-media>
      <h-media-img img="img/bluerun.png"/>
    </h-card-media>
    <h-card-header>
      <h-card-header-text text="Blue run"  desc="3.33 MB"/>
    </h-card-header>
  </h-card>
</div>
      `,
      cardDistinction: `
<div class="flex flex-justify-center boxshadow h-ma-md" style="width:380px;">
  .flex.flex-column.flex-wrap
    div.h-ma-md(style="width:360px; height: 200px;")
      <h-card>
        <h-card-media>
          <h-media-img style="width:360px; height: 200px;"  img="img/90minute.png">
            <h-media-text class="flex-items-end" text="90th minute" desc="4.31 MB"/>
          </h-media-img>
        </h-card-media>
      </h-card>

    div.h-ma-md.flex.flex-items-center(style="width:360px; height: 200px;")
      <h-card>
        <h-card-media>
          <h-media-img style="width:170px; height: 128px;" img="img/bluerun.png">
            <h-media-text class="flex-items-end" text="Blue run" desc="3.33 MB"/>
          </h-media-img>
        </h-card-media>
      </h-card>

      <h-card>
        <h-card-media>
          <h-media-img style="width:170px; height: 192px;"  img="img/breakpoint.png">
            <h-media-text class="flex-items-center" text="Break point"  desc="5.12 MB"/>
          </h-media-img>
        </h-card-media>
      </h-card>

    div.h-ma-md(style="width:360px; height: 200px;")
      <h-card>
        <h-card-media>
          <h-media-img style="width:360px; height: 200px;" img="img/matchday.png">
            <h-media-text class="flex-items-center flex-justify-center" text="Match day" desc="2.18 MB"/>
          </h-media-img>
        </h-card-media>
      </h-card>
</div>      
      `
    }
  }
}
</script>
