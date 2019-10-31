<template>
  <h-page-content padding>
    <div class="row">
      <div class="col">
        <div class="text-h4">CHIPS</div>

        <div ref="chip-standard"/>
        <comp-code class="h-mt-lg" title="Standard" :code="chip">
          <div class="row">
            <div class="col">
              <h-chips text="Peyton Smith"/>
              <h-chips text="Jonas Eckhart"/>
              <h-chips text="John Pella"/>
              <h-chips text="Francis Pernille"/>
            </div>
          </div>

          <div class="row h-mt-md">
            <div class="col">
              <h-chips outlined text="Peyton Smith"/>
              <h-chips outlined text="Jonas Eckhart"/>
              <h-chips outlined text="John Pella"/>
              <h-chips outlined text="Francis Pernille"/>
            </div>
          </div>

          <div class="row h-mt-md">
            <div class="col">
              <h-chips dense text="Peyton Smith"/>
              <h-chips dense text="Jonas Eckhart"/>
              <h-chips dense text="John Pella"/>
              <h-chips dense text="Francis Pernille"/>
            </div>
          </div>

          <div class="row h-mt-md">
            <div class="col">
              <h-chips dense outlined text="Peyton Smith"/>
              <h-chips dense outlined text="Jonas Eckhart"/>
              <h-chips dense outlined text="John Pella"/>
              <h-chips dense outlined text="Francis Pernille"/>
            </div>
          </div>

        </comp-code>

        <div ref="chip-icons"/>
        <comp-code class="h-mt-lg" title="Icons" :code="chip">
          <div class="row">
            <div class="col">
              <h-chips text="Portland" icon="fas fa-map-marker-alt"/>
              <h-chips text="Biking" icon="fas fa-biking"/>
              <h-chips outlined text="Portland" icon="fas fa-map-marker-alt"/>
              <h-chips outlined text="Biking" icon="fas fa-biking"/>
            </div>
          </div>

          <div class="row h-mt-md">
            <div class="col">
              <h-chips dense text="Portland" icon="fas fa-map-marker-alt"/>
              <h-chips dense text="Biking" icon="fas fa-biking"/>
              <h-chips dense outlined text="Portland" icon="fas fa-map-marker-alt"/>
              <h-chips dense outlined text="Biking" icon="fas fa-biking"/>
            </div>
          </div>
        </comp-code>

        <div ref="chip-avatar"/>
        <comp-code class="h-mt-lg" title="Avatar" :code="chip">
          <div class="row">
            <div class="col">
              <h-chips text="Kostenlose" avatar="avatar/Kostenlose.jpg"/>
              <h-chips text="Eduard" avatar="avatar/Eduard.jpg"/>
              <h-chips outlined text="Kostenlose" avatar="avatar/Kostenlose.jpg"/>
              <h-chips outlined text="Eduard" avatar="avatar/Eduard.jpg"/>
            </div>
          </div>

          <div class="row h-mt-md">
            <div class="col">
              <h-chips dense text="Kostenlose" avatar="avatar/Kostenlose.jpg"/>
              <h-chips dense text="Eduard" avatar="avatar/Eduard.jpg"/>
              <h-chips dense outlined text="Kostenlose" avatar="avatar/Kostenlose.jpg"/>
              <h-chips dense outlined text="Eduard" avatar="avatar/Eduard.jpg"/>
            </div>
          </div>
        </comp-code>

        <div ref="chip-closable"/>
        <comp-code class="h-mt-lg" title="Closable" :code="chip">
          <div class="row">
            <div class="col">
              <h-chips closable text="Portland" icon="fas fa-map-marker-alt"/>
              <h-chips closable text="Kostenlose" avatar="avatar/Kostenlose.jpg"/>
              <h-chips closable outlined text="Portland" icon="fas fa-map-marker-alt"/>
              <h-chips closable outlined text="Kostenlose" avatar="avatar/Kostenlose.jpg"/>
            </div>
          </div>

          <div class="row h-mt-md">
            <div class="col">
              <h-chips dense closable text="Portland" icon="fas fa-map-marker-alt"/>
              <h-chips dense closable text="Kostenlose" avatar="avatar/Kostenlose.jpg"/>
              <h-chips dense outlined closable text="Portland" icon="fas fa-map-marker-alt"/>
              <h-chips dense outlined closable text="Kostenlose" avatar="avatar/Kostenlose.jpg"/>
            </div>
          </div>
        </comp-code>

        <div ref="chip-select"/>
        <comp-code class="h-mt-lg" title="Select" :code="chip">
          <div class="row">
            <div class="col">
              <h-chips filter v-model="chipsFilter.travel" text="Travel" icon="fas fa-plane"/>
              <h-chips filter v-model="chipsFilter.movies" text="Movies" icon="fas fa-film"/>
              <h-chips filter v-model="chipsFilter.food" text="Food" icon="fas fa-utensils"/>
            </div>
          </div>
        </comp-code>

        <h1 class="text-primary"> Chips Help</h1>
        <h2 class="text-primary"> Vue Properties</h2>
        <hr>

        <div class="flex">
          <div>
            <h3>Name</h3>
            <div>closable</div>
            <div>icon</div>
            <div>img</div>
            <div>text</div>
            <div>disabled</div>
            <div>outlined</div>
          </div>
          <div class="h-pl-md">
            <h3>Type</h3>
            <div>Boolean</div>
            <div>String</div>
            <div>String</div>
            <div>String</div>
            <div>Booelan</div>
            <div>Boolean</div>
          </div>
          <div class="h-pl-md">
            <h3 >Description</h3>
            <div>Show icon close to right of the text</div>
            <div>Sets the icon to left of the text</div>
            <div>Sets the img to left of the text</div>
            <div>Sets the text of the chip</div>
            <div>The chips is disabled</div>
            <div>Sets the input to outlined mode</div>
          </div>
        </div>

        <h2 class="text-primary"> Vue Events</h2>
        <hr>

        <div class="flex">
          <div>
            <h3>Name</h3>
            <div>@onClose</div>
          </div>
          <div class="h-pl-md">
            <h3>Description</h3>
            <div>Triggered on icon close click. This is available if hide-on-close is disabled.</div>
          </div>
        </div>

        <h1 class="text-primary"> Input Chips Help</h1>

        <h2 class="text-primary"> Vue Events</h2>
        <hr>

        <div class="flex">
          <div>
            <h3>Name</h3>
            <div>@onTab</div>
            <div>@change(value)</div>
            <div>@onDelete(value)</div>
          </div>
          <div class="h-pl-md">
            <h3>Description</h3>
            <div>Triggered on Tab</div>
            <div>Triggered when model changes. The model value is sent.</div>
            <div>Triggered chips is removed. The chips value is sent.</div>
          </div>
        </div>

      </div>
      <div class="col-auto">
        <list-help>
          <h-list>
            <h-list-header text="Styles"/>
            <h-list-item @click="goToElement('chip-standard')">
              <h-list-item-content>
                <h-list-item-text title="Standard"></h-list-item-text>
              </h-list-item-content>
            </h-list-item>
            <h-list-item @click="goToElement('chip-icons')">
              <h-list-item-content>
                <h-list-item-text title="Icons"></h-list-item-text>
              </h-list-item-content>
            </h-list-item>
            <h-list-item @click="goToElement('chip-avatar')">
              <h-list-item-content>
                <h-list-item-text title="Avatar"></h-list-item-text>
              </h-list-item-content>
            </h-list-item>
            <h-list-item @click="goToElement('chip-closable')">
              <h-list-item-content>
                <h-list-item-text title="Closable"></h-list-item-text>
              </h-list-item-content>
            </h-list-item>
            <h-list-item @click="goToElement('chip-select')">
              <h-list-item-content>
                <h-list-item-text title="Select"></h-list-item-text>
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
      chipsFilter: {
        travel: false,
        movies: false,
        food: false
      },
      chip: `
<h-chips text="disabled" icon="fas fa-camera-retro" closable disabled hide-on-close></h-chips>
<h-chips text="Eduardo" bgcolor="bg-secondary" closable hide-on-close></h-chips>
<h-chips text="Jhon" closable hide-on-close icon="fas fa-camera-retro" bgcolor="bg-primary" textcolor="text-white"></h-chips>
<h-chips text="Jhon" closable hide-on-close avatar="http://autokadabra.ru/system/uploads/users/18/18340/small.png?1318432918" bgcolor="bg-primary" textcolor="text-white"></h-chips>

<h-chips text="outlined disabled" icon="fas fa-camera-retro" closable disabled hide-on-close outlined></h-chips>
<h-chips text="outlined disabled" closable disabled hide-on-close outlined></h-chips>
<h-chips text="Outlined" closable hide-on-close outlined></h-chips>
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
