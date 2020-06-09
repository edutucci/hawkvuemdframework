<template>
  <page-layout ref="pl" title="Banners">
            <template v-slot:components>
            <div ref="banner-standard" />
            <comp-code class="h-mt-md" title="Standard" :code="ex1">
              <h-banner class="h-mt-md">
                <template
                  v-slot:text
                >Your password was updated on your other device. Please sign again.</template>

                <template v-slot:buttons>
                  <h-btn
                    text-button
                    caps
                    text="continue as a guest"
                    text-color="text-primary"
                    bg-color="bg-primary"
                  />
                  <h-btn
                    text-button
                    caps
                    text="sign in"
                    text-color="text-primary"
                    bg-color="bg-primary"
                  />
                </template>
              </h-banner>

              <h-banner class="h-mt-md border-radius">
                <template v-slot:text>
                  <div class="row align-items-center">
                    <div class="col-auto">
                      <h-icon icon="signal_wifi_off" />
                    </div>
                    <div class="col">You have lost connection to the internet.This app is offline.</div>
                  </div>
                </template>

                <template v-slot:buttons>
                  <h-btn
                    text-button
                    caps
                    text="turn on wifi"
                    text-color="text-primary"
                    bg-color="bg-primary"
                  />
                </template>
              </h-banner>

              <h-banner wide class="h-mt-md">
                <template v-slot:text>We can't save your edits while you are in offline mode.</template>

                <template v-slot:buttons>
                  <h-btn
                    text-button
                    caps
                    text="get online"
                    text-color="text-primary"
                    bg-color="bg-primary"
                  />
                </template>
              </h-banner>
            </comp-code>

            <div ref="banner-bgcolor" />
            <comp-code class="h-mt-md" title="Background Color" :code="ex2">
              <h-banner class="h-mt-md bg-primary text-white">
                <template v-slot:text>Sign in to find your saved recipes.</template>

                <template v-slot:buttons>
                  <h-btn
                    contained
                    caps
                    text="continue as a guest"
                    text-color="text-white"
                    bg-color="bg-primary"
                  />
                  <h-btn
                    contained
                    caps
                    text="sign in"
                    text-color="text-white"
                    bg-color="bg-primary"
                  />
                </template>
              </h-banner>

              <h-banner wide class="h-mt-md bg-purple600 text-white border-radius">
                <template v-slot:text>Posivibes is offline.</template>

                <template v-slot:buttons>
                  <h-btn
                    contained
                    caps
                    text="turn on wifi"
                    text-color="text-white"
                    bg-color="bg-purple600"
                  />
                </template>
              </h-banner>
            </comp-code>
            <tabs-help
              class="h-mt-md"
              :properties="helpTopics.properties"
              :events="helpTopics.events"
            />
            </template>
    <template v-slot:help>

        <list-help>
          <h-list>
            <h-list-header text="Styles" />
            <h-list-item @click="goToElement('banner-standard')">
              <h-list-item-content>
                <h-list-item-text title="Standard"></h-list-item-text>
              </h-list-item-content>
            </h-list-item>
            <h-list-item @click="goToElement('banner-bgcolor')">
              <h-list-item-content>
                <h-list-item-text title="Background Color"></h-list-item-text>
              </h-list-item-content>
            </h-list-item>
          </h-list>
        </list-help>

    </template>
  </page-layout>
</template>

<script>
import viewport from "../../../components/others/viewport"
import helpTopics from "./help";

import PageLayout from '../pageLayout';

export default {
  components: {PageLayout},
  data() {
    return {
      showDrawer: true,
      helpTopics: {
        properties: [],
        events: []
      },
      ex1: `
<h-banner class="h-mt-md">
  <template v-slot:text>
    Your password was updated on your other device. Please sign again.
  </template>

  <template v-slot:buttons>
    <h-btn text-button caps text="continue as a guest"
      text-color="text-primary" bg-color="bg-primary"/>
    <h-btn text-button caps text="sign in" text-color="text-primary"
      bg-color="bg-primary"/>
  </template>

</h-banner>

<h-banner class="h-mt-md border-radius">
  <template v-slot:text>
    <div class="row align-items-center">
      <div class="col-auto">
        <h-icon icon="signal_wifi_off"/>
      </div>
      <div class="col">
        You have lost connection to the internet.This app is offline.
      </div>
    </div>
  </template>

  <template v-slot:buttons>
    <h-btn text-button caps text="turn on wifi"
      text-color="text-primary" bg-color="bg-primary"/>
  </template>
</h-banner>

<h-banner wide class="h-mt-md">
  <template v-slot:text>
    We can't save your edits while you are in offline mode.
  </template>

  <template v-slot:buttons>
    <h-btn text-button caps text="get online"
      text-color="text-primary" bg-color="bg-primary"/>
  </template>
</h-banner>
`,
      ex2: `
<h-banner class="h-mt-md bg-primary text-white">
  <template v-slot:text>
    Sign in to find your saved recipes.
  </template>

  <template v-slot:buttons>
    <h-btn contained caps text="continue as a guest"
      text-color="text-white" bg-color="bg-primary"/>
    <h-btn contained caps text="sign in"
      text-color="text-white"  bg-color="bg-primary"/>
  </template>

</h-banner>

<h-banner wide class="h-mt-md bg-purple600 text-white
  border-radius">
  <template v-slot:text>
  Posivibes is offline.
  </template>

  <template v-slot:buttons>
    <h-btn contained caps text="turn on wifi"
      text-color="text-white" bg-color="bg-purple600"/>
  </template>
</h-banner>
`
    };
  },
  mounted() {
    this.helpTopics.properties = helpTopics.properties;
    this.helpTopics.events = helpTopics.events;

    this.checkMainBodyWidth()
  },
  methods: {
    checkMainBodyWidth () {
      let value = viewport.mainBodyWidth()
      if (value < 961) {
        this.showDrawer = false
      }
    },
    goToElement(refName) {
      viewport.goToElement(this.$refs[refName]);
      this.$refs.pl.goToElement(this.$refs[refName]);
    },
    pageResize(value) {
      this.$refs.navHelp.onResize(value);
    }
  }
};
</script>
