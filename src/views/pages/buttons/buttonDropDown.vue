<template>
  <h-page-content padding>

    <div class="text-h4">Button Dropdown</div>

    <comp-code class="h-mt-lg" title="Options" :code="containedButtons">
      <div class="column exOptions">
        <div class="col">
          <h-btn-dropdown
            text="Options"
            drop-down-icon="fas fa-caret-down"
            bg-color="bg-primary"
            text-color="text-white"
            v-model="text"
            @click="text = true"
          >
            <div class="flex flex-column">
              <h-list style="width: 150px">
                <h-list-item>
                  <h-list-item-content>
                    <h-list-item-text title="Item 1"/>
                  </h-list-item-content>
                </h-list-item>
                <h-list-item>
                  <h-list-item-content>
                    <h-list-item-text title="Item 2"/>
                  </h-list-item-content>
                </h-list-item>
                <h-list-item>
                  <h-list-item-content>
                    <h-list-item-text title="Item 3"/>
                  </h-list-item-content>
                </h-list-item>
              </h-list>
            </div>
          </h-btn-dropdown>
        </div>

        <div class="col">
          <h-btn-dropdown
            text="Text and Icon"
            drop-down-icon="fas fa-caret-down"
            bg-color="bg-primary"
            text-color="text-white"
            v-model="texticon"
            @click="texticon = true"
          >
            <div class="flex flex-column">
              <h-list style="width: 150px">
                <h-list-item>
                  <h-list-item-content>
                    <h-list-item-text title="Item 1"/>
                  </h-list-item-content>
                </h-list-item>
                <h-list-item>
                  <h-list-item-content>
                    <h-list-item-text title="Item 2"/>
                  </h-list-item-content>
                </h-list-item>
                <h-list-item>
                  <h-list-item-content>
                    <h-list-item-text title="Item 3"/>
                  </h-list-item-content>
                </h-list-item>
              </h-list>
            </div>
          </h-btn-dropdown>
        </div>

        <div class="col">
          <h-btn-dropdown
            text="Text and Avatar"
            drop-down-icon="fas fa-caret-down"
            bg-color="bg-primary"
            text-color="text-white"
            v-model="textavatar"
            @click="textavatar = true"
          >
            <div class="flex flex-column">
              <h-list style="width: 150px">
                <h-list-item>
                  <h-list-item-content>
                    <h-list-item-text title="Item 1"/>
                  </h-list-item-content>
                </h-list-item>
                <h-list-item>
                  <h-list-item-content>
                    <h-list-item-text title="Item 2"/>
                  </h-list-item-content>
                </h-list-item>
                <h-list-item>
                  <h-list-item-content>
                    <h-list-item-text title="Item 3"/>
                  </h-list-item-content>
                </h-list-item>
              </h-list>
            </div>
          </h-btn-dropdown>
        </div>

        <div class="col">
          <h-btn-dropdown
            text="Text and Img"
            drop-down-icon="fas fa-caret-down"
            bg-color="bg-primary"
            text-color="text-white"
            v-model="textimg"
            @click="textimg = true"
          >
            <div class="flex flex-column">
              <h-list style="width: 150px">
                <h-list-item>
                  <h-list-item-content>
                    <h-list-item-text title="Item 1"/>
                  </h-list-item-content>
                </h-list-item>
                <h-list-item>
                  <h-list-item-content>
                    <h-list-item-text title="Item 2"/>
                  </h-list-item-content>
                </h-list-item>
                <h-list-item>
                  <h-list-item-content>
                    <h-list-item-text title="Item 3"/>
                  </h-list-item-content>
                </h-list-item>
              </h-list>
            </div>
          </h-btn-dropdown>
        </div>
      </div>
    </comp-code>

    <comp-code class="h-mt-lg" title="Profile" :code="outlinedButtons">
      <h-btn-dropdown
        text="Profile"
        drop-down-icon="fas fa-caret-down"
        bg-color="bg-primary"
        text-color="text-white"
        v-model="showProfile"
        @click="showProfile = true"
      >
        <template v-slot:content>
        </template>
        <div class="flex h-pa-sm">
          <div class="flex flex-items-center"><h-avatar src="avatar/Eduard.jpg" size="72px"/></div>
          <div class="flex flex-column h-ml-sm">
            <div class="text-body1">My Profile</div>
            <h-btn contained bg-color="bg-primary" text-color="text-white" text="Logout"/>
          </div>
        </div>
      </h-btn-dropdown>
    </comp-code>

  </h-page-content>
</template>

<script>

import mxButtonGroup from './mxButtonGroup'

export default {
  mixins: [mxButtonGroup],
  components: {
  },
  data () {
    return {
      text: false,
      texticon: false,
      textavatar: false,
      textimg: false,
      showProfile: false
    }
  },
  methods: {
  }
}
</script>

<style scoped>
.exOptions > div:not(:last-child) {
  margin-bottom: 10px;
}
</style>
