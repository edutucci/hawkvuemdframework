<template lang="pug">
  .column(style="min-height: 250px;")
    .col-auto.text-h4.text-primary
      | {{title}}
      hr.h-mt-sm.h-mb-sm
    .col.scroll
      h-tabs(v-model="tabHelp" bg-color="bg-primary" text-color="text-white")
        h-tab(name="properties" text="PROPERTIES")
          html-table(bordered cell-separator)
            thead
              tr(class="text-left")
                th Name
                th Type
                th Description
            tbody
              tr(v-for="(prop, index) in properties" :key="`prop-${index}`")
                td {{prop.name}}
                td {{prop.type}}
                td
                  span {{prop.description}}
        h-tab(v-if="events && events.length > 0" name="events" text="EVENTS")
          html-table(bordered cell-separator)
            thead
              tr(class="text-left")
                th Name
                th Description
            tbody
              tr(v-for="(evt, index) in events" :key="`event-${index}`")
                td {{evt.name}}
                td 
                  span {{evt.description}}

</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: () => 'Help'
    },
    properties: {
      type: Array,
      default: () => { return [] }
    },
    events: {
      type: Array,
      default: () => { return [] }
    }
  },
  data () {
    return {
      tabHelp: 'properties'
    }
  }
}
</script>
