export const usePostsStore = defineStore('posts', {
  state: () => ({
    posts: [],
    currentPost: null,
    loading: false,
    error: null
  }),
  actions: {
    async fetchPosts() {
      this.loading = true
      this.error = null
      
      try {
        const cachedData = await $fetch('/api/posts-cache')
        if (cachedData) {
          this.posts = cachedData
          this.loading = false
          return
        }

        const response = await $fetch('https://jsonplaceholder.typicode.com/posts')
        this.posts = response.slice(0, 10) 
        
        await $fetch('/api/posts-cache', {
          method: 'POST',
          body: { posts: this.posts }
        })
        
        this.loading = false
      } catch (err) {
        this.error = 'Failed to fetch posts'
        this.loading = false
      }
    },

    async fetchSinglePost(id) {
      this.loading = true
      this.error = null

      try {
        const response = await $fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        this.currentPost = response
        this.loading = false
      } catch (err) {
        this.error = 'Failed to fetch post details'
        this.loading = false
      }
    }
  }
})