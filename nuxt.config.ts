// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    app: {
        head: {
            title: 'Nuxt 3 Template',
        },
    },
    css: [
        'primevue/resources/themes/saga-blue/theme.css',
        'primevue/resources/primevue.css',
        'primeicons/primeicons.css',
        'primeflex/primeflex.css'
    ],
	build: {
		transpile: ['primevue']
	},
    buildModules: [
        '@nuxtjs/style-resources'
    ],
    
    styleResources: {
      hoistUseStatements:  true,
    },
})
