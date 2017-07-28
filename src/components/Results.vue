<template>
  <div>
  <div class='look-back'> <router-link to="/" tag='button' class="btn btn-primary">Take a look back at you answers</router-link> </div>
    <div class='stats'> correct: {{correctlyAnswered}} / {{totalAnswered}}</div>
    <div class='stats'> wrong: {{wronglyAnswered}} / {{totalAnswered}}</div>
    <div class='stats'> success percentage: {{successPercentage}} %</div>
    <div class='conclusion well'>
      <h1> Result: </h1>
      <p v-if="successPercentage >= 90"> You know JS. Who would have said.</p>
      <p v-if="successPercentage > 75 && successPercentage < 90"> You know something, John Snow.</p>
      <p v-if="successPercentage > 50 && successPercentage < 75">You don't know enough, John Snow.</p>
      <p v-if="successPercentage < 50"> You know nothing, John Snow.</p>
    </div>
  </div>
</template>

<script>
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
    successPercentage() {
      return 45;
      // return (this.correctlyAnswered * 100.0) / this.totalAnswered;
    },
  },
};
</script>

<style scoped>
  .stats{
    font-size: 30px;
  }
  .conclusion{
    font-size: 50px;
    margin: 50px;
  }
  h1{
    border: 1px solid #ccc;
  }
  .look-back{
    margin: 20px; 
  }
</style>
