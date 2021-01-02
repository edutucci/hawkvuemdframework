<template>
<header class="top-left-fixed" v-resize.initial="onResize"
  style="right:0px; z-index: 1000;" id="page-header"
>
  <slot></slot>
</header>
</template>

<script>

import resize from 'vue-resize-directive';
import viewport from '../others/viewport';

export default {
  name: 'PageHeader',
  directives: {
    resize,
  },
  props: {
    fixed: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
    };
  },
  methods: {
    onResize() {
      const pageHeaderHeight = viewport.getPageHeaderHeight();
      const pageFooterHeight = viewport.getPageFooterHeight();
      let sumHF = pageHeaderHeight + pageFooterHeight;

      const pageContent = document.getElementById('page-content');
      if (pageContent) {
        const pageContentPadding = Number(pageContent.style.padding.replace(/px/, ''));
        if (pageContentPadding > 0) {
          sumHF += 20;
        }
        pageContent.style.height = `calc(100vh - ${sumHF}px)`;
        pageContent.style['margin-top'] = `${pageHeaderHeight}px`;
      }
    },
  },
};
</script>
