<script>
import PxHeader from "./components/PxHeader.vue"
import PxAssetsTable from "./components/PxAssetsTable.vue"

export default {
  components: { PxAssetsTable },
  name: "app",
  components: [PxHeader],
}
</script>

<template>
  <main>
    <px-header />
    <px-assets-table />
  </main>
</template>
