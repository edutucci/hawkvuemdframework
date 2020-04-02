<template lang="pug">
  h-page-content(padding)
    .text-h5 BUG LIST

    h-list.h-mt-md
      h-list-header(text="Buttons")
      h-list-item(item-separator)
        h-list-item-content
          h-list-item-text(title="Quando habilitar outlined junto com rounded remover e a cor de fundo e criar uma borda com a cor de fundo")
      h-list-header(text="Chips")
      h-list-item
        h-list-item-content
          h-list-item-text(title="closable nao esta funcionando.")

      h-list-header(text="Input")
      h-list-item
        h-list-item-content
          h-list-item-text(title=" model is not working in input-search ok ")
      h-list-item
        h-list-item-content
          h-list-item-text(title=" input chip is not working ")
      h-list-item
        h-list-item-content
          h-list-item-text(title=" placeholder is not working ")

      h-list-header(text="Toggle")
      h-list-item
        h-list-item-content
          h-list-item-text(title=" property checked has no reactivity. ok ")

      h-list-header(text="Radio")
      h-list-item
        h-list-item-content
          h-list-item-text(title=" property value has no reactivity to model/component. ok ")

    .text-h5.h-mt-md.border-top.border-bottom.border-gray IMPLEMENTATIONS

    h-list.h-mt-md
      h-list-header.list-header(text="Checkbox")
      h-list-item(item-separator)
        h-list-item-content
          h-list-item-text(title=" Adicionar a property color para background quando estiver checked ")

      h-list-header.list-header(text="Collapsible")
      h-list-item(item-separator)
        h-list-item-content
          h-list-item-text(title=" Adicionar evento click no h-collapsible-item. ok ")

      h-list-header.list-header(text="Dialog")
      h-list-item(item-separator)
        h-list-item-content
          h-list-item-text(title=" change name modal to dialog. ok ")
      h-list-item
        h-list-item-content
          h-list-item-text(title=" add modal property(dont close dialog if clicks outside). ok ")

      h-list-header.list-header(text="Input")
      h-list-item(item-separator)
        h-list-item-content
          h-list-item-text(title=" add mask for search type ")
      h-list-item
        h-list-item-content
          h-list-item-text(title=" add event @rightIconClick for aditional input icon click ")
      h-list-item
        h-list-item-content
          h-list-item-text(title=" add rightIcon property ")

      h-list-header.list-header(text="Radio")
      h-list-item(item-separator)
        h-list-item-content
          h-list-item-text(title=" adicionar a property color para background quando estiver checked ")
      h-list-item
        h-list-item-content
          h-list-item-text(title=" verificar se readonly esta funcionando. ok ")

      h-list-header.list-header(text="Table")
      h-list-item(item-separator)
        h-list-item-content
          h-list-item-text(title=" Table titles. ok ")
      h-list-item
        h-list-item-content
          h-list-item-text(title=" Change name for field in column config. ok ")
      h-list-item
        h-list-item-content
          h-list-item-text(title=" Custom text for column name. ok ")
      h-list-item
        h-list-item-content
          h-list-item-text(title=" custom header. ok ")
      h-list-item
        h-list-item-content
          h-list-item-text(title=" sticky header ok ")
      h-list-item
        h-list-item-content
          h-list-item-text(title=" cell separator ")

      h-list-header.list-header(text="Toggle")
      h-list-item(item-separator)
        h-list-item-content
          h-list-item-text(title=" add readonly property. ok ")
      h-list-item
        h-list-item-content
          h-list-item-text(title=" add css for readonly property ")

</template>

<style scoped>
.h-list-header {
  background-color: dodgerblue;
  color: white;
}

/* .h-list-item-content .text-body1 {
  border: 1px solid gray;
  margin-bottom: 5px;
  padding: 5px;
} */
</style>
