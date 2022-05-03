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

  export default {
    data(){
      return{
        projects: [
          { title: 'Design a new website' , person: 'Otávio Borges' , due: '1st Jan 2019', status: 'ongoing', content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet cumque asperiores nam sapiente voluptates eum, assumenda ad odio iste. Culpa recusandae consequuntur officia corporis sint laudantium enim sed, error magni.' },
          { title: 'Code up the homepage' , person: 'João Lucas' , due: '10th Jan 2019', status: 'complete', content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet cumque asperiores nam sapiente voluptates eum, assumenda ad odio iste. Culpa recusandae consequuntur officia corporis sint laudantium enim sed, error magni.' },
          { title: 'Design video thumbnails' , person: 'Mateus Paulart' , due: '20th Dec 2018', status: 'complete', content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet cumque asperiores nam sapiente voluptates eum, assumenda ad odio iste. Culpa recusandae consequuntur officia corporis sint laudantium enim sed, error magni.' },
          { title: 'Create a community forum' , person: 'João Dalagnol' , due: '20th Oct 2018', status: 'overdue', content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet cumque asperiores nam sapiente voluptates eum, assumenda ad odio iste. Culpa recusandae consequuntur officia corporis sint laudantium enim sed, error magni.' },
          { title: 'Design a new website.. again' , person: 'Otávio Borges' , due: '1st Jan 2019', status: 'ongoing', content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet cumque asperiores nam sapiente voluptates eum, assumenda ad odio iste. Culpa recusandae consequuntur officia corporis sint laudantium enim sed, error magni.' },
        ]
      }
    },
    methods:{
      sortBy(prop){
        this.projects.sort((a,b) => a[prop] < b[prop] ? -1 : 1)
      }
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