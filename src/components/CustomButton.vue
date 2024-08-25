<template>
  <button
    class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-6 rounded-md shadow-sm transition-transform transform active:scale-95 w-full"
    @click.stop="() => $emit('buttonClicked', label)"
  >
    {{ label }}
  </button>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
button {
  display: block;
  margin-top: auto;
}
</style>
