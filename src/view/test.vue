<template>
  <div class="box-outer">
    <box-game :gameConfig="gameConfig"></box-game>
  </div>
</template>

<script>
  import BoxGame from '@/components/BoxGame'
export default {
  name: 'test',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      gameConfig: {
        cellConfig: {
          bg: {
            img: '/static/images/block.gif',
          },
          ball: {
            img: '/static/images/ball.png',
          },
          box: {
            img: '/static/images/box.png',
          },
          wall: {
            img: '/static/images/wall.png',
          },
          soldier: {
            img: {
              base: '/static/images/down.png',
              left: '/static/images/left.png',
              right: '/static/images/right.png',
              up: '/static/images/up.png',
              down: '/static/images/down.png'
            }
          }
        }
      }
    }
  },
  components:{
    BoxGame
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
