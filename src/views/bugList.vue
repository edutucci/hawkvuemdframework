<template lang="pug">
  h-page-content(padding)
    .text-h5 BUG LIST

    h-list.h-mt-md
      h-list-header(text="Buttons")
      h-list-item(item-separator)
        h-list-item-content
          .text-body1 Quando habilitar outlined junto com rounded remover e a cor de fundo e criar uma borda com a cor de fundo
      h-list-header(text="Chips")
      h-list-item
        h-list-item-content
          .text-body1 closable nao esta funcionando.

      h-list-header(text="Input")
      h-list-item
        h-list-item-content
          .text-body1 model is not working in input-search ok
          .text-body1 input chip is not working
          .text-body1 placeholder is not working

      h-list-header(text="Toggle")
      h-list-item
        h-list-item-content
          .text-body1 property checked has no reactivity. ok

      h-list-header(text="Radio")
      h-list-item
        h-list-item-content
          .text-body1 property value has no reactivity to model/component. ok

    .text-h5.h-mt-md.border-top.border-bottom.border-gray IMPLEMENTATIONS

    h-list.h-mt-md
      h-list-header.list-header(text="Checkbox")
      h-list-item(item-separator)
        h-list-item-content
          .text-body1 Adicionar a property color para background quando estiver checked

      h-list-header.list-header(text="Collapsible")
      h-list-item(item-separator)
        h-list-item-content
          .text-body1 Adicionar evento click no h-collapsible-item. ok

      h-list-header.list-header(text="Dialog")
      h-list-item(item-separator)
        h-list-item-content
          .text-body1 change name modal to dialog. ok
          .text-body1 add modal property(dont close dialog if clicks outside). ok

      h-list-header.list-header(text="Input")
      h-list-item(item-separator)
        h-list-item-content
          .text-body1 add mask for search type
          .text-body1 add event @rightIconClick for aditional input icon click
          .text-body1 add rightIcon property

      h-list-header.list-header(text="Radio")
      h-list-item(item-separator)
        h-list-item-content
          .text-body1 adicionar a property color para background quando estiver checked
          .text-body1 verificar se readonly esta funcionando. ok

      h-list-header.list-header(text="Table")
      h-list-item(item-separator)
        h-list-item-content
          .text-body1 Table titles. ok
          .text-body1 Change name for field in column config
          .text-body1 Custom text for column name
          .text-body1 custom header
          .text-body1 sticky header ok
          .text-body1 cell separator

      h-list-header.list-header(text="Toggle")
      h-list-item(item-separator)
        h-list-item-content
          .text-body1 add readonly property. ok
          .text-body1 add css for readonly property

</template>

<style scoped>
.h-list-header {
  background-color: dodgerblue;
  color: white;
}

.h-list-item-content .text-body1 {
  border: 1px solid gray;
  margin-bottom: 5px;
  padding: 5px;
}
</style>
