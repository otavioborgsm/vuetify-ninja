<template>
    <nav class="grey lighten-4">
        
        <v-toolbar flat app>
            <v-app-bar-nav-icon class="grey--text" @click="drawer = !drawer"></v-app-bar-nav-icon>
            <v-toolbar-title class="text-uppercase grey--text">
                <span class="font-weight-light">Todo</span>
                <span>Ninja</span>
            </v-toolbar-title>
            <v-spacer></v-spacer>

            <!-- dropdown menu -->

            <v-menu offset-y>
                <template v-slot:activator="{ on, attrs }">
                    <v-btn flat v-on="on" color="grey" dark text v-bind="attrs">
                        <v-icon left>mdi-arrow-down</v-icon>
                        <span>Menu</span>
                    </v-btn>
                </template>
                <v-list>
                    <v-list-item v-for="link in links" :key="link.text" router :to='link.route'>
                        <v-list-item-title>{{ link.text }}</v-list-item-title>
                    </v-list-item>
                </v-list>
            </v-menu>
        
            <v-btn depressed text color="grey">
                <span>Sign Out</span>
                <v-icon right>mdi-exit-to-app</v-icon>
            </v-btn>
        </v-toolbar>

        <v-navigation-drawer v-model="drawer" app class="primary">
                <v-row>
                    <v-col class="mt-5 text-center">
                        <v-avatar size="100">
                        <img src="/avatar-1.png" alt="" />
                        </v-avatar>
                        <v-subheader class="white--text justify-center">Otávio Borges</v-subheader>
                    </v-col >
                    <v-col class="mb-3 text-center">
                        <PopUp />
                    </v-col>
                </v-row >
            <v-list>
                <v-list-item v-for="link in links" :key="link.text" router :to="link.route">
                    <v-list-item-action>
                        <v-icon class="white--text">{{ link.icon }}</v-icon>
                    </v-list-item-action>
                    <v-list-item-content>
                        <v-list-item-title class="white--text">{{ link.text }}</v-list-item-title>    
                    </v-list-item-content>   
                </v-list-item> 
            </v-list>
        </v-navigation-drawer>

    </nav>
</template>

<script>
import PopUp from './PopUp.vue'

export default {
    components:{ PopUp },
    data(){
        return{
            drawer: false,
            links:[
                { icon: 'mdi-view-dashboard' , text: 'Dashboard', route:'/'},
                { icon: 'mdi-folder' , text: 'My Projects', route:'/projects'},
                { icon: 'mdi-account' , text: 'Team', route:'/team'}
            ]
        }
    }
}
</script>

<style>

</style>