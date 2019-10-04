<template>
  <h-page-content>
    <div class="h-pa-sm border border-gray border-radius">
      <div class="text-body1 text-bold">Horizontal Tabs</div>
      <div class="border border-primary border-radius" style="height: 150px;">
        <h-tabs v-model="horTab" bg-color="bg-primary" text-color="text-white">
          <h-tab name="HOME">
            <div class="row align-items-center full-height">
              <div class="col-auto h-ma-sm">
                <h-fa-icon icon="fas fa-home" size="40px"/>
              </div>
              <div class="col">
                <div class="text-h5">Home</div>
                <div class="text-body1">Tab home.</div>
              </div>
            </div>
          </h-tab>
          <h-tab name="PROFILE">
            <div class="row align-items-center full-height">
              <div class="col-auto h-ma-sm">
                <h-avatar src="avatar/Penguin.png" size="48px"/>
              </div>
              <div class="col">
                <div class="text-h5">Profile</div>
                <div class="text-body1">I am your penguin.</div>
              </div>
            </div>
          </h-tab>
          <h-tab name="SETTINGS">
            <div class="row align-items-center full-height">
              <div class="col-auto h-ma-sm">
                <h-fa-icon icon="fas fa-cog" size="40px"/>
              </div>
              <div class="col">
                <div class="text-h5">Settings</div>
                <div class="text-body1">Tab Settings.</div>
              </div>
            </div>
          </h-tab>
          <h-tab name="MAIL">
            <div class="row align-items-center full-height">
              <div class="col-auto h-ma-sm">
                <h-fa-icon icon="fas fa-envelope" size="40px"/>
              </div>
              <div class="col">
                <div class="text-h5">Mail</div>
                <div class="text-body1">Mail body.</div>
              </div>
            </div>
          </h-tab>
        </h-tabs>
      </div>

      <div class="border border-primary border-radius h-mt-md" style="height: 200px;">
        <h-tabs v-model="horTab" bg-color="bg-secondary" text-color="text-white">
          <h-tab name="GAMES">
            <div class="row align-items-center full-height">
              <div class="col-auto text-center h-ma-sm">
                <h-fa-icon icon="fas fa-gamepad" size="60px"/>
                <div class="text-body1">Games</div>
              </div>
              <div class="col h-pl-sm">
                <div class="row justify-center">
                  <div class="col-auto">
                    <h-img src="img/game-soccer.jpeg" width="150px" height="90px"/>
                  </div>
                  <div class="col-auto h-ml-sm">
                    <h-img src="img/Rainbow-Six-Siege-3.jpg" width="150px" height="90px"/>
                  </div>
                </div>
              </div>
            </div>
          </h-tab>
          <h-tab name="BOOKS">
            <div class="row align-items-center full-height">
              <div class="col-auto text-center h-ma-sm">
                <h-fa-icon icon="fas fa-book" size="60px"/>
                <div class="text-body1">Books</div>
              </div>
              <div class="col h-pl-sm">
                <div class="row justify-center">
                  <div class="col-auto">
                    <h-img src="img/bookhtmlcss3.jpeg" width="180px" height="120px"/>
                  </div>
                </div>
              </div>
            </div>
          </h-tab>
          <h-tab name="VIDEOS">
            <div class="row align-items-center full-height">
              <div class="col-auto text-center h-ma-sm">
                <h-fa-icon icon="fas fa-video" size="60px"/>
                <div class="text-body1">Video</div>
              </div>
              <div class="col h-pl-sm">
                <div class="row justify-center">
                  <div class="col-auto">
                   <h-youtube-video :width="240" :height="140" src="https://www.youtube.com/embed/ZSexhaiMKJE"/>
                  </div>
                </div>
              </div>
            </div>
          </h-tab>
        </h-tabs>
      </div>

    </div>

    <div class="h-mt-md h-pa-sm border border-gray border-radius">
      <div class="text-body1 text-bold">Vertical Tabs</div>
      <div class="border border-primary border-radius" style="height: 150px;">
        <h-tabs vertical v-model="verTab" bg-color="bg-primary" text-color="text-white">
          <h-tab name="HOME">
            <div class="row align-items-center full-height">
              <div class="col-auto h-ma-sm">
                <h-fa-icon icon="fas fa-home" size="40px"/>
              </div>
              <div class="col">
                <div class="text-h5">Home</div>
                <div class="text-body1">Tab home.</div>
              </div>
            </div>
          </h-tab>
          <h-tab name="PROFILE">
            <div class="row align-items-center full-height">
              <div class="col-auto h-ma-sm">
                <h-avatar src="avatar/Penguin.png" size="48px"/>
              </div>
              <div class="col">
                <div class="text-h5">Profile</div>
                <div class="text-body1">I am your penguin.</div>
              </div>
            </div>
          </h-tab>
          <h-tab name="SETTINGS">
            <div class="row align-items-center full-height">
              <div class="col-auto h-ma-sm">
                <h-fa-icon icon="fas fa-cog" size="40px"/>
              </div>
              <div class="col">
                <div class="text-h5">Settings</div>
                <div class="text-body1">Tab Settings.</div>
              </div>
            </div>
          </h-tab>
          <h-tab name="MAIL">
            <div class="row align-items-center full-height">
              <div class="col-auto h-ma-sm">
                <h-fa-icon icon="fas fa-envelope" size="40px"/>
              </div>
              <div class="col">
                <div class="text-h5">Mail</div>
                <div class="text-body1">Mail body.</div>
              </div>
            </div>
          </h-tab>
        </h-tabs>
      </div>

      <div class="border border-primary border-radius h-mt-md" style="height: 150px;">
        <h-tabs vertical v-model="verTab" bg-color="bg-secondary" text-color="text-white">
          <h-tab name="GAMES">
            <div class="row align-items-center full-height">
              <div class="col-auto text-center h-ma-sm">
                <h-fa-icon icon="fas fa-gamepad" size="60px"/>
                <div class="text-body1">Games</div>
              </div>
              <div class="col h-pl-sm">
                <div class="row justify-center">
                  <div class="col-auto">
                    <h-img src="img/game-soccer.jpeg" width="150px" height="90px"/>
                  </div>
                  <div class="col-auto h-ml-sm">
                    <h-img src="img/Rainbow-Six-Siege-3.jpg" width="150px" height="90px"/>
                  </div>
                </div>
              </div>
            </div>
          </h-tab>
          <h-tab name="BOOKS">
            <div class="row align-items-center full-height">
              <div class="col-auto text-center h-ma-sm">
                <h-fa-icon icon="fas fa-book" size="60px"/>
                <div class="text-body1">Books</div>
              </div>
              <div class="col h-pl-sm">
                <div class="row justify-center">
                  <div class="col-auto">
                    <h-img src="img/bookhtmlcss3.jpeg" width="180px" height="120px"/>
                  </div>
                </div>
              </div>
            </div>
          </h-tab>
          <h-tab name="VIDEOS">
            <div class="row align-items-center full-height">
              <div class="col-auto text-center h-ma-sm">
                <h-fa-icon icon="fas fa-video" size="60px"/>
                <div class="text-body1">Video</div>
              </div>
              <div class="col h-pl-sm">
                <div class="row justify-center">
                  <div class="col-auto">
                   <h-youtube-video :width="240" :height="140" src="https://www.youtube.com/embed/ZSexhaiMKJE"/>
                  </div>
                </div>
              </div>
            </div>
          </h-tab>
        </h-tabs>
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
      horTab: '',
      verTab: ''
    }
  },
  methods: {
  }
}
</script>
