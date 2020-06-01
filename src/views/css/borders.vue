<template>
  <h-page-content padding
    @onResize="pageResize"
    @mainLayoutDrawerIsOpened="showDrawer = false"
  >
    <div class="row ">
      <div class="col">
        <div class="row position-sticky bg-white">
          <div class="col text-h4">
            <div class="text-h4">Borders / Classes </div>
            <html-table
              bordered cell-separator
              :columns="columns"
              :rows="classesData"
          />


          </div>
          <div class="col-auto">
            <h-image src="imgIcons/png/icon-help.png" @click="showDrawer = !showDrawer"/>
          </div>
        </div>
        <div class="row">
          <div class="col">
            <comp-code class="h-mt-lg" title="Border Sides" :code="bordersides">
      <div class="row align-items-center">
        <div class="bg-white border border-negative col-auto border-1" style="padding: 4px">
          <span class="text-negative">Border All</span>
        </div>
        <div class="bg-white border-left border-black col-auto border-1 h-ml-sm" style="padding: 4px">
          <span class="text-black">Border Left</span>
        </div>
        <div class="bg-white border-right border-primary col-auto border-1 h-ml-sm" style="padding: 4px">
          <span class="text-primary">Border Right</span>
        </div>
        <div class="bg-white border-top border-secondary col-auto border-1 h-ml-sm" style="padding: 4px">
          <span class="text-secondary">Border Top</span>
        </div>
        <div class="bg-white border-bottom border-positive col-auto border-1 h-ml-sm" style="padding: 4px">
          <span class="text-positive">Border Bottom</span>
        </div>
      </div>
    </comp-code>

    <comp-code class="h-mt-lg" title="Border With 1" :code="border1">
      <div class="row align-items-center">
        <div class="bg-black col-auto" style="padding: 4px">
          <div class="bg-black border border-white col-auto border-1" style="padding: 4px">
            <span class="text-white">Border white</span>
          </div>
        </div>
        <div class="bg-white border border-black col-auto border-1 h-ml-sm" style="padding: 4px">
          <span class="text-black">Border Black</span>
        </div>
        <div class="bg-white border border-primary col-auto border-1 h-ml-sm" style="padding: 4px">
          <span class="text-primary">Border Primary</span>
        </div>
        <div class="bg-white border border-secondary col-auto border-1 h-ml-sm" style="padding: 4px">
          <span class="text-secondary">Border Secondary</span>
        </div>
        <div class="bg-white border border-positive col-auto border-1 h-ml-sm" style="padding: 4px">
          <span class="text-positive">Border Positive</span>
        </div>
      </div>
    </comp-code>

    <comp-code class="h-mt-md" title="Border With 2" :code="border2">
      <div class="row">
        <div class="bg-white border border-negative col-auto border-2" style="padding: 4px">
          <span class="text-negative">Border Negative</span>
        </div>
        <div class="bg-white border border-info col-auto border-2 h-ml-sm" style="padding: 4px">
          <span class="text-info">Border Info</span>
        </div>
        <div class="bg-white border border-warning col-auto border-2 h-ml-sm" style="padding: 4px">
          <span class="text-warning">Border Warning</span>
        </div>
        <div class="bg-white border border-gray col-auto border-2 h-ml-sm" style="padding: 4px">
          <span class="text-gray">Border Gray</span>
        </div>
      </div>
    </comp-code>

    <comp-code class="h-mt-lg" title="Border Radius" :code="borderRadius">
      <div class="row">
        <div class="border border-negative col-auto border-2 border-radius" style="padding: 4px">
          <span class="text-negative">Border Negative</span>
        </div>
        <div class="border border-info col-auto border-2 border-radius h-ml-sm" style="padding: 4px">
          <span class="text-info">Border Info</span>
        </div>
        <div class="border border-primary col-auto border-2 border-radius h-ml-sm" style="padding: 4px">
          <span class="text-primary">Border Primary</span>
        </div>
        <div class="border border-warning col-auto border-2 border-radius h-ml-sm" style="padding: 4px">
          <span class="text-warning">Border Warning</span>
        </div>
      </div>
    </comp-code>

    <comp-code class="h-mt-lg" title="Border Rounded" :code="borderRounded">
      <div class="row">
        <div class="border border-negative col-auto border-2 border-rounded" style="padding: 4px">
          <span class="text-negative">Border Negative</span>
        </div>
        <div class="border border-info col-auto border-2 border-rounded h-ml-sm" style="padding: 4px">
          <span class="text-info">Border Info</span>
        </div>
        <div class="border border-primary col-auto border-2 border-rounded h-ml-sm" style="padding: 4px">
          <span class="text-primary">Border Primary</span>
        </div>
        <div class="border border-warning col-auto border-2 border-rounded h-ml-sm" style="padding: 4px">
          <span class="text-warning">Border Warning</span>
        </div>
      </div>
    </comp-code>

    <comp-code class="h-mt-md" title="Types" :code="borderStyles">
      <div class="border border-black border-3 border-dotted text-center">
        border-dotted
      </div>
      <div class="border border-black border-3 border-dashed text-center h-mt-sm">
        border-dashed
      </div>
      <div class="border border-black border-3 border-solid text-center h-mt-sm">
        border-solid
      </div>
      <div class="border border-black border-3 border-double text-center h-mt-sm">
        border-double
      </div>
      <div class="border border-black border-3 border-groove text-center h-mt-sm">
        border-groove
      </div>
      <div class="border border-black border-3 border-ridge text-center h-mt-sm">
        border-ridge
      </div>
      <div class="border border-black border-3 border-inset text-center h-mt-sm">
        border-inset
      </div>
      <div class="border border-black border-3 border-outset text-center h-mt-sm">
        border-outset
         <div ref="btn-types" />
      </div>

    </comp-code>
          </div>
         </div>
      </div>
    </div>
    <div ref="btn-classes" />


    <template v-slot:right>
      <h-nav-drawer ref="navHelp" v-model="showDrawer" side="right">
        <div ref="btn-sides" />
       <list-help>
          <h-list>
            <h-list-header text="Types" />

            <h-list-item @click="goToElement('btn-classes')">
              <h-list-item-content>
                <h-list-item-text title="Classes" />
              </h-list-item-content>
            </h-list-item>

            <h-list-item @click="goToElement('btn-sides')">
              <h-list-item-content>
                <h-list-item-text title="Border Sides"/>
              </h-list-item-content>
            </h-list-item>

            <h-list-item @click="goToElement('btn-types')">
              <h-list-item-content>
                <h-list-item-text title="Border types"/>
              </h-list-item-content>
            </h-list-item>

          </h-list>
        </list-help>
      </h-nav-drawer>
    </template>
  </h-page-content>

</template>

<script>
import viewport from "../../components/others/viewport";

export default {

  data () {
    return {
      showDrawer: true,
      columns: ['Name', 'Description'],
      classesData: [
        { Name: 'Border', Description: 'Applies all border' },
        { Name: 'border-left', Description: 'Applies border for the left side' },
        { Name: 'border-right', Description: 'Applies border for the right side' },
        { Name: 'border-top', Description: 'Applies border for the top side' },
        { Name: 'border-bottom', Description: 'Applies border for the bottom side' },
        { Name: 'no-border', Description: 'Removes all borders' }
      ],
      bordersides: `
<div class="row align-items-center">
  <div class="bg-white border border-negative col-auto border-1" style="padding: 4px">
    <span class="text-negative">Border All</span>
  </div>
  <div class="bg-white border-left border-black col-auto border-1 h-ml-sm" style="padding: 4px">
    <span class="text-black">Border Left</span>
  </div>
  <div class="bg-white border-right border-primary col-auto border-1 h-ml-sm" style="padding: 4px">
    <span class="text-primary">Border Right</span>
  </div>
  <div class="bg-white border-top border-secondary col-auto border-1 h-ml-sm" style="padding: 4px">
    <span class="text-secondary">Border Top</span>
  </div>
  <div class="bg-white border-bottom border-positive col-auto border-1 h-ml-sm" style="padding: 4px">
    <span class="text-positive">Border Bottom</span>
  </div>
</div>
`,
      border1: `
<div class="row align-items-center">
  <div class="bg-black col-auto" style="padding: 4px">
    <div class="bg-black border border-white col-auto border-1" style="padding: 4px">
      <span class="text-white">Border white</span>
    </div>
  </div>
  <div class="bg-white border border-black col-auto border-1 h-ml-sm" style="padding: 4px">
    <span class="text-black">Border Black</span>
  </div>
  <div class="bg-white border border-primary col-auto border-1 h-ml-sm" style="padding: 4px">
    <span class="text-primary">Border Primary</span>
  </div>
  <div class="bg-white border border-secondary col-auto border-1 h-ml-sm" style="padding: 4px">
    <span class="text-secondary">Border Secondary</span>
  </div>
  <div class="bg-white border border-positive col-auto border-1 h-ml-sm" style="padding: 4px">
    <span class="text-positive">Border Positive</span>
  </div>
</div>
`,
      border2: `
<div class="row">
  <div class="bg-white border border-negative col-auto border-2" style="padding: 4px">
    <span class="text-negative">Border Negative</span>
  </div>
  <div class="bg-white border border-info col-auto border-2 h-ml-sm" style="padding: 4px">
    <span class="text-info">Border Info</span>
  </div>
  <div class="bg-white border border-warning col-auto border-2 h-ml-sm" style="padding: 4px">
    <span class="text-warning">Border Warning</span>
  </div>
  <div class="bg-white border border-gray col-auto border-2 h-ml-sm" style="padding: 4px">
    <span class="text-black">Border Gray</span>
  </div>
</div>
`,
      borderRadius: `
<div class="row">
  <div class="border border-negative col-auto border-2 border-radius" style="padding: 4px">
    <span class="text-negative">Border Negative</span>
  </div>
  <div class="border border-info col-auto border-2 border-radius h-ml-sm" style="padding: 4px">
    <span class="text-info">Border Info</span>
  </div>
  <div class="border border-primary col-auto border-2 border-radius h-ml-sm" style="padding: 4px">
    <span class="text-primary">Border Primary</span>
  </div>
  <div class="border border-warning col-auto border-2 border-radius h-ml-sm" style="padding: 4px">
    <span class="text-warning">Border Warning</span>
  </div>
</div>
`,
      borderRounded: `
<div class="row">
  <div class="border border-negative col-auto border-2 border-rounded" style="padding: 4px">
    <span class="text-negative">Border Negative</span>
  </div>
  <div class="border border-info col-auto border-2 border-rounded h-ml-sm" style="padding: 4px">
    <span class="text-info">Border Info</span>
  </div>
  <div class="border border-primary col-auto border-2 border-rounded h-ml-sm" style="padding: 4px">
    <span class="text-primary">Border Primary</span>
  </div>
  <div class="border border-warning col-auto border-2 border-rounded h-ml-sm" style="padding: 4px">
    <span class="text-warning">Border Warning</span>
  </div>
</div>
`,
      borderStyles: `
<div class="border border-black border-3 border-dotted text-center">
  border-dotted
</div>
<div class="border border-black border-3 border-dashed text-center h-mt-sm">
  border-dashed
</div>
<div class="border border-black border-3 border-solid text-center h-mt-sm">
  border-solid
</div>
<div class="border border-black border-3 border-double text-center h-mt-sm">
  border-double
</div>
<div class="border border-black border-3 border-groove text-center h-mt-sm">
  border-groove
</div>
<div class="border border-black border-3 border-ridge text-center h-mt-sm">
  border-ridge
</div>
<div class="border border-black border-3 border-inset text-center h-mt-sm">
  border-inset
</div>
<div class="border border-black border-3 border-outset text-center h-mt-sm">
  border-outset
</div>
`
    }
  },

  mounted() {
    this.checkMainBodyWith()
  },

  methods: {
    goToElement (refName){
      viewport.goToElement(this.$refs[refName])
    },
    checkMainBodyWith () {
      let value= viewport.checkMainBodyWith()
      if (value < 961) {
          this.showDrawer = false
      }

    },
    pageResize (value) {
      this.$refs.navHelp.onResize(value)
    }
  },

}
</script>
