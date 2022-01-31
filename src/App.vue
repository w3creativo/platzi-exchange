<script>
import PxHeader from "@/components/PxHeader.vue"
import Home from "@/views/Home.vue"

export default {
  name: "app",
  components: [PxHeader, Home],
}
</script>

<template>
  <main>
    <px-header />
    <px-assets-table />
  </main>
</template>
