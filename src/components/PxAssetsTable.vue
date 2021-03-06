<template>
  <table>
    <thead>
      <tr class="bg-gray-100 border-b-2 border-gray-400">
        <th></th>
        <th :class="{ up: this.sortOrder === 1, down: this.sortOrder === -1 }">
          <span class="underline cursor-pointer" @click="changeSortOrder()"
            >Ranking</span
          >
        </th>
        <th>Nombre</th>
        <th>Precio</th>
        <th>Cap. de Mercado</th>
        <th>Variación 24hs</th>
        <td class="hidden sm:block">
          <input
            class="bg-gray-100 focus:outline-none border-b border-gray-400 py-2 px-4 block w-full appearance-none leading-normal"
            id="filter"
            placeholder="Buscar..."
            type="text"
            v-model="filter"
          />
        </td>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="item in filteredAssets"
        :key="item.id"
        class="border-b border-gray-200 hover:bg-gray-100 hover:bg-orange-100"
      >
        <td>
          <img
            class="max-w-none w-6 h-6"
            :src="`https://static.coincap.io/assets/icons/${item.symbol.toLowerCase()}@2x.png`"
            :alt="item.name"
          />
        </td>
        <td>
          <b>{{ item.rank }}</b>
        </td>
        <td>
          <router-link
            class="hover:underline text-green-600"
            :to="{ name: 'coin-detail', params: { id: item.id } }"
            >{{ item.name }}</router-link
          >
          <small class="ml-1 text-gray-500">{{ item.symbol }}</small>
        </td>
        <td>{{ moneyFilter(item.priceUsd) }}</td>
        <td>{{ moneyFilter(item.marketCapUsd) }}</td>
        <td
          :class="
            item.changePercent24Hr.includes('-')
              ? 'text-red-600'
              : 'text-green-600'
          "
        >
          {{ percentF(item.changePercent24Hr) }}
        </td>
        <td class="hidden sm:block">
          <px-button @click="goToCoin(item.id)">
            <span>Detalle</span>
          </px-button>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import { dollarFilter, percentFilter } from "@/filter"
import PxButton from "@/components/PxButton.vue"

export default {
  name: "PxAssetsTable",

  components: [PxButton],

  data() {
    return {
      filter: "",
      sortOrder: 1,
    }
  },

  props: {
    assets: {
      type: Array,
      default: () => [],
    },
  },

  computed: {
    filteredAssets() {
      return this.assets
        .filter(
          a =>
            a.symbol.toLowerCase().includes(this.filter.toLowerCase()) ||
            a.name.toLowerCase().includes(this.filter.toLowerCase())
        )
        .sort((a, b) => {
          if (parseInt(a.rank) > parseInt(b.rank)) {
            return this.sortOrder
          }
          return changeSortOrder
        })
    },
  },
  methods: {
    moneyFilter: dollarFilter,
    percentF: percentFilter,
    goToCoin(id) {
      this.$router.push({ name: "coin-detail", params: { id } })
    },
    changeSortOrder() {
      this.sortOrder *= -1
    },
  },
}
</script>

<style scoped>
.up::before {
  content: "👆";
}

.down::before {
  content: "👇";
}

td {
  padding: 20px 0px;
  font-size: 0.6rem;
  text-align: center;
}

th {
  padding: 5px;
  font-size: 0.6rem;
}

@media (min-width: 640px) {
  td,
  th {
    padding: 20px;
    font-size: 1rem;
  }

  th {
    padding: 12px;
  }
}
</style>
