<template>
  <div> 
    <div class='row content-wrapper'>
      <h2> {{ content.title }} </h2>
      <pre><code class='question-body'> {{ content.body }}</code> </pre>
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
          some code explanation
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'question',
  props: ['content'],
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
      answered: false,
      answeredCorrect: null,
    };
  },
  methods: {
    giveAnswer(givenAnswer) {
      console.log(givenAnswer);
      this.answered = true;
      this.givenAnswer = givenAnswer;
      this.answeredCorrect = givenAnswer === this.content.correctAnswer;
    },
    success(index) {
      return this.answeredCorrect && this.content.correctAnswer === index;
    },
    failWrong(index) {
      return this.answeredCorrect === false && this.givenAnswer === index;
    },
    failCorrect(index) {
      return this.answeredCorrect === false && this.content.correctAnswer === index;
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
