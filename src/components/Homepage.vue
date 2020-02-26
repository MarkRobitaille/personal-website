<template>
  <b-container fluid>
    <b-row align-h="center">
      <b-col class="page-photo">
        <b-img-lazy thumbnail src="@/assets/me.jpg" rounded="circle" width="200px" center></b-img-lazy>
      </b-col>
    </b-row>
    <b-row class="page-content">
      <b-col>
        <h3 id="hithere">Hi there!</h3>
        <p>My name is Mark Robitaille. I am a computer science major at the University of Manitoba. My current passions are web and video game development. I love learning any new technologies and want to learn as much as possible.</p>
        <p class="mb-0">
          One of things I value most is being a part of a community. I act as one of the executives in the Computer Science Students' Association at the University of Manitoba, where I help coordinate events for students to enjoy like game jams and social events. On top of that, I help maintain and promote our lounge to encourage new computer science students to mingle with and learn from more experienced students.
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