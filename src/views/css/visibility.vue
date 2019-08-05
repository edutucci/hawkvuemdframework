<template>
  <h-page-content padding>
    <div class="text-h4">Device sizes</div>

    <div class="h-mt-md text-h4">Window width</div>
    <html-table borders>
      <tr class="text-left">
        <th>Name</th>
        <th>Description</th>
      </tr>
      <tr>
        <td>xs (extra small)</td>
        <td>600px</td>
      </tr>
      <tr>
        <td>sm (small)</td>
        <td>1200px</td>
      </tr>
      <tr>
        <td>md (medium)</td>
        <td>1600px</td>
      </tr>
      <tr>
        <td>lg (large)</td>
        <td>1920px</td>
      </tr>
      <tr>
        <td>xl (extra large)</td>
        <td>higher than 1920px</td>
      </tr>
    </html-table>

    <div class="text-body h-mt-md">Example</div>
    <prism :code="sizes">

    </prism>

    <div class="h-mt-md text-h4">Visibility by width</div>
    <html-table borders class="h-mt-md">
      <tr>
        <th>Name</th>
        <th>Description</th>
      </tr>
      <tr>
        <td>xs-only</td>
        <td>An element is visible when then screen width is less or equal 600px</td>
      </tr>
      <tr>
        <td>hidden-xs</td>
        <td> An element is visible when then screen width is higher than 600px</td>
      </tr>
      <tr>
        <td>sm-only</td>
        <td>An element is visible when then screen width is less or equal 1200px</td>
      </tr>
      <tr>
        <td>hidden-sm</td>
        <td>An element is visible when then screen width is higher than 1200px</td>
      </tr>
      <tr>
        <td>md-only</td>
        <td>An element is visible when then screen width is less or equal 1600px</td>
      </tr>
      <tr>
        <td>hidden-md</td>
        <td>An element is visible when then screen width is higher than 1600px</td>
      </tr>
      <tr>
        <td>lg-only</td>
        <td>An element is visible when then screen width is less or equal 1920px</td>
      </tr>
      <tr>
        <td>hidden-lg</td>
        <td>An element is visible when then screen width is higher than 1920px</td>
      </tr>
    </html-table>

    <div class="text-body h-mt-md">Example</div>
    <prism :code="vissizes"></prism>

  </h-page-content>

</template>

<script>
export default {
  name: 'Visibility',
  data () {
    return {
      sizes: `<div class="col-xs-12 col-sm-12 col-md-6 col-lg-4" style="background: blue">example</div>`,
      vissizes: `
  <div class="xs-only">xs-only</div>
  <div class="hidden-sm">hidden-sm</div>
  `
    }
  }
}
</script>
