<template>
  <div> 
    <div class='row content-wrapper'>
      <h2> {{ content.title }} </h2>
      <pre><code class='question-body'>{{content.body }}</code> </pre>
    </div>
    <div class='row'> 
      <div v-for="(answer, index) in content.answers" :key="answer" class="col-md-3 button-wrapper"> 
        <button :disabled='answered' @click='giveAnswer(index)' class="btn" 
          :class="{ 'btn-success': success(index), 'btn-warning': failCorrect(index), 'btn-danger': failWrong(index)}"> 
          {{answer}}
        </button>
      </div>
    </div>
    <div class='row question-explanation'>
      <p class='well' v-if="answered">
          {{ explanation }}
      </p>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';

export default {
  name: 'question',
  props: ['id'],
  mounted() {
    document.querySelectorAll('pre code')
      .forEach(element => window.hljs.highlightBlock(element));
  },
  data() {
    return {
      title: 'Some title',
      body: 'Some body',
      answers: [
        'answer1',
        'answer2',
        'answer3',
        'answer4',
      ],
    };
  },
  computed: {
    content() {
      return this.$store.state.questions[this.id];
    },
    correctAnswer() {
      return this.content.correctAnswer;
    },
    answeredCorrect() {
      return this.content.answeredCorrect;
    },
    givenAnswer() {
      return this.content.givenAnswer;
    },
    answered() {
      return this.content.answered;
    },
    explanation() {
      return this.content.explanation;
    },
  },
  methods: {
    giveAnswer(givenAnswer) {
      Vue.set(this.content, 'answered', true);
      Vue.set(this.content, 'givenAnswer', givenAnswer);
      Vue.set(this.content, 'answeredCorrect', this.givenAnswer === this.content.correctAnswer);
    },
    success(index) {
      return this.answeredCorrect
        && this.correctAnswer === index;
    },
    failWrong(index) {
      return this.answeredCorrect === false
        && this.givenAnswer === index;
    },
    failCorrect(index) {
      return this.content.answeredCorrect === false
        && this.content.correctAnswer === index;
    },
  },
};

</script>

<style scoped>
  h2 {
    text-align: left;
  }
  .question-body {
    font-family: monospace;
    font-size: 17px;
    text-align: left;
  }
  button {
    width: 100%;
  }
  .button-wrapper {
    padding: 10px;
  }
  .content-wrapper {
     padding: 10px;
  }
  .question-explanation {
    margin-top: 20px;
    padding: 10px;
  }
  .question-explanation p{
    background-color: #bad4f4;
    font-family: monospace;
    font-size: 17px;
    text-align: left;
  }

</style>
