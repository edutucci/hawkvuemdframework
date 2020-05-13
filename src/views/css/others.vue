<template>
  <h-page-content padding>

    <div class="text-h4">Others css Helpers</div>

    <html-table bordered cell-separator>
      <thead>
        <tr class="text-left">
          <th>Name</th>
          <th>Description</th>
        </tr>        
      </thead>
      <tbody>
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
      </tbody>
    </html-table>

  </h-page-content>

</template>

<script>
export default {
  name: 'Others'
}
</script>
