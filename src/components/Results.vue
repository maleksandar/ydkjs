<template>
  <div>
    <button class='btn btn-primary' @click="lookBack"> take another look</button>
    <div> correct: {{correctlyAnswered}} / {{totalAnswered}}</div>
    <div> wrong: {{wronglyAnswered}} / {{totalAnswered}}</div>
  </div>
</template>

<script>
import bus from '../bus';

export default {
  computed: {
    correctlyAnswered() {
      return this.$store.getters.correctlyAnswered;
    },
    wronglyAnswered() {
      return this.$store.getters.wronglyAnswered;
    },
    totalAnswered() {
      return this.$store.getters.totalAnswered;
    },
  },
  methods: {
    lookBack() {
      bus.$emit('lookBackRequested');
    },
  },
};
</script>

<style>
  
</style>
