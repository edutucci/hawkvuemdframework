<template>
  <h-page-content>
    <div class="text-h4">Banner</div>

    <h3>Standard</h3>
    <div class="h-pa-sm border border-gray border-radius">
      <h-banner class="h-mt-md">
        <template v-slot:text>
          Your password was updated on your other device. Please sign again.
        </template>

        <template v-slot:buttons>
          <h-btn text-button caps text="continue as a guest" text-color="text-primary"/>
          <h-btn text-button caps text="sign in" text-color="text-primary"/>
        </template>

      </h-banner>

      <h-banner class="h-mt-md border-radius">
        <template v-slot:text>
          <div class="row align-items-center">
            <div class="col-auto">
               <h-icon icon="signal_wifi_off"/>
            </div>
            <div class="col">
              You have lost connection to the internet.This app is offline.
            </div>
          </div>
        </template>

        <template v-slot:buttons>
          <h-btn text-button caps text="turn on wifi" text-color="text-primary"/>
        </template>
      </h-banner>

      <h-banner wide class="h-mt-md">
        <template v-slot:text>
          We can't save your edits while you are in offline mode.
        </template>

        <template v-slot:buttons>
          <h-btn text-button caps text="get online" text-color="text-primary"/>
        </template>
      </h-banner>

    </div>

    <h3>Background Color</h3>
    <div class="h-pa-sm border border-gray border-radius">
      <h-banner class="h-mt-md bg-primary text-white">
        <template v-slot:text>
          Sign in to find your saved recipes.
        </template>

        <template v-slot:buttons>
          <h-btn contained caps text="continue as a guest" text-color="text-white" bg-color="bg-primary"/>
          <h-btn contained caps text="sign in" text-color="text-white"  bg-color="bg-primary"/>
        </template>

      </h-banner>

      <h-banner wide class="h-mt-md bg-purple600 text-white border-radius">
        <template v-slot:text>
         Posivibes is offline.
        </template>

        <template v-slot:buttons>
          <h-btn contained caps text="turn on wifi" text-color="text-white" bg-color="bg-purple600"/>
        </template>
      </h-banner>

    </div>

  </h-page-content>
</template>
