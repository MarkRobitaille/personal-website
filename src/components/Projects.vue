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
                    <b-img-lazy src="@/assets/FamilyFolder/1.png" class="carousel-image" />
                  </template>
                </b-carousel-slide>
                <b-carousel-slide class="float-center">
                  <template v-slot:img>
                    <b-img-lazy src="@/assets/FamilyFolder/2.png" class="carousel-image" />
                  </template>
                </b-carousel-slide>
                <b-carousel-slide class="float-center">
                  <template v-slot:img>
                    <b-img-lazy src="@/assets/FamilyFolder/3.png" class="carousel-image" />
                  </template>
                </b-carousel-slide>
                <b-carousel-slide class="float-center">
                  <template v-slot:img>
                    <b-img-lazy src="@/assets/FamilyFolder/4.png" class="carousel-image" />
                  </template>
                </b-carousel-slide>
                <b-carousel-slide class="float-center">
                  <template v-slot:img>
                    <b-img-lazy src="@/assets/FamilyFolder/5.png" class="carousel-image" />
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
              href="https://markrobitaille.github.io/HCI-Project"
              variant="outline-dark"
              pill
              class="m-1"
            >
              <font-awesome-icon :icon="['fas', 'external-link-alt']" size="lg" class="mr-1" />View Website
            </b-button>
            <b-button
              href="https://github.com/MarkRobitaille/HCI-Project"
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
                    <b-img-lazy src="@/assets/Caterpeeler/1.png" class="carousel-image" />
                  </template>
                </b-carousel-slide>
                <b-carousel-slide class="float-center">
                  <template v-slot:img>
                    <b-img-lazy src="@/assets/Caterpeeler/2.png" class="carousel-image" />
                  </template>
                </b-carousel-slide>
                <b-carousel-slide class="float-center">
                  <template v-slot:img>
                    <b-img-lazy src="@/assets/Caterpeeler/3.png" class="carousel-image" />
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
              href="https://markrobitaille.itch.io/caterpeeler"
              variant="outline-dark"
              pill
              class="m-1"
            >
              <font-awesome-icon :icon="['fab', 'itch-io']" size="lg" class="mr-1" />View on itch.io
            </b-button>
            <b-button
              href="https://github.com/MarkRobitaille/Caterpeeler"
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
                    <b-img-lazy src="@/assets/PrototypeCSSA/1.png" class="carousel-image" />
                  </template>
                </b-carousel-slide>
                <b-carousel-slide class="float-center">
                  <template v-slot:img>
                    <b-img-lazy src="@/assets/PrototypeCSSA/2.png" class="carousel-image" />
                  </template>
                </b-carousel-slide>
                <b-carousel-slide class="float-center">
                  <template v-slot:img>
                    <b-img-lazy src="@/assets/PrototypeCSSA/3.png" class="carousel-image" />
                  </template>
                </b-carousel-slide>
                <b-carousel-slide class="float-center">
                  <template v-slot:img>
                    <b-img-lazy src="@/assets/PrototypeCSSA/4.png" class="carousel-image" />
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
              href="https://markrobitaille.github.io/prototype-cssa-website"
              variant="outline-dark"
              pill
              class="m-1"
            >
              <font-awesome-icon :icon="['fas', 'external-link-alt']" size="lg" class="mr-1" />View Website
            </b-button>
            <b-button
              href="https://github.com/MarkRobitaille/prototype-cssa-website"
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
                    <b-img-lazy src="@/assets/PhaseDodger/1.png" class="carousel-image" />
                  </template>
                </b-carousel-slide>
                <b-carousel-slide class="float-center">
                  <template v-slot:img>
                    <b-img-lazy src="@/assets/PhaseDodger/2.png" class="carousel-image" />
                  </template>
                </b-carousel-slide>
                <b-carousel-slide class="float-center">
                  <template v-slot:img>
                    <b-img-lazy src="@/assets/PhaseDodger/3.png" class="carousel-image" />
                  </template>
                </b-carousel-slide>
                <b-carousel-slide class="float-center">
                  <template v-slot:img>
                    <b-img-lazy src="@/assets/PhaseDodger/4.png" class="carousel-image" />
                  </template>
                </b-carousel-slide>
              </b-carousel>
            </b-col>
          </b-row>
          <b-row align-h="center" class="mt-2">
            <b-col sm="11">
              <p>PhaseDodger is an arcade game where you dodge colored waves by phasing your ship's color to match them. Enemy aliens wheel in from the top of the screen to keep you on your toes. The goal of the game is to fly for as long as you can and reach a high score.</p>
              <p>Made in a small group with less than 48 hours to develop. Created for Peg Jam 2019 with the theme "Parallel Worlds". The game was developed using Processing and an audio library called Minim.</p>
              <p>
                <strong>Note</strong>: Processing exports tend to be finicky to get working. If you have problems running the game's executable on itch.io, download the source from the GitHub page. Once downloaded, run the PhaseDodger.pde file in Processing with the audio library Minim installed. More details are on the game's GitHub README.
              </p>
            </b-col>
          </b-row>
        </b-collapse>
        <b-row>
          <b-col>
            <b-button
              href="https://nightshade.itch.io/phasedodger"
              variant="outline-dark"
              pill
              class="m-1"
            >
              <font-awesome-icon :icon="['fab', 'itch-io']" size="lg" class="mr-1" />View on itch.io
            </b-button>
            <b-button
              href="https://github.com/MarkRobitaille/PhaseDodger"
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
            <h5>3D Version:</h5>
          </b-col>
        </b-row>
        <b-row>
          <b-col>
            <b-button
              href="https://github.com/MarkRobitaille/PerlinNoise3D"
              variant="outline-dark"
              pill
              class="m-1"
            >
              <font-awesome-icon :icon="['fab', 'github']" size="lg" class="mr-1" />View on GitHub
            </b-button>
          </b-col>
        </b-row>
        <b-row class="mt-1">
          <b-col>
            <h5>2D Version:</h5>
          </b-col>
        </b-row>
        <b-row>
          <b-col>
            <b-button
              href="https://github.com/MarkRobitaille/PerlinNoise2D"
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
        <b-collapse id="collapse-4" v-model="projectsExpanded[5]" class="mt-1 mb-0">
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
                    <b-img-lazy
                      src="@/assets/FitnessAndHealthAssistant/1.png"
                      class="carousel-image"
                    />
                  </template>
                </b-carousel-slide>
                <b-carousel-slide class="float-center">
                  <template v-slot:img>
                    <b-img-lazy
                      src="@/assets/FitnessAndHealthAssistant/2.png"
                      class="carousel-image"
                    />
                  </template>
                </b-carousel-slide>
                <b-carousel-slide class="float-center">
                  <template v-slot:img>
                    <b-img-lazy
                      src="@/assets/FitnessAndHealthAssistant/3.png"
                      class="carousel-image"
                    />
                  </template>
                </b-carousel-slide>
                <b-carousel-slide class="float-center">
                  <template v-slot:img>
                    <b-img-lazy
                      src="@/assets/FitnessAndHealthAssistant/4.png"
                      class="carousel-image"
                    />
                  </template>
                </b-carousel-slide>
                <b-carousel-slide class="float-center">
                  <template v-slot:img>
                    <b-img-lazy
                      src="@/assets/FitnessAndHealthAssistant/5.png"
                      class="carousel-image"
                    />
                  </template>
                </b-carousel-slide>
                <b-carousel-slide class="float-center">
                  <template v-slot:img>
                    <b-img-lazy
                      src="@/assets/FitnessAndHealthAssistant/6.png"
                      class="carousel-image"
                    />
                  </template>
                </b-carousel-slide>
                <b-carousel-slide class="float-center">
                  <template v-slot:img>
                    <b-img-lazy
                      src="@/assets/FitnessAndHealthAssistant/7.png"
                      class="carousel-image"
                    />
                  </template>
                </b-carousel-slide>
                <b-carousel-slide class="float-center">
                  <template v-slot:img>
                    <b-img-lazy
                      src="@/assets/FitnessAndHealthAssistant/8.png"
                      class="carousel-image"
                    />
                  </template>
                </b-carousel-slide>
              </b-carousel>
            </b-col>
          </b-row>
          <b-row align-h="center" class="mt-2 mb-0">
            <b-col sm="11">
              <p>
                Fitness & Health Assistant is my group's project in Software Engineering 1. This project's purpose is to help health-conscious
                individuals to monitor their food habits and exercise routines to enable them to live a healthier lifestyle. Essentially, it acts as a fitness diary. Features include food logging, exercise logging, checking food's nutritional information, and goal management.
              </p>
              <p>Our project was developed through agile methodologies utilizing user stories to frame our development process. This project was developed for Android, with tests developed. My main contributions were towards the presentation and business layers of the application, along with Espresso Acceptance testing.</p>
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