<template>
    <div class="container">
        <v-card-actions class="justify-center">
            <h1 class="title">{{ post.name}}</h1>
        </v-card-actions>
        <v-container fluid>
            <v-row justify="space-around">
                <v-col cols="5">
                    <v-img :src="post.image.original" aspect-ratio="1.4" contain></v-img>
                </v-col>
            </v-row>
        </v-container>
        <v-card-actions class="justify-center">
            <p v-html="post.summary"></p>
        </v-card-actions>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    validate({ params }) {
        return !isNaN(+params.id)
    },
    async fetch({ store, params }) {
        await axios.get(`https://api.tvmaze.com/shows/${+params.id}`).then((res) => {
            store.commit('getById', res.data)
        })
    },
    computed: {
        post() {
            return this.$store.state.post
        }
    }
}
</script>