<template>
  <h-page-content padding>

    <h3>Single Line Item</h3>
    <div class="h-pa-sm border border-gray border-radius">
      <h-list style="max-width: 350px">
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
            <h-avatar src="avatar/AnaArmas.jpg"/>
          </h-list-item-side>
          <h-list-item-content>
            <h-list-item-text title="Ana"/>
          </h-list-item-content>
        </h-list-item>
        <h-list-item>
          <h-list-item-side>
            <h-avatar src="avatar/Eduard.jpg"/>
          </h-list-item-side>
          <h-list-item-content>
            <h-list-item-text title="Eduard"/>
          </h-list-item-content>
        </h-list-item>
      </h-list>

      <h-list class="h-mt-md" style="max-width: 350px">
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
              <h-fa-icon icon="fas fa-film" size="20px"/>
            </h-list-item-side>
            <h-list-item-content>
              <h-list-item-text title="Attractions"/>
            </h-list-item-content>
          </h-list-item>
          <h-list-item>
            <h-list-item-side>
              <h-fa-icon icon="fas fa-utensils" size="20px"/>
            </h-list-item-side>
            <h-list-item-content>
              <h-list-item-text title="Dinning"/>
            </h-list-item-content>
          </h-list-item>
      </h-list>
    </div>

    <h3>Two Line Item</h3>
    <div class="h-pa-sm border border-gray border-radius">
      <h-list style="max-width: 350px">
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
            <h-fa-icon icon="fas fa-film"/>
          </h-list-item-side>
          <h-list-item-content>
            <h-list-item-text title="House in the clouds" caption="Jonathan creates a new world"/>
          </h-list-item-content>
        </h-list-item>
        <h-list-item>
          <h-list-item-side>
            <h-fa-icon icon="fas fa-plane"/>
          </h-list-item-side>
          <h-list-item-content>
            <h-list-item-text title="At the top" caption="Cindy climbs new heights"/>
          </h-list-item-content>
        </h-list-item>
      </h-list>

      <h-list class="h-mt-md" style="max-width: 350px">
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

      <h-list class="h-mt-md" style="width: 350px">
        <h-list-item>
          <h-list-item-side>
            <h-list-item-img src="avatar/folder_open.jpeg"/>
          </h-list-item-side>
          <h-list-item-content>
            <h-list-item-text title="Photos" caption="Jan 9, 2018"/>
          </h-list-item-content>
          <h-list-item-side class="flex-items-center">
            <h-fa-icon icon="fas fa-info-circle" text-color="text-gray"/>
          </h-list-item-side>
        </h-list-item>
        <h-list-item>
          <h-list-item-side>
            <h-list-item-img src="avatar/folder_open.jpeg"/>
          </h-list-item-side>
          <h-list-item-content>
            <h-list-item-text title="Recipes" caption="Jan"/>
          </h-list-item-content>
          <h-list-item-side class="flex-items-center">
            <h-fa-icon icon="fas fa-info-circle" text-color="text-gray"/>
          </h-list-item-side>
        </h-list-item>
        <h-separator/>
        <h-list-header text="Recent files"/>
        <h-list-item>
          <h-list-item-side>
            <h-list-item-img src="avatar/folder_open.jpeg"/>
          </h-list-item-side>
          <h-list-item-content>
            <h-list-item-text title="Vacation itinerary" caption="Jan 20, 2018"/>
          </h-list-item-content>
          <h-list-item-side class="flex-items-center">
            <h-fa-icon icon="fas fa-info-circle" text-color="text-gray"/>
          </h-list-item-side>
        </h-list-item>
        <h-list-item>
          <h-list-item-side>
            <h-list-item-img src="avatar/folder_open.jpeg"/>
          </h-list-item-side>
          <h-list-item-content>
            <h-list-item-text title="Kicthen remodel" caption="Jan 10, 2018"/>
          </h-list-item-content>
          <h-list-item-side class="flex-items-center">
            <h-fa-icon icon="fas fa-info-circle" text-color="text-gray"/>
          </h-list-item-side>
        </h-list-item>
      </h-list>
    </div>

    <h3>Three Line Item</h3>
    <div class="h-pa-sm border border-gray border-radius">
      <h-list style="max-width: 400px">
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

      <h-list class="h-mt-md" style="max-width: 400px">
        <h-list-header text="Today"/>
        <h-list-item>
          <h-list-item-side class="flex-items-center">
            <h-avatar src="avatar/Eduard.jpg"/>
          </h-list-item-side>
          <h-list-item-content>
            <h-list-item-text title="Brunch this weekend?" caption="I'll be in your neighborhood doing errands this weekend."/>
          </h-list-item-content>
        </h-list-item>
        <h-list-item>
          <h-list-item-side class="flex-items-center">
            <h-avatar src="avatar/AnaArmas.jpg"/>
          </h-list-item-side>
          <h-list-item-content>
            <h-list-item-text title="Summer BBQ" caption="Wish I coould come, but I'm out of town this weekend."/>
          </h-list-item-content>
        </h-list-item>
        <h-list-item>
          <h-list-item-side class="flex-items-center">
            <h-avatar src="avatar/Kostenlose.jpg"/>
          </h-list-item-side>
          <h-list-item-content>
            <h-list-item-text title="Oui Oui" caption="Do you have Paris recommendations? Have you ever been?."/>
          </h-list-item-content>
        </h-list-item>
      </h-list>

      <h-list class="h-mt-md" style="max-width: 400px">
          <h-list-item>
            <h-list-item-side>
              <h-list-item-img src="avatar/folder_open.jpeg"/>
            </h-list-item-side>
            <h-list-item-content>
              <h-list-item-text title="At the top" caption="Cindy climbs new heights"/>
            </h-list-item-content>
            <h-list-item-side>
              <div class="text-center">
                <h-fa-icon icon="fas fa-star" text-color="text-yellowA400"/>
                <h-list-item-text title="01"/>
              </div>
            </h-list-item-side>
          </h-list-item>
          <h-separator/>
          <h-list-item>
            <h-list-item-side>
              <h-list-item-img src="avatar/folder_open.jpeg"/>
            </h-list-item-side>
            <h-list-item-content>
              <h-list-item-text title="At the top" caption="Cindy climbs new heights"/>
            </h-list-item-content>
            <h-list-item-side class="flex-justify-end">
              <div class="text-right"><h-fa-icon icon="fas fa-star" text-color="text-yellowA400"/></div>
              <h-list-item-text title="02" class="flex-justify-end"/>
              <h-list-item-text caption="5 min ago" class="flex-justify-end"/>
            </h-list-item-side>
          </h-list-item>
      </h-list>
    </div>

    <h3>Expand and collapse</h3>
    <div class="h-pa-sm border border-gray border-radius">
      <h-list class="h-mt-md" style="width: 350px">
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
    </div>

    <h3>Controls</h3>
    <div class="h-pa-sm border border-gray border-radius">
      <h-list class="h-mt-md" style="width: 400px">
        <h-list-header text="Today"/>
          <h-list-item>
            <h-list-item-side class="flex-items-center">
              <h-avatar src="avatar/Eduard.jpg"/>
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
              <h-avatar src="avatar/AnaArmas.jpg"/>
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
              <h-avatar src="avatar/Kostenlose.jpg"/>
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
    </div>

  </h-page-content></template>

<script>

export default {
  data () {
    return {}
  }
}
</script>
