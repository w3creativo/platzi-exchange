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

    <router-view class="container px-5 sm:px-20 py-20 flex justify-center" />
  </main>
</template>
