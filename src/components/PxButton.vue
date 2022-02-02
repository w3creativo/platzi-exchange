<template>
  <button
    class="bg-transparent hove:bg-green-300 text-green-700 font-semibold hover:text-white py-2 px-2 border border-green-500 hover:border-transparent rounded"
    @click="buttonClick"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "PxButton",

  methods: {
    buttonClick() {
      this.$emit("click")
    },
  },
}
</script>
