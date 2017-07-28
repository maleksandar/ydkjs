<template>
<div class='row'>
  <div class="progress current-progress">
    <div class="progress-bar progress-bar-info" role="progressbar" aria-valuenow="50"
    aria-valuemin="0" aria-valuemax="100" :style="{width: currentProgress +'%'}">
      {{Math.floor(currentProgress)}}% Complete
    </div>
  </div>
  <div class='col-md-2'> <button class="btn btn-primary" :disabled="currentIndex === 0" @click="previous()"> << </button> </div>
  <div class='col-md-8'>
    <question v-for='(q, index) in questions' :key="q.id" :id='[index]' v-if='currentIndex === index'> </question>
  </div>
  <div class='col-md-2'> <button class="btn btn-primary" :disabled='!answered' @click="next()"> >> </button> </div>
</div>
</template>

<script>
import Question from './Question';
import bus from '../bus';

export default {
  components: {
    question: Question,
  },
  computed: {
    questions() {
      return this.$store.state.questions;
    },
    currentProgress() {
      return 100.0 * (this.currentIndex / this.questions.length);
    },
    answered() {
      return this.$store.state.questions[this.currentIndex].answered;
    },
  },
  data() {
    return {
      currentIndex: 0,
    };
  },
  methods: {
    next() {
      if (this.currentIndex + 1 === this.questions.length) {
        console.log('requestResults emmited');
        bus.$emit('requestResults');
      }
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
