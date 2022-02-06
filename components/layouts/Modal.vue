<template>
  <div
    class="fixed bg-black bg-opacity-25 m-auto inset-0 w-full h-full z-50 flex items-center justify-center"
  >
    <div class="container bg-white w-full max-w-xl p-8 box-border">
      <slot name="modalTitle"></slot>
      <slot name="modalBody"></slot>
      <slot name="modalFooter"></slot>
    </div>
  </div>
</template>
