<script>
export default {
  props: {
    firstName: {
      type: String,
      required: true
    },
    lastName: {
      type: String,
      required: true
    }
  }
}
</script>

<template>
  <div class="grid justify-center gap-4 text-center text-gray-200">
    <h1 class="text-2xl font-semibold white">Dynamic Component One</h1>
    <p class="text-lg">Hello {{ firstName }} {{ lastName }}</p>
    <button
      class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-6 rounded-md shadow-sm transition-transform transform active:scale-95"
      @click="$emit('upperCase')"
    >
      Upper Case
    </button>
  </div>
</template>