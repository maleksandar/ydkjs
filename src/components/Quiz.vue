<template>
  <div class="quiz">
    <h1>{{ msg }}</h1>
    <question-list v-if='quizTime'> </question-list>
    <results v-else> </results>
  </div>
</template>

<script>
import QuestionList from './QuestionList';
import Results from './Results';

export default {
  name: 'quiz',
  components: {
    'question-list': QuestionList,
    results: Results,
  },
  data() {
    return {
      msg: 'You don\'t know JS',
      lookBack: false,
      resultsRequested: false,
    };
  },
  computed: {
    quizTime() {
      return ((this.$store.getters.wronglyAnswered + this.$store.getters.correctlyAnswered <
        this.$store.state.questions.length) || !this.resultsRequested) || this.lookBack;
    },
  },
  methods: {
    lookBackRequested() {
      this.lookBack = true;
      this.resultsRequested = false;
    },
    requestResults() {
      this.resultsRequested = true;
      this.lookBack = false;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
  font-size: 25px
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
