<template>
  <div class="q-pa-md q-gutter-sm">
    <q-editor
      v-model="editor"
      :definitions="{
        bold: {label: 'Bold', icon: null, tip: 'My bold tooltip'}
      }"
    />
  </div>
</template>