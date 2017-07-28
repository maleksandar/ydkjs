import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    questions: [{
      id: 0,
      title: 'Let\'s do some math operations!',
      body: '>[] + []\n...',
      answers: ['0', 'undefined', '"" (empty string)', '"[object Object]"'],
      correctAnswer: 2,
      explanation: 'Because why not?',
    },
    {
      id: 1,
      title: 'Let\'s do some math operations!',
      body: '>[] + {}\n"[object Object]"\n>{} + []\n...',
      answers: ['0', 'undefined', '"" (empty string)', '"[object Object]"'],
      correctAnswer: 0,
      explanation: 'Yup, it will print 0 in a console. Why is it printing 0 is beyond my reason.',
    },
    {
      id: 2,
      title: 'Let\'s do some math operations!',
      body: '>1 + + "2" + "2"\n...',
      answers: ['Uncaught ReferenceError', '5', '"32"', '"122"'],
      correctAnswer: 2,
      explanation: '+"2" is treated as a unary operator applied on String "2" which converts that String into a Number, \nthen 1 and 2 are added which gives us 3 which added with a String "2" gives "32".',
    },
    {
      id: 3,
      title: 'Let\'s do some math operations!',
      body: '>1 ++ "2" + "2"\n...',
      answers: ['Uncaught ReferenceError', '5', '"32"', '"122"'],
      correctAnswer: 0,
      explanation: '++ is treated as a unary operator which tries to increment a const value. Therefore a wild ReferenceError appears.',
    },
    {
      id: 4,
      title: 'Let\'s do some math operations!',
      body: '/*What will ... lines print?*/\n>Math.min()\n...\n>Math.max()\n...',
      answers: ['-Infinity, +Infiinity', '+Infinity, -Infiinity', '+Infinity, +Infiinity', '(-+)1.7976931348623157e+308'],
      correctAnswer: 1,
      explanation: 'Math.max() function compares values in array with eachother and returns the biggest. The initial value stored in return variable is the smallest possible. Oposite thing is valid for Math.min()',
    },
    {
      id: 5,
      title: 'Let\'s do some math operations!',
      body: '>new String("wtf")\n...',
      answers: ['String {0: "w", 1: "t", 2: "f"}', '"wtf"', '["w", "t", "f"]', '""(empty string)'],
      correctAnswer: 0,
      explanation: '...wat mate?',
    },
    {
      id: 6,
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
      id: 7,
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
}
...`,
      answers: ['1', '2', '3', '4'],
      correctAnswer: 3,
      explanation: '== stands for "Probably Equal" and does a conversion to a Number, not a Boolean.',
    }, {
      id: 8,
      title: 'Only Bools and Equals...',
      body: '>[] == ![]\n...',
      answers: ['true', 'false', '1', '0'],
      correctAnswer: 0,
      explanation: '![] Converts a "thruty" value to false, and then == converts both sides to Numbers. Both [] and false when converted to a Number are mapped to 0.',
    },
    {
      id: 9,
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
      id: 10,
      title: 'Only Bools and Equals...',
      body: '>NaN==NaN\n...',
      answers: ['true', 'false', 'NaN', '1'],
      correctAnswer: 1,
      explanation: 'NaN is not equal to anything. Not even to itself. isNaN(value) should be used or better yet Number.isNaN(value) if available.',
    },
    {
      id: 11,
      title: 'Good ol\' typeof...',
      body: '>typeof([])\n...',
      answers: ['"object"', '"undefined"', '"number"', '"array"'],
      correctAnswer: 0,
      explanation: 'In simple terms: arrays are objects with [] operand and lenght property.',
    },
    {
      id: 12,
      title: 'Good ol\' typeof...',
      body: '>typeof(() => {}))\n...',
      answers: ['"object"', '"undefined"', '"number"', '"function"'],
      correctAnswer: 3,
      explanation: 'On the other hand, functions are objects with call property and () operator, but are recognized as something different then objects when using typeof operator.',
    },
    {
      id: 13,
      title: 'Good ol\' typeof...',
      body: '>typeof(undefined)\n...',
      answers: ['"object"', '"undefined"', '"number"', '"array"'],
      correctAnswer: 1,
      explanation: 'This is logical.',
    },
    {
      id: 14,
      title: 'Good ol\' typeof...',
      body: '>typeof(null)\n...',
      answers: ['"object"', '"null"', '"number"', '"array"'],
      correctAnswer: 0,
      explanation: 'This is not. \ntypeof(null) for some reason returns "object". Be aware of this when you check if something is of object type, and check for null value.',
    },
    {
      id: 15,
      title: 'Good ol\' typeof...',
      body: '>typeof(NaN)\n...',
      answers: ['"object"', '"string"', '"number"', '"array"'],
      correctAnswer: 2,
      explanation: '...wtf...',
    },
    {
      id: 16,
      title: 'Conversions...',
      body: '>Number([])\n0\n>Number(null)\n0\n>Number({})\n...',
      answers: ['0', 'undefined', '"NaN"', '"array"'],
      correctAnswer: 2,
      explanation: 'So null is considered as object and is converted to 0 with Number(), but default empty object cannot be converted to 0. Beautiful.',
    },
    {
      id: 17,
      title: 'Conversions...',
      body: '>Number([])\n0\n>Number(null)\n0\n>Number(undefined)\n...',
      answers: ['0', 'undefined', '"NaN"', '"array"'],
      correctAnswer: 2,
      explanation: 'Just beautiful.',
    },
    {
      id: 18,
      title: 'Conversions...',
      body: '>String(null)\n"null"\n>String([null])\n...',
      answers: ['"0"', '"[null]"', '"" (empty string)', '"[object Object]"'],
      correctAnswer: 2,
      explanation: 'Kill it with fire. (Same happens with String([undefined]).',
    },
    {
      id: 19,
      title: 'You know arrays, right?',
      body: '>Array(3)\n...',
      answers: ['[undefined × 3]', '[undefined, undefined, undefined]', '"[]"', '"[object Object]"'],
      correctAnswer: 0,
      explanation: '[undefined × 3] and [undefined, undefined, undefined] are different values.',
    },
    {
      id: 20,
      title: 'You know arrays, right?',
      body: '>[,,,].length\n...',
      answers: ['0', '3', '4', '-1'],
      correctAnswer: 1,
      explanation: 'The last comma is a trailing comma.',
    },
    {
      id: 21,
      title: 'You know arrays, right?',
      body: '>[,,,].map(x => 1)\n...',
      answers: ['[undefined, undefined, undefined]', '[1, 1, 1]', '[]', '[undefined × 3]'],
      correctAnswer: 3,
      explanation: 'Beautiful!',
    },
    {
      id: 22,
      title: 'You know arrays, right?',
      body: '>[,,,].join("+")\n...',
      answers: ['"++"', '"[null]"', '"" (empty string)', '"[object Object]"'],
      correctAnswer: 0,
      explanation: 'join() does a for loop, while .map() itterates over values.',
    },
    {
      id: 23,
      title: 'You know arrays, right?',
      body: '>[10, 2, 1, 1.0, 0].sort()\n...',
      answers: ['[0, 1, 1.0, 2, 10]', '[0, 1, 1, 10, 2]', '[0, 1, 1, 2, 10]', '[0, 1, 1.0, 10, 2]'],
      correctAnswer: 1,
      explanation: '.sort() converts values to string and does a lexical sort. \nBtw, assigning 1.0 to variable will store it as an Int, not a Float value',
    },
    {
      id: 24,
      title: 'Comparisons are always logical, right?',
      body: `>Number.MAX_VALUE > 0
true
>Number.MIN_VALUE < 0
...`,
      answers: ['false', 'true', 'depends on the browser', 'NaN'],
      correctAnswer: 0,
      explanation: 'Number.MIN_VALUE stands for minimal positive Number (the closest to 0)',
    },
    {
      id: 25,
      title: 'Don\'t you just love this?',
      body: `var myObject = {
    foo: "bar",
    func: function() {
        var self = this;
        console.log(this.foo);
        console.log(self.foo);
        (function() {
            console.log(this.foo);
            console.log(self.foo);
        }());
    }
};
myObject.func();
...`,
      answers: ['undefined, undefined, bar, bar', 'bar, bar, bar, bar', 'bar, undefined, undefined, bar', 'bar, bar, undefined, bar'],
      correctAnswer: 3,
      explanation: `In the outer function, both this and self refer to myObject and therefore both can properly reference and access foo.
In the inner function, though, this no longer refers to myObject. As a result, this.foo is undefined in the inner function, whereas the reference to the local variable self remains in scope and is accessible there.`,
    },
    {
      id: 26,
      title: 'Don\'t you just love this?',
      body: `var hero = {
_name: 'John Doe',
getSecretIdentity: function (){
  return this._name;
}
};

var stoleSecretIdentity = hero.getSecretIdentity;

console.log(stoleSecretIdentity());
console.log(hero.getSecretIdentity());
...`,
      answers: ['undefined, John Doe', 'John Doe, undefined', 'undefined, undefined', 'John Doe, John Doe'],
      correctAnswer: 0,
      explanation: `The first console.log prints undefined because we are extracting the method from the hero object, so stoleSecretIdentity() is being invoked in the global context (i.e., the window object) where the _name property does not exist.
One way to fix the stoleSecretIdentity() function is as follows:
var stoleSecretIdentity = hero.getSecretIdentity.bind(hero);`,
    },
    {
      id: 27,
      title: 'Untitled...',
      body: `function foo1()
{
return {
    bar: "hello"
};
}

function foo2()
{
return
{
    bar: "hello"
};
}

console.log(foo1().bar + foo2().bar);
...`,
      answers: ['hellohello', 'Uncaught TypeError', 'hello', 'helloundefined'],
      correctAnswer: 1,
      explanation: 'semicolons are optional. Therefore foo2() returns undefined and not an object. Trying to execute undefined.bar will throw an error.',
    },
    {
      id: 28,
      title: 'Untitled...',
      body: `(() => {
for (var i = 0; i < 5; i++) {
  setTimeout(function() { console.log(i); }, 0 );
}
})()
...`,
      answers: ['0, 1, 2, 3, 4', '1, 2, 3, 4, 5', '5, 5, 5, 5, 5', 'ReferenceError: i is not defined'],
      correctAnswer: 2,
      explanation: 'i will be transfered as a reference, not a value. Each function executed within the loop will be executed after the entire loop has completed',
    },
    {
      id: 29,
      title: 'Untitled...',
      body: `(function(){
var a = b = 3;
})();

console.log(typeof(a));
console.log(typeof(b));
...`,
      answers: ['undefined, undefined', 'number, number', 'undefined, number', 'number, undefined'],
      correctAnswer: 2,
      explanation: 'var a = b = 3; <==> b = 3; var a = b;',
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
