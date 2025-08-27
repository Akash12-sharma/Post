<template>
  <div>
    <nav class="bg-white shadow-lg">
      <div class="container mx-auto px-4">
        <div class="justify-between items-center py-4 flex ">
          <NuxtLink to="/" class="text-xl font-bold text-gray-800">
             post App
          </NuxtLink>
          <div class="space-x-6">
            <NuxtLink to="/" class=" hover:text-gray-800 text-gray-600">Home</NuxtLink>
            <NuxtLink to="/posts" class="text-gray-600 hover:text-gray-800">Posts</NuxtLink>
          </div>
        </div>
      </div>
    </nav>
    
    <main>
      <slot />
    </main>
    
    <footer class="bg-gray-800 text-white py-8 mt-12">
      <div class="container mx-auto px-4 text-center">
        <p>&copy; 2025 My post App.</p>
      </div>
    </footer>
  </div>
</template>