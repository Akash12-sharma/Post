<template>
  <div class="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 flex items-center justify-center">
    <div class="container mx-auto px-6 py-20 text-center">
      
      <h1 class="text-5xl sm:text-6xl font-extrabold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 
                 bg-clip-text text-transparent drop-shadow-lg mb-6 leading-tight">
        Welcome to My Post App
      </h1>
       <p class="text-lg sm:text-2xl text-gray-700 max-w-2xl mx-auto leading-relaxed mb-10">
         Discover amazing <span class="font-semibold text-purple-600">stories</span>, 
        share your <span class="font-semibold text-pink-600">ideas</span>, and explore the world of creativity.
      </p>
      <NuxtLink 
        to="/posts"
        class="relative inline-block px-8 sm:px-10 py-3 sm:py-4 text-lg font-semibold text-white rounded-2xl
               shadow-xl transition-transform duration-300 hover:scale-105 hover:shadow-2xl
               before:absolute before:inset-0 before:rounded-2xl before:bg-white/20 before:opacity-0 
               before:transition-opacity before:duration-300 hover:before:opacity-100 overflow-hidden bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
        View All Posts
      </NuxtLink>  
    </div>
  </div>
</template>
