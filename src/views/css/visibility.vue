<template>
  <h-page-content padding>
    

    <div class="row justify-center">
      <div class="col">
        <div class="text-h4">Device sizes</div>
        
        <div class="h-mt-md text-h4">Window width</div>
        <html-table bordered cell-separator>
          <thead>
            <tr class="text-left">
              <th>Name</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>xs (extra small)</td>
              <td>{{xs}}</td>
            </tr>
            <tr>
              <td>sm (small)</td>
              <td>{{sm}}</td>
            </tr>
            <tr>
              <td>md (medium)</td>
              <td>{{md}}</td>
            </tr>
            <tr>
              <td>lg (large)</td>
              <td>{{lg}}</td>
            </tr>
            <tr>
              <td>xl (extra large)</td>
              <td>higher than {{lg}}</td>
            </tr>
          </tbody>
        </html-table>
        <!-- <div class="text-h5 h-mt-md">Example</div>
        <prism :code="sizes"></prism> -->
        <div class="h-mt-md text-h4">Visibility by width</div>
        <html-table bordered cell-separator>
          <thead>
            <tr class="text-left">
              <th>Name</th>
              <th>Description</th>
            </tr>        
          </thead>
          <tbody>
            <tr>
              <td>lt-sm</td>
              <td>An element is visible when the screen width is less or equal {{xs}}</td>
            </tr>
            <tr>
              <td>lt-md</td>
              <td>An element is visible when the screen width is less or equal {{sm}}</td>
            </tr>
            <tr>
              <td>lt-lg</td>
              <td>An element is visible when the screen width is less or equal {{md}}</td>
            </tr>
            <tr>
              <td>lt-xl</td>
              <td>An element is visible when the screen width is less or equal {{lg}}</td>
            </tr>
            <tr>
              <td>gt-xs</td>
              <td> An element is visible when the screen width is higher than 640px</td>
            </tr>
            <tr>
              <td>gt-sm</td>
              <td>An element is visible when the screen width is higher than 960px</td>
            </tr>
            <tr>
              <td>gt-lg</td>
              <td>An element is visible when the screen width is higher than 1440px</td>
            </tr>
            <tr>
              <td>gt-xl</td>
              <td>An element is visible when the screen width is higher than 1920px</td>
            </tr>
          </tbody>
        </html-table>

        <div class="text-body h-mt-md">Example</div>
        <prism :code="vissizes"></prism>
      </div>
    </div>
     
  </h-page-content>

</template>

<script>
export default {
  name: 'Visibility',
  data () {
    return {
      xs: '640px',
      sm: '960px',
      md: '1440px',
      lg: '1920px',
      sizes: `<div class="col-xs-12 col-sm-12 col-md-6 col-lg-4" style="background: blue">example</div>`,
      vissizes: `
  <div class="xs-only">xs-only</div>
  <div class="hidden-sm">hidden-sm</div>
  `
    }
  }
}
</script>

<style scoped>
/* td.fitwidth,
th.fitwidth {
  width: 1px;
  white-space: nowrap;
} */
</style>