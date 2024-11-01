import { createMemoryHistory, createRouter } from 'vue-router'

import Home from '@renderer/views/Home.vue'

// Define routes
const routes = [{ name: 'home', path: '/', component: Home }]

// Create router instance
const router = createRouter({
  history: createMemoryHistory(),
  routes
})

export default router
