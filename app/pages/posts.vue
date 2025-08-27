<template>
  <div class="container mx-auto px-4 py-8">
    <h1 class="text-3xl font-bold text-gray-900 mb-8">All Posts</h1>

    <div v-if="postsStore.loading" class="text-center py-12">
      <div class="animate-spin  h-12 w-12 border-b-2 border-blue-600 rounded-full mx-auto"></div>
      <p class="text-gray-600 mt-4 ">Loading posts...</p>
    </div>

    <div v-else-if="postsStore.error" class="text-center py-12">
      <div class="border-red-200  bg-red-50 border rounded-lg p-6 max-w-md mx-auto">
        <p class="text-red-600">{{ postsStore.error }}</p>
        <button 
          @click="retryFetch"
          class=" text- px-4 py-2 mt-4 bg-red-600 white rounded hover:bg-red-700 transition-colors"
        >
          Try Again
        </button>
      </div>
    </div>

    <div v-else-if="postsStore.posts.length > 0" class=" md:grid-cols-2 grid grid-cols-1 lg:grid-cols-3 gap-6">
      <PostCard 
        v-for="post in postsStore.posts" 
        :key="post.id" 
        :post="post" 
      />
    </div>

    <div v-else class="text-center py-12">
      <p class="text-gray-600">No posts found.</p>
    </div>
  </div>
</template>

<script setup>
import { usePostsStore } from '~/stores/posts'
const postsStore = usePostsStore()


onMounted(async () => {
  if (postsStore.posts.length === 0) {
    await postsStore.fetchPosts()
  }
})

const retryFetch = async () => {
  await postsStore.fetchPosts()
}


useHead({
  title: 'All Posts - Blog',
  meta: [
    { name: 'description', content: 'Browse all blog posts' }
  ]
})
</script>