// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import util from './assets/js/util-section/util';
console.log(util);
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

var defaultOption = {
  width: 560,
  height: 560,
  numH: 16,
  numV: 16,
  maxBackSteps: 3,
  direction: 'right',
  cellConfig: {
    bg: {
      img: 'images/block.gif',
      offset: [0, 0]
    },
    ball: {
      img: 'images/ball.png',
      offset: [-2.5, -2.5]
    },
    box: {
      img: 'images/box.png',
      offset: [0, 0]
    },
    wall: {
      img: 'images/wall.png',
      // offset: [0, 11]
      offset: [0, 0]
    },
    soldier: {
      img: {
        base: 'images/down.png',
        left: 'images/left.png',
        right: 'images/right.png',
        up: 'images/up.png',
        down: 'images/down.png'
      },
      offset: [0, 0]
    }
  }
};
var options = {

  width: 560,
  height: 560,
  numH: 16,
  numV: 16,
  maxBackSteps: 4,
  direction: 'right',
  cellConfig: {
    bg: {
      img: 'images/block.gif',
      offset: [10, 10]
    },
    ball: {
      img: 'images/ball.png',
      offset: [10, 10]
    }
  }
}
var c = util.extend(true,{},options,defaultOption);
console.log(c);
c.cellConfig.bg.img = 'fuck';
console.log(defaultOption)
console.log(options);
