import Vue from "vue";
import Vuex from "vuex";
import router from "../router/index";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    lastColor: "",
    timerId: "",
  },
  mutations: {
    changeLight(state, lightDurration) {
      let currentLocation = router.history.current.name;

      clearTimeout(state.timerId);

      state.timerId = setTimeout(() => {
        if (currentLocation === "green") {
          router.push("yellow");
          state.lastColor = "green";
        }
        if (currentLocation === "red") {
          router.push("yellow");
          state.lastColor = "red";
        }
        if (
          currentLocation === "yellow" &&
          (state.lastColor === "green" || state.lastColor === "")
        ) {
          router.push("red");
          state.lastColor = "";
        } else if (currentLocation === "yellow" && state.lastColor === "red") {
          router.push("green");
          state.lastColor = "";
        }
      }, lightDurration * 1000);
    },
  },
});
