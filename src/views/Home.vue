<template>
  <div class="scanlines home">
    <Ranking/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Ranking from "@/components/Ranking.vue";
import RankingClient from "@/components/client";

@Component({
  components: {
    Ranking
  }
})
export default class Home extends Vue {}
</script>

<style>
.home {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
}

.scanlines {
  background: repeating-linear-gradient(
    transparent,
    transparent 2px,
    black 3px,
    black 3px
  );
  background-size: auto 100%;
  background-position: center center;
  opacity: 1;
}
</style>

