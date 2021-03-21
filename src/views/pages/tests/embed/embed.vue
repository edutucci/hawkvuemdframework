<template lang="pug">
h-page
  .row.full-height.justify-center.align-items-center
    .col-auto(style="width: 600px; height: 475px")
      object.full-size(
        data="http://localhost/cgi-bin/mapserv?map=/home/edutucci/MapServerTutorial/ms4w/apps/tutorial/htdocs/example1-5.map&layer=states&layer=modis&layer=states_line&mode=map&zoom=1.5"
        type=text/html
      )
        embed.full-size(
          src="http://localhost/cgi-bin/mapserv?map=/home/edutucci/MapServerTutorial/ms4w/apps/tutorial/htdocs/example1-5.map&layer=states&layer=modis&layer=states_line&mode=map&zoom=1.5"
          id=123
        )

</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>
