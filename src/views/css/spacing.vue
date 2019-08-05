<template>
  <h-page-content padding>
    <div class="text-h4">Spacing</div>

    <div class="text-h4 h-mt-lg">Syntax</div>
    <div class="text-body1">H - TYPE + DIRECTION - SIZE</div>

    <html-table borders class="h-mt-md">
      <tr>
        <th class="text-left">Type</th>
      </tr>
      <tr>
        <td>m for margin</td>
      </tr>
      <tr>
        <td>p for padding</td>
      </tr>
    </html-table>

    <html-table borders class="h-mt-md">
      <tr>
        <th class="text-left">DIRECTION</th>
      </tr>
      <tr>
        <td>(t) for top, (b) for bottom, (l) for left, (r) for right</td>
      </tr>
      <tr>
        <td>(a) for all</td>
      </tr>
    </html-table>

    <html-table borders class="h-mt-md">
      <tr>
        <th class="text-left">SIZE</th>
      </tr>
      <tr>
        <td>xs (extra small)</td>
      </tr>
      <tr>
        <td>sm (small)</td>
      </tr>
      <tr>
        <td>md (medium)</td>
      </tr>
      <tr>
        <td>lg (large)</td>
      </tr>
      <tr>
        <td>xl (extra large)</td>
      </tr>
    </html-table>

    <comp-code class="h-mt-md" title="Examples" :code="ex">
      <div class="h-pa-sm border border-gray"> small padding</div>
      <div class="h-ml-sm border border-gray h-mt-sm"> small margin left</div>
    </comp-code>

  </h-page-content>

</template>

<script>
export default {
  name: 'Spacing',
  data () {
    return {
      ex: `
<div class="h-pa-sm border border-gray"> small padding</div>
<div class="h-ml-sm border border-gray h-mt-sm"> small margin left</div>      
`
    }
  }
}
</script>
