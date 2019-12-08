<template>
  <div id="app">
    <div
      id="background"
      :class="{background: true, 'gradient1': $route.name=='Homepage', 'gradient2': $route.name=='Resume', 'gradient3': $route.name=='Projects'}"
    ></div>
    <b-navbar class="navigator" toggleable="sm" fixed="top">
      <b-navbar-brand to="/">Mark Robitaille</b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item to="resume" class="mt-0 mb-0 ml-0 mr-0">Resume</b-nav-item>
          <b-nav-item to="projects" class="mt-0 mb-0 ml-0 mr-0">Projects</b-nav-item>
        </b-navbar-nav>
        <b-navbar-nav class="ml-auto">
          <b-button
            href="https://github.com/markrobitaille"
            variant="outline-secondary"
            pill
            class="ml-1 mr-1 navbar-button"
            style="vertical-align:middle;"
          >
            <b-img class="navbar-button-image mr-1" src="@/assets/github-logo.png" height="20"></b-img>Github
          </b-button>
          <b-button
            href="https://www.linkedin.com/in/mark-robitaille/"
            variant="outline-secondary"
            pill
            class="ml-1 mr-1 navbar-button"
          >
          <!-- :variant="buttonType" -->
            <b-img class="navbar-button-image mr-1" src="@/assets/linkedin-logo.png" height="20"></b-img>LinkedIn
          </b-button>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <b-row align-h="center" class="ml-0 mr-0">
      <b-col sm="8">
        <transition name="fade" mode="out-in">
          <router-view id="pages" class="ml-0 mr-0"></router-view>
        </transition>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      buttonType: 'outline-secondary'
    };
  },
  created() {
    this.setButtonType(this.$route.name);
  },
  watch: {
    $route: function (to) {
      // Track changes to route to update css
      this.setButtonType(to.name);
    }
  },
  methods: {
    setButtonType(routeName) {
      switch(routeName) {
        case 'Homepage':
          this.buttonType = 'outline-primary';
          break;
        case 'Resume':
          this.buttonType = 'outline-success';
          break;
        case 'Projects':
          this.buttonType = 'outline-danger';
          break;
      }
    }
  }
};
</script>

<style>
@media (max-width: 575px) {
  /* CSS that should be displayed if width is equal to or less than 575px goes here */
  /* Note: 575px is when navbar collapses */
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
.background {
  width: 100%;
  height: 100%;
  position: fixed;
  margin: 0;
  padding: 0;
  /* background-image: url("./assets/galaxy-background.jpg");
  background-size: cover;
  background-repeat: no-repeat; */

  z-index: 0;
}
.gradient1 {
  background: rgb(10, 40, 140);
  background: -webkit-linear-gradient(
    45deg,
    rgb(175, 190, 240),
    rgb(10, 40, 140)
  ); /* Chrome and old Safari */
  background: linear-gradient(
    -45deg,
    rgb(175, 190, 240),
    rgb(10, 40, 140)
  ); /* Edge/IE, Firefox, modern Safari */
  background-size: 200%;
  animation: gradient-animation 2s;
}
.gradient2 {
  background: rgb(61, 201, 25);
  background: -webkit-linear-gradient(
    45deg,
    rgb(183, 231, 170),
    rgb(10, 117, 58)
  ); /* Chrome and old Safari */
  background: linear-gradient(
    -45deg,
    rgb(183, 231, 170),
    rgb(10, 117, 58)
  ); /* Edge/IE, Firefox, modern Safari */
  background-size: 200%;
  animation: gradient-animation2 2s;
}
.gradient3 {
  background: rgb(145, 32, 32);
  background: -webkit-linear-gradient(
    45deg,
    rgb(248, 181, 181),
    rgb(145, 32, 32)
  ); /* Chrome and old Safari */
  background: linear-gradient(
    -45deg,
    rgb(248, 181, 181),
    rgb(145, 32, 32)
  ); /* Edge/IE, Firefox, modern Safari */
  background-size: 200%;
  animation: gradient-animation3 2s;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100%;
  width: 100%;
  padding: 0;
  margin: 0;
}
.navigator {
  padding-bottom: 100px;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  background: #ffffff;
  z-index: 2;
}
#pages {
  border-radius: 5px;
  margin-top: 70px;
  /* margin-bottom: 15px; */
  z-index: 1;
}
.page-content {
  padding-top: 10px;
  padding-bottom: 10px;
  margin-bottom: 15px;
  background: #ffffff;
  border-radius: 5px;
}
html,
body {
  padding: 0;
  margin: 0;
}
body {
  overflow-y: scroll;
}
.underline {
  text-decoration: underline;
}
@keyframes gradient-animation {
  0% {
    background-position: right;
  }
  100% {
    background-position: left;
  }
}
@keyframes gradient-animation2 {
  0% {
    background-position: right;
  }
  100% {
    background-position: left;
  }
}
@keyframes gradient-animation3 {
  0% {
    background-position: right;
  }
  100% {
    background-position: left;
  }
}
</style>
