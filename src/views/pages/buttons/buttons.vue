<template>
  <page-layout ref="pl" title="Buttons">
    <template v-slot:components>
      <div ref="btn-contained" />
      <comp-code class="h-mt-md" title="Contained Buttons" :code="containedButtons">
        <div>
          <div>
            <h-btn
              bg-color="bg-white"
              text-color="text-black"
              text="disabled"
              left-icon="fas fa-envelope"
              disabled
            />
            <h-btn
              bg-color="bg-white"
              text-color="text-black"
              text="white"
              left-icon="fas fa-envelope"
            />
            <h-btn
              rounded
              bg-color="bg-primary"
              text-color="text-white"
              text="primary"
              right-icon="fas fa-envelope"
            />
            <h-btn rounded bg-color="bg-secondary" text-color="text-white" text="secondary" />
            <h-btn bg-color="bg-positive" text-color="text-white" text="positive" />
            <h-btn bg-color="bg-negative" text-color="text-white" text="negative" />
            <h-btn bg-color="bg-info" text-color="text-white" text="info" />
            <h-btn bg-color="bg-warning" text-color="text-white" text="warning" />
          </div>
          <div>
            <div>
              <h-btn
                class="full-width"
                bg-color="bg-primary"
                text-color="text-white"
                text="full width"
                right-icon="fas fa-envelope"
              />
              <h-btn
                class="full-width"
                bg-color="bg-positive"
                text-color="text-white"
                text="full width"
                left-icon="fas fa-envelope"
              />
            </div>
          </div>
        </div>
      </comp-code>
      <div ref="btn-text" />
      <comp-code class="h-mt-md" title="Text Buttons" :code="textbuttons">
        <div>
          <h-btn
            text-button
            bg-color="bg-white"
            text-color="text-black"
            text="disabled"
            disabled
          />
          <h-btn text-button bg-color="bg-primary" text-color="text-primary" text="primary" />
          <h-btn
            text-button
            bg-color="bg-secondary"
            text-color="text-secondary"
            text="secondary"
          />
          <h-btn
            text-button
            bg-color="bg-positive"
            text-color="text-positive"
            text="positive"
          />
          <h-btn
            text-button
            bg-color="bg-negative"
            text-color="text-negative"
            text="negative"
          />
          <h-btn text-button bg-color="bg-info" text-color="text-info" text="info" />
          <h-btn text-button bg-color="bg-warning" text-color="text-warning" text="warning" />
        </div>
        <div>
          <h-btn
            class="full-width"
            text-button
            bg-color="bg-primary"
            text-color="text-primary"
            text="full width"
          />
          <h-btn
            class="full-width"
            text-button
            bg-color="bg-positive"
            text-color="text-positive"
            text="full-width"
          />
        </div>
      </comp-code>

      <div ref="btn-outlined" />
      <comp-code class="h-mt-md" title="Outlined Buttons" :code="outlinedButtons">
        <div>
          <h-btn outlined text="disabled" disabled />
          <h-btn bg-color="bg-primary" outlined text-color="text-primary" text="primary" />
          <h-btn
            bg-color="bg-secondary"
            outlined
            text-color="text-secondary"
            text="secondary"
          />
          <h-btn bg-color="bg-positive" outlined text-color="text-positive" text="positive" />
          <h-btn bg-color="bg-negative" outlined text-color="text-negative" text="negative" />
          <h-btn bg-color="bg-info" outlined text-color="text-info" text="info" />
          <h-btn bg-color="bg-warning" outlined text-color="text-warning" text="warning" />
        </div>

        <div>
          <h-btn
            class="full-width"
            outlined
            bg-color="bg-primary"
            text-color="text-primary"
            text="full width"
          />
          <h-btn
            class="full-width"
            outlined
            bg-color="bg-positive"
            text-color="text-positive"
            text="full width"
          />
        </div>
      </comp-code>

      <div ref="btn-rounded" />
      <comp-code class="h-mt-md" title="Rounded Buttons" :code="roundedButtons">
        <div>
          <h-btn rounded text="disabled" disabled />
          <h-btn outlined rounded text="disabled" disabled />
          <h-btn rounded bg-color="bg-primary" text-color="text-white" text="primary" />
          <h-btn rounded bg-color="bg-secondary" text-color="text-white" text="secondary" />
          <h-btn rounded bg-color="bg-positive" text-color="text-white" text="positive" />
          <h-btn outlined rounded text-color="text-negative" text="negative" />
          <h-btn outlined rounded text-color="text-info" text="info" />
          <h-btn outlined rounded text-color="text-warning" text="warning" />
        </div>

        <div>
          <h-btn
            class="full-width"
            outlined
            rounded
            bg-color="bg-primary"
            text-color="text-primary"
            text="full width"
          />
          <h-btn
            class="full-width"
            outlined
            rounded
            bg-color="bg-positive"
            text-color="text-positive"
            text="full width"
          />
        </div>
      </comp-code>

      <div ref="btn-fab" />
      <comp-code class="h-mt-md" title="FAB Buttons" :code="fabButtons">
        <div>
          <h-btn fab bg-color="bg-primary" size="xl">
            <h-icon icon="fas fa-envelope" text-color="text-white" size="32px" />
          </h-btn>
          <h-btn fab bg-color="bg-primary" size="xl">
            <h-icon icon="fab fa-github" text-color="text-white" size="32px" />
          </h-btn>
          <h-btn fab bg-color="bg-primary" size="xl">
            <h-icon icon="fas fa-map-marker-alt" text-color="text-white" size="32px" />
          </h-btn>
          <h-btn fab bg-color="bg-primary" size="xl">
            <h-icon icon="fas fa-shopping-cart" text-color="text-white" size="32px" />
          </h-btn>
          <h-btn fab bg-color="bg-primary" size="xl">
            <h-icon icon="fas fa-plane" text-color="text-white" size="32px" />
          </h-btn>
        </div>
        <div>
          <h-btn fab bg-color="bg-primary" size="sm">
            <h-icon icon="fas fa-envelope" text-color="text-white" />
          </h-btn>
          <h-btn fab bg-color="bg-primary" size="sm">
            <h-icon icon="fab fa-github" text-color="text-white" />
          </h-btn>
          <h-btn fab bg-color="bg-primary" size="sm">
            <h-icon icon="fas fa-map-marker-alt" text-color="text-white" />
          </h-btn>
          <h-btn fab bg-color="bg-primary" size="sm">
            <h-icon icon="fas fa-shopping-cart" text-color="text-white" />
          </h-btn>
          <h-btn fab bg-color="bg-primary" size="sm">
            <h-icon icon="fas fa-plane" text-color="text-white" />
          </h-btn>
        </div>
      </comp-code>

      <div ref="btn-sizes" />
      <comp-code class="h-mt-md" title="Sizes" :code="btnSizes">
        <div>
          <h-btn bg-color="bg-primary" text-color="text-white" text="xs" size="xs" />
          <h-btn bg-color="bg-primary" text-color="text-white" text="sm" size="sm" />
          <h-btn bg-color="bg-primary" text-color="text-white" text="md" size="md" />
          <h-btn bg-color="bg-primary" text-color="text-white" text="lg" size="lg" />
          <h-btn bg-color="bg-primary" text-color="text-white" text="xl" size="xl" />
        </div>

        <div>
          <h-btn rounded bg-color="bg-primary" text-color="text-white" text="xs" size="xs" />
          <h-btn rounded bg-color="bg-primary" text-color="text-white" text="sm" size="sm" />
          <h-btn rounded bg-color="bg-primary" text-color="text-white" text="md" size="md" />
          <h-btn rounded bg-color="bg-primary" text-color="text-white" text="lg" size="lg" />
          <h-btn rounded bg-color="bg-primary" text-color="text-white" text="xl" size="xl" />
        </div>

        <div>
          <h-btn fab bg-color="bg-primary" size="xs">
            <h-icon icon="fas fa-envelope" text-color="text-white" />
          </h-btn>
          <h-btn fab bg-color="bg-primary" size="sm">
            <h-icon icon="fab fa-github" text-color="text-white" />
          </h-btn>
          <h-btn fab bg-color="bg-primary" size="md">
            <h-icon icon="fas fa-map-marker-alt" text-color="text-white" />
          </h-btn>
          <h-btn fab bg-color="bg-primary" size="lg">
            <h-icon icon="fas fa-shopping-cart" text-color="text-white" />
          </h-btn>
          <h-btn fab bg-color="bg-primary" size="xl">
            <h-icon icon="fas fa-plane" text-color="text-white" size="32px" />
          </h-btn>
        </div>
      </comp-code>

      <div ref="btn-dropdown" />
      <comp-code
        class="h-mt-md"
        title="DropDown Buttons"
        :code="dropdownButtons"
        :script="scriptDropdownButtons"
        javascript
      >
        <div class="row wrap">
          <div class="col-auto">
            <h-btn
              dropdown
              text="Options"
              bg-color="bg-primary"
              text-color="text-white"
              v-model="text"
              @click="text = true"
            >
              <div class="flex flex-column">
                <h-list style="width: 150px">
                  <h-list-item>
                    <h-list-item-content>
                      <h-list-item-text title="Item 1" />
                    </h-list-item-content>
                  </h-list-item>
                  <h-list-item>
                    <h-list-item-content>
                      <h-list-item-text title="Item 2" />
                    </h-list-item-content>
                  </h-list-item>
                  <h-list-item>
                    <h-list-item-content>
                      <h-list-item-text title="Item 3" />
                    </h-list-item-content>
                  </h-list-item>
                </h-list>
              </div>
            </h-btn>
          </div>

          <div class="col-auto">
            <h-btn
              dropdown
              class="h-ml-sm"
              left-icon="fas fa-home"
              text="Icons"
              bg-color="bg-primary"
              text-color="text-white"
              v-model="icon"
              @click="icon = true"
            >
              <div class="row">
                <h-btn text-button left-icon="fas fa-align-left" />
                <h-btn text-button left-icon="fas fa-align-center" class="h-ml-xs" />
                <h-btn text-button left-icon="fas fa-align-right" class="h-ml-xs" />
                <h-btn text-button left-icon="fas fa-align-justify" class="h-ml-xs" />
              </div>
            </h-btn>
          </div>

          <div class="col-auto">
            <h-btn
              dropdown
              text-button
              size="sm"
              class="h-ml-sm"
              avatar="avatar/AnaArmas.jpg"
              text="Avatar"
              text-color="text-primary"
              v-model="avatar"
              @click="avatar = true"
            >
              <div class="row align-items-center h-pa-sm" style="min-width:150px">
                <div class="col-auto">
                  <h-image avatar src="avatar/AnaArmas.jpg" size="72px" />
                </div>
                <div class="col h-ml-sm">
                  <h-btn text="Profile" bg-color="bg-primary" text-color="text-white" />
                </div>
              </div>
            </h-btn>
          </div>

          <div class="col-auto">
            <h-btn
              dropdown
              outlined
              size="sm"
              class="h-ml-sm"
              img="img/Nallah_Sindh.jpg"
              text="Image"
              text-color="text-primary"
              bg-color="bg-primary"
              v-model="image"
              @click="image = true"
            >
              <div
                class="row align-items-center justify-center h-pa-sm"
                style="min-width:150px"
              >
                <div class="col-auto">
                  <div class="column">
                    <div class="col">
                      <h-image src="img/Nallah_Sindh.jpg" style="width:180px; height:128px" />
                    </div>
                    <div class="col text-body1 text-center text-black">River</div>
                  </div>
                </div>
              </div>
            </h-btn>
          </div>
        </div>
      </comp-code>

      <div ref="btn-links" />
      <comp-code class="h-mt-md" title="Links" :code="linksButtons">
        <h-btn bg-color="bg-primary">
          <h-link
            icon="fab fa-github"
            text="github"
            url="https://github.com/edutucci/hawkframework"
            text-color="text-white"
          />
        </h-btn>

        <h-btn rounded bg-color="bg-primary">
          <h-link
            icon="fab fa-github"
            text="github"
            url="https://github.com/edutucci/hawkframework"
            text-color="text-white"
          />
        </h-btn>

        <h-btn text-button>
          <h-link text="github" url="https://github.com/edutucci/hawkframework" />
        </h-btn>

        <h-btn outlined bg-color="bg-black">
          <h-link
            icon="fab fa-github"
            text="github new window"
            url="https://github.com/edutucci/hawkframework"
            new-window
          />
        </h-btn>

        <h-btn outlined rounded bg-color="bg-black">
          <h-link
            icon="fab fa-github"
            text="github new window"
            url="https://github.com/edutucci/hawkframework"
            new-window
          />
        </h-btn>
      </comp-code>

      <div ref="btn-router" />
      <comp-code class="h-mt-md" title="Router" :code="routerButtons">
        <h-btn bg-color="bg-primary">
          <h-link text="to this page" url="/buttons" text-color="text-white" />
        </h-btn>

        <h-btn rounded bg-color="bg-primary">
          <h-link text="to this page" url="/buttons" text-color="text-white" />
        </h-btn>

        <h-btn text-button>
          <h-link text="to this page" url="/buttons" />
        </h-btn>

        <h-btn outlined bg-color="bg-black">
          <h-link text="to this page" url="/buttons" />
        </h-btn>

        <h-btn outlined rounded bg-color="bg-black">
          <h-link text="to this page" url="/buttons" />
        </h-btn>
      </comp-code>

      <div ref="btn-counter" />
      <comp-code class="h-mt-md" title="Counters" :code="btnCounters">
        <h-btn bg-color="bg-primary" text-color="text-white" text="warning">
          <h-counter bg-color="bg-negative" text-color="text-white">123</h-counter>
        </h-btn>

        <h-btn rounded bg-color="bg-primary" text-color="text-white" text="warning">
          <h-counter bg-color="bg-negative" text-color="text-white">123</h-counter>
        </h-btn>

        <h-btn text-button text-color="text-primary" bg-color="bg-primary" text="primary">
          <h-counter bg-color="bg-negative" text-color="text-white">12</h-counter>
        </h-btn>

        <h-btn outlined text-color="text-primary" bg-color="bg-primary" text="primary">
          <h-counter bg-color="bg-negative" text-color="text-white">12</h-counter>
        </h-btn>

        <h-btn
          outlined
          rounded
          text-color="text-primary"
          bg-color="bg-primary"
          text="primary"
        >
          <h-counter bg-color="bg-negative" text-color="text-white">12</h-counter>
        </h-btn>
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
          <h-list-header text="Types" />
          <h-list-item @click="goToElement('btn-contained')">
            <h-list-item-content>
              <h-list-item-text title="Contained" />
            </h-list-item-content>
          </h-list-item>
          <h-list-item @click="goToElement('btn-text')">
            <h-list-item-content>
              <h-list-item-text title="Text" />
            </h-list-item-content>
          </h-list-item>
          <h-list-item @click="goToElement('btn-outlined')">
            <h-list-item-content>
              <h-list-item-text title="Outlined" />
            </h-list-item-content>
          </h-list-item>
          <h-list-item @click="goToElement('btn-rounded')">
            <h-list-item-content>
              <h-list-item-text title="Rounded" />
            </h-list-item-content>
          </h-list-item>
          <h-list-header text="Additional Types" />
          <h-list-item @click="goToElement('btn-fab')">
            <h-list-item-content>
              <h-list-item-text title="FAB" />
            </h-list-item-content>
          </h-list-item>
          <h-list-item @click="goToElement('btn-sizes')">
            <h-list-item-content>
              <h-list-item-text title="Sizes" />
            </h-list-item-content>
          </h-list-item>
          <h-list-item @click="goToElement('btn-dropdown')">
            <h-list-item-content>
              <h-list-item-text title="Dropdown" />
            </h-list-item-content>
          </h-list-item>
          <h-list-item @click="goToElement('btn-links')">
            <h-list-item-content>
              <h-list-item-text title="Links" />
            </h-list-item-content>
          </h-list-item>
          <h-list-item @click="goToElement('btn-router')">
            <h-list-item-content>
              <h-list-item-text title="Router" />
            </h-list-item-content>
          </h-list-item>
          <h-list-item @click="goToElement('btn-counter')">
            <h-list-item-content>
              <h-list-item-text title="Counter" />
            </h-list-item-content>
          </h-list-item>
        </h-list>
      </list-help>
    </template>
  </page-layout>
</template>

<script>

import PageLayout from "../pageLayout"
import mxButtons from './mxButtons'
import helpTopics from './help'

export default {
   mixins: [mxButtons],
  components: {
    PageLayout
  },
  data() {
    return {
      helpTopics: {
        properties: [],
        events: []
      },

      // models
      text: false,
      icon: false,
      avatar: false,
      image: false,
      tabHelpModel: 'prop'

    };
  },
  mounted () {
    this.helpTopics.properties = helpTopics.properties
    this.helpTopics.events = helpTopics.events
  },
  methods: {
    goToElement(refName) {
      this.$refs.pl.goToElement(this.$refs[refName]);
    }
  }
};
</script>
