<template>
  <div class="home">
    <h1>Homepage</h1>
    
    <v-btn class="pink white--text">click me</v-btn>
    <v-btn dark depressed color="pink">click me</v-btn>
    <v-btn text color="pink">click me</v-btn>

    <v-btn depressed dark class="pink">
      <v-icon left>mdi-email</v-icon>
      <span>E-mail me</span>
    </v-btn>

    <v-btn depressed dark small class="pink">
      <v-icon left small>mdi-email</v-icon>
      <span>E-mail me</span>
    </v-btn>

    <v-btn depressed dark large class="pink">
      <span>Email me</span>
      <v-icon right large>mdi-email</v-icon>
    </v-btn>

    <v-btn fab depressed dark small color="purple">
      <v-icon >mdi-heart</v-icon>
    </v-btn>

  </div>
</template>

<script>
  

  export default {
   
  }
</script>
