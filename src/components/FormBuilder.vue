<script>
import { toRef } from 'vue'
import NumberInput from './HTMLElements/NumberInput.vue'
import SelectList from './HTMLElements/SelectList.vue'
import TextInput from './HTMLElements/TextInput.vue'
import CustomButton from './CustomButton.vue'

export default {
  components: { NumberInput, SelectList, TextInput, CustomButton },
  props: ['schema', 'value'],
  setup(props, { emit }) {
    const formData = toRef(props.value || {})

    function updateForm(fieldName, value) {
      if (value) {
        formData[fieldName] = value.target?.value
        emit('input', formData)
      }
    }

    function onSubmit() {
      console.log('Form submitted..')
    }

    return {
      formData,
      updateForm,
      onSubmit
    }
  }
}
</script>
<template>
  <div class="w-full max-w-xs bg-white p-10 gap-4 mt-4">
    <component
      v-for="(field, index) in schema"
      :key="index"
      :is="field.fieldType"
      :value="formData[field.name]"
      @input="updateForm(field.name, $event)"
      @buttonClicked="($event) => onSubmit($event)"
      v-bind="field"
    >
    </component>
  </div>
</template>
