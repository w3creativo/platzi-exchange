<template>
  <button
    class="bg-transparent hove:bg-green-300 text-green-700 font-semibold hover:text-white py-2 px-2 border border-green-500 hover:border-transparent rounded"
    @click="buttonClick"
  >
    <loading v-model:active="isLoading" :is-full-page="false" />
    <slot v-if="!isLoading"></slot>
  </button>
</template>

<script>
import Loading from "vue-loading-overlay"
import "vue-loading-overlay/dist/vue-loading.css"

export default {
  name: "PxButton",

  props: {
    isLoading: {
      type: Boolean,
      default: false,
    },
  },
  components: {
    Loading,
  },

  methods: {
    buttonClick() {
      this.$emit("click")
    },
  },
}
</script>
