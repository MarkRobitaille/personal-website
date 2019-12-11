<template>
  <b-container fluid>
    <b-row class="page-content">
      <b-col>
        <h3>Projects</h3>
        <p>On this page, you will find some of the projects I have worked on in my free time and as a student at University of Manitoba.</p>
        <b-button @click="expandAllProjects()" variant="outline-dark" pill class="ml-1 mr-1">
          <font-awesome-icon :icon="['fas', 'plus']" size="lg" class="mr-1" />Expand All Projects
        </b-button>
        <b-button @click="collapseAllProjects()" variant="outline-dark" pill class="ml-1 mr-1">
          <font-awesome-icon :icon="['fas', 'minus']" size="lg" class="mr-1" />Collapse All Projects
        </b-button>
      </b-col>
    </b-row>
    <b-row class="page-content">
      <b-col>
        <h3 @click="toggleProject(0)">
          Family Folder
          <b-badge pill variant="dark" class="ml-2">Vue</b-badge>
          <b-link class="toggle-button float-right">
            <font-awesome-icon
              :icon="['fas', 'chevron-up']"
              size="lg"
              key="show0"
              v-if="projectsExpanded[0]"
            />
            <font-awesome-icon :icon="['fas', 'chevron-down']" size="lg" key="hide0" v-else />
          </b-link>
        </h3>
        <b-button variant="outline-dark" pill class="ml-1 mr-1">
          <font-awesome-icon :icon="['fas', 'external-link-alt']" size="lg" class="mr-1" />View Prototype Family Folder Website
        </b-button>
        <b-button
          href="https://github.com/markrobitaille"
          variant="outline-dark"
          pill
          class="ml-1 mr-1"
        >
          <font-awesome-icon :icon="['fab', 'github']" size="lg" class="mr-1" />View on GitHub
        </b-button>
      </b-col>
    </b-row>
    <b-row class="page-content">
      <b-col>
        <h3 @click="toggleProject(1)">
          Caterpeeler
          <b-badge pill variant="dark" class="ml-2">Unity</b-badge>
          <b-link class="toggle-button float-right">
            <font-awesome-icon
              :icon="['fas', 'chevron-up']"
              size="lg"
              key="show1"
              v-if="projectsExpanded[1]"
            />
            <font-awesome-icon :icon="['fas', 'chevron-down']" size="lg" key="hide1" v-else />
          </b-link>
        </h3>
        <b-button
          href="https://github.com/markrobitaille"
          variant="outline-dark"
          pill
          class="ml-1 mr-1"
        >
          <font-awesome-icon :icon="['fab', 'itch-io']" size="lg" class="mr-1" />View on itch.io
        </b-button>
        <b-button
          href="https://github.com/markrobitaille"
          variant="outline-dark"
          pill
          class="ml-1 mr-1"
        >
          <font-awesome-icon :icon="['fab', 'github']" size="lg" class="mr-1" />View on GitHub
        </b-button>
      </b-col>
    </b-row>
    <b-row class="page-content">
      <b-col>
            <h3 @click="toggleProject(2)">
              Prototype CSSA Website
              <b-badge pill variant="dark" class="ml-2">Vue</b-badge>
              <b-link class="toggle-button float-right">
                <font-awesome-icon
                  :icon="['fas', 'chevron-up']"
                  size="lg"
                  key="show2"
                  v-if="projectsExpanded[2]"
                />
                <font-awesome-icon :icon="['fas', 'chevron-down']" size="lg" key="hide2" v-else />
              </b-link>
            </h3>
        <b-button
          href="https://github.com/markrobitaille"
          variant="outline-dark"
          pill
          class="ml-1 mr-1"
        >
          <font-awesome-icon :icon="['fas', 'external-link-alt']" size="lg" class="mr-1" />View Prototype CSSA Website
        </b-button>
        <b-button
          href="https://github.com/markrobitaille"
          variant="outline-dark"
          pill
          class="ml-1 mr-1"
        >
          <font-awesome-icon :icon="['fab', 'github']" size="lg" class="mr-1" />View on GitHub
        </b-button>
      </b-col>
    </b-row>
    <b-row class="page-content">
      <b-col>
        <h3 @click="toggleProject(3)">
          Phase Dodger
          <b-badge pill variant="dark" class="ml-2">Processing</b-badge>
          <b-link class="toggle-button float-right">
            <font-awesome-icon
              :icon="['fas', 'chevron-up']"
              size="lg"
              key="show3"
              v-if="projectsExpanded[3]"
            />
            <font-awesome-icon :icon="['fas', 'chevron-down']" size="lg" key="hide3" v-else/>
          </b-link>
        </h3>
        <b-button
          href="https://github.com/markrobitaille"
          variant="outline-dark"
          pill
          class="ml-1 mr-1"
        >
          <font-awesome-icon :icon="['fab', 'itch-io']" size="lg" class="mr-1" />View on itch.io
        </b-button>
        <b-button
          href="https://github.com/markrobitaille"
          variant="outline-dark"
          pill
          class="ml-1 mr-1"
        >
          <font-awesome-icon :icon="['fab', 'github']" size="lg" class="mr-1" />View on GitHub
        </b-button>
      </b-col>
    </b-row>
    <b-row class="page-content">
      <b-col>
        <h3 @click="toggleProject(4)">
          Perlin Noise
          <b-badge pill variant="dark" class="ml-2">Processing</b-badge>
          <b-link class="toggle-button float-right">
            <font-awesome-icon
              :icon="['fas', 'chevron-up']"
              size="lg"
              key="show4"
              v-if="projectsExpanded[4]"
            />
            <font-awesome-icon :icon="['fas', 'chevron-down']" size="lg" key="hide4" v-else />
          </b-link>
        </h3>
        <b-button
          href="https://github.com/markrobitaille"
          variant="outline-dark"
          pill
          class="ml-1 mr-1"
        >
          <font-awesome-icon :icon="['fab', 'github']" size="lg" class="mr-1" />View on GitHub
        </b-button>
      </b-col>
    </b-row>
    <b-row class="page-content">
      <b-col>
        <h3  @click="toggleProject(5)">
          Fitness and Health Assistant
          <b-badge pill variant="dark" class="ml-2">Android</b-badge>
          <b-link class="toggle-button float-right">
            <font-awesome-icon
              :icon="['fas', 'chevron-up']"
              size="lg"
              key="show5"
              v-if="projectsExpanded[5]"
            />
            <font-awesome-icon :icon="['fas', 'chevron-down']" size="lg" :key="'hide5'" v-else />
          </b-link>
        </h3>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: "Projects",
  data() {
    return {
      projectsExpanded: [false, false, false, false, false, false]
    };
  },
  components: {},
  methods: {
    toggleProject(index) {
      this.$set(this.projectsExpanded, index, !this.projectsExpanded[index]);
    },
    expandAllProjects() {
      for(let i=0; i<this.projectsExpanded.length; i++) {
        this.$set(this.projectsExpanded, i, true);
      }
    },
    collapseAllProjects() {
      for(let i=0; i<this.projectsExpanded.length; i++) {
        this.$set(this.projectsExpanded, i, false);
      }
    }
  }
};
</script>

<style scoped>
.toggle-button {
  color: black;
}
</style>