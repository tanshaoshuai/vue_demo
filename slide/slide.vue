<template>
  <div class="slide" v-on:mouseover="stop()" v-on:mouseout="move()">
    <div class="slideshow">
      <transition-group tag="ul" name="image">
        <li v-for="(img, index) in imgArray" v-show="index===mark" :key="index">
          <a href="#">
            <img :src='img'>
          </a>
        </li>
      </transition-group>
    </div>
    <div class="bar">
      <span v-for="(item, index) in imgArray" :class="{ 'active':index===mark }"
      @click="change(index)" :key="index"></span>
    </div>
  </div>
</template>
 
<script>
export default {
  data () {
    return {
      timer: null, //定时器
      mark: 0, //比对图片索引的变量
      imgArray: [
        '../static/img1.jpg',
        '../static/img2.jpg',
        '../static/img3.jpg',
        '../static/img4.jpg'
      ]
    }
  },
  methods: {
    autoPlay () {
      this.mark++;
      if (this.mark === 4) {
        this.mark = 0
      }
    },
    play () {
      this.timer = setInterval(this.autoPlay, 2500)
    },
    change (i) {
      this.mark = i
    },
    stop () {
      clearInterval(this.timer)
    },
    move () {
      this.timer = setInterval(this.autoPlay, 2500)
    }
  },
  created () {
    this.play()
  }
}
</script>

<style>
 * {
    margin: 0;
    padding: 0;
    list-style: none;
  }
  .slide {
    width: 1024px;
    height: 320px;
    margin: 0 auto;
    margin-top: 50px;
    overflow: hidden;
    position: relative;
  }
  .slideshow {
    width: 1024px;
    height: 320px;
  }
  li {
    position: absolute;
  }
  img {
    width: 1024px;
    height: 320px;
  }
  .bar {
    position: absolute;
    width: 100%;
    bottom: 5px;
    margin: 0 auto;
    z-index: 10;
    text-align: center;
  }
  .bar span {
    width: 10px;
    height: 10px;
    border: 1px solid grey;
    background: white;
    border-radius:50%;
    display: inline-block;
    margin-right: 10px;
  }
  .active {
    background: grey !important;
  }
  .image-enter-active {
    transform: translateX(0);
    transition: all 1.5s ease;
  }
  .image-leave-active {
    transform: translateX(-100%);
    transition: all 1.5s ease;
  }
  .image-enter {
    transform: translateX(100%);
  }
  .image-leave {
    transform: translateX(0);
  }

</style>
