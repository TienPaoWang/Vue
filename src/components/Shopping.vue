<template>
  <div>
    <b-row class="cardggroup">
      <Shoppingitem v-for="item in GET_DISPLAY" :key="item.id" :item="item">
      </Shoppingitem>
    </b-row>
    <b-pagination-nav
      align="center"
      :number-of-pages="GET_TOTAL_PAGE"
      base-url="#"
      first-text="First"
      prev-text="Prev"
      next-text="Next"
      last-text="Last"
      v-model="currentpage"
      @input="pageate(currentpage)"
    ></b-pagination-nav>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

import Shoppingitem from "./Shoppingitem";
export default {
  data() {
    return { currentpage: 1, firstpage: 1 };
  },
  components: {
    Shoppingitem
  },
  mounted() {
    this.GetTotalData();
  },
  computed: {
    ...mapGetters(["GET_DISPLAY", "GET_TOTAL_PAGE"])
  },
  methods: {
    ...mapActions(["fetchtotaldata"]),
    GetTotalData() {
      this.$store.dispatch("fetchtotaldata");
    },
    pageate(currentpage) {
      this.$store.dispatch("pagination", currentpage);

    }
  }
};
</script>

<style scoped>
.cardggroup {
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 20px 0 0 0;
}
</style>
