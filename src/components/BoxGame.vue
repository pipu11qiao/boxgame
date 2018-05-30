<template>
  <div class="hello">
    <canvas id="box"></canvas>
  </div>
</template>

<script>
  import games from '@/assets/js/boxbox'
  import util from '@/assets/js/util-section/util'
//  defaultOption = {
//    el: null, // 原生canvas
//    width: 560,
//    height: 560,
//    numH: 16,
//    numV: 16,
//    maxBackSteps: 3,
//    direction: 'right',
//    cellConfig: {
//      bg: {
//        img: 'images/block.gif',
//        offset: [0, 0]
//      },
//      ball: {
//        img: 'images/ball.png',
//        offset: [-2.5, -2.5]
//      },
//      box: {
//        img: 'images/box.png',
//        offset: [0, 0]
//      },
//      wall: {
//        img: 'images/wall.png',
//        // offset: [0, 11]
//        offset: [0, 0]
//      },
//      soldier: {
//        img: {
//          base: 'images/down.png',
//          left: 'images/left.png',
//          right: 'images/right.png',
//          up: 'images/up.png',
//          down: 'images/down.png'
//        },
//        offset: [0, 0]
//      }
//    }
//  };
export default {
  name: 'HelloWorld',
  props: {
    gameConfig: Object
  },
  data () {
    return {
      gameObj: null,
      msg: 'Welcome to Your Vue.js App'
    }
  },
  mounted(){
    var config = util.extend(true,{},this.gameConfig,{
      el: document.getElementById('box'),
    });
    this.gameObj = new games.Game(config)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang=""scoped>

</style>
