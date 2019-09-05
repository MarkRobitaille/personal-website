<template>
  <div id="app">
    <!-- <b-container fluid> -->
    <div id="background"></div>
    <!-- id="background" src="@/assets/galaxy-background.jpg"> -->
    <!-- <b-img :src="image"></b-img> -->
    <!-- <b-row v-if="navbarFixed"></b-row> -->

    <!-- <b-row align-h="center" class="ml-0 mr-0"> -->
      <!-- <b-col sm="12" class="pt-4 ml-0 mr-0"> -->
      <b-navbar class="navigator" toggleable="sm" fixed="top">
        <b-navbar-brand to="/">Mark Robitaille</b-navbar-brand>
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav pills>
            <b-nav-item pill to="resume" class="mt-0 mb-0 ml-0 mr-0">Resume</b-nav-item>
            <b-nav-item class="mt-0 mb-0 ml-0 mr-0">Portfolio</b-nav-item>
            <!-- <b-nav-item>{{yLocation}}</b-nav-item> -->
          </b-navbar-nav>

          <b-navbar-nav class="ml-auto">
            <!-- <b-col> -->
            <b-button
              variant="outline-secondary"
              pill
              class="ml-1 mr-1 navbar-button"
              style="vertical-align:middle;"
            >
              <!-- <div class="github"></div> -->
              <img
                alt="github logo"
                src="./assets/github-logo-small2.png"
                style="vertical-align: middle;"
              />
              Github
            </b-button>
            <!-- </b-col> -->
            <!-- <b-col> -->
            <b-button variant="outline-secondary" pill class=" ml-1 mr-1 navbar-button">
              <img
                alt="linkedin logo"
                src="./assets/linkedin-logo-small2.png"
                style="vertical-align: middle;"
              />
              LinkedIn
            </b-button>
            <!-- </b-col> -->
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
      <!-- </b-col> -->
    <!-- </b-row> -->
    <!-- <div id="space" v-if="navbarFixed"></div> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <b-row align-h="center" class="ml-0 mr-0">
      <b-col sm="8">
        <transition name="fade" mode="out-in">
          <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
          <router-view id="pages" class="pt-2 pb-2 ml-0 mr-0"></router-view>
        </transition>
      </b-col>
    </b-row>
    <!-- </b-container> -->
  </div>
</template>

<script>
// import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "app",
  components: {
    // HelloWorld
  },
  data() {
    return {
      navbarFixed: null,
      yLocation: null
    };
  },
  // mounted() {
  //   window.addEventListener("scroll", () => {
  //     this.yLocation = Math.round(window.scrollY);
  //   });
  // },
  // watch: {
  //   yLocation: function(val) {
  //     if (val >= 30 && this.navbarFixed == null) {
  //       this.navbarFixed = "top";
  //     } else if (val < 30 && this.navbarFixed != null) {
  //       this.navbarFixed = null;
  //     }
  //   }
  // } 
};
</script>

<style>
@media (max-width: 575px) {
  /* CSS that should be displayed if width is equal to or less than 800px goes here */
  .navbar-button {
    margin-top: 5px;
  }
}
.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.5s;
  transition-property: opacity;
  transition-timing-function: ease;
}

.fade-enter,
.fade-leave {
  opacity: 0;
}
#background {
  width: 100%;
  /* Alternate if scroll bar is removed
  width: 100%;
  overflow-x: hidden; */
  /* width: calc(100vw - 34px); */
  height: 100%;
  /* top: 0;
  right: 0;
  bottom: 0;
  left: 0; */
  position: fixed;
  margin: 0;
  padding: 0;
  /* margin-left: auto;
  margin-right: auto; */
  background-image: url("./assets/galaxy-background.jpg");
  /* background-image: url("./assets/galaxy-background.jpg"); */
  background-size: cover;
  background-repeat: no-repeat;
  z-index: 0;
}
/* #github {
  background-image: url("./assets/github-logo.png");
} */
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  /* padding-left: calc(100vw - 100%); */
  /* -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale; */
  /* text-align: center; */
  /* background-image: none */
  /* background: #ffffff; */
  /* color: #2c3e50; */
  /* margin-top: 60px; */
  /* background-image: url("./assets/galaxy-background.jpg"); */
  /* background-image: url("./assets/galaxy-background.jpg"); */
  /* background-size: cover; */
  /* background-repeat: no-repeat; */
  /* position: absolute; */
  /* Full height */
  height: 100%;
  width: 100%;
  /* z-index:2; */
  padding: 0;
  margin: 0;

  /* Center and scale the image nicely */
  /* background-position: center;
  background-repeat: no-repeat;
  background-size: cover; */
  /* overflow: hidden */
}
.navigator {
  /* border-bottom: 1px solid black; */
  /* position: fixed; */
  /* margin-top: 30px; */
  /* margin: 0 auto; */
  padding-bottom: 100px;
  /* width: 100%; */
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  background: #ffffff;
  /* z-index: 2; */
}
#pages {
  /* border-radius: 10px; */
  border-radius: 5px;
  margin-top: 70px;
  margin-bottom:15px;
  display:inline-block;
  /* margin-top: 80px; */
  background: #ffffff;
  z-index: 1;
}
/* .b-row { */
/* background-color: transparent; */
/* } */
/* .b-col { */
/* background-color: transparent; */
/* } */
html,
body {
  padding: 0;
  margin: 0;
  /* width: 100%; */
  /* width: calc(100vw - 34px); */
  /* padding-left: 34px; */
}
/* .header {
  margin: 0;
} */
body {
  /* width: 100vw; */
  overflow-y: scroll;
  /* padding-top: 70px; */
}
/* html {
  height: 100%;
  width: 100%;
  background-image: url("./assets/galaxy-background.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  position: fixed;
} */

/* .background {
  background-color: lightcoral;
  width: 100%;
  height: 100%; */
/* position: fixed; */
/* } */
/* body,
html {
  margin: 0;
  padding: 0;
} */
/* #navigator {
  background-color: white;
  position: fixed;
  z-index: 5;
}
#pages {
  background-color: white;
  z-index: 3;
} */
</style>
