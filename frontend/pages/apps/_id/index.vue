<template>
  <v-layout>
    <v-flex>
      <v-card>
        <v-toolbar>
          <v-btn
            icon
            class="hidden-xs-only"
            :to="'/'"
          >
            <v-icon>arrow_back</v-icon>
          </v-btn>
          <v-toolbar-title>
            {{ apps.title }}
          </v-toolbar-title>
        </v-toolbar>
        <v-card-text>
          {{ apps.subTitle }}
        </v-card-text>
        <v-card-text>
          {{ apps.description }}
        </v-card-text>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  // fake ajax call
  asyncData(context) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({
          apps: [
            {
              id: '0001',
              title: 'Awesome first app',
              subTitle: "An app which simple just said 'first!'.",
              thumbnail: 'https://imgimgimg',
              description: 'This is the single page generated out of data.'
            },
            {
              id: '0002',
              title: 'Awesome second app',
              subTitle: 'Almost as good as the first app.',
              thumbnail: 'https://imgimgimg',
              description: 'This is the single page generated out of data.'
            },
            {
              id: '0003',
              title: 'Awesome third app',
              subTitle: 'Third is the word.',
              thumbnail: 'https://imgimgimg',
              description: 'This is the single page generated out of data.'
            },
            {
              id: '0004',
              title: 'Awesome fourth app',
              subTitle: "Answers every question with '4'.",
              thumbnail: 'https://imgimgimg',
              description: 'This is the single page generated out of data.'
            }
          ].find(el => el.id === context.params.id)
        })
      }, 500)
    })
  }
}
</script>
