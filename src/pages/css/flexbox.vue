<template lang="pug">
  div
    h1  Flexbox (Flexible Box)

    .col-6
      .desc  The Flexbox Layout (Flexible Box) module (currently a W3C Last Call Working Draft) aims at providing a more efficient way to layout, align and distribute space among items in a container, even when their size is unknown and/or dynamic (thus the word "flex").
 
    .col-6.boxshadow
      h3  For the examples we will use the following style
      <pre v-highlightjs="style">
        <code class="css">
        </code>
      </pre>

    .col-6.boxshadow
      h3  Activating the flexbox
      <pre v-highlightjs="flex">
        <code class="css">
        </code>
      </pre>

    .col-6.boxshadow
      h1 Flex direction
      p.desc  The flex-direction property defines in which direction the container wants to stack the flex items.
      img.full-width(src="/static/img/flex-direction.png")
      
      div
        strong row (default): left to right in ltr; right to left in rtl
      div
        strong row-reverse: right to left in ltr; left to right in rtl
      div
        strong column: same as row but top to bottom
      div
        strong column-reverse: same as row-reverse but bottom to top

    .col-6.boxshadow
      h1 flex-direction: column
      strong The "flex-direction: column" stacks the flex items vertically (from top to bottom):

      h3  Activating flex-direction: column
      <pre v-highlightjs="flexcolumn">
        <code class="javascript">
        </code>
      </pre>

      .flex.flex-justify-start
        div(style="background-color: DodgerBlue;")
          <div class="flex flex-column flex-container">
            <div>1</div>
            <div>2</div>
            <div>3</div>  
          </div>
        div(style="background-color: #F0F0F0;")
          <pre v-highlightjs="column">
            <code class="javascript">
            </code>
          </pre>

      h3  Activating flex-direction: column-reverse
      <pre v-highlightjs="flexcolumnreverse">
        <code class="javascript">
        </code>
      </pre>

      .flex.flex-justify-start
        div(style="background-color: DodgerBlue;")
          <div class="flex flex-column-reverse flex-container">
            <div>1</div>
            <div>2</div>
            <div>3</div>  
          </div>
        div(style="background-color: #F0F0F0;")
          <pre v-highlightjs="columnreverse">
            <code class="javascript">
            </code>
          </pre>

    .col-6.boxshadow
      h1 flex-direction: row
      strong The "flex-direction: row" stacks the flex items horizontally (from left to right):

      h3  Activating flex-direction: row
      <pre v-highlightjs="flexrow">
        <code class="javascript">
        </code>
      </pre>

      .flex.flex-column
        div(style="background-color: DodgerBlue;")
          <div class="flex flex-container">
            <div>1</div>
            <div>2</div>
            <div>3</div>  
          </div>
        div(style="background-color: #F0F0F0;")
          <pre v-highlightjs="row">
            <code class="javascript">
            </code>
          </pre>

      h3  Activating flex-direction: row-reverse
      <pre v-highlightjs="flexrowreverse">
        <code class="javascript">
        </code>
      </pre>

      .flex.flex-column
        div(style="background-color: DodgerBlue;")
          <div class="flex flex-row-reverse flex-container">
            <div>1</div>
            <div>2</div>
            <div>3</div>  
          </div>
        div(style="background-color: #F0F0F0;")
          <pre v-highlightjs="rowreverse">
            <code class="javascript">
            </code>
          </pre>
 
    .col-6.boxshadow
      h1 Flex wrap
      p.desc  The flex-wrap property specifies whether the flex items should wrap or not.
      img.full-width(src="/static/img/flex-wrap.png")
      
      div
        strong nowrap (default): all flex items will be on one line
      div
        strong wrap: flex items will wrap onto multiple lines, from top to bottom.

    .col-6.boxshadow
      h3  Activating flex-wrap: wrap
      <pre v-highlightjs="flexwrap">
        <code class="javascript">
        </code>
      </pre>

      .flex.flex-column
        div(style="background-color: DodgerBlue;")
          <div class="flex flex-wrap flex-container">
            <div>1</div>
            <div>2</div>
            <div>3</div> 
            <div>4</div>
            <div>5</div>
            <div>6</div>
            <div>7</div>
            <div>8</div>                      
          </div>
        div(style="background-color: #F0F0F0;")
          <pre v-highlightjs="wrap">
            <code class="javascript">
            </code>
          </pre>

      h3  Activating flex-wrap: nowrap
      <pre v-highlightjs="flexnowrap">
        <code class="javascript">
        </code>
      </pre>

      .flex.flex-column
        div(style="background-color: DodgerBlue;")
          <div class="flex flex-nowrap flex-container">
            <div>1</div>
            <div>2</div>
            <div>3</div> 
            <div>4</div>
            <div>5</div>
            <div>6</div>
            <div>7</div>
            <div>8</div>
          </div>
        div(style="background-color: #F0F0F0;")
          <pre v-highlightjs="nowrap">
            <code class="javascript">
            </code>
          </pre>

    .col-6.boxshadow
      h1 Justify-content
      p.desc  The justify-content property is used to align the flex items.
      img.full-width(src="/static/img/justify-content.png")
      
      div
        strong The flex-start value aligns the flex items at the beginning of the container (this is default).
      div
        strong The flex-end value aligns the flex items at the end of the container.
      div
        strong The center value aligns the flex items at the center of the container.
      div
        strong The space-between value displays the flex items with space between the lines.
      div
        strong The space-around value displays the flex items with space before, between, and after the lines.

    .col-6.boxshadow
      h3  Activating flex-justify-content: start
      <pre v-highlightjs="flexjustifystart">
        <code class="javascript">
        </code>
      </pre>

      .flex.flex-column
        div(style="background-color: DodgerBlue;")
          <div class="flex flex-container">
            <div>1</div>
            <div>2</div>
            <div>3</div>
          </div>
        div(style="background-color: #F0F0F0;")
          <pre v-highlightjs="justifystart">
            <code class="javascript">
            </code>
          </pre>      

      h3  Activating flex-justify-content: center
      <pre v-highlightjs="flexjustifycenter">
        <code class="javascript">
        </code>
      </pre>      
      
      .flex.flex-column
        div(style="background-color: DodgerBlue;")
          <div class="flex flex-justify-center flex-container">
            <div>1</div>
            <div>2</div>
            <div>3</div>
          </div>
        div(style="background-color: #F0F0F0;")
          <pre v-highlightjs="justifycenter">
            <code class="javascript">
            </code>
          </pre>

      h3  Activating flex-justify-content: end
      <pre v-highlightjs="flexjustifyend">
        <code class="javascript">
        </code>
      </pre> 

      .flex.flex-column
        div(style="background-color: DodgerBlue;")
          <div class="flex flex-justify-end flex-container">
            <div>1</div>
            <div>2</div>
            <div>3</div>
          </div>
        div(style="background-color: #F0F0F0;")
          <pre v-highlightjs="justifyend">
            <code class="javascript">
            </code>
          </pre>

      h3  Activating flex-justify-content: between
      <pre v-highlightjs="flexjustifybetween">
        <code class="javascript">
        </code>
      </pre>
      
      .flex.flex-column
        div(style="background-color: DodgerBlue;")
          <div class="flex flex-justify-space-between flex-container">
            <div>1</div>
            <div>2</div>
            <div>3</div>
          </div>
        div(style="background-color: #F0F0F0;")
          <pre v-highlightjs="justifyspacebetween">
            <code class="javascript">
            </code>
          </pre>

      h3  Activating flex-justify-content: around
      <pre v-highlightjs="flexjustifyaround">
        <code class="javascript">
        </code>
      </pre> 

      .flex.flex-column
        div(style="background-color: DodgerBlue;")
          <div class="flex flex-justify-space-around flex-container">
            <div>1</div>
            <div>2</div>
            <div>3</div>
          </div>
        div(style="background-color: #F0F0F0;")
          <pre v-highlightjs="justifyspacearound">
            <code class="javascript">
            </code>
          </pre>

    .col-6.boxshadow
      h1 Align-items
      p.desc  The align-items property is used to align the flex items vertically.
      img.full-width(src="/static/img/align-items.png")
      
      div
        strong The flex-start value aligns the flex items at the top of the container.
      div
        strong The flex-end value aligns the flex items at the bottom of the container.
      div
        strong The center value aligns the flex items in the middle of the container.
      div
        strong The stretch value stretches the flex items to fill the container (this is default).
      div
        strong The baseline value aligns the flex items such as their baselines aligns.

    .col-6.boxshadow
      h3  Activating flex-align-items: start
      <pre v-highlightjs="flexitemsstart">
        <code class="javascript">
        </code>
      </pre>

      .flex.flex-column
        div(style="background-color: DodgerBlue;")
          <div class="flex flex-items-start flex-container2">
            <div>1</div>
            <div>2</div>
            <div>3</div>
          </div>
        div(style="background-color: #F0F0F0;")
          <pre v-highlightjs="itemsstart">
            <code class="javascript">
            </code>
          </pre>

      h3  Activating flex-align-items: center
      <pre v-highlightjs="flexitemscenter">
        <code class="javascript">
        </code>
      </pre>

      .flex.flex-column
        div(style="background-color: DodgerBlue;")
          <div class="flex flex-items-center flex-container2">
            <div>1</div>
            <div>2</div>
            <div>3</div>
          </div>
        div(style="background-color: #F0F0F0;")
          <pre v-highlightjs="itemscenter">
            <code class="javascript">
            </code>
          </pre>

      h3  Activating flex-align-items: end
      <pre v-highlightjs="flexitemsend">
        <code class="javascript">
        </code>
      </pre>

      .flex.flex-column
        div(style="background-color: DodgerBlue;")
          <div class="flex flex-items-end flex-container2">
            <div>1</div>
            <div>2</div>
            <div>3</div>
          </div>
        div(style="background-color: #F0F0F0;")
          <pre v-highlightjs="itemsend">
            <code class="javascript">
            </code>
          </pre>

      h3  Activating flex-align-items: stretch
      <pre v-highlightjs="flexitemsstretch">
        <code class="javascript">
        </code>
      </pre>

      .flex.flex-column
        div(style="background-color: DodgerBlue;")
          <div class="flex flex-items-stretch flex-container2">
            <div>1</div>
            <div>2</div>
            <div>3</div>
          </div>
        div(style="background-color: #F0F0F0;")
          <pre v-highlightjs="itemsstretch">
            <code class="javascript">
            </code>
          </pre>

      h3  Activating flex-align-items: baseline
      <pre v-highlightjs="flexitemsbaseline">
        <code class="javascript">
        </code>
      </pre>

      .flex.flex-column
        div(style="background-color: DodgerBlue;")
          <div class="flex flex-items-baseline flex-container2">
            <div><h1>1</h1></div>
            <div><h6>2</h6></div>
            <div><h3>3</h3></div>  
            <div><small>4</small></div>
          </div>
        div(style="background-color: #F0F0F0;")
          <pre v-highlightjs="itemsbaseline">
            <code class="javascript">
            </code>
          </pre>

    .col-6.boxshadow
      h1 Align-content
      p.desc  The align-content property property is used to align the flex lines.
      img.full-width(src="/static/img/align-content.png")
      
      div
        strong The flex-start value displays the flex lines at the start of the container.
      div
        strong The flex-end value displays the flex lines at the end of the container.
      div
        strong The center value displays the flex lines in the middle of the container.
      div
        strong The stretch value stretches the flex lines to take up the remaining space (this is default).
      div
        strong The space-around value displays the flex lines with space before, between, and after them.
      div
        strong The space-between value displays the flex lines with equal space between them.
    
    .col-6.boxshadow
      h3  Activating flex-align-content: start
      <pre v-highlightjs="flexalignstart">
        <code class="javascript">
        </code>
      </pre>

      .flex.flex-column
        div(style="background-color: DodgerBlue;")
          <div class="flex flex-wrap flex-align-start flex-container3">
            <div>1</div>
            <div>2</div>
            <div>3</div>
            <div>4</div>
            <div>5</div>
            <div>6</div>
          </div>
        div(style="background-color: #F0F0F0;")
          <pre v-highlightjs="alignstart">
            <code class="javascript">
            </code>
          </pre>

      h3  Activating flex-align-content: center
      <pre v-highlightjs="flexaligncenter">
        <code class="javascript">
        </code>
      </pre>

      .flex.flex-column
        div(style="background-color: DodgerBlue;")
          <div class="flex flex-wrap flex-align-center flex-container3">
            <div>1</div>
            <div>2</div>
            <div>3</div>
            <div>4</div>
            <div>5</div>
            <div>6</div>
          </div>
        div(style="background-color: #F0F0F0;")
          <pre v-highlightjs="aligncenter">
            <code class="javascript">
            </code>
          </pre>

      h3  Activating flex-align-content: end
      <pre v-highlightjs="flexalignend">
        <code class="javascript">
        </code>
      </pre>

      .flex.flex-column
        div(style="background-color: DodgerBlue;")
          <div class="flex flex-wrap flex-align-end flex-container3">
            <div>1</div>
            <div>2</div>
            <div>3</div>
            <div>4</div>
            <div>5</div>
            <div>6</div>
          </div>
        div(style="background-color: #F0F0F0;")
          <pre v-highlightjs="alignend">
            <code class="javascript">
            </code>
          </pre>

      h3  Activating flex-align-content: stretch
      <pre v-highlightjs="flexalignstretch">
        <code class="javascript">
        </code>
      </pre>

      .flex.flex-column
        div(style="background-color: DodgerBlue;")
          <div class="flex flex-wrap flex-align-stretch flex-container3">
            <div>1</div>
            <div>2</div>
            <div>3</div>
            <div>4</div>
            <div>5</div>
            <div>6</div>
            <div>7</div>          
          </div>
        div(style="background-color: #F0F0F0;")
          <pre v-highlightjs="alignstretch">
            <code class="javascript">
            </code>
          </pre>

      h3  Activating flex-align-content: space around
      <pre v-highlightjs="flexalignspacearound">
        <code class="javascript">
        </code>
      </pre>

      .flex.flex-column
        div(style="background-color: DodgerBlue;")
          <div class="flex flex-wrap flex-align-space-around flex-container3">
            <div>1</div>
            <div>2</div>
            <div>3</div>
            <div>4</div>
            <div>5</div>
            <div>6</div>
            <div>7</div>
          </div>
        div(style="background-color: #F0F0F0;")
          <pre v-highlightjs="alignspacearound">
            <code class="javascript">
            </code>
          </pre>

      h3  Activating flex-align-content: space between
      <pre v-highlightjs="flexalignspacebetween">
        <code class="javascript">
        </code>
      </pre>

      .flex.flex-column
        div(style="background-color: DodgerBlue;")
          <div class="flex flex-wrap flex-align-space-between flex-container3">
            <div>1</div>
            <div>2</div>
            <div>3</div>
            <div>4</div>
            <div>5</div>
            <div>6</div>
          </div>
        div(style="background-color: #F0F0F0;")
          <pre v-highlightjs="alignspacebetween">
            <code class="javascript">
            </code>
          </pre>
    .col-6.boxshadow
      h3  Activating Perfect Centering
      <pre v-highlightjs="flexcentering">
        <code class="javascript">
        </code>
      </pre>

      .flex.flex-column
        div(style="background-color: DodgerBlue;")
          <div class="flex flex-justify-center flex-items-center flex-container2">
            <div>1</div>
          </div>
        div(style="background-color: #F0F0F0;")
          <pre v-highlightjs="centering">
            <code class="javascript">
            </code>
          </pre>

    .col-6.boxshadow
      h1 Flex property
      p.desc  Let all the flexible items be the same length, regardless of its content.

      h3  Activating flex property
      <pre v-highlightjs="flex1">
        <code class="javascript">
        </code>
      </pre>

      .flex.flex-column
        div(style="background-color: DodgerBlue;")
          <div class="flex flex-container">
            <div class="flex-1" style="background-color:coral;">1</div>
            <div class="flex-1" style="background-color:lightblue;">2</div>
            <div class="flex-1" style="background-color:lightgreen;">3</div>
          </div>
        div(style="background-color: #F0F0F0;")
          <pre v-highlightjs="f1">
            <code class="javascript">
            </code>
          </pre>

      h3 Using flex to grow a flex item
      p.desc If you to use flex-1 to one flex item only, this flex item will grow by having the rest of space remaining.

      .flex.flex-column
        div(style="background-color: DodgerBlue;")
          <div class="flex flex-container">
            <div style="background-color:coral;">1</div>
            <div class="flex-1" style="background-color:lightblue;">2</div>
          </div>
          <div class="flex flex-container">
            <div style="background-color:coral;">1</div>
            <div class="flex-1" style="background-color:lightblue;">2</div>
            <div style="background-color:lightgreen;">3</div>
          </div>
        div(style="background-color: #F0F0F0;")
          <pre v-highlightjs="f2">
            <code class="javascript">
            </code>
          </pre>

</template>

<script>

import HTab from '../../components/tab/HTab'
import HTabs from '../../components/tab/HTabs'

export default {
  name: 'flexbox',
  components: {
    HTab,
    HTabs
  },
  data () {
    return {
      flex: `<div class="flex"/>`,
      flexcolumn: `<div class="flex flex-column"/>`,
      flexcolumnreverse: `<div class="flex flex-column-reverse"/>`,
      flexrow: `<div class="flex"/> or <div class="flex flex-row"/>`,
      flexrowreverse: `<div class="flex flex-row-reverse"/>`,
      flexwrap: `<div class="flex flex-wrap"/>`,
      flexnowrap: `<div class="flex flex-nowrap"/>`,
      flexjustifystart: `<div class="flex"/> or <div class="flex flex-justify-start"/>`,
      flexjustifycenter: `<div class="flex flex-justify-center"/>`,
      flexjustifyend: `<div class="flex flex-justify-end"/>`,
      flexjustifyaround: `<div class="flex flex-justify-space-around"/>`,
      flexjustifybetween: `<div class="flex flex-justify-space-between"/>`,
      flexitemsstart: `<div class="flex flex-items-start"/>`,
      flexitemscenter: `<div class="flex flex-items-center"/>`,
      flexitemsend: `<div class="flex flex-items-end"/>`,
      flexitemsstretch: `<div class="flex flex-items-stretch"/>`,
      flexitemsbaseline: `<div class="flex flex-items-baseline"/>`,
      flexalignstart: `<div class="flex flex-wrap flex-align-start"/>`,
      flexaligncenter: `<div class="flex flex-wrap flex-align-center"/>`,
      flexalignend: `<div class="flex flex-wrap flex-align-end"/>`,
      flexalignstretch: `<div class="flex flex-wrap flex-align-stretch"/>`,
      flexalignspacebetween: `<div class="flex flex-wrap flex-align-space-between"/>`,
      flexalignspacearound: `<div class="flex flex-wrap flex-align-space-around"/>`,
      flexcentering: `<div class="flex flex-justify-center flex-items-center flex-container2">`,
      flex1: `<div class="flex flex-1 flex-container">`,
      style: `
<style>
.flex-container {
  background-color: DodgerBlue;
}

.flex-container > div {
  background-color: #f1f1f1;
  width: 100px;
  margin: 10px;
  text-align: center;
  line-height: 75px;
  font-size: 30px;
}

.flex-container2 {
  background-color: DodgerBlue;
  height: 200px
}

.flex-container2 > div {
  background-color: #f1f1f1;
  width: 100px;
  margin: 10px;
  text-align: center;
  line-height: 75px;
  font-size: 30px;
}

.flex-container3 {
  background-color: DodgerBlue;
  height: 300px
}

.flex-container3 > div {
  background-color: #f1f1f1;
  width: 100px;
  margin: 10px;
  text-align: center;
  line-height: 75px;
  font-size: 30px;
}
</style>
      `,
      column: `
<div class="flex flex-column flex-container">
  <div>1</div>
  <div>2</div>
  <div>3</div>  
</div>
      `,
      columnreverse: `
<div class="flex flex-column-reverse flex-container">
  <div>1</div>
  <div>2</div>
  <div>3</div>  
</div>
      `,
      row: `
<div class="flex flex-container">
  <div>1</div>
  <div>2</div>
  <div>3</div>  
</div>
      `,
      rowreverse: `
<div class="flex flex-row-reverse flex-container">
  <div>1</div>
  <div>2</div>
  <div>3</div>  
</div>
      `,
      wrap: `
<div class="flex flex-wrap flex-container">
  <div>1</div>
  <div>2</div>
  <div>3</div>
  <div>4</div>
  <div>5</div>
  <div>6</div>
  <div>7</div>
  <div>8</div>
  <div>9</div> 
</div>
      `,
      nowrap: `
<div class="flex flex-nowrap flex-container">
  <div>1</div>
  <div>2</div>
  <div>3</div>
  <div>4</div>
  <div>5</div>
  <div>6</div>
  <div>7</div>
  <div>8</div>
  <div>9</div> 
</div>
      `,
      justifystart: `
<div class="flex flex-container">
  <div>1</div>
  <div>2</div>
  <div>3</div>  
</div>
      `,
      justifycenter: `
<div class="flex flex-justify-center flex-container">
  <div>1</div>
  <div>2</div>
  <div>3</div>  
</div>
      `,
      justifyend: `
<div class="flex flex-justity-end flex-container">
  <div>1</div>
  <div>2</div>
  <div>3</div>
</div>
      `,
      justifyspacearound: `
<div class="flex flex-justify-space-around flex-container">
  <div>1</div>
  <div>2</div>
  <div>3</div>
</div>
      `,
      justifyspacebetween: `
<div class="flex flex-justify-space-between flex-container">
  <div>1</div>
  <div>2</div>
  <div>3</div>
</div>
      `,
      itemsstart: `
<div class="flex flex-items-start flex-container2">
  <div>1</div>
  <div>2</div>
  <div>3</div>  
</div>
      `,
      itemscenter: `
<div class="flex flex-items-center flex-container2">
  <div>1</div>
  <div>2</div>
  <div>3</div>  
</div>
      `,
      itemsend: `
<div class="flex flex-items-end flex-container2">
  <div>1</div>
  <div>2</div>
  <div>3</div>  
</div>
      `,
      itemsstretch: `
<div class="flex flex-items-stretch flex-container2">
  <div>1</div>
  <div>2</div>
  <div>3</div>  
</div>
      `,
      itemsbaseline: `
<div class="flex flex-items-baseline flex-container2">
  <div><h1>1</h1></div>
  <div><h6>2</h6></div>
  <div><h3>3</h3></div>  
  <div><small>4</small></div>
</div>
      `,
      alignstart: `
<div class="flex flex-wrap flex-align-start flex-container3">
    <div>1</div>
    <div>2</div>
    <div>3</div>
    <div>4</div>
    <div>5</div>
    <div>6</div>
</div>
      `,
      aligncenter: `
<div class="flex flex-wrap flex-align-center flex-container3">
    <div>1</div>
    <div>2</div>
    <div>3</div>
    <div>4</div>
    <div>5</div>
    <div>6</div> 
</div>
      `,
      alignend: `
<div class="flex flex-wrap flex-align-end flex-container3">
    <div>1</div>
    <div>2</div>
    <div>3</div>
    <div>4</div>
    <div>5</div>
    <div>6</div>
</div>
      `,
      alignstretch: `
<div class="flex flex-wrap flex-align-stretch flex-container3">
    <div>1</div>
    <div>2</div>
    <div>3</div>
    <div>4</div>
    <div>5</div>
    <div>6</div>  
</div>
      `,
      alignspacebetween: `
<div class="flex flex-wrap flex-align-space-between flex-container3">
    <div>1</div>
    <div>2</div>
    <div>3</div>
    <div>4</div>
    <div>5</div>
    <div>6</div>
</div>
      `,
      alignspacearound: `
<div class="flex flex-wrap flex-align-space-around flex-container3">
    <div>1</div>
    <div>2</div>
    <div>3</div>
    <div>4</div>
    <div>5</div>
    <div>6</div>
</div>
      `,
      centering: `
<div class="flex flex-justify-center flex-items-center flex-container2">
    <div>1</div>
</div>
      `,
      f1: `
<div class="flex flex-container">
      <div class="flex-1" style="background-color:coral;">1</div>
      <div class="flex-1" style="background-color:lightblue;">2</div>
      <div class="flex-1" style="background-color:lightgreen;">3</div>
</div>
      `,
      f2: `
<div class="flex flex-container">
      <div style="background-color:coral;">1</div>
      <div class="flex-1" style="background-color:lightblue;">2</div>
</div>

<div class="flex flex-container">
      <div style="background-color:coral;">1</div>
      <div class="flex-1" style="background-color:lightblue;">2</div>
      <div style="background-color:lightgreen;">3</div>
</div>
      `
    }
  }
}
</script>

<style>
.flex-container {
  background-color: DodgerBlue;
}

.flex-container > div {
  background-color: #f1f1f1;
  width: 100px;
  margin: 10px;
  text-align: center;
  line-height: 75px;
  font-size: 30px;
}

.flex-container2 {
  background-color: DodgerBlue;
  height: 200px
}

.flex-container2 > div {
  background-color: #f1f1f1;
  width: 100px;
  margin: 10px;
  text-align: center;
  line-height: 75px;
  font-size: 30px;
}

.flex-container3 {
  background-color: DodgerBlue;
  height: 300px
}

.flex-container3 > div {
  background-color: #f1f1f1;
  width: 100px;
  margin: 10px;
  text-align: center;
  line-height: 75px;
  font-size: 30px;
}
</style>
