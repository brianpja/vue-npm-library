import Vue from 'vue';
import Reusable from './HelloWorld.vue';
import Whopper from './Whopper.vue';

const Components = {
  Reusable,
  Whopper
};

Object.keys(Components).forEach((name) => {
  Vue.component(name, Components[name]);
});

export default Components;