<template>
    <v-dialog v-model="dialog" width="500">
      <template v-slot:activator="{ on }">
        <v-btn class="success" dark v-on="on">Add New Project</v-btn>
      </template>
      <v-card>
        <v-card-title>
            <h3>Add new project</h3>
        </v-card-title>
        <v-card-text>
            <v-form class="px-3" ref="form">
                <v-text-field :value="due" label="Title" v-model="title" prepend-icon="mdi-folder" :rules="inputRules"></v-text-field>
                <v-textarea label="Information" v-model="content" prepend-icon="mdi-pencil" :rules="inputRules"></v-textarea>
                
                <v-menu>
                    <template v-slot:activator="{ on }">
                        <v-text-field :value="formattedDate" v-on="on" label="Due date" prepend-icon="mdi-calendar-range" :rules="inputRules"></v-text-field>
                    </template>
                    <v-date-picker v-model="due" year-icon="mdi-calendar-blank" prev-icon="mdi-skip-previous" next-icon="mdi-skip-next"></v-date-picker>
                </v-menu>
                
                <v-btn flat class="succes mx-0 mt-3" color="primary" @click="submit()">Add Project</v-btn>
            </v-form>
        </v-card-text>
      </v-card>
    </v-dialog>
</template>

<script>
import moment from 'moment'
import db from '@/fb'

export default {
    data(){
        return{
            title: '',
            content: '',
            due: null,
            inputRules:[
                v =>  v && v.length >= 3 || 'Minimum length is 3 characters'
            ]
        }
    },
    methods:{
        submit(){
            if (this.$refs.form.validate()){
                const project = {
                    title: this.title,
                    content: this.content,
                    due: moment(this.due).format("Do MMMM YYYY"),
                    person: 'The Net Ninja',
                    status: 'ongoing'
                }

                db.collection('projects').add(project)
                .then(()=>{
                    console.log('added to db')
                })
            }
            
        }
    },
    computed: {
        formattedDate() {
        return this.due ? moment(this.due).format("Do MMMM YYYY") : "";
        }
    }
}
</script>

<style scoped>

</style>