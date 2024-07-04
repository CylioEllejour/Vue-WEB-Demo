<template>
  <div id="app">
    <button class="toggle-button" @click="toggleNav">
      ☰
    </button>
    <transition name="slide">
      <nav v-if="isNavOpen" class="side-nav">
        <div class="links-container">
          <router-link to="/home" class="nav-link" @click.native="toggleNav">Home</router-link>
          <router-link to="/about" class="nav-link" @click.native="toggleNav">About</router-link>
        </div>
      </nav>
    </transition>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      isNavOpen: false
    };
  },
  methods: {
    toggleNav() {
      this.isNavOpen = !this.isNavOpen;
    }
  }
};
</script>

<style>
@import "assets/css/base.css";

#app {
  position: relative;
  min-height: 100vh;
}

.toggle-button {
  position: fixed;
  top: 10px;
  right: 10px;
  background-color: #333;
  color: #fff;
  border: none;
  padding: 10px;
  border-radius: 4px;
  cursor: pointer;
  z-index: 1000;
}

.side-nav {
  position: fixed;
  top: 0;
  right: 0;
  width: 200px;
  height: 100%;
  background-color: #333;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
}

.links-container {
  padding: 20px;
  width: 100%;
  text-align: center;
}

.nav-link {
  display: block;
  text-decoration: none;
  margin: 50px 0; /* 增加链接之间的间距 */
  color: #FFFFFF;
  font-size: 1.5rem; /* 增大字体 */
}

.slide-enter-active, .slide-leave-active {
  transition: transform 0.3s ease;
}

.slide-enter, .slide-leave-to /* .slide-leave-active in <2.1.8 */ {
  transform: translateX(100%);
}

</style>
