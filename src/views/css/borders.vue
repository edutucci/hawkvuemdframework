<template>
  <div>
      <h1>BORDERS WIDTH</h1>
      <h1>Border With 1</h1>
      <div>
        <div class="bg-black border-white auto-size border-1" style="padding: 4px">
          <span class="text-white">Border white</span>
        </div>
        <div class="bg-white border-black auto-size border-1 h-ml-sm" style="padding: 4px">
          <span class="text-black">Border Black</span>
        </div>
        <div class="bg-white border-primary auto-size border-1 h-ml-sm" style="padding: 4px">
          <span class="text-primary">Border Primary</span>
        </div>
        <div class="bg-white border-secondary auto-size border-1 h-ml-sm" style="padding: 4px">
          <span class="text-secondary">Border Secondary</span>
        </div>
        <div class="bg-white border-positive auto-size border-1 h-ml-sm" style="padding: 4px">
          <span class="text-positive">Border Positive</span>
        </div>
      </div>
      <pre v-highlightjs="border1">
        <code class="html">
        </code>
      </pre>
      <html-separator></html-separator>
      <h1>Border With 2</h1>
      <div>
        <div class="bg-white border-negative auto-size border-2" style="padding: 4px">
          <span class="text-negative">Border Negative</span>
        </div>
        <div class="bg-white border-info auto-size border-2 h-ml-sm" style="padding: 4px">
          <span class="text-info">Border Info</span>
        </div>
        <div class="bg-white border-warning auto-size border-2 h-ml-sm" style="padding: 4px">
          <span class="text-warning">Border Warning</span>
        </div>
        <div class="bg-white border-gray auto-size border-2 h-ml-sm" style="padding: 4px">
          <span class="text-black">Border Gray</span>
        </div>
      </div>
      <pre v-highlightjs="border2">
        <code class="html">
        </code>
      </pre>
      <html-separator></html-separator>
      <h1>Border Corner Rounded</h1>
      <div>
        <div class="bg-white border-negative auto-size border-2 border-corner-rounded" style="padding: 4px">
          <span class="text-negative">Border Negative</span>
        </div>
        <div class="bg-white border-info auto-size border-2 border-corner-rounded h-ml-sm" style="padding: 4px">
          <span class="text-info">Border Info</span>
        </div>
      </div>
      <pre v-highlightjs="borderCornerRounded">
        <code class="html">
        </code>
      </pre>
      <html-separator></html-separator>
      <h1>Border Rounded</h1>
      <div>
        <div class="border-negative auto-size border-2 border-rounded" style="padding: 4px">
          <span class="text-negative">Border Negative</span>
        </div>
        <div class="border-info auto-size border-2 border-rounded h-ml-sm" style="padding: 4px">
          <span class="text-info">Border Info</span>
        </div>
      </div>
      <pre v-highlightjs="borderRounded">
        <code class="html">
        </code>
      </pre>
      <html-separator></html-separator>
      <h1>Border Styles</h1>
      <div class="border-dotted text-center">
        border-dotted
      </div>
      <div class="border-dashed text-center h-mt-sm">
        border-dashed
      </div>
      <div class="border-solid text-center h-mt-sm">
        border-solid
      </div>
      <div class="border-double text-center h-mt-sm">
        border-double
      </div>
      <div class="border-groove text-center h-mt-sm">
        border-groove
      </div>
      <div class="border-ridge text-center h-mt-sm">
        border-ridge
      </div>
      <div class="border-inset text-center h-mt-sm">
        border-inset
      </div>
      <div class="border-outset text-center h-mt-sm">
        border-outset
      </div>
      <div class="no-border text-center h-mt-sm">
        no-border
      </div>
      <pre v-highlightjs="borderStyles">
        <code class="html">
        </code>
      </pre>
  </div>
</template>

<script>
export default {
  data () {
    return {
      border1: `
<div>
  <div class="bg-black border-white auto-size border-1" style="padding: 4px">
    <span class="text-white">Border white</span>
  </div>
  <div class="bg-white border-black auto-size border-1 h-ml-sm" style="padding: 4px">
    <span class="text-black">Border Black</span>
  </div>
  <div class="bg-white border-primary auto-size border-1 h-ml-sm" style="padding: 4px">
    <span class="text-primary">Border Primary</span>
  </div>
  <div class="bg-white border-secondary auto-size border-1 h-ml-sm" style="padding: 4px">
    <span class="text-secondary">Border Secondary</span>
  </div>
  <div class="bg-white border-positive auto-size border-1 h-ml-sm" style="padding: 4px">
    <span class="text-positive">Border Positive</span>
  </div>
</div>      
      `,
      border2: `
<div>
  <div class="bg-white border-negative auto-size border-2" style="padding: 4px">
    <span class="text-negative">Border Negative</span>
  </div>
  <div class="bg-white border-info auto-size border-2 h-ml-sm" style="padding: 4px">
    <span class="text-info">Border Info</span>
  </div>
  <div class="bg-white border-warning auto-size border-2 h-ml-sm" style="padding: 4px">
    <span class="text-warning">Border Warning</span>
  </div>
  <div class="bg-white border-gray auto-size border-2 h-ml-sm" style="padding: 4px">
    <span class="text-black">Border Gray</span>
  </div>
</div>      
      `,
      borderCornerRounded: `
<div>
  <div class="bg-white border-negative auto-size border-2 border-corner-rounded" style="padding: 4px">
    <span class="text-negative">Border Negative</span>
  </div>
  <div class="bg-white border-info auto-size border-2 border-corner-rounded h-ml-sm" style="padding: 4px">
    <span class="text-info">Border Info</span>
  </div>
</div>      
      `,
      borderRounded: `
<div>
  <div class="border-negative auto-size border-2 border-rounded" style="padding: 4px">
    <span class="text-negative">Border Negative</span>
  </div>
  <div class="border-info auto-size border-2 border-rounded h-ml-sm" style="padding: 4px">
    <span class="text-info">Border Info</span>
  </div>
</div>
      `,
      borderStyles: `
<div class="border-dotted text-center">
  border-dotted
</div>
<div class="border-dashed text-center h-mt-sm">
  border-dashed
</div>
<div class="border-solid text-center h-mt-sm">
  border-solid
</div>
<div class="border-double text-center h-mt-sm">
  border-double
</div>
<div class="border-groove text-center h-mt-sm">
  border-groove
</div>
<div class="border-ridge text-center h-mt-sm">
  border-ridge
</div>
<div class="border-inset text-center h-mt-sm">
  border-inset
</div>
<div class="border-outset text-center h-mt-sm">
  border-outset
</div>
<div class="no-border text-center h-mt-sm">
  no-border
</div>      
      `
    }
  }
}
</script>
