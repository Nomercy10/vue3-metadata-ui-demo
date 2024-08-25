<script>
import { getDummyData } from '@/api'
import { ref } from 'vue'
import Loader from '@/components/HTMLElements/Loader.vue'
import FormBuilder from '@/components/FormBuilder.vue'

export default {
  components: {
    Loader,
    FormBuilder
  },
  setup() {
    const schema = ref({})
    const formData = ref({
      firstName: 'Evan'
    })
    const loader = ref(false)

    return {
      schema,
      formData,
      loader
    }
  },
  mounted() {
    // This will initiate a loader shown on the screen for 2 seconds, in the background we call fetchMetadata function
    this.loader = true
    setTimeout(() => {
      this.fetchMetadata()
    }, 2000)
  },

  methods: {
    async fetchMetadata() {
      // This is a dummy function to show how to call an API
      const metaData = await getDummyData('demo2')
      console.log('metadata', metaData)
      this.schema = metaData.formSchema
      this.loader = false
    }
  }
}
</script>

<template>
  <div class="w-full">
    <!-- Loader for API imitation -->
    <div class="flex flex-col items-center h-full align-middle" v-if="loader">
      <h3>Fetching metadata through API</h3>
      <Loader />
    </div>
    <!-- Demo to show case form builder where the fields are fetched from the JSON -->
    <div class="justify-center w-full items-center" v-else>
      <FormBuilder :schema="schema" v-model="formData" />
    </div>
  </div>
</template>
