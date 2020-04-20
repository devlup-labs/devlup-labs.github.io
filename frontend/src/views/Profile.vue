<template lang="pug">
v-container
  v-row 
    v-col
      ProfileCard   
    v-col
      ProfileCard 
    v-col
      ProfileCard       
</template>

<script>
import ProfileCard from "../components/ProfileCard";
export default {
  name: "Profile",
  components: {
    ProfileCard
  }
};
</script>