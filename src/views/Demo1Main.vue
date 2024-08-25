<script>
import { ref, onMounted } from 'vue'
import DynamicOne from '../components/DynamicOne.vue'
import DynamicTwo from '../components/DynamicTwo.vue'
import Loader from '../components//HTMLElements/Loader.vue'
import Heading from '../components/HTMLElements/Heading.vue'
import { getDummyData } from '@/api/index.js'

export default {
  components: {
    DynamicOne,
    DynamicTwo,
    Loader,
    Heading
  },
  setup() {
    // Reactive state variables
    const showWhich = ref('DynamicOne') // Component to show
    const person = ref({
      title: 'Mr.',
      firstName: 'John',
      lastName: 'Doe'
    })
    const loader = ref(true) // Loader visibility
    const showHeader = ref(false) // Header visibility
    const metaData = ref({}) // Metadata from API
    const toggles = ref({}) // Component toggles
    const headerData = ref({}) // Header data

    // Fetch metadata from API
    const fetchMetadata = async () => {
      try {
        metaData.value = await getDummyData('demo1')
        updateMetaData()
        loader.value = true
      } catch (error) {
        console.error('Error fetching metadata:', error)
      } finally {
        loader.value = false
      }
    }

    // Update header and toggle data
    const updateMetaData = () => {
      headerData.value = metaData.value.componentData?.header || {}
      toggles.value = metaData.value.dynamicComponentToggles || {}
    }

    // Update the displayed component
    const updateComponent = (component) => {
      showWhich.value = component
    }

    // Switch case for text transformation
    const switchCase = (toCase) => {
      Object.keys(person.value).forEach((key) => {
        person.value[key] =
          toCase === 'upperCase' ? person.value[key].toUpperCase() : person.value[key].toLowerCase()
      })
    }

    // Lifecycle hook to fetch metadata on mount
    onMounted(() => {
      setTimeout(() => {
        fetchMetadata()
      }, 2000)
    })

    return {
      showWhich,
      person,
      loader,
      showHeader,
      metaData,
      toggles,
      headerData,
      updateComponent,
      switchCase
    }
  }
}
</script>

<template>
  <div class="w-full flex flex-col items-center justify-center">
    <!-- Loader for API imitation -->
    <div v-if="loader" class="flex flex-col items-center h-full align-middle">
      <h3 class="text-lg font-semibold">Fetching metadata through API</h3>
      <Loader />
    </div>
    <!-- Main Content -->
    <div v-else class="w-full flex flex-col items-center gap-12 px-4">
      <!-- Dynamically shown Header -->
      <Heading
        v-if="toggles.showHeader"
        :title="headerData.title"
        :description="headerData.description"
        :buttons="headerData.buttons"
        class="text-center mb-6"
      />
      <div class="border-t border-gray-300 w-full max-w-3xl mb-8"></div>
      <!-- Dynamic Components -->
      <div class="w-full max-w-3xl flex flex-col items-center gap-8">
        <div class="flex gap-4 justify-center">
          <button
            class="btn bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded-md shadow-sm transition-transform transform active:scale-95"
            @click="updateComponent('DynamicOne')"
          >
            Show Component One
          </button>
          <button
            class="btn bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded-md shadow-sm transition-transform transform active:scale-95"
            @click="updateComponent('DynamicTwo')"
          >
            Show Component Two
          </button>
        </div>
        <div class="w-full text-center">
          <component
            :is="showWhich"
            v-bind="person"
            @upperCase="switchCase('upperCase')"
            @lowerCase="switchCase('lowerCase')"
            class="text-gray-800"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}

.btn {
  background-color: #1e90ff;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition:
    background-color 0.3s,
    transform 0.1s;
}

.btn:active {
  background-color: #1c7cd6;
  transform: scale(0.98);
}

.greetings h1,
.greetings h3 {
  text-align: center;
}
</style>
