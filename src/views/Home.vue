<template>
  <div>
    <px-assets-table v-if="!isLoading" :assets="assets" />
  </div>
</template>

<script>
import api from "@/api"
import PxAssetsTable from "@/components/PxAssetsTable.vue"

export default {
  name: "Home",
  components: [PxAssetsTable],
  data() {
    return {
      isLoading: false,
      assets: [],
    }
  },
  created() {
    this.isLoading = true

    let loader = this.$loading.show({
      // Optional parameters
      // canCancel: true,
      // onCancel: this.onCancel,
    })

    api
      .getAssets()
      .then(assets => (this.assets = assets))
      .finally(() => {
        this.isLoading = false
        loader.hide()
      })
  },
}
</script>
