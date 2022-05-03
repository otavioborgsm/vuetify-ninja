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
  computed:{
    myProjects(){
      return this.projects.filter(project => {
        return project.person === 'Otávio Borges'
      })
    }
  }
}
</script>

<style scoped>

</style>
