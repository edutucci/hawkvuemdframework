<template>
  <h-page-content padding
    @onResize="pageResize"
    @mainLayoutDrawerIsOpened="showDrawer = false"
  >
    <div class="row ">
      <div class="col">
        <div class="row position-sticky bg-white">
          <div class="col text-h4">
            Dialog
          </div>
          <!-- <div class="col-auto">
            <h-image src="imgIcons/png/icon-help.png" @click="showDrawer = !showDrawer"/>
          </div> -->
        </div>
        <div class="row">
          <div class="col">

            <comp-code class="h-mt-lg" title="Modal Content" :code="modalContent" :script="modalContentScript"
              javascript
            >
              <div>
                <h-btn contained text="Modal Content" @click="openModal=true"/>
              </div>

              <h-dialog modal v-model="openModal" title="Modal Content" show-title-bar>
                <div class="flex flex-column flex-justify-center" style="width: 400px;">
                  <div class="h-pa-sm">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.
                  </div>
                  <div class="flex flex-justify-center h-pa-md">
                    <h-btn contained text="Close" @click="openModal=false"/>
                  </div>
                </div>
              </h-dialog>
            </comp-code>

            <comp-code class="h-mt-lg" title="Confirm"  :code="modalConfirm" :script="modalConfirmScript"
              javascript
            >
              <div>
                <h-btn contained text="Confirm" @click="openModal2=true"/>
              </div>

              <h-dialog v-model="openModal2" title="Do you want do delete file" show-title-bar>
                <div class="flex flex-column flex-justify-center h-pa-md">
                  <div class="flex flex-justify-center">
                    If you delete this file. It will not be possible to undo this action.
                  </div>
                  <div class="flex flex-justify-center h-pa-md">
                    Are you sure you want to delele it?
                  </div>
                  <div class="flex flex-justify-center h-pa-md">
                    <h-btn contained text="OK" @click="openModal2=false"/>
                    <h-btn class="h-pl-sm" contained text="Cancel" @click="openModal2=false"/>
                  </div>
                </div>
              </h-dialog>
            </comp-code>

            <comp-code class="h-mt-lg" title="Components"  :code="modalComponents"
              :script="modalComponentsScript" javascript
            >
              <div>
                <h-btn contained text="Radio Button" @click="openModalRadio=true"/>
                <h-btn contained text="Checkbox" @click="openModalCheckbox=true"/>
              </div>

              <h-dialog v-model="openModalRadio">
                <div class="column justify-center h-pa-md">
                  <div class="col text-h6">
                    What type of movies do you like?
                  </div>
                  <div class="column h-mt-sm">
                    <h-radio v-model="typeMovie" text="Comedy" value="Comedy"/>
                    <h-radio v-model="typeMovie" text="Action" value="Action"/>
                    <h-radio v-model="typeMovie" text="Science" value="Science"/>
                    <h-radio v-model="typeMovie" text="Romance" value="Romance"/>
                  </div>
                  <div class="col">
                    I like of: {{ typeMovie }}
                  </div>
                </div>
              </h-dialog>

              <h-dialog v-model="openModalCheckbox">
                <div class="column justify-center h-pa-md">
                  <div class="col text-h6">
                    Select your favorite colors
                  </div>
                  <div class="column h-mt-sm">
                    <h-checkbox v-model="colors" text="Red" value="Red"/>
                    <h-checkbox v-model="colors" text="Green" value="Green"/>
                    <h-checkbox v-model="colors" text="Blue" value="Blue"/>
                  </div>
                  <div class="col">
                    Your favorites colors: {{ colors }}
                  </div>
                </div>
              </h-dialog>

            </comp-code>

            <tabs-help
              class="h-mt-md"
              :properties="helpTopics.properties"
              :events="helpTopics.events"
            />

          </div>
         </div>
      </div>
    </div>

    <!-- <template v-slot:right>
      <h-nav-drawer ref="navHelp" v-model="showDrawer" side="right">
        <list-help>
          ... codigo de menu de ajuda
        </list-help>
      </h-nav-drawer>
    </template> -->
  </h-page-content>

</template>

<script>

import helpTopics from './help'
import viewport from "../../../components/others/viewport"

export default {
  components: {
  },
  data () {
    return {
      helpTopics: {
        properties: [],
        events: []
      },
      openModal: false,
      openModal2: false,
      openModalRadio: false,
      typeMovie: '',
      openModalCheckbox: false,
      colors: [],
      showDrawer: true,
      modalContent: `
<div>
  <h-btn contained text="Modal Content" @click="openModal=true"/>
</div>

<h-dialog v-model="openModal" title="Modal Content" show-title-bar>
  <div class="flex flex-column flex-justify-center" style="width: 400px;">
    <div class="h-pa-sm">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.
    </div>
    <div class="flex flex-justify-center h-pa-md">
      <h-btn contained text="Close" @click="openModal=false"/>
    </div>
  </div>
</h-dialog>
`,
      modalContentScript: `
export default {
  data () {
    return {
      openModal: false
    }
  }
}
`,
      modalConfirm: `
<div>
  <h-btn contained text="Confirm" @click="openModal2=true"/>
</div>

<h-dialog v-model="openModal2" title="Do you want do delete file" show-title-bar>
  <div class="flex flex-column flex-justify-center h-pa-md">
    <div class="flex flex-justify-center">
      If you delete this file. It will not be possible to undo this action.
    </div>
    <div class="flex flex-justify-center h-pa-md">
      Are you sure you want to delele it?
    </div>
    <div class="flex flex-justify-center h-pa-md">
      <h-btn contained text="OK" @click="openModal2=false"/>
      <h-btn class="h-pl-sm" contained text="Cancel" @click="openModal2=false"/>
    </div>
  </div>
</h-dialog>
`,
      modalConfirmScript: `
export default {
  data () {
    return {
      openModal2: false
    }
  }
}
`,
      modalComponents: `
<div>
  <h-btn contained text="Radio Button" @click="openModalRadio=true"/>
  <h-btn contained text="Checkbox" @click="openModalCheckbox=true"/>
</div>

<h-dialog v-model="openModalRadio">
  <div class="column justify-center h-pa-md">
    <div class="col text-h6">
      What type of movies do you like?
    </div>
    <div class="column h-mt-sm">
      <h-radio v-model="typeMovie" text="Comedy" value="Comedy"/>
      <h-radio v-model="typeMovie" text="Action" value="Action"/>
      <h-radio v-model="typeMovie" text="Science" value="Science"/>
      <h-radio v-model="typeMovie" text="Romance" value="Romance"/>
    </div>
    <div class="col">
      I like of: {{ typeMovie }}
    </div>
  </div>
</h-dialog>

<h-dialog v-model="openModalCheckbox">
  <div class="column justify-center h-pa-md">
    <div class="col text-h6">
      Select your favorite colors
    </div>
    <div class="column h-mt-sm">
      <h-checkbox v-model="colors" text="Red" value="Red"/>
      <h-checkbox v-model="colors" text="Green" value="Green"/>
      <h-checkbox v-model="colors" text="Blue" value="Blue"/>
    </div>
    <div class="col">
      Your favorites colors: {{ colors }}
    </div>
  </div>
</h-dialog>
`,
      modalComponentsScript: `
export default {
  data () {
    return {
      openModalRadio: false,
      typeMovie: '',
      openModalCheckbox: false,
      colors: []
    }
  }
} 
`
    }
  },
  mounted () {
    this.helpTopics.properties = helpTopics.properties
    this.helpTopics.events = helpTopics.events
    this.checkMainBodyWidth()
  },
  methods: {
    checkMainBodyWidth () {
      let value = viewport.mainBodyWidth()
      if (value < 961) {
        this.showDrawer = false
      }
    },
    pageResize (value) {
      this.$refs.navHelp.onResize(value.mainBodyWidth)
    }  
  }
}
</script>
