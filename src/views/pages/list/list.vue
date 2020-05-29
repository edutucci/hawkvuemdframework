<template>
  <h-page-content padding
    @onResize="pageResize"
    @mainLayoutDrawerIsOpened="showDrawer = false"
  >
    <div class="row ">
      <div class="col">
        <div class="row position-sticky bg-white">
          <div class="col text-h4">
            List
          </div>
          <div class="col-auto">
            <h-image src="imgIcons/png/icon-help.png" @click="showDrawer = !showDrawer"/>
          </div>
        </div>
        <div class="row">
          <div class="col">

            <div ref="list-borders"/>
            <comp-code class="h-mt-md" title="Borders" :code="lstBorders">
              <h-list bordered style="max-width: 350px">
                <h-list-item>
                  <h-list-item-content>
                    <h-list-item-text title="House in the clouds"/>
                  </h-list-item-content>
                </h-list-item>
                <h-list-item>
                  <h-list-item-content>
                    <h-list-item-text title="At the top"/>
                  </h-list-item-content>
                </h-list-item>
                <h-separator/>
                <h-list-item>
                  <h-list-item-side>
                    <h-image avatar src="avatar/Konsta.jpg"/>
                  </h-list-item-side>
                  <h-list-item-content>
                    <h-list-item-text title="Konsta"/>
                  </h-list-item-content>
                </h-list-item>
                <h-list-item>
                  <h-list-item-side>
                    <h-image avatar src="avatar/Eduard.jpg"/>
                  </h-list-item-side>
                  <h-list-item-content>
                    <h-list-item-text title="Eduard"/>
                  </h-list-item-content>
                </h-list-item>
              </h-list>

              <h-list bordered class="h-mt-sm border-radius" style="max-width: 350px">
                <h-list-item>
                  <h-list-item-content>
                    <h-list-item-text title="House in the clouds"/>
                  </h-list-item-content>
                </h-list-item>
                <h-list-item>
                  <h-list-item-content>
                    <h-list-item-text title="At the top"/>
                  </h-list-item-content>
                </h-list-item>
                <h-separator/>
                <h-list-item>
                  <h-list-item-side>
                    <h-image avatar src="avatar/AnaArmas.jpg"/>
                  </h-list-item-side>
                  <h-list-item-content>
                    <h-list-item-text title="Ana"/>
                  </h-list-item-content>
                </h-list-item>
                <h-list-item>
                  <h-list-item-side>
                    <h-image avatar src="avatar/Eduard.jpg"/>
                  </h-list-item-side>
                  <h-list-item-content>
                    <h-list-item-text title="Eduard"/>
                  </h-list-item-content>
                </h-list-item>
              </h-list>
            </comp-code>

            <div ref="list-singleline"/>
            <comp-code class="h-mt-md" title="Single Line Item" :code="lst1Line">
              <h-list bordered style="max-width: 350px">
                <h-list-item>
                  <h-list-item-content>
                    <h-list-item-text title="House in the clouds"/>
                  </h-list-item-content>
                </h-list-item>
                <h-list-item>
                  <h-list-item-content>
                    <h-list-item-text title="At the top"/>
                  </h-list-item-content>
                </h-list-item>
                <h-separator/>
                <h-list-item>
                  <h-list-item-side>
                    <h-image avatar src="avatar/AnaArmas.jpg"/>
                  </h-list-item-side>
                  <h-list-item-content>
                    <h-list-item-text title="Ana"/>
                  </h-list-item-content>
                </h-list-item>
                <h-list-item>
                  <h-list-item-side>
                    <h-image avatar src="avatar/Eduard.jpg"/>
                  </h-list-item-side>
                  <h-list-item-content>
                    <h-list-item-text title="Eduard"/>
                  </h-list-item-content>
                </h-list-item>
              </h-list>

              <h-list bordered class="h-mt-md" style="max-width: 350px">
                  <h-list-item>
                    <h-list-item-content>
                      <h-list-item-text title="Attractions"/>
                    </h-list-item-content>
                  </h-list-item>
                  <h-list-item>
                    <h-list-item-content>
                      <h-list-item-text title="Dinning"/>
                    </h-list-item-content>
                  </h-list-item>
                  <h-separator/>
                  <h-list-item>
                    <h-list-item-side>
                      <h-icon icon="fas fa-film" size="20px"/>
                    </h-list-item-side>
                    <h-list-item-content>
                      <h-list-item-text title="Attractions"/>
                    </h-list-item-content>
                  </h-list-item>
                  <h-list-item>
                    <h-list-item-side>
                      <h-icon icon="fas fa-utensils" size="20px"/>
                    </h-list-item-side>
                    <h-list-item-content>
                      <h-list-item-text title="Dinning"/>
                    </h-list-item-content>
                  </h-list-item>
              </h-list>
            </comp-code>

            <div ref="list-twoline"/>
            <comp-code class="h-mt-md" title="Two Line Item" :code="lst2Line">
              <h-list bordered style="max-width: 350px">
                <h-list-item>
                  <h-list-item-content>
                    <h-list-item-text title="House in the clouds" caption="Jonathan creates a new world"/>
                  </h-list-item-content>
                </h-list-item>
                <h-list-item>
                  <h-list-item-content>
                      <h-list-item-text title="At the top" caption="Cindy climbs new heights"/>
                  </h-list-item-content>
                </h-list-item>
                <h-separator/>
                <h-list-item>
                  <h-list-item-side>
                    <h-icon icon="fas fa-film"/>
                  </h-list-item-side>
                  <h-list-item-content>
                    <h-list-item-text title="House in the clouds" caption="Jonathan creates a new world"/>
                  </h-list-item-content>
                </h-list-item>
                <h-list-item>
                  <h-list-item-side>
                    <h-icon icon="fas fa-plane"/>
                  </h-list-item-side>
                  <h-list-item-content>
                    <h-list-item-text title="At the top" caption="Cindy climbs new heights"/>
                  </h-list-item-content>
                </h-list-item>
              </h-list>

              <h-list bordered class="h-mt-md" style="max-width: 350px">
                <h-list-header text="Today"/>
                <h-list-item>
                  <h-list-item-side class="flex-items-center">
                    <h-list-item-img class="flex-items-center" src="img/pencil.png"/>
                  </h-list-item-side>
                  <h-list-item-content>
                    <h-list-item-text title="Pencil" caption="in stock"/>
                  </h-list-item-content>
                  <h-list-item-side class="flex-items-center">
                    <h-list-item-text title="1.50"/>
                  </h-list-item-side>
                </h-list-item>
                <h-list-item>
                  <h-list-item-side class="flex-items-center">
                    <h-list-item-img class="flex-items-center" src="img/rubberbands.png"/>
                  </h-list-item-side>
                  <h-list-item-content>
                    <h-list-item-text title="Hubberbands" caption="in stock"/>
                  </h-list-item-content>
                  <h-list-item-side class="flex-items-center">
                    <h-list-item-text title="4.5"/>
                  </h-list-item-side>
                </h-list-item>
                <h-list-item>
                  <h-list-item-side class="flex-items-center">
                    <h-list-item-img class="flex-items-center" src="img/rulers.png"/>
                  </h-list-item-side>
                  <h-list-item-content>
                    <h-list-item-text title="Rulers" caption="only 1 left in stock"/>
                  </h-list-item-content>
                  <h-list-item-side class="flex-items-center">
                    <h-list-item-text title="8.00"/>
                  </h-list-item-side>
                </h-list-item>
              </h-list>

              <h-list bordered class="h-mt-md" style="width: 350px">
                <h-list-item>
                  <h-list-item-side>
                    <h-list-item-img src="avatar/folder_open.png"/>
                  </h-list-item-side>
                  <h-list-item-content>
                    <h-list-item-text title="Photos" caption="Jan 9, 2018"/>
                  </h-list-item-content>
                  <h-list-item-side class="flex-items-center">
                    <h-icon icon="fas fa-info-circle" text-color="text-gray"/>
                  </h-list-item-side>
                </h-list-item>
                <h-list-item>
                  <h-list-item-side>
                    <h-list-item-img src="avatar/folder_open.png"/>
                  </h-list-item-side>
                  <h-list-item-content>
                    <h-list-item-text title="Recipes" caption="Jan"/>
                  </h-list-item-content>
                  <h-list-item-side class="flex-items-center">
                    <h-icon icon="fas fa-info-circle" text-color="text-gray"/>
                  </h-list-item-side>
                </h-list-item>
                <h-separator/>
                <h-list-header text="Recent files"/>
                <h-list-item>
                  <h-list-item-side>
                    <h-list-item-img src="avatar/folder_open.png"/>
                  </h-list-item-side>
                  <h-list-item-content>
                    <h-list-item-text title="Vacation itinerary" caption="Jan 20, 2018"/>
                  </h-list-item-content>
                  <h-list-item-side class="flex-items-center">
                    <h-icon icon="fas fa-info-circle" text-color="text-gray"/>
                  </h-list-item-side>
                </h-list-item>
                <h-list-item>
                  <h-list-item-side>
                    <h-list-item-img src="avatar/folder_open.png"/>
                  </h-list-item-side>
                  <h-list-item-content>
                    <h-list-item-text title="Kicthen remodel" caption="Jan 10, 2018"/>
                  </h-list-item-content>
                  <h-list-item-side class="flex-items-center">
                    <h-icon icon="fas fa-info-circle" text-color="text-gray"/>
                  </h-list-item-side>
                </h-list-item>
              </h-list>
            </comp-code>

            <div ref="list-threeline"/>
            <comp-code class="h-mt-md" title="Three Line Item" :code="lst3Line">
              <h-list bordered content-separator style="max-width: 400px">
                <h-list-header text="Recipes"/>
                <h-list-item>
                  <h-list-item-side>
                    <h-list-item-img class="flex-items-center" src="img/Crunchy.jpg" large/>
                  </h-list-item-side>
                  <h-list-item-content>
                    <h-list-item-text title="Crunchy Croissants" caption="Buttery, flaky pastry named for its crescent shape."/>
                  </h-list-item-content>
                  <h-list-item-side>
                    <h-list-item-text title="01"/>
                  </h-list-item-side>
                </h-list-item>
                <h-list-item>
                  <h-list-item-side>
                    <h-list-item-img class="flex-items-center" src="img/GrilledEggPlant.jpg" large/>
                  </h-list-item-side>
                  <h-list-item-content>
                    <h-list-item-text title="Grilled Eggplant" caption="Tender with a rich, complex and flavor when cooked."/>
                  </h-list-item-content>
                  <h-list-item-side>
                    <h-list-item-text title="02"/>
                  </h-list-item-side>
                </h-list-item>
                <h-list-item>
                  <h-list-item-side>
                    <h-list-item-img class="flex-items-center" src="img/TangerineSalad.jpg" large/>
                  </h-list-item-side>
                  <h-list-item-content>
                    <h-list-item-text title="Tangerine Salad" caption="Peak tangerine season lasts from autumn to spring."/>
                  </h-list-item-content>
                  <h-list-item-side>
                    <h-list-item-text title="03"/>
                  </h-list-item-side>
                </h-list-item>
              </h-list>

              <h-list bordered item-separator class="h-mt-md" style="max-width: 400px">
                <h-list-header text="Today"/>
                <h-list-item>
                  <h-list-item-side class="flex-items-center">
                    <h-image avatar src="avatar/Eduard.jpg"/>
                  </h-list-item-side>
                  <h-list-item-content>
                    <h-list-item-text title="Brunch this weekend?" caption="I'll be in your neighborhood doing errands this weekend."/>
                  </h-list-item-content>
                </h-list-item>
                <h-list-item>
                  <h-list-item-side class="flex-items-center">
                    <h-image avatar src="avatar/AnaArmas.jpg"/>
                  </h-list-item-side>
                  <h-list-item-content>
                    <h-list-item-text title="Summer BBQ" caption="Wish I coould come, but I'm out of town this weekend."/>
                  </h-list-item-content>
                </h-list-item>
                <h-list-item>
                  <h-list-item-side class="flex-items-center">
                    <h-image avatar src="avatar/Kostenlose.jpg"/>
                  </h-list-item-side>
                  <h-list-item-content>
                    <h-list-item-text title="Oui Oui" caption="Do you have Paris recommendations? Have you ever been?."/>
                  </h-list-item-content>
                </h-list-item>
              </h-list>

              <h-list bordered class="h-mt-md" style="max-width: 400px">
                  <h-list-item>
                    <h-list-item-side>
                      <h-list-item-img src="avatar/folder_open.png"/>
                    </h-list-item-side>
                    <h-list-item-content>
                      <h-list-item-text title="At the top" caption="Cindy climbs new heights"/>
                    </h-list-item-content>
                    <h-list-item-side>
                      <div class="text-center">
                        <h-icon icon="fas fa-star" text-color="text-yellowA400"/>
                        <h-list-item-text title="01"/>
                      </div>
                    </h-list-item-side>
                  </h-list-item>
                  <h-separator/>
                  <h-list-item>
                    <h-list-item-side>
                      <h-list-item-img src="avatar/folder_open.png"/>
                    </h-list-item-side>
                    <h-list-item-content>
                      <h-list-item-text title="At the top" caption="Cindy climbs new heights"/>
                    </h-list-item-content>
                    <h-list-item-side class="flex-justify-end">
                      <div class="text-right"><h-icon icon="fas fa-star" text-color="text-yellowA400"/></div>
                      <h-list-item-text title="02" class="flex-justify-end"/>
                      <h-list-item-text caption="5 min ago" class="flex-justify-end"/>
                    </h-list-item-side>
                  </h-list-item>
              </h-list>
            </comp-code>

            <div ref="list-expandcollapse"/>
            <comp-code class="h-mt-md" title="Expand and collapse" :code="expcol">
              <h-list bordered class="h-mt-md" style="width: 350px">
                <h-collapsible>
                  <h-collapsible-menu icon="fas fa-film" text="Attractions">
                    <h-list>
                      <h-list-item>
                        <h-list-item-content>
                          <h-list-item-text title="Shopping"/>
                        </h-list-item-content>
                      </h-list-item>
                      <h-list-item>
                        <h-list-item-content>
                          <h-list-item-text title="Museums"/>
                        </h-list-item-content>
                      </h-list-item>
                    </h-list>
                  </h-collapsible-menu>
                  <h-collapsible-menu icon="fas fa-utensils" text="Dining">
                    <h-list>
                      <h-list-item>
                        <h-list-item-content>
                          <h-list-item-text title="Restaurants"/>
                        </h-list-item-content>
                      </h-list-item>
                    </h-list>
                  </h-collapsible-menu>
                </h-collapsible>
              </h-list>
            </comp-code>

            <div ref="list-controls"/>
            <comp-code class="h-mt-md" title="Controls" :code="lstControls">
              <h-list bordered class="h-mt-md" style="width: 400px">
                <h-list-header text="Today"/>
                  <h-list-item>
                    <h-list-item-side class="flex-items-center">
                      <h-image avatar src="avatar/Eduard.jpg"/>
                    </h-list-item-side>
                    <h-list-item-content>
                      <h-list-item-text title="Brunch this weekend?" caption="I'll be in your neighborhood doing errands this weekend."/>
                    </h-list-item-content>
                    <h-list-item-side class="flex-items-center">
                      <h-checkbox/>
                    </h-list-item-side>
                  </h-list-item>
                  <h-list-item>
                    <h-list-item-side class="flex-items-center">
                      <h-image avatar src="avatar/AnaArmas.jpg"/>
                    </h-list-item-side>
                    <h-list-item-content>
                      <h-list-item-text title="Summer BBQ" caption="Wish I coould come, but I'm out of town this weekend."/>
                    </h-list-item-content>
                    <h-list-item-side class="flex-items-center">
                      <h-checkbox/>
                    </h-list-item-side>
                  </h-list-item>
                  <h-list-item>
                    <h-list-item-side class="flex-items-center">
                      <h-image avatar src="avatar/Kostenlose.jpg"/>
                    </h-list-item-side>
                    <h-list-item-content>
                      <h-list-item-text title="Oui Oui" caption="Do you have Paris recommendations? Have you ever been?."/>
                    </h-list-item-content>
                    <h-list-item-side class="flex-items-center">
                      <h-checkbox/>
                    </h-list-item-side>
                  </h-list-item>
                  <h-separator/>
                  <h-list-header text="Notifications"/>
                  <h-list-item>
                    <h-list-item-content>
                      <h-list-item-text title="Games"/>
                    </h-list-item-content>
                    <h-list-item-side class="flex-items-center">
                      <h-toggle/>
                    </h-list-item-side>
                  </h-list-item>
                  <h-list-item>
                    <h-list-item-content>
                      <h-list-item-text title="WhatsApp"/>
                    </h-list-item-content>
                    <h-list-item-side class="flex-items-center">
                      <h-toggle/>
                    </h-list-item-side>
                  </h-list-item>
                  <h-list-item>
                    <h-list-item-content>
                      <h-list-item-text title="E-Mail"/>
                    </h-list-item-content>
                    <h-list-item-side class="flex-items-center">
                      <h-toggle/>
                    </h-list-item-side>
                  </h-list-item>
              </h-list>
            </comp-code>

            <tabs-help
              class="h-mt-md"
              title="List Help"
              :properties="helpTopics.listProperties"
            />

            <tabs-help
              class="h-mt-md"
              title="List Header Help"
              :properties="helpTopics.listHeaderProperties"
            />

            <tabs-help
              class="h-mt-md"
              title="List Item Image Help"
              :properties="helpTopics.listItemImageProperties"
            />

            <tabs-help
              class="h-mt-md"
              title="List Text Properties"
              :properties="helpTopics.listItemTextProperties"
            />

          </div>
         </div>
      </div>
    </div>

    <template v-slot:right>
      <h-nav-drawer ref="navHelp" v-model="showDrawer" side="right">
        <list-help>
          <h-list>
            <h-list-header text="Usage"/>
            <h-list-item @click="goToElement('list-borders')">
              <h-list-item-content>
                <h-list-item-text title="Borders"></h-list-item-text>
              </h-list-item-content>
            </h-list-item>
            <h-list-item @click="goToElement('list-singleline')">
              <h-list-item-content>
                <h-list-item-text title="Single Line"></h-list-item-text>
              </h-list-item-content>
            </h-list-item>
            <h-list-item @click="goToElement('list-twoline')">
              <h-list-item-content>
                <h-list-item-text title="Two Line"></h-list-item-text>
              </h-list-item-content>
            </h-list-item>
            <h-list-item @click="goToElement('list-threeline')">
              <h-list-item-content>
                <h-list-item-text title="Three Line"></h-list-item-text>
              </h-list-item-content>
            </h-list-item>
            <h-list-item @click="goToElement('list-expandcollapse')">
              <h-list-item-content>
                <h-list-item-text title="Expand and Collapse"></h-list-item-text>
              </h-list-item-content>
            </h-list-item>
            <h-list-item @click="goToElement('list-controls')">
              <h-list-item-content>
                <h-list-item-text title="Controls"></h-list-item-text>
              </h-list-item-content>
            </h-list-item>
          </h-list>
        </list-help>
      </h-nav-drawer>
    </template>
  </h-page-content>

</template>

<script>

import viewport from '../../../components/others/viewport'
import helpTopics from './help'

export default {
  data () {
    return {
      showDrawer: true,
      helpTopics: {
        listProperties: [],
        listHeaderProperties: [],
        listItemImageProperties: [],
        listItemTextProperties: []
      },
      lstBorders: `
<h-list bordered style="max-width: 350px">
  <h-list-item>
    <h-list-item-content>
      <h-list-item-text title="House in the clouds"/>
    </h-list-item-content>
  </h-list-item>
  <h-list-item>
    <h-list-item-content>
      <h-list-item-text title="At the top"/>
    </h-list-item-content>
  </h-list-item>
  <h-separator/>
  <h-list-item>
    <h-list-item-side>
      <h-image avatar src="avatar/Konsta.jpg"/>
    </h-list-item-side>
    <h-list-item-content>
      <h-list-item-text title="Konsta"/>
    </h-list-item-content>
  </h-list-item>
  <h-list-item>
    <h-list-item-side>
      <h-image avatar src="avatar/Eduard.jpg"/>
    </h-list-item-side>
    <h-list-item-content>
      <h-list-item-text title="Eduard"/>
    </h-list-item-content>
  </h-list-item>
</h-list>

<h-list bordered class="h-mt-sm border-radius" style="max-width: 350px">
  <h-list-item>
    <h-list-item-content>
      <h-list-item-text title="House in the clouds"/>
    </h-list-item-content>
  </h-list-item>
  <h-list-item>
    <h-list-item-content>
      <h-list-item-text title="At the top"/>
    </h-list-item-content>
  </h-list-item>
  <h-separator/>
  <h-list-item>
    <h-list-item-side>
      <h-image avatar src="avatar/AnaArmas.jpg"/>
    </h-list-item-side>
    <h-list-item-content>
      <h-list-item-text title="Ana"/>
    </h-list-item-content>
  </h-list-item>
  <h-list-item>
    <h-list-item-side>
      <h-image avatar src="avatar/Eduard.jpg"/>
    </h-list-item-side>
    <h-list-item-content>
      <h-list-item-text title="Eduard"/>
    </h-list-item-content>
  </h-list-item>
</h-list>      
`,
      lst1Line: `
<h-list bordered style="max-width: 350px">
  <h-list-item>
    <h-list-item-content>
      <h-list-item-text title="House in the clouds"/>
    </h-list-item-content>
  </h-list-item>
  <h-list-item>
    <h-list-item-content>
      <h-list-item-text title="At the top"/>
    </h-list-item-content>
  </h-list-item>
  <h-separator/>
  <h-list-item>
    <h-list-item-side>
      <h-image avatar src="avatar/AnaArmas.jpg"/>
    </h-list-item-side>
    <h-list-item-content>
      <h-list-item-text title="Ana"/>
    </h-list-item-content>
  </h-list-item>
  <h-list-item>
    <h-list-item-side>
      <h-image avatar src="avatar/Eduard.jpg"/>
    </h-list-item-side>
    <h-list-item-content>
      <h-list-item-text title="Eduard"/>
    </h-list-item-content>
  </h-list-item>
</h-list>

<h-list bordered class="h-mt-md" style="max-width: 350px">
    <h-list-item>
      <h-list-item-content>
        <h-list-item-text title="Attractions"/>
      </h-list-item-content>
    </h-list-item>
    <h-list-item>
      <h-list-item-content>
        <h-list-item-text title="Dinning"/>
      </h-list-item-content>
    </h-list-item>
    <h-separator/>
    <h-list-item>
      <h-list-item-side>
        <h-icon icon="fas fa-film" size="20px"/>
      </h-list-item-side>
      <h-list-item-content>
        <h-list-item-text title="Attractions"/>
      </h-list-item-content>
    </h-list-item>
    <h-list-item>
      <h-list-item-side>
        <h-icon icon="fas fa-utensils" size="20px"/>
      </h-list-item-side>
      <h-list-item-content>
        <h-list-item-text title="Dinning"/>
      </h-list-item-content>
    </h-list-item>
</h-list>
`,
      lst2Line: `
<h-list bordered style="max-width: 350px">
  <h-list-item>
    <h-list-item-content>
      <h-list-item-text title="House in the clouds"
        caption="Jonathan creates a new world"/>
    </h-list-item-content>
  </h-list-item>
  <h-list-item>
    <h-list-item-content>
        <h-list-item-text title="At the top"
          caption="Cindy climbs new heights"/>
    </h-list-item-content>
  </h-list-item>
  <h-separator/>
  <h-list-item>
    <h-list-item-side>
      <h-icon icon="fas fa-film"/>
    </h-list-item-side>
    <h-list-item-content>
      <h-list-item-text title="House in the clouds"
        caption="Jonathan creates a new world"/>
    </h-list-item-content>
  </h-list-item>
  <h-list-item>
    <h-list-item-side>
      <h-icon icon="fas fa-plane"/>
    </h-list-item-side>
    <h-list-item-content>
      <h-list-item-text title="At the top"
        caption="Cindy climbs new heights"/>
    </h-list-item-content>
  </h-list-item>
</h-list>

<h-list bordered class="h-mt-md" style="max-width: 350px">
  <h-list-header text="Today"/>
  <h-list-item>
    <h-list-item-side class="flex-items-center">
      <h-list-item-img class="flex-items-center" src="img/pencil.png"/>
    </h-list-item-side>
    <h-list-item-content>
      <h-list-item-text title="Pencil" caption="in stock"/>
    </h-list-item-content>
    <h-list-item-side class="flex-items-center">
      <h-list-item-text title="1.50"/>
    </h-list-item-side>
  </h-list-item>
  <h-list-item>
    <h-list-item-side class="flex-items-center">
      <h-list-item-img class="flex-items-center" src="img/rubberbands.png"/>
    </h-list-item-side>
    <h-list-item-content>
      <h-list-item-text title="Hubberbands" caption="in stock"/>
    </h-list-item-content>
    <h-list-item-side class="flex-items-center">
      <h-list-item-text title="4.5"/>
    </h-list-item-side>
  </h-list-item>
  <h-list-item>
    <h-list-item-side class="flex-items-center">
      <h-list-item-img class="flex-items-center" src="img/rulers.png"/>
    </h-list-item-side>
    <h-list-item-content>
      <h-list-item-text title="Rulers" caption="only 1 left in stock"/>
    </h-list-item-content>
    <h-list-item-side class="flex-items-center">
      <h-list-item-text title="8.00"/>
    </h-list-item-side>
  </h-list-item>
</h-list>

<h-list bordered class="h-mt-md" style="width: 350px">
  <h-list-item>
    <h-list-item-side>
      <h-list-item-img src="avatar/folder_open.png"/>
    </h-list-item-side>
    <h-list-item-content>
      <h-list-item-text title="Photos" caption="Jan 9, 2018"/>
    </h-list-item-content>
    <h-list-item-side class="flex-items-center">
      <h-icon icon="fas fa-info-circle" text-color="text-gray"/>
    </h-list-item-side>
  </h-list-item>
  <h-list-item>
    <h-list-item-side>
      <h-list-item-img src="avatar/folder_open.png"/>
    </h-list-item-side>
    <h-list-item-content>
      <h-list-item-text title="Recipes" caption="Jan"/>
    </h-list-item-content>
    <h-list-item-side class="flex-items-center">
      <h-icon icon="fas fa-info-circle" text-color="text-gray"/>
    </h-list-item-side>
  </h-list-item>
  <h-separator/>
  <h-list-header text="Recent files"/>
  <h-list-item>
    <h-list-item-side>
      <h-list-item-img src="avatar/folder_open.png"/>
    </h-list-item-side>
    <h-list-item-content>
      <h-list-item-text title="Vacation itinerary" caption="Jan 20, 2018"/>
    </h-list-item-content>
    <h-list-item-side class="flex-items-center">
      <h-icon icon="fas fa-info-circle" text-color="text-gray"/>
    </h-list-item-side>
  </h-list-item>
  <h-list-item>
    <h-list-item-side>
      <h-list-item-img src="avatar/folder_open.png"/>
    </h-list-item-side>
    <h-list-item-content>
      <h-list-item-text title="Kicthen remodel" caption="Jan 10, 2018"/>
    </h-list-item-content>
    <h-list-item-side class="flex-items-center">
      <h-icon icon="fas fa-info-circle" text-color="text-gray"/>
    </h-list-item-side>
  </h-list-item>
</h-list>
`,
      lst3Line: `
<h-list bordered content-separator style="max-width: 400px">
  <h-list-header text="Recipes"/>
  <h-list-item>
    <h-list-item-side>
      <h-list-item-img class="flex-items-center"
        src="img/Crunchy.jpg" large/>
    </h-list-item-side>
    <h-list-item-content>
      <h-list-item-text title="Crunchy Croissants"
        caption="Buttery, flaky pastry named for its crescent shape."/>
    </h-list-item-content>
    <h-list-item-side>
      <h-list-item-text title="01"/>
    </h-list-item-side>
  </h-list-item>
  <h-list-item>
    <h-list-item-side>
      <h-list-item-img class="flex-items-center"
        src="img/GrilledEggPlant.jpg" large/>
    </h-list-item-side>
    <h-list-item-content>
      <h-list-item-text title="Grilled Eggplant"
        caption="Tender with a rich, complex and flavor when cooked."/>
    </h-list-item-content>
    <h-list-item-side>
      <h-list-item-text title="02"/>
    </h-list-item-side>
  </h-list-item>
  <h-list-item>
    <h-list-item-side>
      <h-list-item-img class="flex-items-center"
        src="img/TangerineSalad.jpg" large/>
    </h-list-item-side>
    <h-list-item-content>
      <h-list-item-text title="Tangerine Salad"
        caption="Peak tangerine season lasts from autumn to spring."/>
    </h-list-item-content>
    <h-list-item-side>
      <h-list-item-text title="03"/>
    </h-list-item-side>
  </h-list-item>
</h-list>

<h-list bordered item-separator class="h-mt-md" style="max-width: 400px">
  <h-list-header text="Today"/>
  <h-list-item>
    <h-list-item-side class="flex-items-center">
      <h-image avatar src="avatar/Eduard.jpg"/>
    </h-list-item-side>
    <h-list-item-content>
      <h-list-item-text title="Brunch this weekend?"
        caption="I'll be in your neighborhood doing errands this weekend."/>
    </h-list-item-content>
  </h-list-item>
  <h-list-item>
    <h-list-item-side class="flex-items-center">
      <h-image avatar src="avatar/AnaArmas.jpg"/>
    </h-list-item-side>
    <h-list-item-content>
      <h-list-item-text title="Summer BBQ"
        caption="Wish I coould come, but I'm out of town this weekend."/>
    </h-list-item-content>
  </h-list-item>
  <h-list-item>
    <h-list-item-side class="flex-items-center">
      <h-image avatar src="avatar/Kostenlose.jpg"/>
    </h-list-item-side>
    <h-list-item-content>
      <h-list-item-text title="Oui Oui"
        caption="Do you have Paris recommendations? Have you ever been?."/>
    </h-list-item-content>
  </h-list-item>
</h-list>

<h-list bordered class="h-mt-md" style="max-width: 400px">
    <h-list-item>
      <h-list-item-side>
        <h-list-item-img src="avatar/folder_open.png"/>
      </h-list-item-side>
      <h-list-item-content>
        <h-list-item-text title="At the top"
          caption="Cindy climbs new heights"/>
      </h-list-item-content>
      <h-list-item-side>
        <div class="text-center">
          <h-icon icon="fas fa-star" text-color="text-yellowA400"/>
          <h-list-item-text title="01"/>
        </div>
      </h-list-item-side>
    </h-list-item>
    <h-separator/>
    <h-list-item>
      <h-list-item-side>
        <h-list-item-img src="avatar/folder_open.png"/>
      </h-list-item-side>
      <h-list-item-content>
        <h-list-item-text title="At the top"
          caption="Cindy climbs new heights"/>
      </h-list-item-content>
      <h-list-item-side class="flex-justify-end">
        <div class="text-right">
          <h-icon icon="fas fa-star" text-color="text-yellowA400"/>
        </div>
        <h-list-item-text title="02" class="flex-justify-end"/>
        <h-list-item-text caption="5 min ago" class="flex-justify-end"/>
      </h-list-item-side>
    </h-list-item>
</h-list>
`,
      expcol: `
<h-list bordered class="h-mt-md" style="width: 350px">
  <h-collapsible>
    <h-collapsible-menu icon="fas fa-film" text="Attractions">
      <h-list>
        <h-list-item>
          <h-list-item-content>
            <h-list-item-text title="Shopping"/>
          </h-list-item-content>
        </h-list-item>
        <h-list-item>
          <h-list-item-content>
            <h-list-item-text title="Museums"/>
          </h-list-item-content>
        </h-list-item>
      </h-list>
    </h-collapsible-menu>
    <h-collapsible-menu icon="fas fa-utensils" text="Dining">
      <h-list>
        <h-list-item>
          <h-list-item-content>
            <h-list-item-text title="Restaurants"/>
          </h-list-item-content>
        </h-list-item>
      </h-list>
    </h-collapsible-menu>
  </h-collapsible>
</h-list>
`,
      lstControls: `
<h-list bordered class="h-mt-md" style="width: 400px">
  <h-list-header text="Today"/>
    <h-list-item>
      <h-list-item-side class="flex-items-center">
        <h-image avatar src="avatar/Eduard.jpg"/>
      </h-list-item-side>
      <h-list-item-content>
        <h-list-item-text title="Brunch this weekend?"
          caption="I'll be in your neighborhood doing errands this weekend."/>
      </h-list-item-content>
      <h-list-item-side class="flex-items-center">
        <h-checkbox/>
      </h-list-item-side>
    </h-list-item>
    <h-list-item>
      <h-list-item-side class="flex-items-center">
        <h-image avatar src="avatar/AnaArmas.jpg"/>
      </h-list-item-side>
      <h-list-item-content>
        <h-list-item-text title="Summer BBQ"
          caption="Wish I coould come, but I'm out of town this weekend."/>
      </h-list-item-content>
      <h-list-item-side class="flex-items-center">
        <h-checkbox/>
      </h-list-item-side>
    </h-list-item>
    <h-list-item>
      <h-list-item-side class="flex-items-center">
        <h-image avatar src="avatar/Kostenlose.jpg"/>
      </h-list-item-side>
      <h-list-item-content>
        <h-list-item-text title="Oui Oui"
          caption="Do you have Paris recommendations? Have you ever been?."/>
      </h-list-item-content>
      <h-list-item-side class="flex-items-center">
        <h-checkbox/>
      </h-list-item-side>
    </h-list-item>
    <h-separator/>
    <h-list-header text="Notifications"/>
    <h-list-item>
      <h-list-item-content>
        <h-list-item-text title="Games"/>
      </h-list-item-content>
      <h-list-item-side class="flex-items-center">
        <h-toggle/>
      </h-list-item-side>
    </h-list-item>
    <h-list-item>
      <h-list-item-content>
        <h-list-item-text title="WhatsApp"/>
      </h-list-item-content>
      <h-list-item-side class="flex-items-center">
        <h-toggle/>
      </h-list-item-side>
    </h-list-item>
    <h-list-item>
      <h-list-item-content>
        <h-list-item-text title="E-Mail"/>
      </h-list-item-content>
      <h-list-item-side class="flex-items-center">
        <h-toggle/>
      </h-list-item-side>
    </h-list-item>
</h-list>
`
    }
  },
  mounted () {
    this.helpTopics.listProperties = helpTopics.listProperties
    this.helpTopics.listHeaderProperties = helpTopics.listHeaderProperties
    this.helpTopics.listItemImageProperties = helpTopics.listItemImageProperties
    this.helpTopics.listItemTextProperties = helpTopics.listItemTextProperties

    this.checkMainBodyWidth()
  },
  methods: {
    goToElement (refName) {
      viewport.goToElement(this.$refs[refName])
    },
    checkMainBodyWidth () {
      let value = viewport.mainBodyWidth()
      if (value < 961) {
        this.showDrawer = false
      }
    },
    pageResize (value) {
      this.$refs.navHelp.onResize(value)
    }
  }
}
</script>
