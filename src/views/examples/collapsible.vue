<template>
  <div>
    <h1>Collapsible</h1>

    <h3>Standard</h3>
    <div class="h-pa-sm border border-gray border-radius">
      <h-collapsible>
        <h-collapsible-menu icon="fas fa-film" text="Attractions">
          <h-collapsible-item text="Shopping"></h-collapsible-item>
          <h-collapsible-item text="Museum"></h-collapsible-item>
        </h-collapsible-menu>
        <h-collapsible-menu icon="fas fa-utensils" text="Dining">
          <h-collapsible-item text="Restaurants"></h-collapsible-item>
        </h-collapsible-menu>
      </h-collapsible>
    </div>

    <h3>Custom Color</h3>
    <div class="h-pa-sm border border-gray border-radius">
      <h-collapsible>
        <h-collapsible-menu icon="fa fa-film" text="Attractions" bgcolor="bg-primary" textcolor="text-white">
          <h-collapsible-item text="Shopping" bgcolor="bg-primary" textcolor="text-white"></h-collapsible-item>
          <h-collapsible-item text="Museum" bgcolor="bg-primary" textcolor="text-white"></h-collapsible-item>
        </h-collapsible-menu>
        <h-collapsible-menu icon="fas fa-utensils" text="Dining" bgcolor="bg-primary" textcolor="text-white">
          <h-collapsible-item text="Restaurants" bgcolor="bg-primary" textcolor="text-white"></h-collapsible-item>
        </h-collapsible-menu>
      </h-collapsible>
    </div>

    <h3>Custom Content</h3>
    <div class="h-pa-sm border border-gray border-radius">
      <h-collapsible>
        <h-collapsible-menu icon="fa fa-film" text="Letter">
          <div class="flex flex-items-center flex-justify-center">
            <div>
              <h-image src="img/hawk.png" size="64px" avatar/>
            </div>
            <div>
              <h1>Free Framework CSS</h1>
            </div>
          </div>
        </h-collapsible-menu>
        <h-collapsible-menu icon="fas fa-utensils" text="Dining">
          <div class="flex flex-items-center flex-justify-center">
            <div>
              <h-image src="img/icons/mstile-150x150.png" size="64px" avatar/>
            </div>
            <div>
              <h1>Vue JS</h1>
            </div>
          </div>
        </h-collapsible-menu>
      </h-collapsible>
    </div>

  </div>
</template>

<script>
export default {
  data () {
    return {
      ex1: `
<h-collapsible>
  <h-collapsible-menu :icon="['fas', 'film']" text="Attractions">
    <h-collapsible-item text="Shopping"></h-collapsible-item>
    <h-collapsible-item text="Museum"></h-collapsible-item>
  </h-collapsible-menu>
  <h-collapsible-menu :icon="['fas', 'utensils']" text="Dining">
    <h-collapsible-item text="Restaurants"></h-collapsible-item>
  </h-collapsible-menu>
</h-collapsible>
      `,
      ex2: `
<h-collapsible>
  <h-collapsible-menu :icon="['fas', 'film']" text="Attractions" bgcolor="bg-primary" textcolor="text-white">
    <h-collapsible-item text="Shopping" bgcolor="bg-primary" textcolor="text-white"></h-collapsible-item>
    <h-collapsible-item text="Museum" bgcolor="bg-primary" textcolor="text-white"></h-collapsible-item>
  </h-collapsible-menu>
  <h-collapsible-menu :icon="['fas', 'utensils']" text="Dining" bgcolor="bg-primary" textcolor="text-white">
    <h-collapsible-item text="Restaurants" bgcolor="bg-primary" textcolor="text-white"></h-collapsible-item>
  </h-collapsible-menu>
</h-collapsible>
      `,
      ex3: `
<h-collapsible>
  <h-collapsible-menu :icon="['fas', 'film']" text="Letter">
    <div class="flex flex-items-center flex-justify-center">
      <div>
        <h-image src="img/hawk.png" avatar size="64px"/>
      </div>
      <div>
        <h1>Free Framework CSS</h1>
      </div>
    </div>
  </h-collapsible-menu>
  <h-collapsible-menu :icon="['fas', 'utensils']" text="Dining">
    <div class="flex flex-items-center flex-justify-center">
      <div>
        <h-image src="img/icons/mstile-150x150.png" avatar size="64px"/>
      </div>
      <div>
        <h1>Vue JS</h1>
      </div>
    </div>
  </h-collapsible-menu>
</h-collapsible>
      `
    }
  }
}
</script>
