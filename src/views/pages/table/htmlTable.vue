<template>
  <page-layout ref="pl" title="Table Html">
    <template v-slot:components>
      <!-- <html-table></html-table> -->
      <div class="text-h5"> Pagina HTML Table</div>

      <div ref="banner-standard" />
      <h-banner class="h-mt-md">
        <template
          v-slot:text
        >Your password was updated on your other device. Please sign again.</template>

        <template v-slot:buttons>
          <h-btn
            text-button
            caps
            text="continue as a guest"
            text-color="text-primary"
            bg-color="bg-primary"
          />
          <h-btn
            text-button
            caps
            text="sign in"
            text-color="text-primary"
            bg-color="bg-primary"
          />
        </template>
      </h-banner>

      <h-banner class="h-mt-md border-radius">
        <template v-slot:text>
          <div class="row align-items-center">
            <div class="col-auto">
              <h-icon icon="signal_wifi_off" />
            </div>
            <div class="col">You have lost connection to the internet.This app is offline.</div>
          </div>
        </template>

        <template v-slot:buttons>
          <h-btn
            text-button
            caps
            text="turn on wifi"
            text-color="text-primary"
            bg-color="bg-primary"
          />
        </template>
      </h-banner>

      <h-banner wide class="h-mt-md">
        <template v-slot:text>We can't save your edits while you are in offline mode.</template>

        <template v-slot:buttons>
          <h-btn
            text-button
            caps
            text="get online"
            text-color="text-primary"
            bg-color="bg-primary"
          />
        </template>
      </h-banner>

      <!-- <html-table bordered>
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
      </html-table> -->
      <!-- <div ref="table-bordered"/>
      <comp-code title="Bordered" :code="tbEx1">
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
      </comp-code>

      <div ref="table-bordered-cellseparator"/>
      <comp-code class="h-mt-md" title="Bordered and Cell Separator" :code="tbEx2">
        <html-table bordered cell-separator>
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
      </comp-code>

      <div ref="table-shadow"/>
      <comp-code class="h-mt-md" title="Shadow" :code="tbEx3">
        <html-table shadow >
          <tr class="text-left">
            <th>Name</th>
            <th>Description</th>
          </tr>
          <tr>
            <td>no-user-select</td>
            <td> The user can not select text of an element</td>
          </tr>
          <tr>
            <td>cursor-pointer</td>
            <td>The cursor is a pointer and indicates a link</td>
          </tr>
          <tr>
            <td>text-white</td>
            <td>text of an element becomes white</td>
          </tr>
          <tr>
            <td>text-bold</td>
            <td>text of an element becomes bold</td>
          </tr>
          <tr>
            <td>scroll</td>
            <td>auto scrollbars to element</td>
          </tr>
          <tr>
            <td>no-margin</td>
            <td>removes margins</td>
          </tr>
          <tr>
            <td>no-padding</td>
            <td>removes padding</td>
          </tr>
          <tr>
            <td>overflow-hidden</td>
            <td>sets overflow-hidden to element</td>
          </tr>
        </html-table>
      </comp-code> -->
    </template>

    <template v-slot:help>
      <list-help>
        <h-list>
          <h-list-header text="Usage"/>
          <h-list-item @click="goToElement('table-bordered')">
            <h-list-item-content>
              <h-list-item-text title="Bordered"></h-list-item-text>
            </h-list-item-content>
          </h-list-item>
          <h-list-item @click="goToElement('table-bordered-cellsepatator')">
            <h-list-item-content>
              <h-list-item-text title="Bordered and Cell Separator"></h-list-item-text>
            </h-list-item-content>
          </h-list-item>
          <h-list-item @click="goToElement('table-shadow')">
            <h-list-item-content>
              <h-list-item-text title="Shadow"></h-list-item-text>
            </h-list-item-content>
          </h-list-item>
        </h-list>
      </list-help>
    </template>
  </page-layout>

</template>

<script>

import PageLayout from '../pageLayout.vue';

export default {
  components: {
    PageLayout,
  },
  data() {
    return {
      showDrawer: true,
      tbEx1: `
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
`,
      tbEx2: `
<html-table bordered cell-separator>
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
`,
      tbEx3: `
<html-table shadow >
  <tr class="text-left">
    <th>Name</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>no-user-select</td>
    <td> The user can not select text of an element</td>
  </tr>
  <tr>
    <td>cursor-pointer</td>
    <td>The cursor is a pointer and indicates a link</td>
  </tr>
  <tr>
    <td>text-white</td>
    <td>text of an element becomes white</td>
  </tr>
  <tr>
    <td>text-bold</td>
    <td>text of an element becomes bold</td>
  </tr>
  <tr>
    <td>scroll</td>
    <td>auto scrollbars to element</td>
  </tr>
  <tr>
    <td>no-margin</td>
    <td>removes margins</td>
  </tr>
  <tr>
    <td>no-padding</td>
    <td>removes padding</td>
  </tr>
  <tr>
    <td>overflow-hidden</td>
    <td>sets overflow-hidden to element</td>
  </tr>
</html-table>      
`,
    };
  },
  mounted() {
  },
  methods: {
    goToElement(refName) {
      this.$refs.pl.goToElement(this.$refs[refName]);
    },
  },
};
</script>
