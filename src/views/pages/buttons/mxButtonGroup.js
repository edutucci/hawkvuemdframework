const mxButtonGroup = {
  data() {
    return {
      containedButtons: `
<div>
  <h-btn-group contained>
    <h-btn-group-item name="bold" bgcolor="bg-primary" textcolor="text-white" left-icon="fas fa-bold" text="Bold"/>
    <h-btn-group-item name="italic" bgcolor="bg-positive" textcolor="text-white" right-icon="fas fa-italic" text="Italic"/>
    <h-btn-group-item name="sub" bgcolor="bg-negative" textcolor="text-white"  left-icon="fas fa-underline" text="Underline"/>
  </h-btn-group>
</div>
`,
      outlinedButtons: `
<div>
  <h-btn-group outlined>
    <h-btn-group-item name="bold" left-icon="fas fa-bold"/>
    <h-btn-group-item name="italic" left-icon="fas fa-italic"/>
    <h-btn-group-item name="sub" left-icon="fas fa-underline"/>
  </h-btn-group>
</div>
`,
    };
  },
};

export default mxButtonGroup;
