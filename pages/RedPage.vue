<template>
  <NavigationTrafficLights :color="color" :timeLight="timeLight" />
</template>

<script>
import NavigationTrafficLights from "../components/NavigationTrafficLights.vue";
export default {
  data() {
    return {
      timeLight: 10,
    };
  },
  mounted() {
    this.$store.commit("changeLight", this.timeLight);
  },
  components: { NavigationTrafficLights },
  props: ["color"],
};
</script>
<style></style>
