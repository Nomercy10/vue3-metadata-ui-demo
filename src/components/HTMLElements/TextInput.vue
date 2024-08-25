<template>
   <div class="mb-4">
    <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
      {{ label }}
      </label>
    <input
    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      type="text"
      :name="name"
      :value="value"
      @input="($event) => $emit('input', $event.target.value)"
      :placeholder="placeholder"
    />
  </div>
</template>
<script>
export default {
  name: 'TextInput',
  props: ['placeholder', 'label', 'name', 'value']
}
</script>
