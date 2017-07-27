<template>
<div class='row'>
  <div class="progress current-progress">
    <div class="progress-bar progress-bar-info" role="progressbar" aria-valuenow="50"
    aria-valuemin="0" aria-valuemax="100" style="width:50%">
      50% Complete (info)
    </div>
  </div>
  <div class='col-md-2'> <button class="btn btn-primary" :disabled="currentIndex === 0" @click="previous()"> << </button> </div>
  <div class='col-md-8'>
    <question v-for='(q, index) in questions' :key="q.id" :content='questions[index]' v-if='currentIndex === index'> </question>
  </div>
  <div class='col-md-2'> <button class="btn btn-primary" :disabled='currentIndex === questions.length - 1' @click="next()"> >> </button> </div>
</div>
</template>

<script>
import Question from './Question';

export default {
  components: {
    question: Question,
  },
  mounted() {
    fetch('../../static/data.json')
      .then(answer => answer.json())
      .then((answer) => {
        this.questions = answer.questions;
      });
  },
  data() {
    return {
      currentIndex: 0,
      questions: [],
    };
  },
  methods: {
    next() {
      if (this.currentIndex < this.questions.length - 1) {
        this.currentIndex += 1;
      }
    },
    previous() {
      if (this.currentIndex > 0) {
        this.currentIndex -= 1;
      }
    },
  },
};
</script>

<style scoped>
  button {
    margin-top: 100px
  }
  .current-progress {
    width: 60%;
    margin: auto;
  }
</style>
