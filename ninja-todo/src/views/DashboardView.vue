<template>
  <div class="dashboard">
    <h1 class="subtitle-1 grey--text">Dashboard</h1>
    
    <v-container class="mb-3">
      
      <v-row class="mb-3 pa-3">
        <v-tooltip top>
          <template v-slot:activator="{ on }">
            <v-btn small text color="grey" @click="sortBy('title')" v-on="on">
              <v-icon left small>mdi-folder</v-icon>
              <span class="caption text-lowercase">by project name</span>
            </v-btn>
          </template>
          <span>Sort projects by project name</span>
        </v-tooltip>

        <v-tooltip top>
          <template v-slot:activator="{ on }">
            <v-btn small text color="grey" @click="sortBy('person')" v-on="on">
              <v-icon left small>mdi-account</v-icon>
              <span class="caption text-lowercase">by person</span>
            </v-btn>
          </template>
          <span>Sort projects by person</span>
        </v-tooltip>
      </v-row>
      
      <v-card flat class="px-3" v-for="project in projects" :key="project.title">
        <v-row :class="`pa-3 project ${ project.status }`">
          <v-col xs="12" md="4">
            <div class="caption grey--text"><p>Project Title</p></div>
            <div><p>{{ project.title }}</p></div>
          </v-col>
          <v-col xs="6" sm="4" md="2">
            <div class="caption grey--text"><p>Person</p></div>
            <div><p>{{ project.person }}</p></div>
          </v-col>
          <v-col xs="6" sm="4" md="2">
            <div class="caption grey--text"><p>Due by</p></div>
            <div><p>{{ project.due }}</p></div>
          </v-col>
          <v-col xs="2" sm="4" md="2">
            <div class="text-right">
              <v-chip small :class="`${ project.status } white--text caption my-2`">{{ project.status }}</v-chip>
            </div>
          </v-col>
        </v-row>
      </v-card>
      <v-divider inset></v-divider>

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
    methods:{
      sortBy(prop){
        this.projects.sort((a,b) => a[prop] < b[prop] ? -1 : 1)
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

.project.complete{
  border-left: 4px solid #3cd1c2
}

.project.ongoing{
  border-left: 4px solid orange
}

.project.overdue{
  border-left: 4px solid tomato
}

.v-chip.complete{
  background: #3cd1c2 !important;
}

.v-chip.ongoing{
  background: #ffaa2c !important;
}

.v-chip.overdue{
  background: #f83e70 !important;
}

</style>