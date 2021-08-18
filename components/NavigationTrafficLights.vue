<template>
  <div>
    <div class="timer-board" :style="{ color: color }">
      {{ Math.round(time) }}
    </div>
    <div class="timer-board-leg"></div>
    <div class="traffic-lights">
      <div class="head-traffic-lights">
        <router-link
          tag="div"
          class="light green"
          :to="{ name: 'green' }"
        ></router-link>
        <router-link
          tag="div"
          class="light yellow"
          :to="{ name: 'yellow' }"
        ></router-link>
        <router-link
          tag="div"
          class="light red"
          :to="{ name: 'red' }"
        ></router-link>
      </div>
      <div class="foot-traffic-lights"></div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["color", "timeLight"],
  data() {
    return {
      time: this.timeLight,
    };
  },

  mounted() {
    let elem = document.getElementsByClassName(this.color)[0];
    if (elem) {
      this.startBlink(elem);
      elem.style.opacity = 1;
    }
  },
  methods: {
    startBlink(elem) {
      setInterval(() => {
        this.time = this.time - 0.5;
        if (this.time <= 3) {
          if (this.time % 1 === 0.5) {
            elem.style.opacity = 0.7;
          }
          if (this.time % 1 === 0) {
            elem.style.opacity = 1;
          }
        }
      }, 500);
    },
  },
};
</script>
<style>
.traffic-lights {
  position: absolute;
  top: 150px;
  left: 700px;
}

.timer-board {
  width: 150px;
  height: 80px;
  border: 10px solid black;
  position: absolute;
  top: 43px;
  left: 700px;
  background-color: gray;
  border-radius: 10px;
  font-size: 70px;
  font-weight: 900;
  text-align: center;
}
.timer-board-leg {
  width: 11px;
  height: 15px;
  border: 1px solid black;
  position: absolute;
  top: 138px;
  left: 777px;
  background-color: black;
}
.head-traffic-lights {
  border: 10px solid black;
  background-color: black;
  border-radius: 10px;
}
.light {
  border: 1px solid black;
  border-radius: 100%;
  cursor: pointer;
  height: 150px;
  width: 150px;
}
.green {
  background-color: lawngreen;
  opacity: 50%;
}
.yellow {
  background-color: yellow;
  opacity: 50%;
}
.red {
  background-color: red;
  opacity: 50%;
}

.foot-traffic-lights {
  width: 35px;
  position: absolute;
  height: 170px;
  background-color: black;
  left: 70px;
}
</style>
