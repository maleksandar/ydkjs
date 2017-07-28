import Vue from 'vue';
import Router from 'vue-router';
import Quiz from '@/components/Quiz';
import Result from '@/components/Results';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Quiz',
      component: Quiz,
    },
    {
      path: 'result',
      name: 'Result',
      component: Result,
    },
  ],
});
