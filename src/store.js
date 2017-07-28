import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    questions: [
      {
        id: 1,
        title: 'Let\'s do some math operations!',
        body: '>[] + []\n...',
        answers: ['0', 'undefined', '"" (empty string)', '"[object Object]"'],
        correctAnswer: 2,
        explanation: 'Because why not?',
      },
      {
        id: 2,
        title: 'Let\'s do some math operations! (2)',
        body: '>[] + {}\n"[object Object]"\n>{} + []\n...',
        answers: ['0', 'undefined', '"" (empty string)', '"[object Object]"'],
        correctAnswer: 0,
        explanation: 'Yup, it will print 0 in a console. Why is it printing 0 is beyond my reason.',
      },
      {
        id: 3,
        title: 'Let\'s do some math operations! (3)',
        body: '>1 + + "2" + "2"\n...',
        answers: ['Uncaught ReferenceError', '5', '"32"', '"122"'],
        correctAnswer: 2,
        explanation: '+"2" is treated as a unary operator applied on String "2" which converts that String into a Number, \nthen 1 and 2 are added which gives us 3 which added with a String "2" gives "32".',
      },
      {
        id: 4,
        title: 'Let\'s do some math operations! (4)',
        body: '>1 ++ "2" + "2"\n...',
        answers: ['Uncaught ReferenceError', '5', '"32"', '"122"'],
        correctAnswer: 0,
        explanation: '++ is treated as a unary operator which tries to increment a const value. Therefore a wild ReferenceError appears.',
      },
      {
        id: 5,
        title: 'Timeout?',
        body: `// In which order will the Numbers be printed?
console.log(1);
setTimeout(() => console.log(2), 1);
setTimeout(() => console.log(3), 0);
console.log(4);
`,
        answers: ['1,2,3,4', '1,3,2,4', '1,4,3,2', '1,4,2,3'],
        correctAnswer: 3,
        explanation: 'The first timeout is already finnished by the time we register the second one. \nTherefore the first function is already in the Event Queue and will be executed before the other',
      },
      {
        id: 6,
        title: 'Only Bools and Equals...',
        body: `>Boolean([])
true
>Boolean(5)
true

/* If that is true, what does this code prints? */
if([] == true) {
  if(5 == true) {
    console.log(1);
  } else {
    console.log(2);
  }
} else {
  if(5 == true) {
    console.log(3)
  } else {
    console.log(4);
  }
}`,
        answers: ['1', '2', '3', '4'],
        correctAnswer: 3,
        explanation: '== stands for "Probably Equal" and does a conversion to a Number, not a Boolean.',
      },
      {
        id: 7,
        title: 'Only Bools and Equals...',
        body: `var a={},
b={key:'b'},
c={key:'c'};
d={key: b};
e={key: c};

a[b]=1;
a[c]=2;
a[d]=3;
a[e]=4;

/* What will be printed? */
console.log(a[b]);
...`,
        answers: ['1', '2', '3', '4'],
        correctAnswer: 3,
        explanation: 'The reason for this is as follows: \nWhen setting an object property, JavaScript will implicitly stringify the parameter value. \nIn this case, since b, c, d and e are all objects, they will all be converted to "[object Object]"',
      },
      {
        id: 8,
        title: 'Only Bools and Equals...',
        body: `var hero = {
  _name: 'John Doe',
  getSecretIdentity: function (){
    return this._name;
  }
};

var stoleSecretIdentity = hero.getSecretIdentity;

console.log(stoleSecretIdentity());
console.log(hero.getSecretIdentity());`,
        answers: ['undefined, John Doe', 'John Doe, undefined', 'undefined, undefined', 'John Doe, John Doe'],
        correctAnswer: 0,
        explanation: `The first console.log prints undefined because we are extracting the method from the hero object, so stoleSecretIdentity() is being invoked in the global context (i.e., the window object) where the _name property does not exist.

One way to fix the stoleSecretIdentity() function is as follows:

var stoleSecretIdentity = hero.getSecretIdentity.bind(hero);`,
      },
      {
        id: 9,
        title: 'Good ol\' typeof...',
        body: '>typeof([])',
        answers: ['"object"', '"string"', '"number"', '"array"'],
        correctAnswer: 0,
        explanation: 'Yup, it will print 0 in a console. Why is it printing 0 is beyond my reason.',
      },
    ],
  },
  getters: {
    correctlyAnswered(state) {
      return state.questions.filter(x => x.answeredCorrect).length;
    },
    wronglyAnswered(state) {
      return state.questions.filter(x => x.answeredCorrect === false).length;
    },
    totalAnswered(state) {
      return state.questions.filter(x => x.answered).length;
    },
  },
});
