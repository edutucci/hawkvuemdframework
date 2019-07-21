<template>
  <div>
    <h3>Header, Image and Text</h3>
    <div class="h-pa-sm border border-gray border-radius">
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
          <h-card-media-img img="img/Nallah_Sindh.jpg"/>
        </h-card-media>
        <h-card-text>
          <span> A river in the Ganderbal district of Jammu and Kashmir state of India</span>
        </h-card-text>
      </h-card>
    </div>

    <h3>Card Media</h3>
    <div class="h-pa-sm border border-gray border-radius">
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
    </div>

    <h3>Card Actions</h3>
    <div class="h-pa-sm border border-gray border-radius">
      <h-card style="width:340px;">
        <h-card-media>
          <h-card-media-img img="img/Nallah_Sindh.jpg"/>
        </h-card-media>
        <h-card-header>
          <h-card-header-text avatar="avatar/Kostenlose.jpg" text="River"  desc="Beautifull place" />
        </h-card-header>
        <h-card-text>
          <span> A river in the Ganderbal district of Jammu and Kashmir state of India.</span>
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
    </div>

    <h3>Card Scannable</h3>
    <div class="h-pa-sm border border-gray border-radius">
      <div class="flex flex-wrap">
        <h-card style="width:256px">
        <h-card-media>
          <h-card-media-img img="img/90minute.png"/>
        </h-card-media>
        <h-card-header>
          <h-card-header-text text="90th minute" desc="4.31 MB"/>
        </h-card-header>
        </h-card>

        <h-card class="h-ml-md" style="width:256px">
        <h-card-media>
          <h-card-media-img img="img/breakpoint.png"/>
        </h-card-media>
        <h-card-header>
          <h-card-header-text text="Break point"  desc="5.12 MB"/>
        </h-card-header>
        </h-card>
      </div>
      <div class="flex flex-wrap h-mt-md">
        <h-card style="width:256px">
        <h-card-media>
          <h-card-media-img img="img/matchday.png"/>
        </h-card-media>
        <h-card-header>
          <h-card-header-text text="Matchday"  desc="2.18 MB"/>
        </h-card-header>
        </h-card>

        <h-card class="h-ml-md" style="width:256px">
        <h-card-media>
          <h-card-media-img img="img/bluerun.png" style="width: 256px;"/>
        </h-card-media>
        <h-card-header>
          <h-card-header-text text="Blue run"  desc="3.33 MB"/>
        </h-card-header>
        </h-card>
      </div>
    </div>

    <h3>Card Distinction</h3>
    <div class="h-pa-sm border border-gray border-radius">
      <div class="flex flex-justify-center boxshadow h-ma-md" style="width:380px;">
        <div class="flex flex-column flex-wrap">
          <div class="h-ma-md" style="width:360px; height: 200px;">
            <h-card>
              <h-card-media>
                <h-card-media-img style="width:360px; height: 200px;"  img="img/90minute.png">
                  <h-card-media-text class="flex-items-end" text="90th minute" desc="4.31 MB"/>
                </h-card-media-img>
              </h-card-media>
            </h-card>
          </div>

          <div class="h-ma-md flex flex-items-center" style="width:360px; height: 200px;">
            <h-card>
              <h-card-media>
                <h-card-media-img style="width:170px; height: 128px;" img="img/bluerun.png">
                  <h-card-media-text class="flex-items-end" text="Blue run" desc="3.33 MB"/>
                </h-card-media-img>
              </h-card-media>
            </h-card>

            <h-card>
              <h-card-media>
                <h-card-media-img style="width:170px; height: 170px;"  img="img/breakpoint.png">
                  <h-card-media-text class="flex-items-end" text="Break point"  desc="5.12 MB"/>
                </h-card-media-img>
              </h-card-media>
            </h-card>
          </div>

          <div class="h-ma-md" style="width:360px; height: 200px;">
            <h-card>
              <h-card-media>
                <h-card-media-img style="width:360px; height: 200px;" img="img/matchday.png">
                  <h-card-media-text class="flex-items-center flex-justify-center" text="Match day" desc="2.18 MB"/>
                </h-card-media-img>
              </h-card-media>
            </h-card>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  data () {
    return {

    }
  }
}
</script>
