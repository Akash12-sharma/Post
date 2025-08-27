<template>
  <div class="min-h-screen bg-gradient-to-b from-blue-50 via-white to-gray-50 py-10">
    <div class="container mx-auto px-4">

      <div v-if="postsStore.loading" class="text-center py-12">
        <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
        <p class="mt-4 text-gray-600">Loading post details...</p>
      </div>

      <div v-else-if="postsStore.error" class="text-center py-12">
        <div class="bg-red-50 border border-red-200 rounded-lg p-6 max-w-md mx-auto backdrop-blur-sm">
          <p class="text-red-600">{{ postsStore.error }}</p>
          <button 
            @click="retryFetch"
            class="mt-4 bg-red-600  rounded hover:bg-red-700 transition-colors text-white px-4 py-2"
          >
            Try Again
          </button>
        </div>
      </div>
 
      <div v-else-if="postsStore.currentPost" class="mx-auto max-w-3xl ">
        <button 
          @click="goBack"
          class="mb-6 text-blue-600 hover:text-blue-800 transition-colors font-medium flex items-center "
        >
          <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
          </svg>
          Back to Posts
        </button>

        <div class=" bg-white/40 border border-white/30 rounded-xl shadow-md p-6 transition-all backdrop-blur-lg duration-300 hover:shadow-lg">
          
          <span class="px-3 inline-block bg-blue-100 text-blue-800 text-sm  py-1 rounded-full mb-4">
            Post #{{ postsStore.currentPost.id }}
          </span>

          <h1 class=" sm:text-3xl font-semibold text-gray-900 mb-4 leading-snug">
            {{ postsStore.currentPost.title }}
          </h1>

          <div class="mt-2 flex items-center text-sm text-gray-500 mb-4 text-2xl">
            <span>User ID: {{ postsStore.currentPost.userId }}</span>
            <span class="mx-2">•</span>
            <span>{{ formatDate(new Date()) }}</span>
          </div>

          <p class="text-gray-700 text-base sm:text-lg leading-relaxed mb-6">
            {{ postsStore.currentPost.body }}
          </p>

        <div class="flex justify-between items-center">
  <button 
    @click="goBack"
    class="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white px-5 py-2 rounded-lg shadow-md 
           transition-transform hover:scale-105 hover:shadow-lg"
  >
    Back
  </button>

  <div class="flex space-x-3">
    <button 
      class="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white px-5 py-2 rounded-lg shadow-md 
             transition-transform hover:scale-105 hover:shadow-lg"
    >
      Share
    </button>

    <button 
      class="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white px-5 py-2 rounded-lg shadow-md 
             transition-transform hover:scale-105 hover:shadow-lg"
    >
      Like
    </button>
  </div>
</div>


        </div>
      </div>

      <div v-else class="text-center py-12">
        <div class="bg-yellow-50 border border-yellow-200 rounded-lg p-6 max-w-md mx-auto backdrop-blur-sm">
          <p class="text-yellow-800">Post not found</p>
          <button 
            @click="goBack"
            class="mt-4 bg-yellow-600 text-white px-4 py-2 rounded hover:bg-yellow-700 transition-colors"
          >
            Back to Posts
          </button>
        </div>
      </div>

    </div>
  </div>
</template>

<script setup>
import { usePostsStore } from '~/stores/posts'
const route = useRoute()
const router = useRouter()
const postsStore = usePostsStore()

const postId = computed(() => route.params.id);

onMounted(async () => {
  if (postId.value) await postsStore.fetchSinglePost(postId.value)
})

watch(postId, async (newId) => {
  if (newId) await postsStore.fetchSinglePost(newId)
})

const retryFetch = async () => await postsStore.fetchSinglePost(postId.value)
const goBack = () => router.push('/posts')
const formatDate = (date) => date.toLocaleDateString('en-US', { year:'numeric', month:'long', day:'numeric' })

useHead({
  title: computed(() => postsStore.currentPost ? `${postsStore.currentPost.title} - Blog` : 'Loading Post...'),
  meta: [{ name:'description', content: computed(() => postsStore.currentPost ? postsStore.currentPost.body.substring(0,160) : '') }]
})
</script>

<style scoped>
.prose p {
  overflow-wrap: break-word;
}
</style>
