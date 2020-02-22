<template lang="pug">
  h-page-content(padding)
    .text-h4
      | Parallax Demo

    div(:style="[parallax]")

    .text-body1.h-mt-md
      | Parallax scrolling is a web site trend where the background content is moved at a different speed than the foreground content while scrolling. Nascetur per nec posuere turpis, lectus nec libero turpis nunc at, sed posuere mollis ullamcorper libero ante lectus, blandit pellentesque a, magna turpis est sapien duis blandit dignissim. Viverra interdum mi magna mi, morbi sociis. Condimentum dui ipsum consequat morbi, curabitur aliquam pede, nullam vitae eu placerat eget et vehicula. Varius quisque non molestie dolor, nunc nisl dapibus vestibulum at, sodales tincidunt mauris ullamcorper, dapibus pulvinar, in in neque risus odio. Accumsan fringilla vulputate at quibusdam sociis eleifend, aenean maecenas vulputate, non id vehicula lorem mattis, ratione interdum sociis ornare. Suscipit proin magna cras vel, non sit platea sit, maecenas ante augue etiam maecenas, porta porttitor placerat leo.

    div(:style="[parallax2]")
      .text-body1 My Img 2

    .text-body1.h-mt-md
      | Parallax scrolling is a web site trend where the background content is moved at a different speed than the foreground content while scrolling. Nascetur per nec posuere turpis, lectus nec libero turpis nunc at, sed posuere mollis ullamcorper libero ante lectus, blandit pellentesque a, magna turpis est sapien duis blandit dignissim. Viverra interdum mi magna mi, morbi sociis. Condimentum dui ipsum consequat morbi, curabitur aliquam pede, nullam vitae eu placerat eget et vehicula. Varius quisque non molestie dolor, nunc nisl dapibus vestibulum at, sodales tincidunt mauris ullamcorper, dapibus pulvinar, in in neque risus odio. Accumsan fringilla vulputate at quibusdam sociis eleifend, aenean maecenas vulputate, non id vehicula lorem mattis, ratione interdum sociis ornare. Suscipit proin magna cras vel, non sit platea sit, maecenas ante augue etiam maecenas, porta porttitor placerat leo.

    .text-body1.h-mt-md
      | Parallax scrolling is a web site trend where the background content is moved at a different speed than the foreground content while scrolling. Nascetur per nec posuere turpis, lectus nec libero turpis nunc at, sed posuere mollis ullamcorper libero ante lectus, blandit pellentesque a, magna turpis est sapien duis blandit dignissim. Viverra interdum mi magna mi, morbi sociis. Condimentum dui ipsum consequat morbi, curabitur aliquam pede, nullam vitae eu placerat eget et vehicula. Varius quisque non molestie dolor, nunc nisl dapibus vestibulum at, sodales tincidunt mauris ullamcorper, dapibus pulvinar, in in neque risus odio. Accumsan fringilla vulputate at quibusdam sociis eleifend, aenean maecenas vulputate, non id vehicula lorem mattis, ratione interdum sociis ornare. Suscipit proin magna cras vel, non sit platea sit, maecenas ante augue etiam maecenas, porta porttitor placerat leo.

    .text-body1.h-mt-md
      | Parallax scrolling is a web site trend where the background content is moved at a different speed than the foreground content while scrolling. Nascetur per nec posuere turpis, lectus nec libero turpis nunc at, sed posuere mollis ullamcorper libero ante lectus, blandit pellentesque a, magna turpis est sapien duis blandit dignissim. Viverra interdum mi magna mi, morbi sociis. Condimentum dui ipsum consequat morbi, curabitur aliquam pede, nullam vitae eu placerat eget et vehicula. Varius quisque non molestie dolor, nunc nisl dapibus vestibulum at, sodales tincidunt mauris ullamcorper, dapibus pulvinar, in in neque risus odio. Accumsan fringilla vulputate at quibusdam sociis eleifend, aenean maecenas vulputate, non id vehicula lorem mattis, ratione interdum sociis ornare. Suscipit proin magna cras vel, non sit platea sit, maecenas ante augue etiam maecenas, porta porttitor placerat leo.

</template>

<script>
export default {
  data () {
    return {
      parallax: {
        backgroundImage: 'url("img/landscape.jpeg")',
        minHeight: '500px',
        backgroundAttachment: 'fixed',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'
      },
      parallax2: {
        backgroundImage: 'url("img/landscape2.jpeg")',
        minHeight: '800px',
        backgroundAttachment: 'fixed',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'
      }
    }
  }
}
</script>

<style scoped>
.parallax {
  /* The image used */
  /* background-image: url("~/img/landscape.jpeg"); */

  /* Set a specific height */
  /* min-height: 500px; */

  /* Create the parallax scrolling effect */
  /* background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover; */
}

.parallax2 {
  /* The image used */
  /* background-image: url("~/img/landscape2.jpeg"); */

  /* Set a specific height */
  /* min-height: 350px; */

  /* Create the parallax scrolling effect */
  /* background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover; */
}

/*
exemplos:
site1: https://codepen.io/Wendy-Ho/pen/gqEEpZ
site2: https://freefrontend.com/css-fixed-backgrounds/
*/
</style>
