<template>
  <div 
    class="backdrop-blur-xl bg-white/40 rounded-xl shadow-md p-5 border border-white/30
           hover:shadow-lg transition-all duration-300 cursor-pointer transform hover:-translate-y-1
           w-full"
    @click="handleClick"
  >
    <h3 class="text-lg font-semibold text-gray-900 mb-2 tracking-tight leading-snug">
      {{ post.title }}
    </h3>

    <p class="text-sm text-gray-700 mb-4 line-clamp-3 leading-relaxed">
      {{ post.body }}
    </p>

    <div class="flex justify-between items-center">
      <span class="text-xs font-medium text-indigo-600/90">
        #ID: {{ post.id }}
      </span>

      <button 
        class="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 
               text-white px-3 py-1.5 rounded-lg text-sm font-medium shadow-sm 
               transition-transform hover:scale-105 hover:shadow-md"
        @click.stop="handleReadMore"
      >
        Read →
      </button>
    </div>
  </div>
</template>


<script setup>
const props = defineProps({
  post: {
    type: Object,
    required: true,
    validator: (post) => {
      return post && typeof post.id !== 'undefined' && post.title && post.body
    }
  }
})

const router = useRouter()

const handleClick = () => {
  router.push(`/postss/${props.post.id}`)
}

const handleReadMore = () => {
  router.push(`/postss/${props.post.id}`)
}
</script>

<style scoped>
.line-clamp-3 {
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
}
</style>
