<template>
  <b-container fluid>
    <b-row class="page-content">
      <b-col>
        <h3>Projects</h3>
        <p>On this page, you will find some of the projects I have worked on in my free time and as a student at the University of Manitoba.</p>
        <b-button @click="expandAllProjects()" variant="outline-dark" pill class="m-1">
          <font-awesome-icon :icon="['fas', 'plus']" size="lg" class="mr-1" />Expand All Projects
        </b-button>
        <b-button @click="collapseAllProjects()" variant="outline-dark" pill class="m-1">
          <font-awesome-icon :icon="['fas', 'minus']" size="lg" class="mr-1" />Collapse All Projects
        </b-button>
      </b-col>
    </b-row>
    <b-row class="page-content">
      <b-col>
        <b-row>
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
          </b-col>
        </b-row>
        <b-collapse id="collapse-4" v-model="projectsExpanded[0]" class="mt-1">
          <b-row align-h="center">
            <b-col sm="11">
              <b-carousel
                v-model="slideIndex0"
                controls
                indicators
                background="#0f4655"
                fade
                class="carousel"
              >
                <b-carousel-slide class="float-center">
                  <template v-slot:img>
                    <b-img-lazy src="@/assets/PerlinNoise/1.png" class="carousel-image" />
                  </template>
                </b-carousel-slide>
                <b-carousel-slide class="float-center">
                  <template v-slot:img>
                    <b-img-lazy src="@/assets/PerlinNoise/2.png" class="carousel-image" />
                  </template>
                </b-carousel-slide>
                <b-carousel-slide class="float-center">
                  <template v-slot:img>
                    <b-img-lazy src="@/assets/PerlinNoise/3.png" class="carousel-image" />
                  </template>
                </b-carousel-slide>
                <b-carousel-slide class="float-center">
                  <template v-slot:img>
                    <b-img-lazy src="@/assets/PerlinNoise/4.png" class="carousel-image" />
                  </template>
                </b-carousel-slide>
                <b-carousel-slide class="float-center">
                  <template v-slot:img>
                    <b-img-lazy src="@/assets/PerlinNoise/5.png" class="carousel-image" />
                  </template>
                </b-carousel-slide>
                <b-carousel-slide class="float-center">
                  <template v-slot:img>
                    <b-img-lazy src="@/assets/PerlinNoise/6.png" class="carousel-image" />
                  </template>
                </b-carousel-slide>
                <b-carousel-slide class="float-center">
                  <template v-slot:img>
                    <b-img-lazy src="@/assets/PerlinNoise/7.png" class="carousel-image" />
                  </template>
                </b-carousel-slide>
              </b-carousel>
            </b-col>
          </b-row>
          <b-row>
            <b-col>
              <p></p>
            </b-col>
          </b-row>
        </b-collapse>
        <b-row>
          <b-col>
            <b-button variant="outline-dark" pill class="m-1">
              <font-awesome-icon :icon="['fas', 'external-link-alt']" size="lg" class="mr-1" />View Website
            </b-button>
            <b-button
              href="https://github.com/markrobitaille"
              variant="outline-dark"
              pill
              class="m-1"
            >
              <font-awesome-icon :icon="['fab', 'github']" size="lg" class="mr-1" />View on GitHub
            </b-button>
          </b-col>
        </b-row>
      </b-col>
    </b-row>
    <b-row class="page-content">
      <b-col>
        <b-row>
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
          </b-col>
        </b-row>
        <b-collapse id="collapse-4" v-model="projectsExpanded[1]" class="mt-1">
          <b-row align-h="center">
            <b-col sm="11">
              <b-carousel
                v-model="slideIndex1"
                controls
                indicators
                background="#0f4655"
                fade
                class="carousel"
              >
                <b-carousel-slide class="float-center">
                  <template v-slot:img>
                    <b-img-lazy src="@/assets/PerlinNoise/1.png" class="carousel-image" />
                  </template>
                </b-carousel-slide>
                <b-carousel-slide class="float-center">
                  <template v-slot:img>
                    <b-img-lazy src="@/assets/PerlinNoise/2.png" class="carousel-image" />
                  </template>
                </b-carousel-slide>
                <b-carousel-slide class="float-center">
                  <template v-slot:img>
                    <b-img-lazy src="@/assets/PerlinNoise/3.png" class="carousel-image" />
                  </template>
                </b-carousel-slide>
                <b-carousel-slide class="float-center">
                  <template v-slot:img>
                    <b-img-lazy src="@/assets/PerlinNoise/4.png" class="carousel-image" />
                  </template>
                </b-carousel-slide>
                <b-carousel-slide class="float-center">
                  <template v-slot:img>
                    <b-img-lazy src="@/assets/PerlinNoise/5.png" class="carousel-image" />
                  </template>
                </b-carousel-slide>
                <b-carousel-slide class="float-center">
                  <template v-slot:img>
                    <b-img-lazy src="@/assets/PerlinNoise/6.png" class="carousel-image" />
                  </template>
                </b-carousel-slide>
                <b-carousel-slide class="float-center">
                  <template v-slot:img>
                    <b-img-lazy src="@/assets/PerlinNoise/7.png" class="carousel-image" />
                  </template>
                </b-carousel-slide>
              </b-carousel>
            </b-col>
          </b-row>
          <b-row>
            <b-col>
              <p></p>
            </b-col>
          </b-row>
        </b-collapse>
        <b-row>
          <b-col>
            <b-button
              href="https://github.com/markrobitaille"
              variant="outline-dark"
              pill
              class="m-1"
            >
              <font-awesome-icon :icon="['fab', 'itch-io']" size="lg" class="mr-1" />View on itch.io
            </b-button>
            <b-button
              href="https://github.com/markrobitaille"
              variant="outline-dark"
              pill
              class="m-1"
            >
              <font-awesome-icon :icon="['fab', 'github']" size="lg" class="mr-1" />View on GitHub
            </b-button>
          </b-col>
        </b-row>
      </b-col>
    </b-row>
    <b-row class="page-content">
      <b-col>
        <b-row>
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
          </b-col>
        </b-row>
        <b-collapse id="collapse-4" v-model="projectsExpanded[2]" class="mt-1">
          <b-row align-h="center">
            <b-col sm="11">
              <b-carousel
                v-model="slideIndex2"
                controls
                indicators
                background="#0f4655"
                fade
                class="carousel"
              >
                <b-carousel-slide class="float-center">
                  <template v-slot:img>
                    <b-img-lazy src="@/assets/PerlinNoise/1.png" class="carousel-image" />
                  </template>
                </b-carousel-slide>
                <b-carousel-slide class="float-center">
                  <template v-slot:img>
                    <b-img-lazy src="@/assets/PerlinNoise/2.png" class="carousel-image" />
                  </template>
                </b-carousel-slide>
                <b-carousel-slide class="float-center">
                  <template v-slot:img>
                    <b-img-lazy src="@/assets/PerlinNoise/3.png" class="carousel-image" />
                  </template>
                </b-carousel-slide>
                <b-carousel-slide class="float-center">
                  <template v-slot:img>
                    <b-img-lazy src="@/assets/PerlinNoise/4.png" class="carousel-image" />
                  </template>
                </b-carousel-slide>
                <b-carousel-slide class="float-center">
                  <template v-slot:img>
                    <b-img-lazy src="@/assets/PerlinNoise/5.png" class="carousel-image" />
                  </template>
                </b-carousel-slide>
                <b-carousel-slide class="float-center">
                  <template v-slot:img>
                    <b-img-lazy src="@/assets/PerlinNoise/6.png" class="carousel-image" />
                  </template>
                </b-carousel-slide>
                <b-carousel-slide class="float-center">
                  <template v-slot:img>
                    <b-img-lazy src="@/assets/PerlinNoise/7.png" class="carousel-image" />
                  </template>
                </b-carousel-slide>
              </b-carousel>
            </b-col>
          </b-row>
          <b-row>
            <b-col>
              <p></p>
            </b-col>
          </b-row>
        </b-collapse>
        <b-row>
          <b-col>
            <b-button
              href="https://github.com/markrobitaille"
              variant="outline-dark"
              pill
              class="m-1"
            >
              <font-awesome-icon :icon="['fas', 'external-link-alt']" size="lg" class="mr-1" />View Prototype CSSA Website
            </b-button>
            <b-button
              href="https://github.com/markrobitaille"
              variant="outline-dark"
              pill
              class="m-1"
            >
              <font-awesome-icon :icon="['fab', 'github']" size="lg" class="mr-1" />View on GitHub
            </b-button>
          </b-col>
        </b-row>
      </b-col>
    </b-row>
    <b-row class="page-content">
      <b-col>
        <b-row>
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
                <font-awesome-icon :icon="['fas', 'chevron-down']" size="lg" key="hide3" v-else />
              </b-link>
            </h3>
          </b-col>
        </b-row>
        <b-collapse id="collapse-4" v-model="projectsExpanded[3]" class="mt-1">
          <b-row align-h="center">
            <b-col sm="11">
              <b-carousel
                v-model="slideIndex3"
                controls
                indicators
                background="#0f4655"
                fade
                class="carousel"
              >
                <b-carousel-slide class="float-center">
                  <template v-slot:img>
                    <b-img-lazy src="@/assets/PerlinNoise/1.png" class="carousel-image" />
                  </template>
                </b-carousel-slide>
                <b-carousel-slide class="float-center">
                  <template v-slot:img>
                    <b-img-lazy src="@/assets/PerlinNoise/2.png" class="carousel-image" />
                  </template>
                </b-carousel-slide>
                <b-carousel-slide class="float-center">
                  <template v-slot:img>
                    <b-img-lazy src="@/assets/PerlinNoise/3.png" class="carousel-image" />
                  </template>
                </b-carousel-slide>
                <b-carousel-slide class="float-center">
                  <template v-slot:img>
                    <b-img-lazy src="@/assets/PerlinNoise/4.png" class="carousel-image" />
                  </template>
                </b-carousel-slide>
                <b-carousel-slide class="float-center">
                  <template v-slot:img>
                    <b-img-lazy src="@/assets/PerlinNoise/5.png" class="carousel-image" />
                  </template>
                </b-carousel-slide>
                <b-carousel-slide class="float-center">
                  <template v-slot:img>
                    <b-img-lazy src="@/assets/PerlinNoise/6.png" class="carousel-image" />
                  </template>
                </b-carousel-slide>
                <b-carousel-slide class="float-center">
                  <template v-slot:img>
                    <b-img-lazy src="@/assets/PerlinNoise/7.png" class="carousel-image" />
                  </template>
                </b-carousel-slide>
              </b-carousel>
            </b-col>
          </b-row>
          <b-row>
            <b-col>
              <p></p>
            </b-col>
          </b-row>
        </b-collapse>
        <b-row>
          <b-col>
            <b-button
              href="https://github.com/markrobitaille"
              variant="outline-dark"
              pill
              class="m-1"
            >
              <font-awesome-icon :icon="['fab', 'itch-io']" size="lg" class="mr-1" />View on itch.io
            </b-button>
            <b-button
              href="https://github.com/markrobitaille"
              variant="outline-dark"
              pill
              class="m-1"
            >
              <font-awesome-icon :icon="['fab', 'github']" size="lg" class="mr-1" />View on GitHub
            </b-button>
          </b-col>
        </b-row>
      </b-col>
    </b-row>
    <b-row class="page-content">
      <b-col>
        <b-row>
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
          </b-col>
        </b-row>
        <b-collapse id="collapse-4" v-model="projectsExpanded[4]" class="mt-1">
          <b-row align-h="center">
            <b-col sm="11">
              <b-carousel
                v-model="slideIndex4"
                controls
                indicators
                background="#0f4655"
                fade
                class="carousel"
              >
                <b-carousel-slide class="float-center">
                  <template v-slot:img>
                    <b-img-lazy src="@/assets/PerlinNoise/1.png" class="carousel-image" />
                  </template>
                </b-carousel-slide>
                <b-carousel-slide class="float-center">
                  <template v-slot:img>
                    <b-img-lazy src="@/assets/PerlinNoise/2.png" class="carousel-image" />
                  </template>
                </b-carousel-slide>
                <b-carousel-slide class="float-center">
                  <template v-slot:img>
                    <b-img-lazy src="@/assets/PerlinNoise/3.png" class="carousel-image" />
                  </template>
                </b-carousel-slide>
                <b-carousel-slide class="float-center">
                  <template v-slot:img>
                    <b-img-lazy src="@/assets/PerlinNoise/4.png" class="carousel-image" />
                  </template>
                </b-carousel-slide>
                <b-carousel-slide class="float-center">
                  <template v-slot:img>
                    <b-img-lazy src="@/assets/PerlinNoise/5.png" class="carousel-image" />
                  </template>
                </b-carousel-slide>
                <b-carousel-slide class="float-center">
                  <template v-slot:img>
                    <b-img-lazy src="@/assets/PerlinNoise/6.png" class="carousel-image" />
                  </template>
                </b-carousel-slide>
                <b-carousel-slide class="float-center">
                  <template v-slot:img>
                    <b-img-lazy src="@/assets/PerlinNoise/7.png" class="carousel-image" />
                  </template>
                </b-carousel-slide>
              </b-carousel>
            </b-col>
          </b-row>
          <b-row>
            <b-col>
              <p></p>
            </b-col>
          </b-row>
        </b-collapse>
        <b-row>
          <b-col>
            <b-button
              href="https://github.com/markrobitaille"
              variant="outline-dark"
              pill
              class="m-1"
            >
              <font-awesome-icon :icon="['fab', 'github']" size="lg" class="mr-1" />View on GitHub
            </b-button>
          </b-col>
        </b-row>
      </b-col>
    </b-row>
    <b-row class="page-content">
      <b-col>
        <b-row>
          <b-col>
            <h3 @click="toggleProject(5)">
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
        <b-collapse id="collapse-4" v-model="projectsExpanded[5]" class="mt-1">
          <b-row align-h="center">
            <b-col sm="11">
              <b-carousel
                v-model="slideIndex5"
                controls
                indicators
                background="#0f4655"
                fade
                class="carousel"
              >
                <b-carousel-slide class="float-center">
                  <template v-slot:img>
                    <b-img-lazy src="@/assets/FitnessAndHealthAssistant/1.png" class="carousel-image" />
                  </template>
                </b-carousel-slide>
                <b-carousel-slide class="float-center">
                  <template v-slot:img>
                    <b-img-lazy src="@/assets/FitnessAndHealthAssistant/2.png" class="carousel-image" />
                  </template>
                </b-carousel-slide>
                <b-carousel-slide class="float-center">
                  <template v-slot:img>
                    <b-img-lazy src="@/assets/FitnessAndHealthAssistant/3.png" class="carousel-image" />
                  </template>
                </b-carousel-slide>
                <b-carousel-slide class="float-center">
                  <template v-slot:img>
                    <b-img-lazy src="@/assets/FitnessAndHealthAssistant/4.png" class="carousel-image" />
                  </template>
                </b-carousel-slide>
                <b-carousel-slide class="float-center">
                  <template v-slot:img>
                    <b-img-lazy src="@/assets/FitnessAndHealthAssistant/5.png" class="carousel-image" />
                  </template>
                </b-carousel-slide>
                <b-carousel-slide class="float-center">
                  <template v-slot:img>
                    <b-img-lazy src="@/assets/FitnessAndHealthAssistant/6.png" class="carousel-image" />
                  </template>
                </b-carousel-slide>
                <b-carousel-slide class="float-center">
                  <template v-slot:img>
                    <b-img-lazy src="@/assets/FitnessAndHealthAssistant/7.png" class="carousel-image" />
                  </template>
                </b-carousel-slide>
                <b-carousel-slide class="float-center">
                  <template v-slot:img>
                    <b-img-lazy src="@/assets/FitnessAndHealthAssistant/8.png" class="carousel-image" />
                  </template>
                </b-carousel-slide>
              </b-carousel>
            </b-col>
          </b-row>
          <b-row>
            <b-col>
              <p></p>
            </b-col>
          </b-row>
        </b-collapse>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: "Projects",
  data() {
    return {
      projectsExpanded: [false, false, false, false, false, false],
      slideIndex0: 0,
      slideIndex1: 0,
      slideIndex2: 0,
      slideIndex3: 0,
      slideIndex4: 0,
      slideIndex5: 0
    };
  },
  components: {},
  methods: {
    toggleProject(index) {
      this.$set(this.projectsExpanded, index, !this.projectsExpanded[index]);
    },
    expandAllProjects() {
      for (let i = 0; i < this.projectsExpanded.length; i++) {
        this.$set(this.projectsExpanded, i, true);
      }
    },
    collapseAllProjects() {
      for (let i = 0; i < this.projectsExpanded.length; i++) {
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
.carousel-image {
  max-height: 400px;
  max-width: 100%;
  width: auto;
  height: auto;
}
.carousel {
  text-align: center;
}
</style>