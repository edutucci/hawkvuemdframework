<template lang="pug">
  div
    h1 Spacing

    h2 This css helps you with spacing between elements

    h1 Syntax

    div.boxshadow
      | H - TYPE + DIRECTION - SIZE

    div.boxshadow
      | TYPE
      <ul>
        <li>m for margin</li>
        <li>p for padding</li>
      </ul>

    div.boxshadow
      | DIRECTION
      <ul>
        <li>(t) for top, (b) for bottom, (l) for left, (r) for right</li>
        <li>(a) for all</li>
      </ul>

    div.boxshadow
      | SIZE
      <ul>
        <li>xs (extra small)</li>
        <li>sm (small)</li>
        <li>md (medium)</li>
        <li>lg (large)</li>
        <li>xl (extra large)</li>
      </ul>

    h1 Examples

    div.boxshadow
      h3 small size for all paddings
      textarea.boxshadow(readonly style="border: none;") <div class="h-pa-sm"/>

    div.boxshadow
      h3  medium size for margin left
      textarea.boxshadow(readonly style="border: none;") <div class="h-ml-md"/>

</template>

<script>
export default {
  name: 'Spacing'
}
</script>
