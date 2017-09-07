<template>
  <div id="app">
    <transition :name='transitionName'>
      <router-view class="child"></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      transitionName: 'slide-right'
    }
  },
  beforeRouteUpdate(to, from, next) {
    alert(1)
    const toDepth = to.path.split('/').length;
    const fromDepth = from.path.split('/').length;
    this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left';
    next();
  }
}
</script>

<style>
  #app {
    font-family: 'Yahei';
    font-size: 10px;
  }

  .slide-right-enter, .slide-left-leave-to{
    transform: translateX(-20px);
    opacity: 0;
  }
  .slide-left-enter, .slide-right-leave-to{
    transform: translateX(20px);
    opacity: 0;
  }

  .child {
    position: absolute;
    transition: all .5s ease;
    width: 100%;
    text-align: center;
    font-size: 2rem;
    top: 25%;
  }
</style>
