<template>
  <b-container fluid>
    <b-row align-h="center">
      <b-col class="page-photo">
        <b-img thumbnail src="@/assets/me.jpg" rounded="circle" width="200px" center></b-img>
      </b-col>
    </b-row>
    <b-row class="page-content">
      <b-col>
        <h4 id="hithere">Hi there!</h4>
        <p>My name is Mark Robitaille and I'm a Computer Science major at the University of Manitoba. I'm always interested in learning new technologies and new ways to interact with computers. I'm passionate about video games and web development.</p>
        <p
          class="mb-0"
        >In my spare time I typically try to give back to the community. I'm one of the executives in the Computer Science Students' Association. I help coordinate events for students to enjoy like our game jam and other social events. On top of that, I maintain and promote our lounge to encourage new computer science students to mingle and learn with more experienced students.</p>
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