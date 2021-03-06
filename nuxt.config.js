import colors from 'vuetify/es5/util/colors'

export default {
    //'~/assets/main.css'
    css: ['~/assets/main.css'],
    /*
    ** Nuxt.js dev-modules
    */
    buildModules: [
        '@nuxtjs/vuetify',
    ],
    /*
    ** vuetify module configuration
    ** https://github.com/nuxt-community/vuetify-module
    */
    vuetify: {
        customVariables: ['~/assets/variables.scss'],
        theme: {
          dark: true,
          themes: {
            dark: {
              primary: colors.blue.darken2,
              accent: colors.grey.darken3,
              secondary: colors.amber.darken3,
              info: colors.teal.lighten1,
              warning: colors.amber.base,
              error: colors.deepOrange.accent4,
              success: colors.green.accent3
            }
          }
        }
    }
}