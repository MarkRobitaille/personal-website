<template>
  <b-container fluid>
    <b-row align-h="center">
      <b-col class="page-photo">
        <b-img-lazy thumbnail src="@/assets/me.jpg" rounded="circle" width="200px" center></b-img-lazy>
      </b-col>
    </b-row>
    <b-row class="page-content">
      <b-col>
        <h3 id="hithere">Hi There!</h3>
        <p>My name is Mark Robitaille, and I am a fourth-year computer science student at the University of Manitoba. I am very interested in both web development and video game development.</p>
        <p class="mb-0">
          One of the things I value most is being a part of a community. For nearly two years, I have acted as vice president of the University of Manitoba Computer Science Students’ Association (CSSA). This has given me a chance to meet many incredible people and coordinate events for students to enjoy, like game jams and social events. On top of that, I help maintain and promote our lounge and community to encourage new computer science students to mingle with and learn from more experienced students.
        </p>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: "Homepage",
  data() {
    return {};
  },
  components: {}
};
</script>

<style scoped>
.page-photo {
  padding-top: 10px;
  padding-bottom: 10px;
  margin-bottom: 15px;
  border-radius: 5px;
}
</style>