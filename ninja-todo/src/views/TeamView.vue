<template>
  <div class="team">
    <h1 class="subtitle-1 grey--text">Team</h1>

    <v-container class="my-5">
        
        <v-row wrap>
            <v-col cols="12" sm="6" md="4" lg="3" v-for="person in team" :key="person.name">
                <v-card flat class="text-center">
                    <v-responsive class="pt-4">
                        <v-avatar class="grey lighten-2" size="100">
                            <img :src="person.avatar" >
                        </v-avatar>
                    </v-responsive>
                    <v-card-text>
                        <div class="subheading">{{ person.name }}</div>
                        <div class="grey--text">{{ person.role }}</div>
                    </v-card-text>
                    <v-card-actions>
                        <v-btn text color="grey">
                            <v-icon small left>mdi-message</v-icon>
                            <span>Message</span>
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>

    </v-container>

  </div>
</template>

<script>
export default {
    data(){
        return{
            team: [
                { name: 'Otávio Borges', role: 'Web developer', avatar:'/avatar-1.png' },
                { name: 'Mateus Paulart', role: 'Graphic designer', avatar:'/avatar-2.png' },
                { name: 'João Dalagnol', role: 'Web developer', avatar:'/avatar-3.png' },
                { name: 'João Lucas', role: 'Social media maverick', avatar:'/avatar-4.png' },
                { name: 'Ramon', role: 'Sales guru', avatar:'/avatar-5.png' }
            ]
        }
    }
}
</script>

<style scoped>

</style>