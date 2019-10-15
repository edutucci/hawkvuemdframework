<template>
  <h-page-content padding>
    <div class="text-h4">Cards</div>

    <comp-code class="h-mt-lg" title="Header, Image and Text" :code="card1">
      <h-card style="width:340px;">
        <h-card-section>
          <div class="row">
            <div class="col">
              <div class="column">
                <div class="col text-h5">
                  River
                </div>
                <div class="text-caption text-gray">
                  Beautifull place A river in the Ganderbal district
                </div>
              </div>
            </div>
            <div class="col-auto">
              <h-btn-dropdown drop-down-icon="fas fa-ellipsis-v">
                <div class="flex flex-column h-pa-sm">
                  <div class="text-body1">MyProfile</div>
                  <div class="text-body1">MyProfile</div>
                  <div class="text-body1">MyProfile</div>
                </div>
              </h-btn-dropdown>
            </div>
          </div>
        </h-card-section>
        <h-card-media>
          <h-card-media-img img="img/Nallah_Sindh.jpg"/>
        </h-card-media>
        <h-card-section class="text-body1">
          A river in the Ganderbal district of Jammu and Kashmir state of India
        </h-card-section>
      </h-card>
    </comp-code>

    <comp-code class="h-mt-lg" title="Card Media" :code="cardvideo1">
      <h-card>
        <h-card-section>
          <div class="row">
            <div class="col">
              <div class="column">
                <div class="col text-h5">
                  Vue CLI 3
                  </div>
                  <div class="text-caption text-gray">
                    Usage Plugins GUI
                  </div>
                </div>
                </div>
                <div class="col-auto">
                  <h-btn-dropdown drop-down-icon="fas fa-ellipsis-v">
                    <div class="flex flex-column h-pa-sm">
                      <div class="text-body1">MyProfile</div>
                      <div class="text-body1">MyProfile</div>
                      <div class="text-body1">MyProfile</div>
                    </div>
                </h-btn-dropdown>
              </div>
          </div>
        </h-card-section>
        <h-card-media>
          <h-youtube-video :width="340" :height="220" src="https://www.youtube.com/embed/nSmMkeNjjPg"/>
        </h-card-media>
      </h-card>
    </comp-code>

    <comp-code class="h-mt-lg" title="Card Actions" :code="card2">
      <h-card style="width:340px;">
        <h-card-media>
          <h-card-media-img img="img/Nallah_Sindh.jpg"/>
        </h-card-media>
        <h-card-section>
          <div class="row align-items-center">
            <div class="col-auto">
              <h-image avatar src="avatar/Kostenlose.jpg"></h-image>
            </div>
            <div class="col h-ml-sm">
              <div class="column">
                <div class="text-h5">
                  River
                </div>
                <div class="text-caption text-gray">
                  Beautifull place
                </div>
              </div>
            </div>
          </div>
        </h-card-section>
        <h-card-section class="text-body1">
          A river in the Ganderbal district of Jammu and Kashmir state of India.
        </h-card-section>
        <h-card-actions>
          <div class="row">
            <div class="col">
              <h-btn text-button text="explore"/>
              <h-btn text-button text="share"/>
            </div>
            <div class="col-auto">
              <h-btn text-button> <h-fa-icon icon="fas fa-heart"/> </h-btn>
              <h-btn text-button> <h-fa-icon icon="fas fa-share-alt"/> </h-btn>
            </div>
          </div>
        </h-card-actions>
      </h-card>
    </comp-code>

    <comp-code class="h-mt-lg" title="Card Scannable" :code="cardScannable">
      <div class="flex flex-wrap">
        <h-card style="width:256px">
        <h-card-media>
          <h-card-media-img img="img/90minute.png"/>
        </h-card-media>
        <h-card-section>
          <div class="text-h6">90th minute</div>
          <div class="caption">4.31 MB</div>
        </h-card-section>
        </h-card>

        <h-card class="h-ml-md" style="width:256px">
        <h-card-media>
          <h-card-media-img img="img/breakpoint.png"/>
        </h-card-media>
        <h-card-section>
          <div class="text-h6">Break point</div>
          <div class="caption">5.12 MB</div>
        </h-card-section>
        </h-card>
      </div>
      <div class="flex flex-wrap h-mt-md">
        <h-card style="width:256px">
        <h-card-media>
          <h-card-media-img img="img/matchday.png"/>
        </h-card-media>
        <h-card-section>
          <div class="text-h6">Matchday</div>
          <div class="caption">2.18 MB</div>
        </h-card-section>
        </h-card>

        <h-card class="h-ml-md" style="width:256px">
        <h-card-media>
          <h-card-media-img img="img/bluerun.png" style="width: 256px;"/>
        </h-card-media>
        <h-card-section>
          <div class="text-h6">Blue run</div>
          <div class="caption">3.33 MB</div>
        </h-card-section>
        </h-card>
      </div>
    </comp-code>

    <comp-code class="h-mt-lg" title="Card Distinction" :code="cardDistinction">
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

    </comp-code>

    <h1 class="text-primary"> Card Header Text Help</h1>
    <h2 class="text-primary"> Vue Properties</h2>
    <hr>

    <div class="flex">
      <div>
        <h3>Name</h3>
        <div>icon</div>
        <div>avatar</div>
        <div>text</div>
        <div>desc</div>
      </div>
      <div class="h-pl-md">
        <h3>Type</h3>
        <div>String</div>
        <div>String</div>
        <div>String</div>
        <div>String</div>
      </div>
      <div class="h-pl-md">
        <h3 >Description</h3>
        <div>Sets the icon for header</div>
        <div>Sets the avatar for the header</div>
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
        <div>Sets the text for the image in <b>h-card-media-img</b></div>
        <div>Sets the description for the image in <b>h-card-media-img</b></div>
      </div>
    </div>

  </h-page-content>

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
    <h-card-media-img img="img/Nallah_Sindh.jpg"/>
  </h-card-media>
  <h-card-text>
    <span> A river in the Ganderbal district of Jammu and Kashmir state of India</span>
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
`,
      cardScannable: `
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
`,
      cardDistinction: `
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
`
    }
  }
}
</script>
