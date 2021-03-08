<template>
  <h-page padding
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

          <comp-code class="h-mt-lg" title="Components"  :code="modalDialog"
              :script="modalDialogScript" javascript
            >
              <div>
                <h-btn contained text="Modal Dialog" @click="openModal=true"/>
              </div>
              <h-dialog v-model="openModal" >
                <h-card>
                  <h-card-section auto>
                    <div class="row align-items-center">
                      <div class="col text-h5 text-bold">Delete File</div>
                      <div class="col-auto">
                        <h-btn fab size="md" @click="openModal = false">
                          <h-icon icon="fas fa-times"
                            text-color="text-gray" size="20px"
                          />
                        </h-btn>
                      </div>
                    </div>
                  </h-card-section>
                  <h-card-section auto>
                    Are you sure you want to delele it? <br/>
                    If you delete this file. It will not be possible to undo this action.
                  </h-card-section>
                  <h-card-actions class="text-center">
                    <h-btn contained text="OK" @click="openModal=false"/>
                    <h-btn class="h-pl-sm" contained text="Cancel" @click="openModal=false"/>
                  </h-card-actions>
                </h-card>
              </h-dialog>
          </comp-code>

            <comp-code class="h-mt-lg" title="Components"  :code="modalComponents"
              :script="modalComponentsScript" javascript
            >
              <div>
                <h-btn contained text="Confirm" @click="openModalConfirm=true"/>
                <h-btn contained text="Radio Button" @click="openModalRadio=true"/>
                <h-btn contained text="Checkbox" @click="openModalCheckbox=true"/>
              </div>

              <h-dialog v-model="openModalConfirm" >
                <h-card>
                  <h-card-section auto>
                    <div class="col text-h5 text-bold">Delete File</div>
                  </h-card-section>
                  <h-card-section auto>
                    Are you sure you want to delele it? <br/>
                    If you delete this file. It will not be possible to undo this action.
                  </h-card-section>
                  <h-card-actions class="text-center">
                    <h-btn contained text="OK" @click="openModalConfirm=false"/>
                    <h-btn class="h-pl-sm" contained text="Cancel" @click="openModalConfirm=false"/>
                  </h-card-actions>
                </h-card>
              </h-dialog>

              <h-dialog v-model="openModalRadio">
                <h-card>
                  <h-card-section auto>
                    <div class="text-h6">What type of movies do you like?</div>
                  </h-card-section>
                  <h-card-section auto>
                    <div class="column">
                      <h-radio v-model="typeMovie" text="Comedy" value="Comedy"/>
                      <h-radio v-model="typeMovie" text="Action" value="Action"/>
                      <h-radio v-model="typeMovie" text="Science" value="Science"/>
                      <h-radio v-model="typeMovie" text="Romance" value="Romance"/>
                    </div>
                  </h-card-section>
                  <h-card-actions class="text-center">
                    <h-btn contained text="OK" @click="openModalRadio=false"/>
                    <h-btn class="h-pl-sm" contained text="Cancel" @click="openModalRadio=false"/>
                  </h-card-actions>
                </h-card>
              </h-dialog>

              <h-dialog v-model="openModalCheckbox">
                <h-card>
                  <h-card-section auto>
                    <div class="text-h6">Select your favorite colors</div>
                  </h-card-section>
                  <h-card-section auto>
                    <div class="column">
                      <h-checkbox v-model="colors" text="Red" value="Red"/>
                      <h-checkbox v-model="colors" text="Green" value="Green"/>
                      <h-checkbox v-model="colors" text="Blue" value="Blue"/>
                    </div>
                  </h-card-section>
                  <h-card-actions class="text-center">
                    <h-btn contained text="OK" @click="openModalCheckbox=false"/>
                    <h-btn class="h-pl-sm" contained text="Cancel" @click="openModalCheckbox=false"/>
                  </h-card-actions>
                </h-card>
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
  </h-page>

</template>

<script>

import helpTopics from './help';
import viewport from '../../../components/others/viewport';

export default {
  components: {
  },
  data() {
    return {
      helpTopics: {
        properties: [],
        events: [],
      },
      openModal: false,
      openModalConfirm: false,
      openModalRadio: false,
      typeMovie: '',
      openModalCheckbox: false,
      colors: [],
      showDrawer: true,
      modalDialog: `
<div>
  <h-btn contained text="Modal Dialog" @click="openModal=true"/>
</div>
<h-dialog v-model="openModal" >
  <h-card>
    <h-card-section auto>
      <div class="row align-items-center">
        <div class="col text-h5 text-bold">Delete File</div>
        <div class="col-auto">
          <h-btn fab size="md" @click="openModal = false">
            <h-icon icon="fas fa-times"
              text-color="text-gray" size="20px"
            />
          </h-btn>
        </div>
      </div>
    </h-card-section>
    <h-card-section auto>
      Are you sure you want to delele it? <br/>
      If you delete this file. It will not be possible to undo this action.
    </h-card-section>
    <h-card-actions class="text-center">
      <h-btn contained text="OK" @click="openModal=false"/>
      <h-btn class="h-pl-sm" contained text="Cancel" @click="openModal=false"/>
    </h-card-actions>
  </h-card>
</h-dialog>
`,
      modalDialogScript: `
export default {
  data () {
    return {
      openModal: false
    }
  }
}
`,
      modalComponents: `
<div>
  <h-btn contained text="Confirm" @click="openModalConfirm=true"/>
  <h-btn contained text="Radio Button" @click="openModalRadio=true"/>
  <h-btn contained text="Checkbox" @click="openModalCheckbox=true"/>
</div>

<div>
  <h-btn contained text="Confirm" @click="openModalConfirm=true"/>
  <h-btn contained text="Radio Button" @click="openModalRadio=true"/>
  <h-btn contained text="Checkbox" @click="openModalCheckbox=true"/>
</div>

<h-dialog v-model="openModalConfirm">
  <h-card>
    <h-card-section auto>
      <div class="col text-h5 text-bold">Delete File</div>
    </h-card-section>
    <h-card-section auto>
      Are you sure you want to delele it? <br/>
      If you delete this file. It will not be possible to undo this action.
    </h-card-section>
    <h-card-actions class="text-center">
      <h-btn contained text="OK" @click="openModalConfirm=false"/>
      <h-btn class="h-pl-sm" contained text="Cancel" @click="openModalConfirm=false"/>
    </h-card-actions>
  </h-card>
</h-dialog>

<h-dialog v-model="openModalRadio">
  <h-card>
    <h-card-section auto>
      <div class="text-h6">What type of movies do you like?</div>
    </h-card-section>
    <h-card-section auto>
      <div class="column">
        <h-radio v-model="typeMovie" text="Comedy" value="Comedy"/>
        <h-radio v-model="typeMovie" text="Action" value="Action"/>
        <h-radio v-model="typeMovie" text="Science" value="Science"/>
        <h-radio v-model="typeMovie" text="Romance" value="Romance"/>
      </div>
    </h-card-section>
    <h-card-actions class="text-center">
      <h-btn contained text="OK" @click="openModalRadio=false"/>
      <h-btn class="h-pl-sm" contained text="Cancel" @click="openModalRadio=false"/>
    </h-card-actions>
  </h-card>
</h-dialog>

<h-dialog v-model="openModalCheckbox">
  <h-card>
    <h-card-section auto>
      <div class="text-h6">Select your favorite colors</div>
    </h-card-section>
    <h-card-section auto>
      <div class="column">
        <h-checkbox v-model="colors" text="Red" value="Red"/>
        <h-checkbox v-model="colors" text="Green" value="Green"/>
        <h-checkbox v-model="colors" text="Blue" value="Blue"/>
      </div>
    </h-card-section>
    <h-card-actions class="text-center">
      <h-btn contained text="OK" @click="openModalCheckbox=false"/>
      <h-btn class="h-pl-sm" contained text="Cancel" @click="openModalCheckbox=false"/>
    </h-card-actions>
  </h-card>
</h-dialog>`,
      modalComponentsScript: `
export default {
  data () {
    return {
      openModalConfirm: false,
      openModalRadio: false,
      typeMovie: '',
      openModalCheckbox: false,
      colors: []
    }
  }
} 
`,
    };
  },
  mounted() {
    this.helpTopics.properties = helpTopics.properties;
    this.helpTopics.events = helpTopics.events;
    this.checkMainBodyWidth();
  },
  methods: {
    checkMainBodyWidth() {
      const value = viewport.mainBodyWidth();
      if (value < 961) {
        this.showDrawer = false;
      }
    },
    pageResize(value) {
      this.$refs.navHelp.onResize(value.mainBodyWidth);
    },
  },
};
</script>
