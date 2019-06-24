<template>
  <transition name="fade">
    <div v-if="ranking.length !== 0" class="center nes-table-responsive">
      <table class="nes-table is-bordered is-dark">
        <tbody>
          <tr v-for="(entry, index) in ranking" v-bind:key="entry.id">
            <td class="number text" v-bind:class="{'crazy': index === 0}">#{{index+1}}</td>
            <td class="name text" v-bind:class="{'crazy': index === 0}">{{entry.Player.nickname}}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </transition>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import RankingClient, { RankingResult, Result } from "./client";

@Component
export default class Ranking extends Vue {
  public ranking: Result[] = [];

  async created() {
    const client = new RankingClient();
    const ranking = await client.getMockRanking();
    this.ranking = ranking.result;
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.text {
  line-height: 1.4;
  display: inline-block;
  color: white;
  animation: chroab 400ms ease-in both;
}

@keyframes chroab {
  0% {
    text-shadow: 0 0 #a50610, 0 0 #0c2aa8, 0 6px 0 transparent,
      8px 0 0 transparent;
  }
  100% {
    text-shadow: 0.06ex 0 #a50610, -0.06ex 0 #0c2aa8,
      0 0.14ex 0 rgba(0, 0, 0, 0.8), 0.12ex 0 0 rgba(0, 0, 0, 0.8);
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 3s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

.number {
  width: 80px;
}

.center {
  justify-self: center;
  align-items: center;
  box-shadow: 8px 8px 0 rgba(0, 0, 0, 0.2);
  margin-top: 100px;
  margin-bottom: 100px;
}

.name {
  width: 300px;
  text-align: left;
}

.crazy {
  animation: textAnimate 5s linear infinite alternate;
  background: linear-gradient(92deg, #95d7e3, #eb76ff);
  background: -webkit-linear-gradient(92deg, #95d7e3, #eb76ff);
  background-size: 600vw 600vw;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

@keyframes textAnimate {
  from {
    filter: hue-rotate(0deg);
    background-position-x: 0%;
  }
  to {
    filter: hue-rotate(360deg);
    background-position-x: 600vw;
  }
}
</style>
