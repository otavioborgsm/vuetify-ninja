<template>
  <div class="projects">
    <h1 class="subtitle-1 grey--text">Projects</h1>

    <v-container class="my-5">
      <v-expansion-panels v-for="project in myProjects" :key="project.title">
        <v-expansion-panel>
          <v-expansion-panel-header>
            {{ project.title }}
          </v-expansion-panel-header>
          <v-expansion-panel-content class="px-4 grey--text">
            <b>due: {{ project.due }}</b>
            <p>{{ project.content }}</p>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-container>

  </div>
</template>

<script>
import db from '@/fb'

export default {
  data(){
    return{
      projects: [
      ]
    }
  },
  computed:{
    myProjects(){
      return this.projects.filter(project => {
        return project.person === 'Otávio Borges'
      })
    }
  },
  created(){
      db.collection('projects').onSnapshot(res =>{
        const changes = res.docChanges()

        changes.forEach(change =>{
          if (change.type === 'added') {
            this.projects.push({
              ...change.doc.data(),
              id: change.doc.id
            })
          }
        })
      })
    }
}
</script>

<style scoped>

</style>
