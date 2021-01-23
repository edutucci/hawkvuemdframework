<template lang="pug">
h-page(padding
  @onResize="pageResize"
  @mainLayoutDrawerIsOpened="showDrawer = false"
)
  template(v-slot:left)

  .row.justify-center
    .col-auto.text-h5
      | PAGE FOR TEST

  .row
    .col
      <html-table bordered>
        <thead>
          <tr class="text-left">
            <th>Name</th>
            <th>Description</th>
            <th>Name</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>no-user-select</td>
            <td> The user can not select text of an element</td>
            <td>no-user-select</td>
            <td> The user can not select text of an element</td>
          </tr>
          <tr>
            <td>cursor-pointer</td>
            <td>The cursor is a pointer and indicates a link</td>
            <td>cursor-pointer</td>
            <td>The cursor is a pointer and indicates a link</td>
          </tr>
          <tr>
            <td>text-white</td>
            <td>text of an element becomes white</td>
            <td>text-white</td>
            <td>text of an element becomes white</td>
          </tr>
          <tr>
            <td>text-bold</td>
            <td>text of an element becomes bold</td>
            <td>text-bold</td>
            <td>text of an element becomes bold</td>
          </tr>
        </tbody>
      </html-table>

  template(v-slot:right)
    h-nav-drawer(ref="navHelp" v-model="showDrawer" side="right")
      slot(name="help")

</template>

<script>
export default {
  data() {
    return {
      showDrawer: false,
      useHelp: true,
    };
  },
  methods: {
    pageResize(value) {
      console.log(value);
    },
  },
};
</script>
