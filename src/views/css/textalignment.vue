<template>
  <h-page-content padding>
    <div class="text-h4">Text Alignment</div>

    <html-table bordered cell-separator class="h-mt-md">
      <thead>
        <tr class="text-left">
          <th>Name</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>text-left</td>
          <td>The text is left aligned</td>
        </tr>
        <tr>
          <td>text-right</td>
          <td>The text is right aligned</td>
        </tr>
        <tr>
          <td>text-center</td>
          <td>The text is center aligned</td>
        </tr>
        <tr>
          <td>text-justify</td>
          <td>The text is justify aligned</td>
        </tr>
      </tbody>
    </html-table>
  </h-page-content>

</template>

<script>
export default {
  name: 'TextAlignment',
};
</script>
