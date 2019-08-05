<template>
  <h-page-content padding>
    <h3>Contained Buttons</h3>
    <div class="h-pa-sm border border-gray border-radius">
      <div>
        <div>
          <h-btn bgcolor="bg-white" textcolor="text-black" text="disabled" left-icon="fas fa-envelope" disabled/>
          <h-btn bgcolor="bg-white" textcolor="text-black" text="white" left-icon="fas fa-envelope"/>
          <h-btn rounded bgcolor="bg-primary" textcolor="text-white" text="primary" right-icon="fas fa-envelope"/>
          <h-btn rounded bgcolor="bg-secondary" textcolor="text-white" text="secondary"/>
          <h-btn bgcolor="bg-positive" textcolor="text-white" text="positive"/>
          <h-btn bgcolor="bg-negative" textcolor="text-white" text="negative"/>
          <h-btn bgcolor="bg-info" textcolor="text-white" text="info"/>
          <h-btn bgcolor="bg-warning" textcolor="text-white" text="warning"/>
        </div>
        <div >
          <div>
            <h-btn class="full-width" bgcolor="bg-primary" textcolor="text-white" text="full width" right-icon="fas fa-envelope"/>
            <h-btn class="full-width" bgcolor="bg-positive" textcolor="text-white" text="full width" left-icon="fas fa-envelope"/>
          </div>
        </div>
      </div>
    </div>

    <h3>Text Buttons</h3>
    <div class="h-pa-sm border border-gray border-radius">
      <div>
        <h-btn text-button bgcolor="bg-white" textcolor="text-black" text="black"/>
        <h-btn text-button bgcolor="bg-primary" textcolor="text-primary" text="primary"/>
        <h-btn text-button bgcolor="bg-secondary" textcolor="text-secondary" text="secondary"/>
        <h-btn text-button bgcolor="bg-positive" textcolor="text-positive" text="positive"/>
        <h-btn text-button bgcolor="bg-negative" textcolor="text-negative" text="negative"/>
        <h-btn text-button bgcolor="bg-info" textcolor="text-info" text="info"/>
        <h-btn text-button bgcolor="bg-warning" textcolor="text-warning" text="warning"/>
      </div>
      <div>
        <h-btn class="full-width" text-button textcolor="text-black" text="black"/>
        <h-btn class="full-width" text-button bgcolor="bg-primary" textcolor="text-primary" text="primary"/>
      </div>
    </div>

    <h3>Outlined Buttons</h3>
    <div class="h-pa-sm border border-gray border-radius">
      <div>
        <h-btn outlined text="disabled" disabled/>
        <h-btn bgcolor="bg-primary" outlined textcolor="text-primary" text="primary"/>
        <h-btn bgcolor="bg-secondary" outlined textcolor="text-secondary" text="secondary"/>
        <h-btn bgcolor="bg-positive" outlined textcolor="text-positive" text="positive"/>
        <h-btn bgcolor="bg-negative" outlined textcolor="text-negative" text="negative"/>
        <h-btn bgcolor="bg-info" outlined textcolor="text-info" text="info"/>
        <h-btn bgcolor="bg-warning" outlined textcolor="text-warning" text="warning"/>
      </div>

      <div>
        <h-btn class="full-width" outlined text="disabled" disabled/>
        <h-btn class="full-width" outlined textcolor="text-black" text="black"/>
        <h-btn class="full-width" outlined textcolor="text-primary" text="primary"/>
      </div>
    </div>

    <h3>Rounded Buttons</h3>
    <div class="h-pa-sm border border-gray border-radius">
      <div>
        <h-btn rounded text="disabled" disabled/>
        <h-btn outlined rounded text="disabled" disabled/>
        <h-btn rounded bgcolor="bg-primary" textcolor="text-white" text="primary"/>
        <h-btn rounded bgcolor="bg-secondary" textcolor="text-white" text="secondary"/>
        <h-btn rounded bgcolor="bg-positive" textcolor="text-white" text="positive"/>
        <h-btn outlined rounded textcolor="text-negative" text="negative"/>
        <h-btn outlined rounded textcolor="text-info" text="info"/>
        <h-btn outlined rounded textcolor="text-warning" text="warning"/>
      </div>

      <div>
        <h-btn class="full-width" outlined rounded text="disabled" disabled/>
        <h-btn class="full-width" rounded text="disabled" disabled/>
        <h-btn class="full-width" outlined rounded textcolor="text-black" text="black"/>
        <h-btn class="full-width"  rounded textcolor="text-primary" text="primary"/>
      </div>
    </div>

    <h3>FAB Buttons</h3>
    <div class="h-pa-sm border border-gray border-radius">
      <div>
        <h-btn fab bgcolor="bg-primary" size="xl">
          <h-fa-icon icon="fas fa-envelope"  textcolor="text-white" size="32px"/>
        </h-btn>
        <h-btn fab bgcolor="bg-primary" textcolor="text-white" size="xl">
          <h-fa-icon icon="fab fa-github"  textcolor="text-white" size="32px"/>
        </h-btn>
        <h-btn fab bgcolor="bg-primary" textcolor="text-white" size="xl">
          <h-fa-icon icon="fas fa-map-marker-alt"  textcolor="text-white" size="32px"/>
        </h-btn>
        <h-btn fab bgcolor="bg-primary" textcolor="text-white" size="xl">
          <h-fa-icon icon="fas fa-shopping-cart"  textcolor="text-white" size="32px"/>
        </h-btn>
        <h-btn fab bgcolor="bg-primary" textcolor="text-white" size="xl">
          <h-fa-icon icon="fas fa-plane"  textcolor="text-white" size="32px"/>
        </h-btn>
      </div>
      <div>
        <h-btn fab bgcolor="bg-primary" size="sm">
          <h-fa-icon icon="fas fa-envelope"  textcolor="text-white"/>
        </h-btn>
        <h-btn fab bgcolor="bg-primary" textcolor="text-white" size="sm">
          <h-fa-icon icon="fab fa-github"  textcolor="text-white"/>
        </h-btn>
        <h-btn fab bgcolor="bg-primary" textcolor="text-white" size="sm">
          <h-fa-icon icon="fas fa-map-marker-alt"  textcolor="text-white"/>
        </h-btn>
        <h-btn fab bgcolor="bg-primary" textcolor="text-white" size="sm">
          <h-fa-icon icon="fas fa-shopping-cart"  textcolor="text-white"/>
        </h-btn>
        <h-btn fab bgcolor="bg-primary" textcolor="text-white" size="sm">
          <h-fa-icon icon="fas fa-plane"  textcolor="text-white"/>
        </h-btn>
      </div>
    </div>

    <h3>Sizes</h3>
    <div class="h-pa-sm border border-gray border-radius">
      <div>
        <h-btn bgcolor="bg-primary" textcolor="text-white" text="xs" size="xs"/>
        <h-btn bgcolor="bg-primary" textcolor="text-white" text="sm" size="sm"/>
        <h-btn bgcolor="bg-primary" textcolor="text-white" text="md" size="md"/>
        <h-btn bgcolor="bg-primary" textcolor="text-white" text="lg" size="lg"/>
        <h-btn bgcolor="bg-primary" textcolor="text-white" text="xl" size="xl"/>
      </div>

      <div>
        <h-btn rounded bgcolor="bg-primary" textcolor="text-white" text="xs" size="xs"/>
        <h-btn rounded bgcolor="bg-primary" textcolor="text-white" text="sm" size="sm"/>
        <h-btn rounded bgcolor="bg-primary" textcolor="text-white" text="md" size="md"/>
        <h-btn rounded bgcolor="bg-primary" textcolor="text-white" text="lg" size="lg"/>
        <h-btn rounded bgcolor="bg-primary" textcolor="text-white" text="xl" size="xl"/>
      </div>

      <div>
        <h-btn fab bgcolor="bg-primary" size="xs">
          <h-fa-icon icon="fas fa-envelope"  textcolor="text-white"/>
        </h-btn>
        <h-btn fab bgcolor="bg-primary" textcolor="text-white" size="sm">
          <h-fa-icon icon="fab fa-github"  textcolor="text-white"/>
        </h-btn>
        <h-btn fab bgcolor="bg-primary" textcolor="text-white" size="md">
          <h-fa-icon icon="fas fa-map-marker-alt"  textcolor="text-white"/>
        </h-btn>
        <h-btn fab bgcolor="bg-primary" textcolor="text-white" size="lg">
          <h-fa-icon icon="fas fa-shopping-cart"  textcolor="text-white"/>
        </h-btn>
        <h-btn fab bgcolor="bg-primary" textcolor="text-white" size="xl">
          <h-fa-icon icon="fas fa-plane"  textcolor="text-white" size="32px"/>
        </h-btn>
      </div>
    </div>

    <h3>Links</h3>
    <div class="h-pa-sm border border-gray border-radius">
      <h-btn bgcolor="bg-primary">
        <html-link icon="fab fa-github" text="github" url="https://github.com/edutucci/hawkframework" textcolor="text-white"/>
      </h-btn>

      <h-btn rounded bgcolor="bg-primary">
        <html-link icon="fab fa-github" text="github" url="https://github.com/edutucci/hawkframework" textcolor="text-white"/>
      </h-btn>

      <h-btn text-button>
        <html-link text="github" url="https://github.com/edutucci/hawkframework"/>
      </h-btn>

      <h-btn outlined>
        <html-link icon="fab fa-github" text="github new window" url="https://github.com/edutucci/hawkframework" new-window/>
      </h-btn>

      <h-btn outlined rounded>
        <html-link icon="fab fa-github" text="github new window" url="https://github.com/edutucci/hawkframework" new-window/>
      </h-btn>
    </div>

    <h3>Router</h3>
    <div class="h-pa-sm border border-gray border-radius">
      <h-btn bgcolor="bg-primary">
        <html-link text="to this page" url="/buttons" textcolor="text-white"/>
      </h-btn>

      <h-btn rounded bgcolor="bg-primary">
        <html-link text="to this page" url="/buttons" textcolor="text-white"/>
      </h-btn>

      <h-btn textbutton>
        <html-link text="to this page" url="/buttons"/>
      </h-btn>

      <h-btn outlined>
        <html-link text="to this page" url="/buttons"/>
      </h-btn>

      <h-btn outlined rounded>
        <html-link text="to this page" url="/buttons"/>
      </h-btn>
    </div>

    <h3>Counters</h3>
    <div class="h-pa-sm border border-gray border-radius">
      <h-btn  bgcolor="bg-primary" textcolor="text-white" text="warning">
        <h-counter bgcolor="bg-negative" textcolor="text-white">123</h-counter>
      </h-btn>

      <h-btn  rounded bgcolor="bg-primary" textcolor="text-white" text="warning">
        <h-counter bgcolor="bg-negative" textcolor="text-white">123</h-counter>
      </h-btn>

      <h-btn text-button textcolor="text-primary" bgcolor="bg-primary" text="primary">
        <h-counter bgcolor="bg-negative" textcolor="text-white">12</h-counter>
      </h-btn>

      <h-btn outlined textcolor="text-primary" bgcolor="bg-primary" text="primary">
        <h-counter bgcolor="bg-negative" textcolor="text-white">12</h-counter>
      </h-btn>

      <h-btn outlined rounded textcolor="text-primary" bgcolor="bg-primary" text="primary">
        <h-counter bgcolor="bg-negative" textcolor="text-white">12</h-counter>
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
