<template>
  <h-page-content padding>
    <div class="text-h4">Spacing</div>

    <div class="text-h4 h-mt-lg">Syntax</div>
    <div class="text-body1">H - TYPE + DIRECTION - SIZE</div>

    <html-table bordered class="h-mt-md">
      <thead>
        <tr>
          <th class="text-left">TYPE</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><b>m</b> for margin</td>
        </tr>
        <tr>
          <td><b>p</b> for padding</td>
        </tr>
      </tbody>

    </html-table>

    <html-table bordered class="h-mt-md">
      <thead>
        <tr>
          <th class="text-left">DIRECTION</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><b>t</b> for top</td>
        </tr>
        <tr>
          <td><b>b</b> for bottom</td>
        </tr>
        <tr>
          <td><b>l</b> for left</td>
        </tr>
        <tr>
          <td><b>r</b> for right</td>
        </tr>
        <tr>
          <td><b>a</b> for all</td>
        </tr>
      </tbody>
    </html-table>

    <html-table bordered class="h-mt-md">
      <thead>
        <tr>
          <th class="text-left">SIZE</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><b>xs</b> for extra small</td>
        </tr>
        <tr>
          <td><b>sm</b> for small</td>
        </tr>
        <tr>
          <td><b>md</b> for medium</td>
        </tr>
        <tr>
          <td><b>lg</b> for large</td>
        </tr>
        <tr>
          <td><b>xl</b> for extra large</td>
        </tr>
      </tbody>
    </html-table>

    <div class="text-h4 h-mt-lg">EXAMPLES</div>
    <html-table bordered cell-separator class="h-mt-md">
      <thead>
        <tr>
          <th class="text-left">Syntax</th>
          <th class="text-left">Description</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>h-pa-sm</td>
          <td>small padding</td>
        </tr>
        <tr>
          <td>h-ml-sm</td>
          <td>small margin left</td>
        </tr>
      </tbody>
    </html-table>

  </h-page-content>

</template>

<script>
export default {
  name: 'Spacing',
  data() {
    return {
    };
  },
};
</script>
