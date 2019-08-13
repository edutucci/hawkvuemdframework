<template>
  <h-page-content padding>
    <h3>Contained Buttons</h3>
    <div class="h-pa-sm border border-gray border-radius">
      <div>
        <div>
          <h-btn bg-color="bg-white" text-color="text-black" text="disabled" left-icon="fas fa-envelope" disabled/>
          <h-btn bg-color="bg-white" text-color="text-black" text="white" left-icon="fas fa-envelope"/>
          <h-btn rounded bg-color="bg-primary" text-color="text-white" text="primary" right-icon="fas fa-envelope"/>
          <h-btn rounded bg-color="bg-secondary" text-color="text-white" text="secondary"/>
          <h-btn bg-color="bg-positive" text-color="text-white" text="positive"/>
          <h-btn bg-color="bg-negative" text-color="text-white" text="negative"/>
          <h-btn bg-color="bg-info" text-color="text-white" text="info"/>
          <h-btn bg-color="bg-warning" text-color="text-white" text="warning"/>
        </div>
        <div >
          <div>
            <h-btn class="full-width" bg-color="bg-primary" text-color="text-white" text="full width" right-icon="fas fa-envelope"/>
            <h-btn class="full-width" bg-color="bg-positive" text-color="text-white" text="full width" left-icon="fas fa-envelope"/>
          </div>
        </div>
      </div>
    </div>

    <h3>Text Buttons</h3>
    <div class="h-pa-sm border border-gray border-radius">
      <div>
        <h-btn text-button bg-color="bg-white" text-color="text-black" text="disabled" disabled/>
        <h-btn text-button bg-color="bg-primary" text-color="text-primary" text="primary"/>
        <h-btn text-button bg-color="bg-secondary" text-color="text-secondary" text="secondary"/>
        <h-btn text-button bg-color="bg-positive" text-color="text-positive" text="positive"/>
        <h-btn text-button bg-color="bg-negative" text-color="text-negative" text="negative"/>
        <h-btn text-button bg-color="bg-info" text-color="text-info" text="info"/>
        <h-btn text-button bg-color="bg-warning" text-color="text-warning" text="warning"/>
      </div>
      <div>
        <h-btn class="full-width" text-button bg-color="bg-primary" text-color="text-primary" text="full width"/>
        <h-btn class="full-width" text-button bg-color="bg-positive" text-color="text-positive" text="full-width"/>
      </div>
    </div>

    <h3>Outlined Buttons</h3>
    <div class="h-pa-sm border border-gray border-radius">
      <div>
        <h-btn outlined text="disabled" disabled/>
        <h-btn bg-color="bg-primary" outlined text-color="text-primary" text="primary"/>
        <h-btn bg-color="bg-secondary" outlined text-color="text-secondary" text="secondary"/>
        <h-btn bg-color="bg-positive" outlined text-color="text-positive" text="positive"/>
        <h-btn bg-color="bg-negative" outlined text-color="text-negative" text="negative"/>
        <h-btn bg-color="bg-info" outlined text-color="text-info" text="info"/>
        <h-btn bg-color="bg-warning" outlined text-color="text-warning" text="warning"/>
      </div>

      <div>
        <h-btn class="full-width" outlined text="disabled" disabled/>
        <h-btn class="full-width" outlined text-color="text-black" text="black"/>
        <h-btn class="full-width" outlined text-color="text-primary" text="primary"/>
      </div>
    </div>

    <h3>Rounded Buttons</h3>
    <div class="h-pa-sm border border-gray border-radius">
      <div>
        <h-btn rounded text="disabled" disabled/>
        <h-btn outlined rounded text="disabled" disabled/>
        <h-btn rounded bg-color="bg-primary" text-color="text-white" text="primary"/>
        <h-btn rounded bg-color="bg-secondary" text-color="text-white" text="secondary"/>
        <h-btn rounded bg-color="bg-positive" text-color="text-white" text="positive"/>
        <h-btn outlined rounded text-color="text-negative" text="negative"/>
        <h-btn outlined rounded text-color="text-info" text="info"/>
        <h-btn outlined rounded text-color="text-warning" text="warning"/>
      </div>

      <div>
        <h-btn class="full-width" outlined rounded bg-color="bg-primary" text-color="text-primary" text="full width"/>
        <h-btn class="full-width" outlined rounded bg-color="bg-positive" text-color="text-positive" text="full width"/>
      </div>
    </div>

    <h3>FAB Buttons</h3>
    <div class="h-pa-sm border border-gray border-radius">
      <div>
        <h-btn fab bg-color="bg-primary" size="xl">
          <h-fa-icon icon="fas fa-envelope"  text-color="text-white" size="32px"/>
        </h-btn>
        <h-btn fab bg-color="bg-primary" text-color="text-white" size="xl">
          <h-fa-icon icon="fab fa-github"  text-color="text-white" size="32px"/>
        </h-btn>
        <h-btn fab bg-color="bg-primary" text-color="text-white" size="xl">
          <h-fa-icon icon="fas fa-map-marker-alt"  text-color="text-white" size="32px"/>
        </h-btn>
        <h-btn fab bg-color="bg-primary" text-color="text-white" size="xl">
          <h-fa-icon icon="fas fa-shopping-cart"  text-color="text-white" size="32px"/>
        </h-btn>
        <h-btn fab bg-color="bg-primary" text-color="text-white" size="xl">
          <h-fa-icon icon="fas fa-plane"  text-color="text-white" size="32px"/>
        </h-btn>
      </div>
      <div>
        <h-btn fab bg-color="bg-primary" size="sm">
          <h-fa-icon icon="fas fa-envelope"  text-color="text-white"/>
        </h-btn>
        <h-btn fab bg-color="bg-primary" text-color="text-white" size="sm">
          <h-fa-icon icon="fab fa-github"  text-color="text-white"/>
        </h-btn>
        <h-btn fab bg-color="bg-primary" text-color="text-white" size="sm">
          <h-fa-icon icon="fas fa-map-marker-alt"  text-color="text-white"/>
        </h-btn>
        <h-btn fab bg-color="bg-primary" text-color="text-white" size="sm">
          <h-fa-icon icon="fas fa-shopping-cart"  text-color="text-white"/>
        </h-btn>
        <h-btn fab bg-color="bg-primary" text-color="text-white" size="sm">
          <h-fa-icon icon="fas fa-plane"  text-color="text-white"/>
        </h-btn>
      </div>
    </div>

    <h3>Sizes</h3>
    <div class="h-pa-sm border border-gray border-radius">
      <div>
        <h-btn bg-color="bg-primary" text-color="text-white" text="xs" size="xs"/>
        <h-btn bg-color="bg-primary" text-color="text-white" text="sm" size="sm"/>
        <h-btn bg-color="bg-primary" text-color="text-white" text="md" size="md"/>
        <h-btn bg-color="bg-primary" text-color="text-white" text="lg" size="lg"/>
        <h-btn bg-color="bg-primary" text-color="text-white" text="xl" size="xl"/>
      </div>

      <div>
        <h-btn rounded bg-color="bg-primary" text-color="text-white" text="xs" size="xs"/>
        <h-btn rounded bg-color="bg-primary" text-color="text-white" text="sm" size="sm"/>
        <h-btn rounded bg-color="bg-primary" text-color="text-white" text="md" size="md"/>
        <h-btn rounded bg-color="bg-primary" text-color="text-white" text="lg" size="lg"/>
        <h-btn rounded bg-color="bg-primary" text-color="text-white" text="xl" size="xl"/>
      </div>

      <div>
        <h-btn fab bg-color="bg-primary" size="xs">
          <h-fa-icon icon="fas fa-envelope"  text-color="text-white"/>
        </h-btn>
        <h-btn fab bg-color="bg-primary" text-color="text-white" size="sm">
          <h-fa-icon icon="fab fa-github"  text-color="text-white"/>
        </h-btn>
        <h-btn fab bg-color="bg-primary" text-color="text-white" size="md">
          <h-fa-icon icon="fas fa-map-marker-alt"  text-color="text-white"/>
        </h-btn>
        <h-btn fab bg-color="bg-primary" text-color="text-white" size="lg">
          <h-fa-icon icon="fas fa-shopping-cart"  text-color="text-white"/>
        </h-btn>
        <h-btn fab bg-color="bg-primary" text-color="text-white" size="xl">
          <h-fa-icon icon="fas fa-plane"  text-color="text-white" size="32px"/>
        </h-btn>
      </div>
    </div>

    <h3>Links</h3>
    <div class="h-pa-sm border border-gray border-radius">
      <h-btn bg-color="bg-primary">
        <h-link icon="fab fa-github" text="github" url="https://github.com/edutucci/hawkframework" text-color="text-white"/>
      </h-btn>

      <h-btn rounded bg-color="bg-primary">
        <h-link icon="fab fa-github" text="github" url="https://github.com/edutucci/hawkframework" text-color="text-white"/>
      </h-btn>

      <h-btn text-button>
        <h-link text="github" url="https://github.com/edutucci/hawkframework"/>
      </h-btn>

      <h-btn outlined>
        <h-link icon="fab fa-github" text="github new window" url="https://github.com/edutucci/hawkframework" new-window/>
      </h-btn>

      <h-btn outlined rounded>
        <h-link icon="fab fa-github" text="github new window" url="https://github.com/edutucci/hawkframework" new-window/>
      </h-btn>
    </div>

    <h3>Router</h3>
    <div class="h-pa-sm border border-gray border-radius">
      <h-btn bg-color="bg-primary">
        <h-link text="to this page" url="/buttons" text-color="text-white"/>
      </h-btn>

      <h-btn rounded bg-color="bg-primary">
        <h-link text="to this page" url="/buttons" text-color="text-white"/>
      </h-btn>

      <h-btn textbutton>
        <h-link text="to this page" url="/buttons"/>
      </h-btn>

      <h-btn outlined>
        <h-link text="to this page" url="/buttons"/>
      </h-btn>

      <h-btn outlined rounded>
        <h-link text="to this page" url="/buttons"/>
      </h-btn>
    </div>

    <h3>Counters</h3>
    <div class="h-pa-sm border border-gray border-radius">
      <h-btn bg-color="bg-primary">
        <h-link text="to this page" url="/buttons" text-color="text-white"/>
      </h-btn>

      <h-btn rounded bg-color="bg-primary">
        <h-link text="to this page" url="/buttons" text-color="text-white"/>
      </h-btn>

      <h-btn text-button>
        <h-link text="to this page" url="/buttons"/>
      </h-btn>

      <h-btn outlined>
        <h-link text="to this page" url="/buttons"/>
      </h-btn>

      <h-btn outlined rounded>
        <h-link text="to this page" url="/buttons"/>
      </h-btn>
    </div>

  </h-page-content>
</template>

<script>
export default {
  data () {
    return {

    }
  }
}
</script>
