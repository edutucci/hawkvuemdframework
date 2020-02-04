<template>
  <h-page-content padding>
    <div class="text-h4">Collapsible</div>

    <!--
      BUGS
        - Adicionar evento click no h-collapsible-item
    -->

    <div class="row">
      <div class="col">
        <div ref="col-standard"/>
        <comp-code title="standard" :code="ex1">
          <h-collapsible>
            <h-collapsible-menu icon="fas fa-film" text="Attractions">
              <h-collapsible-item text="Shopping"></h-collapsible-item>
              <h-collapsible-item text="Museum"></h-collapsible-item>
            </h-collapsible-menu>
            <h-collapsible-menu icon="fas fa-utensils" text="Dining">
              <h-collapsible-item text="Restaurants"></h-collapsible-item>
            </h-collapsible-menu>
          </h-collapsible>
        </comp-code>

        <div ref="col-customcolor"/>
        <comp-code class="h-mt-md" title="Custom Color" :code="ex2">
          <h-collapsible>
            <h-collapsible-menu icon="fa fa-film" text="Attractions" bg-color="bg-primary" text-color="text-white">
              <h-collapsible-item text="Shopping" bg-color="bg-primary" text-color="text-white"></h-collapsible-item>
              <h-collapsible-item text="Museum" bg-color="bg-primary" text-color="text-white"></h-collapsible-item>
            </h-collapsible-menu>
            <h-collapsible-menu icon="fas fa-utensils" text="Dining" bg-color="bg-primary" text-color="text-white">
              <h-collapsible-item text="Restaurants" bg-color="bg-primary" text-color="text-white"></h-collapsible-item>
            </h-collapsible-menu>
          </h-collapsible>
        </comp-code>

        <div ref="col-customcontent"/>
        <comp-code class="h-mt-md" title="Custom Content" :code="ex3">
          <h-collapsible>
            <h-collapsible-menu icon="fa fa-envelope" text="Letter">
              <div class="row align-items-center justify-center">
                <div>
                  <h-image avatar src="img/hawk.jpg" size="64px"/>
                </div>
                <div>
                  <h1>Free Framework CSS</h1>
                </div>
              </div>
            </h-collapsible-menu>
            <h-collapsible-menu icon="fas fa-utensils" text="Dining">
              <div class="row align-items-center justify-center">
                <div>
                  <h-image avatar src="img/icons/mstile-150x150.png" size="64px"/>
                </div>
                <div>
                  <h1>Vue JS</h1>
                </div>
              </div>
            </h-collapsible-menu>
          </h-collapsible>
        </comp-code>

        <!-- <h2 class="text-primary"> Collapsible Menu Help</h2>
        <h2 class="text-primary"> Vue Properties</h2>
        <hr>

        <div class="flex">
          <div>
            <h3>Name</h3>
            <div>bg-color</div>
            <div>text-color</div>
            <div>icon</div>
            <div>text</div>
          </div>
          <div class="h-pl-md">
            <h3>Type</h3>
            <div>String</div>
            <div>String</div>
            <div>Array</div>
            <div>String</div>
          </div>
          <div class="h-pl-md">
            <h3 >Description</h3>
            <div>Sets the background color of the menu</div>
            <div>Sets the text color of the menu</div>
            <div>Sets the icon of the menu</div>
            <div>Sets the text of the menu</div>
          </div>
        </div>

        <h2 class="text-primary"> Collapsible Menu Item Help</h2>
        <h2 class="text-primary"> Vue Properties</h2>
        <hr>

        <div class="flex">
          <div>
            <h3>Name</h3>
            <div>text</div>
          </div>
          <div class="h-pl-md">
            <h3>Type</h3>
            <div>String</div>
          </div>
          <div class="h-pl-md">
            <h3 >Description</h3>
            <div>Sets the text of the menu item</div>

          </div>
        </div> -->
      </div>
      <div class="col-auto">
        <list-help>
          <h-list>
            <h-list-header text="Styles"/>
            <h-list-item @click="goToElement('col-standard')">
              <h-list-item-content>
                <h-list-item-text title="Standard"></h-list-item-text>
              </h-list-item-content>
            </h-list-item>
            <h-list-item @click="goToElement('col-customcolor')">
              <h-list-item-content>
                <h-list-item-text title="Custom Color"></h-list-item-text>
              </h-list-item-content>
            </h-list-item>
            <h-list-item @click="goToElement('col-customcontent')">
              <h-list-item-content>
                <h-list-item-text title="Custom content"></h-list-item-text>
              </h-list-item-content>
            </h-list-item>
          </h-list>
        </list-help>
      </div>
    </div>

  </h-page-content>
</template>

<script>

import viewport from '../../../components/others/viewport'

export default {
  data () {
    return {
      ex1: `
<h-collapsible>
  <h-collapsible-menu icon="fas fa-film" text="Attractions">
    <h-collapsible-item text="Shopping"></h-collapsible-item>
    <h-collapsible-item text="Museum"></h-collapsible-item>
  </h-collapsible-menu>
  <h-collapsible-menu icon="fas fa-utensils" text="Dining">
    <h-collapsible-item text="Restaurants"></h-collapsible-item>
  </h-collapsible-menu>
</h-collapsible>
`,
      ex2: `
<h-collapsible>
  <h-collapsible-menu icon="fa fa-film" text="Attractions" bg-color="bg-primary" text-color="text-white">
    <h-collapsible-item text="Shopping" bg-color="bg-primary" text-color="text-white"></h-collapsible-item>
    <h-collapsible-item text="Museum" bg-color="bg-primary" text-color="text-white"></h-collapsible-item>
  </h-collapsible-menu>
  <h-collapsible-menu icon="fas fa-utensils" text="Dining" bg-color="bg-primary" text-color="text-white">
    <h-collapsible-item text="Restaurants" bg-color="bg-primary" text-color="text-white"></h-collapsible-item>
  </h-collapsible-menu>
</h-collapsible>
`,
      ex3: `
<h-collapsible>
  <h-collapsible-menu icon="fa fa-envelope" text="Letter">
    <div class="row align-items-center justify-center">
      <div>
        <h-image avatar src="img/hawk.png" size="64px"/>
      </div>
      <div>
        <h1>Free Framework CSS</h1>
      </div>
    </div>
  </h-collapsible-menu>
  <h-collapsible-menu icon="fas fa-utensils" text="Dining">
    <div class="row align-items-center justify-center">
      <div>
        <h-image avatar src="img/icons/mstile-150x150.png" size="64px"/>
      </div>
      <div>
        <h1>Vue JS</h1>
      </div>
    </div>
  </h-collapsible-menu>
</h-collapsible>
`
    }
  },
  methods: {
    goToElement (refName) {
      viewport.goToElement(this.$refs[refName])
    }
  }
}
</script>
