<template>
  <h-page-content padding>

    <div class="text-h4">Html Table</div>

    <comp-code title="Bordered" code="text">
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

    <comp-code class="h-mt-md" title="Bordered and Cell Separator" code="text">
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

    <comp-code class="h-mt-md" title="Shadow" code="text">
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
    </comp-code>

  </h-page-content>
</template>
