<template>
  <v-layout column justify-center align-center>
    <v-flex xs12 sm8 md6>
      <!-- logo -->
      <div class="text-xs-center">
        <DiscordHeroLogo/>
      </div>

      <!-- content field -->
      <v-card>
        <v-card-title class="headline">Welcome to Discord Hero!</v-card-title>
        <v-card-text>
          <p>Discord-hero (or d-hero for short) is an asynchronous, fully modular web application framework for humans allowing you to write applications that connect to Discord</p>
          <p>Here you will find an overview of all the apps made with discord-hero:</p>
          <hr class="my-1">
        </v-card-text>

        <!-- flex grid for apps -->
        <v-layout>
          <v-flex>
            <v-container fluid>
              <v-layout row wrap>
                <v-flex v-for="app in apps" :key="app.id" xs4 pa-3>
                  <!-- makes while tile a link. builds url based on propperty -->
                  <nuxt-link class="appTile" :to="'/apps/' + app.id">
                    <v-card elevation="3">
                      <v-img
                        :src="`https://unsplash.it/150/300?image=${Math.floor(Math.random() * 100) + 1}`"
                        height="200px"
                      ></v-img>
                      <v-card-title
                        style="padding-top:10px;padding-bottom:3px;font-size:1.4em;"
                      >{{ app.title}}</v-card-title>
                      <hr class="my-1">
                      <v-card-text style="padding-top:10px;">{{ app.subTitle}}</v-card-text>
                    </v-card>
                  </nuxt-link>
                </v-flex>
              </v-layout>
            </v-container>
          </v-flex>
        </v-layout>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import DiscordHeroLogo from '~/components/DiscordHeroLogo.vue'
import { setTimeout } from 'timers'

export default {
  components: {
    DiscordHeroLogo
  },
  // fake ajax call
  asyncData() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({
          apps: [
            {
              id: '0001',
              title: 'Awesome first app',
              subTitle: "An app which simple just said 'first!'.",
              Thumbnail: 'https://imgimgimg'
            },
            {
              id: '0002',
              title: 'Awesome second app',
              subTitle: 'Almost as good as the first app.',
              Thumbnail: 'https://imgimgimg'
            },
            {
              id: '0003',
              title: 'Awesome third app',
              subTitle: 'Third is the word.',
              Thumbnail: 'https://imgimgimg'
            },
            {
              id: '0004',
              title: 'Awesome fourth app',
              subTitle: "Answers every question with '4'.",
              Thumbnail: 'https://imgimgimg'
            }
          ]
        })
      }, 500)
    })
  }
}
</script>

<style scoped>
a.appTile {
  text-decoration: none;
}
</style>
