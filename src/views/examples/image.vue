<template>
  <h-page-content padding>
    <div  class="text-h4">Image </div>

    <h3>Types</h3>
    <div class="h-pa-sm border border-gray border-radius">
      <div class="avatar_row row wrap align-items-center">
        <div class="col-auto h-mb-sm">
          <h-image src="img/landscape.jpeg" size="128px"/>
        </div>
        <div class="col-auto h-ml-sm h-mb-sm">
          <h-image src="img/landscape1.jpeg" avatar size="128px"/>
        </div>
        <div class="col-auto h-ml-sm">
          <h-image src="img/landscape2.jpeg" border-radius size="128px"/>
        </div>
      </div>
    </div>

    <h3>Image Custom Sizes</h3>
    <div class="h-pa-sm border border-gray border-radius">
      <div class="avatar_row row wrap align-items-center">
        <div class="col-auto h-mb-sm">
          <h-image src="img/landscape.jpeg" style="width: 250px; height: 160px;"/>
        </div>
        <div class="col-auto h-ml-sm h-mb-sm">
          <h-image src="img/landscape1.jpeg" style="width: 400px; height: 250px;"/>
        </div>
        <div class="col-auto h-ml-sm">
          <h-image src="img/landscape2.jpeg" style="width: 300px; height: 200px;"/>
        </div>
      </div>
    </div>

    <h3>Landscape</h3>
    <div class="h-pa-sm border border-gray border-radius">
      <div class="avatar_row row">
        <div class="col">
          <h-image src="img/landscape.jpeg" style="width: 100%; height: 800px;"/>
        </div>
      </div>
    </div>

    <h3>Avatar Styles</h3>
    <div class="h-pa-sm border border-gray border-radius">
      <div class="avatar_row flex align-items-center">
        <h-image src="avatar/Konsta.jpg"/>
        <h-image src="avatar/Eduard.jpg" avatar/>
        <h-image src="avatar/AnaArmas.jpg" border-radius/>
      </div>
      <div class="avatar_row flex align-items-center">
        <h-image bg-color="bg-red400">1</h-image>
        <h-image avatar bg-color="bg-yellow400">A</h-image>
        <h-image border-radius bg-color="bg-green400">F</h-image>
      </div>
    </div>

    <h3>Avatar Custom Sizes</h3>
    <div class="h-pa-sm border border-gray border-radius">
      <div class="avatar_row flex align-items-center">
        <h-image src="avatar/Konsta.jpg" size="48px"/>
        <h-image src="avatar/Eduard.jpg" avatar size="64px"/>
        <h-image src="avatar/AnaArmas.jpg" border-radius size="82px"/>
      </div>
      <div class="avatar_row flex align-items-center">
        <h-image bg-color="bg-red400" size="48px">1</h-image>
        <h-image avatar bg-color="bg-yellow400" size="64px">A</h-image>
        <h-image border-radius bg-color="bg-green400" size="82px">F</h-image>
      </div>
    </div>

  </h-page-content>
</template>

<style scoped>
.avatar_row > .h-image-container:not(:first-child) {
  margin-left: 5px;
}

.avatar_row:not(:first-child) {
  margin-top: 5px;
}

</style>
