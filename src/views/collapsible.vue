<template>
  <div>
    <h1>Collapsible</h1>

    <h-collapsible>
      <h-collapsible-menu :icon="['fas', 'film']" text="Attractions">
        <h-collapsible-item text="Shopping"></h-collapsible-item>
        <h-collapsible-item text="Museum"></h-collapsible-item>
      </h-collapsible-menu>
      <h-collapsible-menu :icon="['fas', 'utensils']" text="Dining">
        <h-collapsible-item text="Restaurants"></h-collapsible-item>
      </h-collapsible-menu>
    </h-collapsible>

    <pre v-highlightjs="ex1">
      <code class="html">
      </code>
    </pre>

    <h1>Collapsible Custom Color</h1>

    <h-collapsible>
      <h-collapsible-menu :icon="['fas', 'film']" text="Attractions" bgcolor="bg-primary" textcolor="text-white">
        <h-collapsible-item text="Shopping"></h-collapsible-item>
        <h-collapsible-item text="Museum"></h-collapsible-item>
      </h-collapsible-menu>
      <h-collapsible-menu :icon="['fas', 'utensils']" text="Dining" bgcolor="bg-primary" textcolor="text-white">
        <h-collapsible-item text="Restaurants"></h-collapsible-item>
      </h-collapsible-menu>
    </h-collapsible>

    <pre v-highlightjs="ex2">
      <code class="html">
      </code>
    </pre>

    <h1>Collapsible Custom Content</h1>

    <h-collapsible>
      <h-collapsible-menu :icon="['fas', 'film']" text="Letter">
        <div class="flex flex-items-center flex-justify-center">
          <div>
            <h-avatar src="/img/hawk.png" size="64px"/>
          </div>
          <div>
            <h1>Free Framework CSS</h1>
          </div>
        </div>
      </h-collapsible-menu>
      <h-collapsible-menu :icon="['fas', 'utensils']" text="Dining">
        <div class="flex flex-items-center flex-justify-center">
          <div>
            <h-avatar src="/img/icons/mstile-150x150.png" size="64px"/>
          </div>
          <div>
            <h1>Vue JS</h1>
          </div>
        </div>
      </h-collapsible-menu>
    </h-collapsible>

    <pre v-highlightjs="ex3">
      <code class="html">
      </code>
    </pre>
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
    <h-collapsible-item text="Shopping"></h-collapsible-item>
    <h-collapsible-item text="Museum"></h-collapsible-item>
  </h-collapsible-menu>
  <h-collapsible-menu :icon="['fas', 'utensils']" text="Dining" bgcolor="bg-primary" textcolor="text-white">
    <h-collapsible-item text="Restaurants"></h-collapsible-item>
  </h-collapsible-menu>
</h-collapsible>
      `,
      ex3: `
<h-collapsible>
  <h-collapsible-menu :icon="['fas', 'film']" text="Letter">
    <div class="flex flex-items-center flex-justify-center">
      <div>
        <h-avatar src="/img/hawk.png" size="64px"/>
      </div>
      <div>
        <h1>Free Framework CSS</h1>
      </div>
    </div>
  </h-collapsible-menu>
  <h-collapsible-menu :icon="['fas', 'utensils']" text="Dining">
    <div class="flex flex-items-center flex-justify-center">
      <div>
        <h-avatar src="/img/icons/mstile-150x150.png" size="64px"/>
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
