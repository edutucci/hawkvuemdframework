<template>
  <h-page>
    <h3>Contained Buttons</h3>
    <div class="h-pa-sm border border-gray border-corner-rounded">
      <div>
        <h-btn contained bgcolor="bg-white" textcolor="text-black" text="disabled" left-icon="fas fa-envelope" disabled/>
        <h-btn contained bgcolor="bg-white" textcolor="text-black" text="white" left-icon="fas fa-envelope"/>
        <h-btn contained rounded bgcolor="bg-primary" textcolor="text-white" text="primary" right-icon="fas fa-envelope"/>
        <h-btn contained rounded bgcolor="bg-secondary" textcolor="text-white" text="secondary"/>
        <h-btn contained bgcolor="bg-positive" textcolor="text-white" text="positive"/>
        <h-btn contained bgcolor="bg-negative" textcolor="text-white" text="negative"/>
        <h-btn contained bgcolor="bg-info" textcolor="text-white" text="info"/>
        <h-btn contained bgcolor="bg-warning" textcolor="text-white" text="warning"/>
      </div>
      <div class="col-6">
        <div class="flex flex-column">
          <h-btn contained class="full-width" bgcolor="bg-primary" textcolor="text-white" text="full width" right-icon="fas fa-envelope"/>
          <h-btn contained class="full-width" bgcolor="bg-positive" textcolor="text-white" text="full width" left-icon="fas fa-envelope"/>
        </div>
      </div>
    </div>

    <h3>Text Buttons</h3>
    <div class="h-pa-sm border border-gray border-corner-rounded">
      <h-btn textbutton textcolor="text-black" text="black"/>
      <h-btn textbutton textcolor="text-primary" text="primary"/>
      <h-btn textbutton textcolor="text-secondary" text="secondary"/>
      <h-btn textbutton textcolor="text-positive" text="positive"/>
      <h-btn textbutton textcolor="text-negative" text="negative"/>
      <h-btn textbutton textcolor="text-info" text="info"/>
      <h-btn textbutton textcolor="text-warning" text="warning"/>
    </div>
    <div class="col-6">
      <h-btn class="full-width" textbutton textcolor="text-black" text="black"/>
      <h-btn class="full-width" textbutton textcolor="text-primary" text="primary"/>
    </div>

    <h3>Outlined Buttons</h3>
    <div class="h-pa-sm border border-gray border-corner-rounded">
      <h-btn outlined text="disabled" disabled/>
      <h-btn outlined textcolor="text-primary" text="primary"/>
      <h-btn outlined textcolor="text-secondary" text="secondary"/>
      <h-btn outlined textcolor="text-positive" text="positive"/>
      <h-btn outlined textcolor="text-negative" text="negative"/>
      <h-btn outlined textcolor="text-info" text="info"/>
      <h-btn outlined textcolor="text-warning" text="warning"/>
    </div>

    <div class="col-6">
      <h-btn class="full-width" outlined text="disabled" disabled/>
      <h-btn class="full-width" outlined textcolor="text-black" text="black"/>
      <h-btn class="full-width" outlined textcolor="text-primary" text="primary"/>
    </div>

    <h3>Rounded Buttons</h3>
    <div class="h-pa-sm border border-gray border-corner-rounded">
      <h-btn contained rounded text="disabled" disabled/>
      <h-btn outlined rounded text="disabled" disabled/>
      <h-btn contained rounded bgcolor="bg-primary" textcolor="text-white" text="primary"/>
      <h-btn contained rounded bgcolor="bg-secondary" textcolor="text-white" text="secondary"/>
      <h-btn contained rounded bgcolor="bg-positive" textcolor="text-white" text="positive"/>
      <h-btn outlined rounded textcolor="text-negative" text="negative"/>
      <h-btn outlined rounded textcolor="text-info" text="info"/>
      <h-btn outlined rounded textcolor="text-warning" text="warning"/>
    </div>

    <div class="col-6">
      <h-btn class="full-width" outlined rounded text="disabled" disabled/>
      <h-btn class="full-width" contained rounded text="disabled" disabled/>
      <h-btn class="full-width" outlined rounded textcolor="text-black" text="black"/>
      <h-btn class="full-width" contained rounded textcolor="text-primary" text="primary"/>
    </div>

    <h3>Links</h3>
    <div class="h-pa-sm border border-gray border-corner-rounded">
      <h-btn contained bgcolor="bg-primary">
        <html-link icon="fab fa-github" text="github" url="https://github.com/edutucci/hawkframework" textcolor="text-white"/>
      </h-btn>

      <h-btn contained rounded bgcolor="bg-primary">
        <html-link icon="fab fa-github" text="github" url="https://github.com/edutucci/hawkframework" textcolor="text-white"/>
      </h-btn>

      <h-btn textbutton>
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
    <div class="h-pa-sm border border-gray border-corner-rounded">
      <h-btn contained bgcolor="bg-primary">
        <html-link text="to this page" url="/buttons" textcolor="text-white"/>
      </h-btn>

      <h-btn contained rounded bgcolor="bg-primary">
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
    <div class="h-pa-sm border border-gray border-corner-rounded">
      <h-btn contained bgcolor="bg-primary" textcolor="text-white" text="warning">
        <h-counter bgcolor="bg-negative" textcolor="text-white">123</h-counter>
      </h-btn>

      <h-btn contained rounded bgcolor="bg-primary" textcolor="text-white" text="warning">
        <h-counter bgcolor="bg-negative" textcolor="text-white">123</h-counter>
      </h-btn>

      <h-btn textbutton textcolor="text-primary" text="primary">
        <h-counter bgcolor="bg-negative" textcolor="text-white">12</h-counter>
      </h-btn>

      <h-btn outlined textcolor="text-primary" text="primary">
        <h-counter bgcolor="bg-negative" textcolor="text-white">12</h-counter>
      </h-btn>

      <h-btn outlined rounded textcolor="text-primary" text="primary">
        <h-counter bgcolor="bg-negative" textcolor="text-white">12</h-counter>
      </h-btn>
    </div>

  </h-page>
</template>

<script>
export default {
  data () {
    return {

    }
  }
}
</script>
