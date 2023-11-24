// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  devtools: { enabled: true },
  app : {
    head : {
      meta: [
        {charset: "utf-8"},
        {
          name: 'viewport',
          content: "width=device-width, initial-scale=1"
        },
        {name : "description", content: "IMBDLike for Video Games"},
        {name: 'author', content: "Christ Mokonda"}
      ]
    }
  },
})
