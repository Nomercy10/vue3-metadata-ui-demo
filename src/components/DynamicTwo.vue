<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
      default: 'Mr.'
    },
    firstName: {
      type: String,
      required: true,
      default: 'John'
    },
    lastName: {
      type: String,
      required: true,
      default: 'Doe'
    }
  }
}
</script>
<template>
  <div class="grid justify-center gap-4 text-center text-gray-200">
    <h1 class="text-2xl font-semibold white">Dynamic Component Two</h1>
    <p class="text-lg">Hello {{ title }} {{ firstName }} {{ lastName }}</p>
    <button
      class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
      @click="$emit('lowerCase')"
    >
      Lower Case
    </button>
  </div>
</template>
