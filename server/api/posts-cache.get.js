export default defineEventHandler(async (event) => {
  const storage = useStorage('redis')
  const cachedPosts = await storage.getItem('posts');
  if (cachedPosts) {
    const cacheTime = await storage.getItem('posts_timestamp')
    const now = Date.now()
    
    if (now - cacheTime < 900000) {
      return cachedPosts
    } else {
      await storage.removeItem('posts')
      await storage.removeItem('posts_timestamp')
    }
  }
  
  return null
})