<template lang="pug">
.row.full-height(id="mainbody" style="right: 0px; max-height: 100%;"
  v-resize.initial="onResize"
)
  .col-auto.full-height
    h-nav-drawer(
      id="mainbody-left-drawer"
      v-model="localShowDrawerLeft"
      ref="navLeft"
    )
      slot(name="left")
  .col
    .column.full-height
      .col-auto.scroll
        slot(name="header")
      .col.scroll
        slot
      .col-auto.scroll
        slot(name="footer")
  .col-auto.full-height.scroll
    //- h-nav-drawer(
    //-   id="mainbody-right-drawer"
    //-   v-model="localShowDrawerRight"
    //-   side="right"
    //-   ref="navRight"
    //- )
    //-   slot(name="right")

</template>

<script>
import resize from 'vue-resize-directive';
import viewport from '../others/viewport';

export default {
  name: 'MainBody',
  directives: {
    resize,
  },
  props: {
    showDrawerLeft: {
      type: Boolean,
      default: false,
    },
    showDrawerRight: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      localDisplayMode: '',
      localShowDrawerLeft: false,
      localShowDrawerRight: false,
    };
  },
  mounted() {},
  watch: {
    showDrawerLeft(show) {
      this.localShowDrawerLeft = show;
      // this.onResize();
    },
    localShowDrawerLeft(show) {
      if (!show) {
        this.$emit('closeDrawerLeft', show);
      }
    },
    showDrawerRight(show) {
      this.localShowDrawerRight = show;
      // this.onResize();
    },
    localShowDrawerRight(show) {
      if (!show) {
        this.$emit('closeDrawerRight', show);
      }
    },
  },
  methods: {
    width() {
      let value = 0;
      value = viewport.mainBodyWidth();
      return value;
    },
    onResize() {
      if (this.showDrawerLeft) {
        this.$refs.navLeft.onResize(this.width());
      }
      if (this.showDrawerRight) {
        this.$refs.navRight.onResize(this.width());
      }
    },
  },
};
</script>
