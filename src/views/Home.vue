<template>
  <div class="scanlines home" @click="enableAudio()">
    <iframe
      id="video"
      width="1"
      height="1"
      src="//www.youtube.com/embed/cU_QuldpVG0?rel=0"
      frameborder="0"
      allowfullscreen
      ref="iframe"
    ></iframe>
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
export default class Home extends Vue {
  private audioStarted = false;

  public enableAudio() {
    const frame = this.$refs.iframe as HTMLIFrameElement;
    frame.src += "&autoplay=1";
  }
}
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

