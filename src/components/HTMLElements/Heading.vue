<script>
export default {
  props: {
    title: {
      type: String,
      required: false
    },
    description: {
      type: String,
      required: false
    },
    buttons: {
      type: Array,
      required: false
    }
  }
}
</script>
<template>
  <header class="flex flex-col items-center">
    <h1
      class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white"
    >
      {{ title ? title : 'This is a fallback title' }}
    </h1>
    <p
      class="mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400"
    >
      {{ description ? description : 'This is a fallback description' }}
    </p>
    <!-- loop for buttons -->
    <template v-if="buttons">
      <button
        v-for="(button, index) in buttons"
        :key="index"
        :href="button.link"
        class="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
      >
        {{ button.label }}
    </button>
    </template>
  </header>
</template>
