<template>
  <page-layout ref="pl" title="Tabs">
    <template v-slot:components>
      <div ref="tab-hor"/>
      <comp-code class="h-mt-md" title="Horizontal Tabs" :code="exHorTabs"
        :script="exHorTabsScript" javascript
      >
        <div class="border border-primary border-radius" style="height: 150px;">
          <h-tabs v-model="horTab" bg-color="bg-primary" text-color="text-white">
            <h-tab name="home" text="HOME">
              <div class="row align-items-center full-height">
                <div class="col-auto h-ma-sm">
                  <h-icon icon="fas fa-home" size="40px"/>
                </div>
                <div class="col">
                  <div class="text-h5">Home</div>
                  <div class="text-body1">Tab home.</div>
                </div>
              </div>
            </h-tab>
            <h-tab name="profile" text="PROFILE">
              <div class="row align-items-center full-height">
                <div class="col-auto h-ma-sm">
                  <h-image avatar src="avatar/Penguin.png" size="48px"/>
                </div>
                <div class="col">
                  <div class="text-h5">Profile</div>
                  <div class="text-body1">I am your penguin.</div>
                </div>
              </div>
            </h-tab>
            <h-tab name="settings" text="SETTINGS">
              <div class="row align-items-center full-height">
                <div class="col-auto h-ma-sm">
                  <h-icon icon="fas fa-cog" size="40px"/>
                </div>
                <div class="col">
                  <div class="text-h5">Settings</div>
                  <div class="text-body1">Tab Settings.</div>
                </div>
              </div>
            </h-tab>
            <h-tab name="mail" text="MAIL">
              <div class="row align-items-center full-height">
                <div class="col-auto h-ma-sm">
                  <h-icon icon="fas fa-envelope" size="40px"/>
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
          <h-tabs v-model="horTab1" bg-color="bg-secondary" text-color="text-white">
            <h-tab name="games" text="GAMES">
              <div class="row align-items-center full-height">
                <div class="col-auto text-center h-ma-sm">
                  <h-icon icon="fas fa-gamepad" size="60px"/>
                  <div class="text-body1">Games</div>
                </div>
                <div class="col h-pl-sm">
                  <div class="row justify-center">
                    <div class="col-auto">
                      <h-image src="img/game-soccer.jpeg" style="width:150px;height:100px"/>
                    </div>
                    <div class="col-auto h-ml-sm">
                      <h-image src="img/Rainbow-Six-Siege-3.jpg" style="width:150px;height:100px"/>
                    </div>
                  </div>
                </div>
              </div>
            </h-tab>
            <h-tab name="books" text="BOOKS">
              <div class="row align-items-center full-height">
                <div class="col-auto text-center h-ma-sm">
                  <h-icon icon="fas fa-book" size="60px"/>
                  <div class="text-body1">Books</div>
                </div>
                <div class="col h-pl-sm">
                  <div class="row justify-center">
                    <div class="col-auto">
                      <h-image src="img/bookhtmlcss3.jpeg" style="width:150px;height:100px"/>
                    </div>
                  </div>
                </div>
              </div>
            </h-tab>
            <h-tab name="videos" text="VIDEOS">
              <div class="row align-items-center full-height">
                <div class="col-auto text-center h-ma-sm">
                  <h-icon icon="fas fa-video" size="60px"/>
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

      </comp-code>

      <div ref="tab-ver"/>
      <comp-code class="h-mt-md" title="Vertical Tabs" :code="exVerTabs"
        :script="exHorTabsScript" javascript
      >
        <div class="border border-primary border-radius" style="height: 150px;">
          <h-tabs vertical v-model="verTab" bg-color="bg-primary" text-color="text-white">
            <h-tab name="home" text="HOME">
              <div class="row align-items-center full-height">
                <div class="col-auto h-ma-sm">
                  <h-icon icon="fas fa-home" size="40px"/>
                </div>
                <div class="col">
                  <div class="text-h5">Home</div>
                  <div class="text-body1">Tab home.</div>
                </div>
              </div>
            </h-tab>
            <h-tab name="profile" text="PROFILE">
              <div class="row align-items-center full-height">
                <div class="col-auto h-ma-sm">
                  <h-image avatar src="avatar/Penguin.png" size="48px"/>
                </div>
                <div class="col">
                  <div class="text-h5">Profile</div>
                  <div class="text-body1">I am your penguin.</div>
                </div>
              </div>
            </h-tab>
            <h-tab name="settings" text="SETTINGS">
              <div class="row align-items-center full-height">
                <div class="col-auto h-ma-sm">
                  <h-icon icon="fas fa-cog" size="40px"/>
                </div>
                <div class="col">
                  <div class="text-h5">Settings</div>
                  <div class="text-body1">Tab Settings.</div>
                </div>
              </div>
            </h-tab>
            <h-tab name="mail" text="MAIL">
              <div class="row align-items-center full-height">
                <div class="col-auto h-ma-sm">
                  <h-icon icon="fas fa-envelope" size="40px"/>
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
          <h-tabs vertical v-model="verTab1" bg-color="bg-secondary" text-color="text-white">
            <h-tab name="games" text="GAMES">
              <div class="row align-items-center full-height">
                <div class="col-auto text-center h-ma-sm">
                  <h-icon icon="fas fa-gamepad" size="60px"/>
                  <div class="text-body1">Games</div>
                </div>
                <div class="col h-pl-sm">
                  <div class="row justify-center">
                    <div class="col-auto">
                      <h-image src="img/game-soccer.jpeg" style="width:150px;height:100px"/>
                    </div>
                    <div class="col-auto h-ml-sm">
                      <h-image src="img/Rainbow-Six-Siege-3.jpg" style="width:150px;height:100px"/>
                    </div>
                  </div>
                </div>
              </div>
            </h-tab>
            <h-tab name="books" text="BOOKS">
              <div class="row align-items-center full-height">
                <div class="col-auto text-center h-ma-sm">
                  <h-icon icon="fas fa-book" size="60px"/>
                  <div class="text-body1">Books</div>
                </div>
                <div class="col h-pl-sm">
                  <div class="row justify-center">
                    <div class="col-auto">
                      <h-image src="img/bookhtmlcss3.jpeg" style="width:150px;height:100px"/>
                    </div>
                  </div>
                </div>
              </div>
            </h-tab>
            <h-tab name="videos" text="VIDEOS">
              <div class="row align-items-center full-height">
                <div class="col-auto text-center h-ma-sm">
                  <h-icon icon="fas fa-video" size="60px"/>
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

      </comp-code>

      <tabs-help
        class="h-mt-md"
        title="Tab Help"
        :properties="helpTopics.tabProperties"
        :events="helpTopics.tabEvents"
      />

      <tabs-help
        class="h-mt-md"
        title="Tabs Help"
        :properties="helpTopics.tabsProperties"
        :events="helpTopics.tabsEvents"
      />
    </template>

    <template v-slot:help>
      <list-help>
        <h-list>
          <h-list-header text="Layout"/>
          <h-list-item @click="goToElement('tab-hor')">
            <h-list-item-content>
              <h-list-item-text title="Horizontal"></h-list-item-text>
            </h-list-item-content>
          </h-list-item>
          <h-list-item @click="goToElement('tab-ver')">
            <h-list-item-content>
              <h-list-item-text title="Vertical"></h-list-item-text>
            </h-list-item-content>
          </h-list-item>
        </h-list>
      </list-help>
    </template>
  </page-layout>

</template>

<script>

import PageLayout from '../pageLayout'
import helpTopics from './help'

export default {
  components: {
    PageLayout
  },
  data () {
    return {
      showDrawer: true,
      helpTopics: {
        tabProperties: [],
        tabEvents: [],
        tabsProperties: [],
        tabsEvents: []
      },
      horTab: 'profile',
      horTab1: 'games',
      verTab: 'profile',
      verTab1: 'books',
      exHorTabs: `
<div class="border border-primary border-radius" style="height: 150px;">
  <h-tabs v-model="horTab" bg-color="bg-primary" text-color="text-white">
    <h-tab name="home" text="HOME">
      <div class="row align-items-center full-height">
        <div class="col-auto h-ma-sm">
          <h-icon icon="fas fa-home" size="40px"/>
        </div>
        <div class="col">
          <div class="text-h5">Home</div>
          <div class="text-body1">Tab home.</div>
        </div>
      </div>
    </h-tab>
    <h-tab name="profile" text="PROFILE">
      <div class="row align-items-center full-height">
        <div class="col-auto h-ma-sm">
          <h-image avatar src="avatar/Penguin.png" size="48px"/>
        </div>
        <div class="col">
          <div class="text-h5">Profile</div>
          <div class="text-body1">I am your penguin.</div>
        </div>
      </div>
    </h-tab>
    <h-tab name="settings" text="SETTINGS">
      <div class="row align-items-center full-height">
        <div class="col-auto h-ma-sm">
          <h-icon icon="fas fa-cog" size="40px"/>
        </div>
        <div class="col">
          <div class="text-h5">Settings</div>
          <div class="text-body1">Tab Settings.</div>
        </div>
      </div>
    </h-tab>
    <h-tab name="mail" text="MAIL">
      <div class="row align-items-center full-height">
        <div class="col-auto h-ma-sm">
          <h-icon icon="fas fa-envelope" size="40px"/>
        </div>
        <div class="col">
          <div class="text-h5">Mail</div>
          <div class="text-body1">Mail body.</div>
        </div>
      </div>
    </h-tab>
  </h-tabs>
</div>

<div class="border border-primary border-radius h-mt-md"
  style="height: 200px;"
>
  <h-tabs v-model="horTab1" bg-color="bg-secondary"
    text-color="text-white"
  >
    <h-tab name="games" text="GAMES">
      <div class="row align-items-center full-height">
        <div class="col-auto text-center h-ma-sm">
          <h-icon icon="fas fa-gamepad" size="60px"/>
          <div class="text-body1">Games</div>
        </div>
        <div class="col h-pl-sm">
          <div class="row justify-center">
            <div class="col-auto">
              <h-image src="img/game-soccer.jpeg"
                style="width:150px;height:100px"/>
            </div>
            <div class="col-auto h-ml-sm">
              <h-image src="img/Rainbow-Six-Siege-3.jpg"
                style="width:150px;height:100px"/>
            </div>
          </div>
        </div>
      </div>
    </h-tab>
    <h-tab name="books" text="BOOKS">
      <div class="row align-items-center full-height">
        <div class="col-auto text-center h-ma-sm">
          <h-icon icon="fas fa-book" size="60px"/>
          <div class="text-body1">Books</div>
        </div>
        <div class="col h-pl-sm">
          <div class="row justify-center">
            <div class="col-auto">
              <h-image src="img/bookhtmlcss3.jpeg"
                style="width:150px;height:100px"/>
            </div>
          </div>
        </div>
      </div>
    </h-tab>
    <h-tab name="videos" text="VIDEOS">
      <div class="row align-items-center full-height">
        <div class="col-auto text-center h-ma-sm">
          <h-icon icon="fas fa-video" size="60px"/>
          <div class="text-body1">Video</div>
        </div>
        <div class="col h-pl-sm">
          <div class="row justify-center">
            <div class="col-auto">
            <h-youtube-video :width="240" :height="140"
              src="https://www.youtube.com/embed/ZSexhaiMKJE"/>
            </div>
          </div>
        </div>
      </div>
    </h-tab>
  </h-tabs>
</div>
`,
      exHorTabsScript: `
export default {
  data () {
    return {
      horTab: 'profile',
      horTab1: 'games'
    }
  }
}
`,
      exVerTabs: `
<div class="border border-primary border-radius"
  style="height: 150px;"
>
  <h-tabs vertical v-model="verTab" bg-color="bg-primary"
    text-color="text-white"
  >
    <h-tab name="home" text="HOME">
      <div class="row align-items-center full-height">
        <div class="col-auto h-ma-sm">
          <h-icon icon="fas fa-home" size="40px"/>
        </div>
        <div class="col">
          <div class="text-h5">Home</div>
          <div class="text-body1">Tab home.</div>
        </div>
      </div>
    </h-tab>
    <h-tab name="profile" text="PROFILE">
      <div class="row align-items-center full-height">
        <div class="col-auto h-ma-sm">
          <h-image avatar src="avatar/Penguin.png" size="48px"/>
        </div>
        <div class="col">
          <div class="text-h5">Profile</div>
          <div class="text-body1">I am your penguin.</div>
        </div>
      </div>
    </h-tab>
    <h-tab name="settings" text="SETTINGS">
      <div class="row align-items-center full-height">
        <div class="col-auto h-ma-sm">
          <h-icon icon="fas fa-cog" size="40px"/>
        </div>
        <div class="col">
          <div class="text-h5">Settings</div>
          <div class="text-body1">Tab Settings.</div>
        </div>
      </div>
    </h-tab>
    <h-tab name="mail" text="MAIL">
      <div class="row align-items-center full-height">
        <div class="col-auto h-ma-sm">
          <h-icon icon="fas fa-envelope" size="40px"/>
        </div>
        <div class="col">
          <div class="text-h5">Mail</div>
          <div class="text-body1">Mail body.</div>
        </div>
      </div>
    </h-tab>
  </h-tabs>
</div>

<div class="border border-primary border-radius h-mt-md"
  style="height: 150px;"
>
  <h-tabs vertical v-model="verTab1" bg-color="bg-secondary"
    text-color="text-white"
  >
    <h-tab name="games" text="GAMES">
      <div class="row align-items-center full-height">
        <div class="col-auto text-center h-ma-sm">
          <h-icon icon="fas fa-gamepad" size="60px"/>
          <div class="text-body1">Games</div>
        </div>
        <div class="col h-pl-sm">
          <div class="row justify-center">
            <div class="col-auto">
              <h-image src="img/game-soccer.jpeg"
                style="width:150px;height:100px"/>
            </div>
            <div class="col-auto h-ml-sm">
              <h-image src="img/Rainbow-Six-Siege-3.jpg"
                style="width:150px;height:100px"/>
            </div>
          </div>
        </div>
      </div>
    </h-tab>
    <h-tab name="books" text="BOOKS">
      <div class="row align-items-center full-height">
        <div class="col-auto text-center h-ma-sm">
          <h-icon icon="fas fa-book" size="60px"/>
          <div class="text-body1">Books</div>
        </div>
        <div class="col h-pl-sm">
          <div class="row justify-center">
            <div class="col-auto">
              <h-image src="img/bookhtmlcss3.jpeg"
                style="width:150px;height:100px"/>
            </div>
          </div>
        </div>
      </div>
    </h-tab>
    <h-tab name="videos" text="VIDEOS">
      <div class="row align-items-center full-height">
        <div class="col-auto text-center h-ma-sm">
          <h-icon icon="fas fa-video" size="60px"/>
          <div class="text-body1">Video</div>
        </div>
        <div class="col h-pl-sm">
          <div class="row justify-center">
            <div class="col-auto">
            <h-youtube-video :width="240" :height="140"
              src="https://www.youtube.com/embed/ZSexhaiMKJE"/>
            </div>
          </div>
        </div>
      </div>
    </h-tab>
  </h-tabs>
</div>
`,
      exVerTabsScript: `
export default {
  data () {
    return {
      verTab: 'profile',
      verTab1: 'books'
    }
  }
}
`
    }
  },
  mounted () {
    this.helpTopics.tabProperties = helpTopics.tabProperties
    this.helpTopics.tabEvents = helpTopics.tabEvents
    this.helpTopics.tabsProperties = helpTopics.tabsProperties
    this.helpTopics.tabsEvents = helpTopics.tabsEvents
  },
  methods: {
    tabChange (value) {
      console.log('tab change name: ' + value)
    },
    goToElement (refName) {
      this.$refs.pl.goToElement(this.$refs[refName])
    }
  }
}
</script>
